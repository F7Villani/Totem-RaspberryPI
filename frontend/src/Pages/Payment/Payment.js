import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Payment.css'

export default function Payment(props){
    return(
        <div className='payment-background row'>
            <h1 className='payment-header row'>Aponte o celular para o QR Code abaixo:</h1>
            <img className='row' src={require('../../assets/images/qr_1.png')}
                style={{height: '300px', width: '300px'}}/>
            <p className='obs-text row'>Toque na tela quando o pagamento for concluído.</p>
        </div>
    )
}