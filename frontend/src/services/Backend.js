export class BackendService {

    BASE_URL = 'http://localhost:8080';

    getOrderBodyFromCart = (cart) => {
        let cart = JSON.parse(cart)
        let orderBody = {"productIdsList" : {},
                         "totalPrice" : 0,
                         "boolPaid" : true};
        
        cart.forEach((item) => {
            orderBody.totalPrice += item.price * item.quantity;
            orderBody.productIdsList[item.id] = item.quantity
        });

        console.log(orderBody);

        return orderBody;
    }

    sendOrderToMongo = (cart) => {
        axios.post(`${this.BASE_URL}/order`, getOrderBodyFromCart(cart))
    }

    
}