import { Repository } from "../repository/repository.js";
import { Order } from "../models/order.js";

export class UCAddOrder{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCAddHelpOffer. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async addOrder(order){
        if (!order instanceof Order){
            throw new Error(`Erro método UCAddOrder.addOrder. Tipo de parâmetro errado (${typeof(order)})`)
        }
        return await this._repository.addOrder(order)
    }
}