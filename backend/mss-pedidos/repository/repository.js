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

    async addOrder(order){
        throw new Error("Método não implementado (addOrder())")
    }
}