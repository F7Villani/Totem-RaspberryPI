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
            <Button style={{height: '35vh'}}
                className='p-button-raised p-button-secondary d-flex justify-content-center align-items-center'
                onClick={ () => {
                    this.props.onClick(this.props.category);
                    console.log(`TODO: Vai pra pagina de escolher ${this.props.category}`)}}>
                <div className='d-flex justify-content-center align-items-center row w-100'
                    style={{height: '25vh'}}>
                    <img className='d-flex justify-content-center align-items-center row'
                        src={require('../../assets/images/' + this.props.imageName)}
                        style={{height: '20vh', width: '20vh'}}></img>
                    <h2 className='d-flex justify-content-center align-items-center row w-100'
                        style={{height: '5vh'}}>{this.props.category}</h2>
                </div>
            </Button>       
        </React.Fragment>
        );
    }
}

export default CategoryButton