import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home(props){

    const navigate = useNavigate()

    const navigateToItemCategory = () => {
        navigate('/category')
    };

    useEffect(() => {
        props.emptyCart()
    }, [])

    return (
        <div className='home-background'
            onClick={navigateToItemCategory}>
            <h1 className='home-text'>Toque para iniciar</h1>
        </div>
    )
}