import React, { Component } from 'react';

import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export class CleanOrderButton extends Component {

    constructor(props){
        super(props);
    }

    state = {
        amount: this.props.amountItems
    }

    render() {
        return (
            <React.Fragment>
                <Button 
                    className='p-button-rounded p-button-danger' 
                    type="button" 
                    label="Limpar"
                    onClick={ () => {
                        console.log('Botão Limpar clicado');
                    }}>
                    <Badge value={this.state.amount}></Badge>
                </Button>
            </React.Fragment>
        )
    }
}

export default CleanOrderButton