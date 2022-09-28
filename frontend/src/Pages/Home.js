import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(){

    const navigate = useNavigate()

    const navigateToItemCategory = () => {
        navigate('/select-category')
    };

    return (
        <div className='d-flex raspberry-screen-size justify-content-center align-items-center'
            style={/*Mudar cor de fundo */
                {
                    backgroundColor: 'blue', 
                    width: '480px', 
                    height: '800px'
                }
            }
            onClick={navigateToItemCategory}>
            <h1 style={{
                color: 'white'
            }}>Toque para iniciar</h1>
        </div>
    )
}