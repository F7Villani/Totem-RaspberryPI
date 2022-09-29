import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Review(props){

    useEffect(() => {
        //run after component mount
        props.addItemToCart({'name': 'teste', 'id': 12, 'quantity': 2})
    },[])

    return(
        <div>
            <p>Review</p>
            <br/>
            <p>
                {props.cart}
            </p>
        </div>
    )
}