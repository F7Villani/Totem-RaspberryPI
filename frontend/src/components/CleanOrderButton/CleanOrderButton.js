import React, { Component } from 'react';
import './CleanOrderButton.css';

import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Cart } from '../../services/Cart';

export class CleanOrderButton extends Component {

    state = {
        cart: null
    }

    componentDidMount(){
        const cart = new Cart();
        this.setState({cart: cart.getCart()});
    }

    getTotalQuantity(cart){
        let totalQuantity = 0;
        if(cart?.length){
            for (let i = 0; i < cart.length; i++) {
                totalQuantity += cart[i].quantity
            }
        }
        return totalQuantity;
    }


    render() {
        return (
            <React.Fragment>
                <Button 
                    className='p-button-rounded p-button-danger clean-order-button' 
                    type="button" 
                    label="Limpar"
                    onClick={ () => {
                        this.props.emptyCart()
                        console.log('Botão Limpar clicado - Limpar Pedido')
                        let localCart = localStorage.getItem("cart")
                        this.setState({cart: JSON.parse(localCart)})
                        console.log(localCart)
                    }}>
                    <Badge 
                        value={this.getTotalQuantity(this.state.cart)} 
                        >
                    </Badge>
                </Button>
            </React.Fragment>
        )
    }
}

export default CleanOrderButton