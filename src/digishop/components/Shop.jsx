import React, { useEffect } from 'react'
import { getDigimon } from '../../api/DigimonAPI'

export const Shop = () => {

    useEffect(() => {
        const digimon = async () => {
            let digimon = await getDigimon();
            console.log(digimon)
        }

        digimon()
    }, [])

    return (
        <div>
            <h1>SHOP</h1>
            <p>Take a look at all the different Digimons, available today!</p>
            <div>

            </div>
        </div>
    )
}
