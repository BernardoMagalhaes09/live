module.exports = class CatalogoService {
    constructor(catalogoRepository) {
        this.catalogoRepository = catalogoRepository 
    }

    registerItem(item) {
        if(item.year > 1998) {
            this.catalogoRepository.save(item)
        }
    }
};