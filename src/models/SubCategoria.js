const { v4: uuidv4 } = require("uuid");

module.exports = class SubCategoria {
  constructor(categoria) {
    this.id = uuidv4();
    this.descricao = categoria.descricao;
    this.fk_categoria = categoria.fk_categoria;
  }
};
