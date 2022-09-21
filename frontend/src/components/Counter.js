import React, { Component } from 'react';

import { Button } from 'primereact/button';

export class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {amount: 0}
    }

    render() {
        return (
        <div>
            <span>
                <Button 
                    icon="pi pi-minus" 
                    className="p-button-rounded p-button-secondary" 
                    aria-label="Bookmark" 
                    onClick={
                        () => {
                            console.log('clicado');
                            this.setState({amount: this.state.amount-1 < 0? 0 : this.state.amount-1 })
                        }         
                    }/>
            </span>
                {this.state.amount}        
            <span>
                <Button 
                    icon="pi pi-plus" 
                    className="p-button-rounded p-button-secondary" 
                    aria-label="Bookmark" 
                    onClick={
                        () => {
                            console.log('clicado');
                            this.setState({amount: this.state.amount+1})
                        }         
                    }/>
            </span>
        </div>
        );
    }
}

export default Counter