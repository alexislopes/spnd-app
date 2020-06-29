import store from "../store";

const produtos = store.state.produtos;
const produtoCategorias = store.state.produtoCategorias;
const categorias = store.state.categorias;

export const produtoServices = {
  isDesteMes(timestamp) {
    let data = new Date(timestamp);
    let hoje = new Date();
    let desteMes = false;

    if (
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    ) {
      desteMes = true;
    }

    return desteMes;
  },
  pegaProdutosDesteMes() {
    return produtos.filter((produto) => this.isDesteMes(produto.timestamp));
  },
  totalProdutosDesteMes() {
    let produtosDesteMes = this.pegaProdutosDesteMes();
    return this.precoTotal(produtosDesteMes);
  },
  pegaTodos() {
    return produtos;
  },
  pegaProdutosPorCategoriaId(id) {
    let prods = [];
    const prodcat = produtoCategorias.filter(
      (prodcat) => prodcat.categoria_id === id
    );
    prodcat.forEach((prodcat) => {
      let prod = produtos.find((prod) => prod.id === prodcat.produto_id);
      prods.push(prod);
    });

    return prods;
  },
  achaPorId(id) {
    return produtos.find((produto) => produto.id === id);
  },
  naoCategorizados() {
    let noncats = [];
    produtos.forEach((produto) => {
      let prodcat = produtoCategorias.filter(
        (pc) => pc.produto_id === produto.id
      );

      if (prodcat.length === 0) {
        noncats.push(produto);
      }
    });

    return noncats;
  },

  precoTotal(produtos) {
    let soma = 0;

    produtos.forEach((produto) => {
      soma += produto.valorUnitario * produto.quantidade;
    });

    return soma;
  },

  totalPorCategoria() {
    let totais = [];
    categorias.forEach((categoria) => {
      let prods = [];
      let prodcats = produtoCategorias.filter(
        (prodcat) => prodcat.categoria_id === categoria.id
      );
      prodcats.forEach((prodcat) => {
        let prod = produtos.find((prdt) => prdt.id === prodcat.produto_id);
        if (prod) prods.push(prod);
      });

      if (prods.length > 0) {
        console.log(prods);
        let total = 0;
        prods.forEach((pr) => {
          total += pr.quantidade * pr.valorUnitario;
        });

        totais.push({
          descricao: categoria.descricao,
          total: total.toFixed(2),
        });
      }
    });
    console.log(totais);
    return totais;
  },
};
