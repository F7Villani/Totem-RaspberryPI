import React, { Component } from 'react';
import { BackendService } from '../../services/Backend';
import Counter from '../Counter/Counter';

import './CardItemSelect.css';

export class CardItemSelect extends Component {

    constructor(props){
        super(props);
    }

    backService = new BackendService()

    items = this.backService.get

    onPlusClick = () => {
        console.log('Adicionando item do carrinho');
    }

    onMinusClick = () => {          
        console.log('Retirando item do carrinho');
    }

    render() {
        return (
            <React.Fragment>
                <div className="flexbox-container-card-item-select">
                    <img className='image-item' src={require('../../assets/images/' + this.props.imageName)}></img>
                    <p className='label label-col'>{this.props.itemName}</p>
                    <p className='label label-col'>{'R$' + this.props.price}</p>
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