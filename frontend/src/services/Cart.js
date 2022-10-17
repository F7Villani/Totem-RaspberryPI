export class Cart{

    Cart(){
        localStorage.setItem('cart', '[]');
    }

    getCart(){
        return localStorage.getItem("cart");
    }

    cleanCart(){
        localStorage.setItem('cart', '[]');
    }

    addItem(itemToAdd){ 
        debugger
        let cart = this.getCart();
        
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

    removeItem = (itemToRemove) => {
        
        let cart = this.getCart();
        
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
                
        let stringCart = JSON.stringify(cart);
        localStorage.setItem("cart", stringCart);
    }

}