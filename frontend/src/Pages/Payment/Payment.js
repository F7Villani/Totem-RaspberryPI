import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';
import { BackendService } from '../../services/Backend';

export default function Payment(props){

    let [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        let orderBody = props.cart.getOrderBody();
        setTotalPrice(parseFloat(orderBody.totalPrice).toFixed(2).replace('.', ','))
    },[])

    const backService = new BackendService();

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }

    return(
        <div className='home-background'
            onClick={() => {
                backService.sendOrderToMongo();
                navigateToHome();
            }}>
                <div className="home-bar d-flex w-100 justify-content-center">               
                    <h1 className='home-title text-center'>PAGAMENTO</h1>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-9 w-100 text-center">
                            <h1 className='payment-header'>Aponte o celular para o QR Code abaixo:</h1>
                            <br/>
                            <img src={require('../../assets/images/qr_1.png')}
                            style={{height: '300px', width: '300px'}}/>
                        </div>
                        <div className="col-1 w-100 text-center">
                            <h1 className='price-text'>TOTAL: R$ {totalPrice}</h1>
                            <p className='obs-text'>Toque na tela quando o pagamento for concluído.</p>
                        </div>
                    </div>    
                </div> 
        </div>
    )
}