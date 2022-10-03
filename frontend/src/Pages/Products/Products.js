import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItemSelect from '../../components/CardItemSelect/CardItemSelect';
import BackButton from '../../components/BackButton/BackButton';
import { BackendService } from '../../services/Backend';

import './Products.css';

export default function Products(props){

    const [items, setItems] = useState([]);

    const location = useLocation();
    
    const backService = new BackendService();

    const GetImageByCategory = (category) => {
        switch (category) {
            case 'Combos':
                return 'Vetor_Combo.png';
            case 'Bebidas':
                return 'Vetor_Bebida.png'
            case 'Lanches':
                return 'Vetor_Lanche.png'
            case 'Sobremesas':
                return 'Vetor_Sorvete.png'
            default:
                break;
        }
    }
    
    const navigate = useNavigate();

    const navigateToItemCategory = () => {
        navigate('/category')
    };

    let category = location.state.category;
    let imageName = GetImageByCategory(category);

    useEffect(() => {
        //run after component mount
        backService.getProducts(category).then( res => setItems(res));
    },[]) 

    return(
        <div>
            <div className="top-bar d-flex row w-100 align-items-center">
                <div className='col-3  flex-column'>
                    <img className='product-category-image img-responsive' src={require(`../../assets/images/${imageName}`)}/>
                </div>
                <div className='d-flex col-9'>
                    <h1 className='title-page'>{category}</h1>
                </div>
            </div>
            {
                items.map((item,key) => {
                    return (
                        <div key={key}>
                            <CardItemSelect 
                                itemName={item.productName} 
                                price={item.unitPrice} 
                                imageName={imageName} 
                                category={category}
                                itemId={item.id}
                                addItemToCart={props.addItemToCart}
                                removeItemFromCart={props.removeItemFromCart}
                            />
                        </div> 
                    )
                })             
            }           
            <div className='d-flex row w-100 justify-content'
                style={{height: '14vh', margin:'1px'}}>
                <div className='d-flex align-items-center'>
                    <div className='d-flex col-6'>
                        <BackButton
                            redirectFunction={navigateToItemCategory}
                        />
                    </div>
                </div>
            </div>    
        </div>
    )
}