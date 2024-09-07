import React from 'react'
import '../styles/DigimonCardShop.css'


export const DigimonCardShop = ({imageUrl, id, name, type}) => {
  return (
    <div className='card'>
        <div className='infoContainer'>
            <img src={imageUrl} alt="Digimon Image" />
            <h4>
                <b>{`¥${id} - ${name}`}</b>
            </h4>
            <p>{type}</p>

            <button className='buttonAdd'>
                Add to cart
            </button>
        </div>
    </div>
  )
}
