import axios from 'axios'

export class BackendService {

    BASE_URL = 'http://localhost:8080';

    getOrderBodyFromCart = (cartString) => {
        let cart = JSON.parse(cartString)
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
        axios.post(`${this.BASE_URL}/order`, this.getOrderBodyFromCart(cart))
    }

    getProducts = () => {
        let items;
        axios.get(`${this.BASE_URL}/products`)
        .then( (res) => {
            items = res;
            return items;
        })
    }

    
}