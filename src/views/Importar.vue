<template>
  <div class="importar">
    <h1>IMPORTAR</h1>
    <div class="content">
      <input @change="le" id="input" class="inp" type="file" />
      <div class="ui black">
        <label for="input" class="button black">Escolher Arquivo</label>
      </div>

      <div class="info">
        <div class="ocorrencias">
          <p class="qtd">{{prdts.length}}</p>
          <p class="label">Produtos</p>
        </div>

        <div class="ocorrencias">
          <p class="qtd">{{cpns.length}}</p>
          <p class="label">Cupons</p>
        </div>

        <div class="ocorrencias">
          <p class="qtd">{{total | numeroPreco}}</p>
          <p class="label">Total</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="ui green">
        <button @click="salvar()" class="button green">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import xlsxParser from "xls-parser";
import Produto from "../models/Produto";
import Cupom from "../models/Cupom";
import { produtoServices } from "../services/produtoServices";
import { mapActions } from "vuex";
// import { mapState } from "vuex";

export default {
  data() {
    return {
      prdts: [],
      cpns: [],
      total: 0
    };
  },
  methods: {
    ...mapActions(["concatProdutos", "concatCupons"]),

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

        ret.push(Object.fromEntries(prodEntries));
      });

      return ret;
    },
    counter(produtos) {
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
          produto.cupom = cupom.id;
          prods.push(new Produto(produto));
        });
      });

      this.cpns = cupons;
      this.prdts = prods;

      this.total = await produtoServices.precoTotal(this.prdts);
      console.log(this.cpns);
      console.log(this.prdts);
    },
    salvar() {
      if (this.prdts.length > 0 && this.cpns.length > 0) {
        this.concatCupons(this.cpns);
        this.concatProdutos(this.prdts);
        this.cpns = [];
        this.prdts = [];
        this.total = 0;
      }
    }
  }
};
</script>

<style scoped>
.ui {
  margin-top: 2rem;
}

.inp {
  visibility: hidden;
  position: absolute;
}

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

.qtd {
  color: black;
  font-size: 16px;
  margin: 5px;
}
</style>