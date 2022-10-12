import { Order } from "../models/order.js"

export class CPutOrder{
    constructor(UCDeliverOrder){
        this._UCDeliverOrder = UCDeliverOrder
    }

    async putOrder(body){
        /*
            Estrutura do body:
            {
                "orderId" : "XXXXXX"
            }
        */
        return await this._UCDeliverOrder.deliverOrder(body.orderId)
    }
}