<template>
  <div class="categorizar">
    <div class="title">
      <h1>CATEGORIZAR</h1>
      <h2>{{noncat.length}} Produtos</h2>
    </div>
    <div v-if="show" class="content">
      <p class="descricao">{{prod.descricao}}</p>

      <div class="info">
        <div class="ocorrencias">
          <p class="qtd">{{ocor}}</p>
          <p class="label">Ocorrências</p>
        </div>

        <div class="preco">
          <p class="valor">{{prod.valorUnitario | numeroPreco}}</p>
          <p class="label">Preço</p>
        </div>

        <div class="data">
          <p class="dia">{{prod.data | formatData}}</p>
          <p class="label">Data</p>
        </div>
      </div>

      <p class="add-tag-label">Tags Adicionadas</p>
      <div v-if="prodCategorias.length > 0" class="tags">
        <p
          @click="adicionaCategorias($event)"
          class="tag removable"
          v-for="cat in prodCategorias"
          :key="cat.id"
          :id="cat.id"
        >{{cat.descricao}}</p>
      </div>
      <div v-else>
        <p class="aviso">Selecione as categorias abaixo</p>
      </div>

      <p class="add-tag-label">Adicionar Tags</p>
      <div class="tags">
        <p
          @click="adicionaCategorias($event)"
          class="tag"
          v-for="cat in storedCats"
          :key="cat.id"
          :id="cat.id"
        >{{cat.descricao}}</p>
      </div>
    </div>
    <div v-else>
      <h2>Você está atualizado!</h2>
    </div>
    <div class="footer">
      <div class="ui green" v-if="show">
        <button @click="criarProdutoCategoria()" class="button green">Salvar</button>
      </div>
      <div v-if="ocor > 0 && show" class="ui green">
        <button @click="criarProdutoCategoriaTodos()" class="button green">Salvar Todos</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { produtoServices } from "../services/produtoServices";
import ProdutoCategoria from "../models/ProdutoCategoria";

export default {
  async created() {
    console.log(produtoServices.pegaProdutosDesteMes());
    await this.naoCategorizados();
    this.setProd();
    this.updateOcorrencias();
    this.resetCategorias();
  },
  data() {
    return {
      noncat: [],
      prod: {},
      cats: [],
      prodCategorias: [],
      ocor: 0,
      storedCats: [],
      show: true
    };
  },
  methods: {
    ...mapActions(["pushProdutosCategoria"]),
    resetCategorias() {
      this.storedCats = [];
      this.categorias.forEach(cat => {
        this.storedCats.push(cat);
      });
    },
    async naoCategorizados() {
      this.noncat = await produtoServices.naoCategorizados(
        this.produtos,
        this.produtoCategorias
      );
    },
    setProd() {
      if (this.noncat.length > 0) this.prod = this.noncat.pop();
      else this.show = false;
    },
    updateOcorrencias() {
      this.ocor = this.noncat.filter(
        produto => produto.descricao === this.prod.descricao
      ).length;
    },
    adicionaCategorias(e) {
      let id = e.target.id;

      let subcats = this.subCategorias.filter(
        subcat => subcat.fk_categoria === id
      );

      let prod = this.categorias.find(categoria => categoria.id === id);
      if (!prod) prod = this.subCategorias.find(subcat => subcat.id === id);

      if (this.prodCategorias.includes(prod)) {
        this.prodCategorias.splice(this.prodCategorias.indexOf(prod), 1);
        this.storedCats.push(prod);
        if (!prod.fk_categoria) {
          this.resetCategorias();
          subcats.forEach(subcat => {
            this.prodCategorias.splice(this.prodCategorias.indexOf(subcat), 1);
          });
        }
      } else {
        this.prodCategorias.push(prod);
        this.storedCats.splice(this.storedCats.indexOf(prod), 1);
        subcats.forEach(subcat => {
          this.storedCats.push(subcat);
        });
      }
    },
    criarProdutoCategoria() {
      let prodcats = [];

      let catsid = this.prodCategorias.map(cat => cat.id);

      catsid.forEach(prodcat => {
        prodcats.push(
          new ProdutoCategoria({
            produto_id: this.prod.id,
            categoria_id: prodcat
          })
        );
      });

      this.pushProdutosCategoria(prodcats);
      this.setProd();
      this.resetCategorias();
      this.prodCategorias = [];
      this.updateOcorrencias();
    },
    async criarProdutoCategoriaTodos() {
      let prodcats = [];

      let produtos = this.noncat.filter(
        prod => prod.descricao === this.prod.descricao
      );
      produtos.push(this.prod);

      let catsid = this.prodCategorias.map(cat => cat.id);

      produtos.forEach(produto => {
        catsid.forEach(prodcat => {
          prodcats.push(
            new ProdutoCategoria({
              produto_id: produto.id,
              categoria_id: prodcat
            })
          );
        });
      });

      this.pushProdutosCategoria(prodcats);

      await this.naoCategorizados();

      this.setProd();
      this.resetCategorias();
      this.prodCategorias = [];
      this.updateOcorrencias();
    }
  },
  computed: {
    ...mapState([
      "produtos",
      "categorias",
      "produtoCategorias",
      "subCategorias"
    ])
  }
};
</script>

<style scoped>
.footer {
  margin-bottom: 20px;
  padding: 0 8rem;
}

.footer div {
  float: left;
}

.content {
  width: 100%;
  height: 100%;
}

.cat:hover {
  color: #ccc;
}

.aviso {
  margin: 15px;
  font-size: 20px;
}

.cat {
  cursor: pointer;
  color: brown;
}

.add-tag-label {
  padding: 0 8.5rem;
  text-align: start;
  font-size: 20px;
  margin-bottom: 10px;
}

.info {
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  margin-top: 2rem;
}

.label {
  margin-top: 5px;
  font-size: 14px;
}
.dia,
.valor,
.qtd {
  color: black;
  font-size: 16px;
  margin: 5px;
}

/* .tag {
  font-size: 15px;
  width: auto;
  margin: 5px 3px;
  background-color: #ccc;
  text-align: start;
  padding: 10px 15px;
  border-radius: 60px;
  color: black;
  cursor: pointer;
} */

.categorizar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

/* .tags {
  padding: 0 9rem;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
} */

.adicionadas {
  height: 65px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  max-width: 300px;
}
</style>