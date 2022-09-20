/**
 * Abstract Class Repository.
 *
 * @class Repository
 */

export class Repository {

    constructor() {
        if (this.constructor == Repository) {
            throw new Error("Clase abstrata não pode ser instanciada.")
        }
    }

    async addPedido(pedido){
        throw new Error("Método não implementado (addPedido())")
    }

    async getProductsForResume(productIdsList){
        throw new Error("Método não implementado (getProductsForResume())")
    }

    async getProducts(productType){
        throw new Error("Método não implementado (getProducts())")
    }
}