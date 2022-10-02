import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Payment.css'

export default function Payment(props){

    let [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        //run after component mount
        let orderBody = getOrderBodyFromCart()
        setTotalPrice(parseFloat(orderBody.totalPrice).toFixed(2).replace('.', ','))
    },[])

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }

    

    
    return(
        <div className='payment-background row' onClick={() => {
                                                                    sendOrderToMongo()
                                                                    navigateToHome()
                                                                }}>
            <h1 className='payment-header row'>Aponte o celular para o QR Code abaixo:</h1>
            <img className='row' src={require('../../assets/images/qr_1.png')}
                style={{height: '300px', width: '300px'}}/>
            <h3 className='price-text row'>Total: R${totalPrice}</h3>
            <p className='obs-text row'>Toque na tela quando o pagamento for concluído.</p>
        </div>
    )
}