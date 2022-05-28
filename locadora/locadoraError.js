module.exports = class NaoExisteCatalogoError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "Item não existe no catálogo"; // (2)
  }
}

module.exports = class ItemJaEstaAlugado extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "Item já está alugado"; // (2)
  }
}


