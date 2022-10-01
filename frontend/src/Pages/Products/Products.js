import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItemSelect from '../../components/CardItemSelect/CardItemSelect';
import BackButton from '../../components/BackButton/BackButton';

import './Products.css';

export default function Products(props){

    const location = useLocation();
    
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
    
    let category = location.state.category;
    let imageName = GetImageByCategory(category);

    return(
        <div>
            <div className="top-bar d-flex row w-100">
                <div className='d-flex col-3 justify-content-between flex-column'>
                    <img className='product-category-image img-responsive' src={require(`../../assets/images/${imageName}`)}/>
                </div>
                <div className='d-flex col-5 align-self-center justify-content-between align-items-left flex-column'>
                    <h1 className='title-page'>{category}</h1>
                </div>
            </div>
            {/*for pra cada item da categoria*/}
            <CardItemSelect itemName='Nome do item' price='30,9' imageName={imageName} />
            <div className='d-flex row w-100 justify-content'
                style={{height: '14vh', margin:'1px'}}>
                <div className='d-flex align-items-center'>
                    <div className='d-flex col-6'>
                        <BackButton/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}