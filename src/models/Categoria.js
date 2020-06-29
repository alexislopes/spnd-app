const { v4: uuidv4 } = require("uuid");

module.exports = class Categoria {
  constructor(categoria) {
    this.id = uuidv4();
    this.descricao = categoria.descricao;
  }
};
