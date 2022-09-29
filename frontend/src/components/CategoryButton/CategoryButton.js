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
        <React.Fragment> 
            <Button className='p-button-raised p-button-secondary category-button'
                onClick={ () => {
                    this.props.onClick(this.props.category);
                    console.log(`TODO: Vai pra pagina de escolher ${this.props.category}`)}}>
                <div className='category-button-content'
                    style={{height: '25vh'}}>
                    <img className='category-image'
                        src={require('../../assets/images/' + this.props.imageName)}/>
                    <h2 className='category-name'
                        style={{height: '5vh'}}>{this.props.category}</h2>
                </div>
            </Button>       
        </React.Fragment>
        );
    }
}

export default CategoryButton