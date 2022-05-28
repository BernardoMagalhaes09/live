const { v4: uuidv4 } = require('uuid')

module.exports = class LocadoraEntity {
    constructor(hireArgs) {
        this.id = uuidv4()
        this.itemId = hireArgs.itemId
        this.expireDate = hireArgs.expireDate
        this.user = hireArgs.user
    }
};