import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Products(props){

    const location = useLocation()
    console.log(location)
    return(
        <div>
            <p>Products</p>
            <br/>
            <p>{props.cart}</p>
            <br/>
            <p>Categoria: {`${location.state.category}`}</p>
        </div>
    )
}