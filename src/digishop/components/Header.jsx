import React from 'react'
import { useAuthStore, useUIStore } from '../../hooks'
import '../styles/Header.css'

export const Header = () => {
    
    const {startLogout, user} = useAuthStore();
    const {handleShoppingCartSideBar, handleHistorySideBar} = useUIStore();

    
    return (
        <div className='header'>
            <div className='left'>
                <button className='btn' 
                onClick={handleShoppingCartSideBar}>
                    <span>
                        Shopping Cart
                    </span>
                </button>

                <button className='btn'
                onClick={handleHistorySideBar}>
                    <span>
                        Shopping History
                    </span>
                </button>
            </div>

            <div>
                <button className='btnLogout' onClick={startLogout}>
                    <span>
                        Logout
                    </span>
                </button>   
            </div>
            
        </div>
    )
}
