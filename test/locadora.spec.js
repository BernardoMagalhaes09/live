var NaoExisteCatalogoError = require('../locadora/locadoraError')
var CatalogoRepository = require('../catalogo/catalogoRepository');
var LocadoraService = require('../locadora/locadoraService');
var LocadoraRepository = require('../locadora/locadoraRepository')
var CatalogoService = require('../catalogo/catalogoService')

describe("Aluguel de itens", () => {
    test("Não deve ser possivel alugar um produto caso não exista no catalogo", () => {
        var locadoraService = new LocadoraService(new CatalogoRepository())

        expect(() => {locadoraService.toHire("Leonardo Kobus", "1", "2022-05-26")})
        .toThrow(NaoExisteCatalogoError);

    });
    test("Deve ser possivel alugar um produto caso exista no catalogo", () => {
        var item = {
            name: "Biquini Cavadão",
            type: "CD",
            year: 1999
          }
    
          var catalogoRepository = new CatalogoRepository()
          var locadoraRepository = new LocadoraRepository()
          var locadoraService = new LocadoraService(catalogoRepository, locadoraRepository)
    
          var catalogoService = new CatalogoService(catalogoRepository)
          catalogoService.registerItem(item)
          var id = catalogoRepository.getAll()[0].id
          var hireArgs = {
            user: "Leonardo Kobus", 
            itemId: id, 
            expireDate: "2022-05-26"
            }
          locadoraService.toHire(hireArgs)

          expect(locadoraRepository.count()).not.toEqual(0)
    })
  });