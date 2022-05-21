const CatalogoEntity = require("./catalogoEntity")

module.exports = class CatalogoRepository {
    constructor() {
        this.catalogo = []
    }

    save(item){
        this.catalogo.push(new CatalogoEntity(item))
    }
    count(){
        return this.catalogo.length
    }
    getAll(){
        return this.catalogo
    }
};