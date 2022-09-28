import React, { Component } from 'react'

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
import './CategoryButton.css';

import { Button } from 'primereact/button';

export class CategoryButton extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <React.Fragment className='category-button'> 
            <Button 
                className='p-button-raised p-button-secondary'
                onClick={ () => {
                    this.props.onClick();
                    console.log(`TODO: Vai pra pagina de escolher ${this.props.category}`)}}>
                <div>
                    <img src={require('../../assets/images/' + this.props.imageName)}></img>
                    <h1>{this.props.category}</h1>
                </div>
            </Button>       
        </React.Fragment>
        );
    }
}

export default CategoryButton