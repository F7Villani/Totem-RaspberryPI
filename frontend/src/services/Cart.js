export class Cart{

    getCart(){
        return localStorage.getItem("cart");
    }

    cleanCart(){
        localStorage.setItem('cart', '[]');
    }

    addItem(item){ 

        let cart = this.getCart();
        let {id} = item;
        
        let existingItem = cart.find(cartItem => cartItem.id === id);
        
        if (existingItem) {
            cart.find((cartItem) => {
                cartItem.quantity++;
            })
        } else {
            item.quantity = 1;
            cart.push(item);
        }
                
        let stringCart = JSON.stringify(cart);
        localStorage.setItem("cart", stringCart);
    }

}