<template>
  <div class="home">
    <div class="importacao">
      <input @change="le" id="input" class="inp" type="file" />
      <label for="input" class="ui button">
        <i class="upload icon" style="margin-right: 0px;"></i>
      </label>
      <p>Cupons: {{ cpns.length }}</p>
      <p>Produtos: {{ prdts.length }}</p>
    </div>

    <button id="categoria" class="ui orange button" @click="showDrower($event)">Nova Categoria</button>

    <router-link to="/produtos">
      <button class="ui grey button">Produtos</button>
    </router-link>
    <router-link to="/cupons">
      <button class="ui grey button">Cupons</button>
    </router-link>
    <router-link to="/categorizar">
      <button class="ui grey button">Categorizar</button>
    </router-link>

    <p>{{totalProdutos}}</p>
    <p>{{produtos.length}}</p>
    <p>{{cupons.length}}</p>
    <p v-for="qtd in qtdPorCat" :key="qtd.descricao">{{qtd.descricao}}: {{qtd.total | numeroPreco}}</p>

    <drower v-if="mostra" :escopo="scope" />
  </div>
</template>

<script>
import xlsxParser from "xls-parser";
import Produto from "../models/Produto";
import Cupom from "../models/Cupom";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { produtoServices } from "../services/produtoServices";

// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      mostra: false,
      scope: {},
      cpns: [],
      prdts: [],
      qtdPorCat: []
    };
  },
  async created() {
    this.qtdPorCat = await produtoServices.totalPorCategoria(
      this.produtos,
      this.categorias,
      this.produtoCategorias
    );
    console.log("qtd: ", this.qtdPorCat);
  },
  methods: {
    ...mapActions(["concatProdutos", "concatCupons"]),
    showDrower(e) {
      this.scope = e.target.id;
      this.mostra = true;
    },
    async le(e) {
      let file = e.target.files[0];

      let produtos = await xlsxParser.onFileSelection(file).then(async data => {
        return data;
      });

      produtos = await this.normalize(produtos);
      let prods = await this.converter(produtos);
      this.notas = await this.separa(prods);
      this.items = prods;
    },
    async normalize(produtos) {
      let ret = [];
      let entries = Object.entries(produtos.produtos);

      await entries.forEach(produto => {
        let prodEntries = Object.entries(produto[1]);

        prodEntries.forEach(prodEntry => {
          prodEntry[0] = prodEntry[0]
            .normalize("NFD")
            .replace(/[^a-zA-Zs]/g, "");
          prodEntry[0] = prodEntry[0].toLowerCase();
          prodEntry[0] = prodEntry[0].replace(" ", "_");
        });

        console.log("prodentries: ", prodEntries);

        ret.push(Object.fromEntries(prodEntries));
      });

      return ret;
    },
    counter(produtos) {
      // let descricoes = [...new Set(produtos.map((prod) => prod.descricao))];

      // descricoes = [...new Set(descricoes)];

      produtos.forEach(async produto => {
        let ocorrencia = await this.ocorrencia(produto.descricao, produtos);
        produto.quantidade = ocorrencia;
      });

      return produtos;
    },
    ocorrencia(descricao, produtos) {
      let soma = 0;
      produtos.forEach(produto => {
        if (produto.descricao === descricao) soma += produto.quantidade;
      });

      return soma;
    },
    converter(produtos) {
      produtos.forEach(async produto => {
        console.log(produto);
        produto.data = produto.data.replace("-", "/");
        produto.data = produto.data.replace("-", "/");
        produto.data = new Date(produto.data).getTime();
        produto.quantidade = Number(produto.quantidade);
        produto.total_item = Number(produto.total_item);
        produto.valor = Number(produto.valor);
        produto.valorunitario = Number(produto.valorunitario);
      });

      return produtos;
    },
    async separa(produtos) {
      let chaves = [...new Set(produtos.map(produto => produto.chave))];

      let cupons = [];
      let prods = [];

      await chaves.forEach(chave => {
        let prod = produtos.find(produto => produto.chave === chave);

        let cupom = new Cupom({
          data: prod.data,
          emitente: prod.emitente,
          chave: prod.chave
        });

        cupons.push(cupom);

        let prdts = produtos.filter(produto => produto.chave === chave);

        prdts.forEach(produto => {
          console.log(produto);
          produto.cupom = cupom.id;
          prods.push(new Produto(produto));
        });
      });

      this.cpns = cupons;
      this.prdts = prods;

      this.concatCupons(cupons);
      this.concatProdutos(prods);
    }
  },
  computed: {
    ...mapState(["cupons", "produtos", "categorias", "produtoCategorias"]),
    totalProdutos() {
      console.log(this.produtos);
      let soma = 0;

      if (this.produtos[0]) {
        this.produtos.forEach(
          prod => (soma += prod.valorUnitario * prod.quantidade)
        );
      }

      return soma.toFixed(2);
    }
  },
  components: {
    Drower: () => import("../components/Drower")
  }
};
</script>

<style scoped>
.ui.button {
  padding: 10px;
}

i.upload.icon {
  margin: 0;
  margin-right: 0;
}

.importacao {
  display: flex;
  flex-direction: row;
}

.inp {
  visibility: hidden;
  position: absolute;
}
/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
}
</style>
