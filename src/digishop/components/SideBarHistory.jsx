import React from 'react'
import '../styles/SideBar.css'
import { DigimonCardHistory } from './DigimonCardHistory'

export const SideBarHistory = () => {
    return (
        <aside className='side-bar'>
            <h2>Shoping History</h2>
            
            <DigimonCardHistory
                imageUrl={"https://digi-api.com/images/digimon/w/Kabuterimon.png"} 
                id={35}
                name={"Kabuterimon"} 
                type={"Insect"}
            />

            <DigimonCardHistory
                imageUrl={"https://digi-api.com/images/digimon/w/Garurumon.png"} 
                id={33}
                name={"Garurumon "} 
                type={"Beast"}
            />
        </aside>
    )
}
