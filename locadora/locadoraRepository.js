const locadoraEntity = require("./locadoraEntity")
const BaseMemoryRepository = require('../infra/memoryDb')

module.exports = class LocadoraRepository extends BaseMemoryRepository{
    save(item){
        this.data.push(new locadoraEntity(item))
    }
    getByItemId(itemId){
        var results = this.data.filter((c) => {
            return c.itemId === itemId
        })
        if(results.lenght == 0){
            return null
        }else{
            return results[0]
        }
    }
};