import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(){

    const navigate = useNavigate()

    const navigateToItemCategory = () => {
        navigate('/category')
    };

    return (
        <div className='d-flex justify-content-center align-items-center w-100'
            style={/*Mudar cor de fundo */
                {
                    backgroundColor: 'blue'
                }
            }
            onClick={navigateToItemCategory}>
            <h1 style={{
                color: 'white'
            }}>Toque para iniciar</h1>
        </div>
    )
}