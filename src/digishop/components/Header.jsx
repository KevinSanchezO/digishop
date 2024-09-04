import React from 'react'
import { useAuthStore } from '../../hooks'
import '../styles/Header.css'

export const Header = () => {
    
    const {startLogout, user} = useAuthStore();
    
    return (
        <div className='header'>
            <div className='left'>
                <button className='btn'>
                    <span>
                        Shopping Cart
                    </span>
                </button>

                <button className='btn'>
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
