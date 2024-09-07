import React, { useEffect } from 'react'
import { getDigimon } from '../../api/DigimonAPI'
import { DigimonCardShop } from './DigimonCardShop'
import '../styles/Shop.css'

export const Shop = () => {

    useEffect( () => {
        let digimons = [33, 336, 271, 349, 81, 5]
        digimons.forEach(async (digimonId) => {
            let {data} = await getDigimon(digimonId);
            console.log(data.id, data.name, data.images[0].href, data.types[0].type);
        })
    }, [])


    return (
        <div>
            <h1>SHOP</h1>
            <p>Take a look at all the different Digimons, available today!</p>
            <div className='cardsContainer'>
                <DigimonCardShop 
                    imageUrl={"https://digi-api.com/images/digimon/w/Stingmon.png"} 
                    id={336}
                    name={"Stingmon"} 
                    type={"Insect"}
                />
                <DigimonCardShop 
                    imageUrl={"https://digi-api.com/images/digimon/w/Garurumon.png"} 
                    id={33}
                    name={"Garurumon "} 
                    type={"Beast"}
                />

                <DigimonCardShop 
                    imageUrl={"https://digi-api.com/images/digimon/w/Kabuterimon.png"} 
                    id={35}
                    name={"Kabuterimon"} 
                    type={"Insect"}
                />
                <DigimonCardShop 
                    imageUrl={"https://digi-api.com/images/digimon/w/Agumon.png"} 
                    id={33}
                    name={"Agumon"} 
                    type={"Reptile"}
                />
            </div>
        </div>
    )
}
