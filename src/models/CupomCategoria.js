const { v4: uuidv4 } = require("uuid");

module.exports = class ProdutoCategoria {
  constructor(cupomcategoria) {
    this.id = uuidv4();
    this.cupom_id = cupomcategoria.cupom_id;
    this.categoria_id = cupomcategoria.categoria_id;
  }
};
