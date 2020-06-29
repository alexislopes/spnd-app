const { v4: uuidv4 } = require("uuid");

module.exports = class ProdutoCategoria {
  constructor(prodcategoria) {
    this.id = uuidv4();
    this.produto_id = prodcategoria.produto_id;
    this.categoria_id = prodcategoria.categoria_id;
  }
};
