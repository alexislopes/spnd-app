const { v4: uuidv4 } = require("uuid");

module.exports = class Cupom {
  constructor(cupom) {
    this.id = uuidv4();
    this.data = cupom.data;
    this.emitente = cupom.emitente;
    this.chave = cupom.chave;
  }
};
