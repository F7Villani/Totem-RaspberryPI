import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Products(props){
    return(
        <div>
            <p>Products</p>
            <br/>
            <p>{props.cart}</p>
        </div>
    )
}