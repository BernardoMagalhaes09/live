const NaoExisteCatalogoError = require('./locadoraError');
const ItemJaEstaAlugado = require('./locadoraError')

module.exports = class LocadoraService {
    constructor(catalogoRepository, locadoraRepository) {
        this.catalogoRepository = catalogoRepository
        this.locadoraRepository = locadoraRepository
    }

    toHire(hireArgs){
        if(!this.catalogoRepository.getById(hireArgs.itemId)){
            throw new NaoExisteCatalogoError(`item ${hireArgs.itemId} não existe`)
        }
        if(this.locadoraRepository.getByItemId(hireArgs.itemId)){
            throw new ItemJaEstaAlugado(`item ${hireArgs.itemId} ja está alugado`)
        }
        this.locadoraRepository.save(hireArgs)
    }
    
};