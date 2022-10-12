import { Repository } from "../repository/repository.js";
import { Order } from "../models/order.js";

export class UCDeliverOrder{
    constructor(repository){
        if (!repository instanceof Repository){
            throw new Error(`Erro UCAddHelpOffer. Tipo errado para o parâmetro repository (${typeof(repository)})`)
        }
        this._repository = repository
    }

    async deliverOrder(orderId){
        return await this._repository.deliverOrder(orderId)
    }
}