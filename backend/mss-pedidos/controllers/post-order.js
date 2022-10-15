import { Order } from "../models/order.js"

export class CPostOrder{
    constructor(UCAddOrder){
        this._UCAddOrder = UCAddOrder
    }

    async postOrder(body){
        /*
            Estrutura do body:
            {
                "productIdsList" : {"XXX": YY, "XXX": ZZ, "XXX": AA, "XXX": C}, YY/ZZ/AA/C representam quantidades (int)
                "totalPrice" : YY.YY,
                "boolPaid" : true/false
                "boolDelivered" : true/false
            }
        */
        const order = new Order(-1, body.productIdsList, 
                                    body.totalPrice, body.boolPaid, body.boolDelivered)
        return await this._UCAddOrder.addOrder(order)
    }
}