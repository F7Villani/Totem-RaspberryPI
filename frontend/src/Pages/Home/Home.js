import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home(props){

    useEffect(() => {
        props.cart.cleanCart()
    },[])

    const navigate = useNavigate();

    const navigateToItemCategory = () => {
        navigate('/category')
    };


    return (
        <div className='home-background'
            onClick={navigateToItemCategory}>
                <div className="home-bar d-flex w-100 justify-content-center">               
                    <h1 className='home-title text-center'>SUPER REDE DE FAST FOOD</h1>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-9 w-100 text-center">
                            <img 
                                className='home-image'
                                src={require('./../../assets/images/Vetor_Combo.png')} alt="" />
                        </div>
                        
                        <div className="col-3 w-100 text-center">
                            <h1>Iniciar Pedido</h1>
                        </div>
                    </div>    
                </div> 
        </div>
    );
}