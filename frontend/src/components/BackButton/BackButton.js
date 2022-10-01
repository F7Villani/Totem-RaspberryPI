import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";  

import { Button } from 'primereact/button';

export class BackButton extends Component {

    constructor(props){
        super(props);
    }
    

    render() {
        return (
            <Button 
                label='Voltar'
                className='p-button-rounded p-button-secondary'
                onClick={() => {
                    console.log('Vai pra tela de selecionar categoria')
                    }}>
            </Button>
        )
    }
}

export default BackButton;