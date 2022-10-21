import axios from 'axios';
import { Cart } from './Cart';

export class BackendService {

    BASE_URL = 'http://localhost:8080';

    cartService = new Cart();

    sendOrderToMongo = () => {
        axios.post(`${this.BASE_URL}/order`, this.cartService.getOrderBody()).then((res) => {
            debugger
            console.log(res.status)})
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