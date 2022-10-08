import axios from 'axios';

export class BackendService {

    BASE_URL = 'http://localhost:8080';

    getOrderBodyFromCart = (cartString) => {
        let cart = JSON.parse(cartString)
        let orderBody = {"productIdsList" : {},
                         "totalPrice" : 0,
                         "boolPaid" : true};
        
        cart.forEach((item) => {
            orderBody.totalPrice += item.unitPrice * item.quantity;
            orderBody.productIdsList[item.id] = item.quantity
        });

        return orderBody;
    }

    sendOrderToMongo = (cart) => {
        axios.post(`${this.BASE_URL}/order`, this.getOrderBodyFromCart(cart)).then((res) => console.log(res))
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
        let res = await axios.get(`${this.BASE_URL}/products?category=${category}`);
        items = res.data;
        return items;
    }

    
}