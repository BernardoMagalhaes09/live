module.exports = class BaseMemoryRepository {
    constructor() {
        this.data = []
    }
    count(){
        return this.data.length
    }
    getAll(){
        return this.data
    }
    getById(id){
        var results = this.data.filter((c) => {
            return c.id === id
        })
        if(results.lenght == 0){
            return null
        }else{
            return results[0]
        }
    }
};