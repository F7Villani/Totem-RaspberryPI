import React, { Component } from 'react';

import { Button } from 'primereact/button';

import './Counter.css';

export class Counter extends Component {

    constructor(props){
        super(props);
    }
    
    state = {
        amount: 0
    }

    render() {
        return (
            <React.Fragment>
                <div className="flexbox-container">
                    <Button 
                        icon="pi pi-minus" 
                        className="p-button-rounded p-button-secondary" 
                        aria-label="Bookmark" 
                        onClick={
                            () => {
                                this.setState({amount: this.state.amount-1 < 0? 0 : this.state.amount-1 })
                            }         
                        }/>
                    <span className="label">{this.state.amount}</span>
                    
                    <Button 
                        icon="pi pi-plus" 
                        className="p-button-rounded p-button-secondary" 
                        aria-label="Bookmark" 
                        onClick={
                            () => {
                                this.setState({amount: this.state.amount+1})
                            }         
                        }/>
                </div>
            </React.Fragment>
        );
    }
}

export default Counter