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

    async getProductsForResume(productIdsList){
        throw new Error("Método não implementado (getProductsForResume())")
    }

    async getProducts(productCategory){
        throw new Error("Método não implementado (getProducts())")
    }
}