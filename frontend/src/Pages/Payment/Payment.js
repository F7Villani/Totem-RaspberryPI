import React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Payment.css'

export default function Payment(props){

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }

    const getOrderBodyFromCart = () => {
        let cart = JSON.parse(props.cart)
        let orderBody = {"productIdsList" : {},
                         "totalPrice" : 0,
                         "boolPaid" : true}
        
        cart.forEach((item) => {
            orderBody.totalPrice += item.price * item.quantity
            orderBody.productIdsList[item.id] = item.quantity
        })

        console.log(orderBody)

        return orderBody
    }

    const sendOrderToMongo = () => {
        axios.post('http://localhost:8080/order', getOrderBodyFromCart())
    }
    return(
        <div className='payment-background row' onClick={() => {
                                                                    sendOrderToMongo()
                                                                    navigateToHome()
                                                                }}>
            <h1 className='payment-header row'>Aponte o celular para o QR Code abaixo:</h1>
            <img className='row' src={require('../../assets/images/qr_1.png')}
                style={{height: '300px', width: '300px'}}/>
            <p className='obs-text row'>Toque na tela quando o pagamento for concluído.</p>
        </div>
    )
}