import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const navigateToItemCategory = () => {
    console.log('navigateToItemCategory');
};

ReactDOM.render(
    <div className='d-flex justify-content-center align-items-center' 
        style={{backgroundColor: 'blue', height: '800px', width: '480px'}}
        onClick={navigateToItemCategory}>
        <h1>Toque para iniciar</h1>
    </div>,
    document.querySelector('#root')
)