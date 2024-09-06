import React, { useState } from 'react'
import { Header } from '../components/Header'
import { SideBarCart } from '../components/SideBarCart'
import '../styles/DigishopPage.css'
import { SideBarHistory } from '../components/SideBarHistory'
import { Shop } from '../components/Shop'
import { useUIStore } from '../../hooks/useUIStore'

export const DigishopPage = () => {

    const {isShoppingCartOpen, isHistoryOpen} = useUIStore();

  return (
    <div className='page-container'>
        <Header/>
        <div className='content'>
            {(isShoppingCartOpen) ?
            <SideBarCart />
            :
            <></>
            }

            {(isHistoryOpen) ?
            <SideBarHistory/>
            :
            <></>
            }
            <main className='main-content'>
                <Shop />
            </main>
        </div>
    </div>
  )
}
