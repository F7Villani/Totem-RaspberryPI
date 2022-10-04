import React, { Component } from 'react';
import { BackendService } from '../../services/Backend';
import Counter from '../Counter/Counter';

import './CardItemSelect.css';

export class CardItemSelect extends Component {

    constructor(props){
        super(props);
    }

    state = {
        item: null
    }

    backService = new BackendService()

    onPlusClick = async () => {
        this.props.addItemToCart(await this.getItem());
        console.log('Adicionando item do carrinho');
    }

    onMinusClick = async () => {   
        this.props.removeItemFromCart(await this.getItem().id);   
        console.log('Retirando item do carrinho');
    }

    getItem = async () => {
        let items = await this.backService.getProducts(this.props.category);
        let item = items.find(item => item.id === this.props.itemId);
        return item;
    }

    componentDidMount(){
        this.setState(this.getItem());
    }

    render() {
        return (
            <React.Fragment>
                <div className="flexbox-container-card-item-select">
                    <img className='image-item' src={require('../../assets/images/' + this.props.imageName)}></img>
                    <p className='label label-col'>{this.props.itemName}</p>
                    <p className='label label-col'>{'R$ ' + parseFloat(this.props.price).toFixed(2).replace('.', ',')}</p>
                    <Counter 
                        amount={this.props.amount}
                        onPlusClick={this.onPlusClick}
                        onMinusClick={this.onMinusClick}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default CardItemSelect