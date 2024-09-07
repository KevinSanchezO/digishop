import React from 'react'
import '../styles/DigimonCardShoppingCart.css'


export const DigimonCardCart = ({imageUrl, id, name, type}) => {
    return (
        <div className='cardShopping'>
            <div className='infoContainerCart'>
                <img src={imageUrl} alt="Digimon Image" />
                <h4>
                    <b>{`¥${id} - ${name}`}</b>
                </h4>
                <p>{type}</p>
            </div>
        </div>
    )
}