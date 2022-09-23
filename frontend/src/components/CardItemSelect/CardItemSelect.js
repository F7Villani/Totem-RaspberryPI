import React, { Component } from 'react';
import Counter from '../Counter/Counter';

import './CardItemSelect.css';

export class CardItemSelect extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="flexbox-container-card-item-select">
                    <img className='image-item' src={require('../../assets/images/' + this.props.imageName)}></img>
                    <p className='label label-default'>{this.props.itemName}</p>
                    <p className='label label-default'>{'R$' + this.props.price}</p>
                    <Counter/>
                </div>
            </React.Fragment>
        )
    }
}

export default CardItemSelect