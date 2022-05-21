const { v4: uuidv4 } = require('uuid')

module.exports = class CatalogoEntity {
    constructor(item) {
        this.id = uuidv4()
        this.name = item.name,
        this.type = item.type,
        this.year = item.year
    }
}