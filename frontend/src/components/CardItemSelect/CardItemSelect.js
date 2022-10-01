import React, { Component } from 'react';
import Counter from '../Counter/Counter';

import './CardItemSelect.css';

export class CardItemSelect extends Component {

    constructor(props){
        super(props);
    }

    state = {
        amount: parseInt(this.props.amount) || 0
    }

    render() {
        return (
            <React.Fragment>
                <div className="flexbox-container-card-item-select">
                    <img className='image-item' src={require('../../assets/images/' + this.props.imageName)}></img>
                    <p className='label label-col'>{this.props.itemName}</p>
                    <p className='label label-col'>{'R$' + this.props.price}</p>
                    <Counter amount={this.state.amount}/>
                </div>
            </React.Fragment>
        )
    }
}

export default CardItemSelect