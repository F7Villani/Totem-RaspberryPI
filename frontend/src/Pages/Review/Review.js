import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PayButton from '../../components/PayButton/PayButton';

import './Review.css';
import BackButton from '../../components/BackButton/BackButton';

export default function Review(props){

    const navigate = useNavigate();

    const navigateToItemCategory = () => {
        navigate('/category')
    };
    const navigateToPayment = () => {
        navigate('/payment')
    }

    return(
        <div>
            <div className="home-bar d-flex w-100 justify-content-center">               
                <h1 className='title-page'>Revisão do Pedido</h1>
            </div>

            <div className="row w-100 header-items align-items-starts">
                <div className="col-4"><h2>Item</h2></div>
                <div className="col-3"><h2>Preço</h2></div>
                <div className="col-2"><h2>Qtd</h2></div>
                <div className="col-3"><h2>Total</h2></div>
            </div>       
            {
                props.cart.getCart().map((item, key) => (
                    <div className="row w-100 header-items align-items-start" key={key}>
                        <div className="col-4">{item.productName}</div>
                        <div className="col-3">{"R$ "+item.unitPrice}</div>
                        <div className="col-2">{item.quantity}</div>
                        <div className="col-3">{"R$ "+ parseFloat(item.unitPrice*item.quantity).toFixed(2).replace('.', ',') }</div>
                    </div>
                ))
            }
            <div className='d-flex row w-100 align-items-end'
                style={{height: '14vh', margin:'1px'}}>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex col-6'>
                        <BackButton redirectFunction={navigateToItemCategory}/>
                    </div>
                    <div className='d-flex col-6 offset-md-1'>
                        <PayButton redirectFunction={navigateToPayment}/>
                    </div>
                </div>
            </div>
        </div>
    )
}