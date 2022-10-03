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

    mapCategoryFrontToBack(category){
        switch (category) {
            case "Combos":
                return "Combo";
            case "Lanches":
                return "Lanche";
            case "Bebidas":
                return "Bebida";
            case "Sobremesas":
                return "Sobremesa";
            default:
                break;
        }
    }

    getProducts = async (category) => {
        let items = [];
        category = this.mapCategoryFrontToBack(category);
        let body = {type:category};
        let res = await axios.post(`${this.BASE_URL}/products`, body);
        items = res.data;
        return items;
    }

    
}