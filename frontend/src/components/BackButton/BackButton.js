import React, { Component } from 'react';
import './BackButton.css'

import { Button } from 'primereact/button';

export class BackButton extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Button 
                label='Voltar'
                className='p-button-rounded p-button-secondary back-button'
                onClick={() => {
                    this.props.redirectFunction()
                    console.log("Botão voltar clicado - Vai pra tela de categorias")
                    }}>
            </Button>
        )
    }
}

export default BackButton;