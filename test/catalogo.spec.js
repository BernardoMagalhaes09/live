var CatalogoRepository = require('../catalogo/catalogoRepository')
var CatalogoService = require('../catalogo/catalogoService')

describe("Catalogo de produtos", () => {
    test("Deve ser possivel cadastrar um produto", () => {
      var item = {
        name: "Biquini Cavadão",
        type: "CD",
        year: 1999
      }

      var catalogoRepository = new CatalogoRepository()

      var catalogoService = new CatalogoService(catalogoRepository)
      catalogoService.registerItem(item)

      expect(catalogoRepository.count()).toEqual(1)

    });

    test("Não deve ser possivel cadastrar um produto mais antigo que 1999", () => {
        var item = {
          name: "Biquini Cavadão",
          type: "CD",
          year: 1999
        }

        var itemAntigo = {
            name: "Iron Maiden",
            type: "CD",
            year: 1997
        }
  
        var catalogoRepository = new CatalogoRepository()
  
        var catalogoService = new CatalogoService(catalogoRepository)
        catalogoService.registerItem(item)
        catalogoService.registerItem(itemAntigo)
  
        expect(catalogoRepository.count()).toEqual(1)
      });

      test("Deve ser possivel cadastrar um produto igual", () => {
        var item = {
          name: "Biquini Cavadão",
          type: "CD",
          year: 1999
        }

        var itemIgual = {
            name: "Biquini Cavadão",
            type: "CD",
            year: 1999
          }
  
        var catalogoRepository = new CatalogoRepository()
  
        var catalogoService = new CatalogoService(catalogoRepository)
        catalogoService.registerItem(item)
        catalogoService.registerItem(itemIgual)
  
        expect(catalogoRepository.count()).toEqual(2)
      });

      test("Cada item cadastrado deve ter um id unico", () => {
        var item = {
          name: "Biquini Cavadão",
          type: "CD",
          year: 1999
        }

        var itemIgual = {
            name: "Biquini Cavadão",
            type: "CD",
            year: 1999
          }
  
        var catalogoRepository = new CatalogoRepository()
  
        var catalogoService = new CatalogoService(catalogoRepository)
        catalogoService.registerItem(item)
        catalogoService.registerItem(itemIgual)
        var resultado = catalogoRepository.getAll()
  
        expect(resultado[0].id).not.toBe(resultado[1].id)
      });
  });