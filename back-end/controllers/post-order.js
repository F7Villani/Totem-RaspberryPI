import { Order } from "../models/order.js"
import { UCAddOrder } from "../usecases/add-order.js"
import { DateTime } from 'Luxon'

export class CPostInterest{
    constructor(UCAddOrder){
        this._UCAddOrder = UCAddOrder
    }

    async postInterest(body){
        /*
            Estrutura do body:
            {
                "productIdsList" : [XXXX, XXXX, XXXX, XXX],
                "totalPrice" : YY.YY,
                "boolPaid" : true/false
            }
        */
        const order = new Order(-1, body.productIdsList, 
                                    body.totalPrice, body.boolPaid)
        return await this._UCAddOrder.addOrder(order)
    }
}