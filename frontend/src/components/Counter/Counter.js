import React, { Component } from 'react';
import './Counter.css';

import { Button } from 'primereact/button';

export class Counter extends Component {

    constructor(props){
        super(props);
    }
    
    state = {
        amount: parseInt(this.props.amount) ?? 0
    }

    render() {
        return (
            <React.Fragment>
                <div className="flexbox-container">
                    <Button 
                        icon="pi pi-minus" 
                        className="button-counter p-button-rounded p-button-secondary" 
                        aria-label="Bookmark" 
                        onClick={
                            () => {
                                this.setState({amount: this.state.amount-1 < 0? 0 : this.state.amount-1 })
                            }         
                        }/>
                    <span className="label">{this.state.amount}</span>
                    
                    <Button 
                        icon="pi pi-plus" 
                        className="button-counter p-button-rounded p-button-secondary" 
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