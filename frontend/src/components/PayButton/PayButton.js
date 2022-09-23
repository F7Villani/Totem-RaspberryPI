import React, { Component } from 'react';
import './PayButton.css';

import { Button } from 'primereact/button';

export class PayButton extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
        <React.Fragment>
            <Button 
                label="Pagar" 
                className="p-button-rounded p-button-success pay-button" 
                onClick={ () => {
                    console.log("Botão pagar clicado - Vai pra tela de revisão")
                }}/>
        </React.Fragment>
        )
    }
}

export default PayButton