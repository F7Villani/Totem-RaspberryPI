export class Cart{

    Cart(){
        localStorage.setItem('cart', '[]');
    }

    getCart(){
        return JSON.parse(localStorage.getItem("cart"));
    }

    cleanCart(){
        localStorage.setItem('cart', '[]');
    }

    addItem(itemToAdd){ 
        let cart = new Cart().getCart();
        
        let existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);
        
        if (existingItem) {
            cart.map((cartItem) => {
                if(cartItem.id === itemToAdd.id)
                {
                    cartItem.quantity++;
                }
                return cartItem;
            })
        } 
        else {
            itemToAdd.quantity = 1;
            cart.push(itemToAdd);
        }
                
        let stringCart = JSON.stringify(cart);
        localStorage.setItem("cart", stringCart);
    }

    removeItem(itemToRemove){
        let cart = new Cart().getCart();
        
        let existingItem = cart.find(cartItem => cartItem.id === itemToRemove.id);
        
        if (existingItem && existingItem.quantity > 0) {
            cart.map((cartItem) => {
                if(cartItem.id === itemToRemove.id)
                {
                    cartItem.quantity--;             
                }
                return cartItem;
            })
        } 
        else {
            cart.filter((item) => {
                return item.id !== itemToRemove.id;
            })
        }

        cart = cart.filter((itemCart) =>  {
            return itemCart.quantity > 0;
        });
        
        let stringCart = JSON.stringify(cart);
        localStorage.setItem("cart", stringCart);
    }

    getOrderBody(){
        let cart = new Cart().getCart();
        let orderBody = {"productIdsList" : {},
                         "totalPrice" : 0,
                         "boolPaid" : true,
                         "boolDelivered": false};
        
        cart.forEach((item) => {
            orderBody.totalPrice += item.unitPrice * item.quantity;
            orderBody.productIdsList[item.id] = item.quantity
        });
        return orderBody;
    }
}