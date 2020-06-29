const { v4: uuidv4 } = require("uuid");

module.exports = class Produto {
  constructor(produto) {
    this.id = uuidv4();
    this.data = produto.data;
    this.codigo = produto.codigo;
    this.descricao = produto.descricao;
    this.ncm = produto.ncm;
    this.quantidade = produto.quantidade;
    this.valorUnitario = produto.valorunitario;
    this.cupom = produto.cupom;
    this.categorias = produto.categorias;
  }

  total() {
    return this.valorUnitario * this.quantidade;
  }
};
