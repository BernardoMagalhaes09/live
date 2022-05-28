const CatalogoEntity = require("./catalogoEntity")
const BaseMemoryRepository = require('../infra/memoryDb')

module.exports = class CatalogoRepository extends BaseMemoryRepository{
    save(item){
        this.data.push(new CatalogoEntity(item))
    }
};