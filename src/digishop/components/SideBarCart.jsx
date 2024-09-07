import React from 'react'
import '../styles/SideBar.css'
import { DigimonCardCart } from './DigimonCardCart'

export const SideBarCart = () => {
    return (
        <aside className='side-bar'>
            <h2>Shoping Cart</h2>

            <DigimonCardCart
                imageUrl={"https://digi-api.com/images/digimon/w/Kabuterimon.png"} 
                id={35}
                name={"Kabuterimon"} 
                type={"Insect"}
            />

            <DigimonCardCart
                imageUrl={"https://digi-api.com/images/digimon/w/Garurumon.png"} 
                id={33}
                name={"Garurumon "} 
                type={"Beast"}
            />
        </aside>
    )
}
