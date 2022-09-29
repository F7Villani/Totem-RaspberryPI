import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(props){

    const navigate = useNavigate()

    const navigateToItemCategory = () => {
        navigate('/category')
    };

    useEffect(() => {
        props.emptyCart()
    }, [])

    return (
        <div className='d-flex justify-content-center align-items-center w-100 h-100'
            style={/*Mudar cor de fundo */
                {
                    backgroundColor: 'blue'
                }
            }
            onClick={navigateToItemCategory}>
            <h1 className='d-flex justify-content-center align-items-center h-100'
                style={{
                color: 'white'
            }}>Toque para iniciar</h1>
        </div>
    )
}