import React, { useState } from 'react'
import { Header } from '../components/Header'
import { SideBarCart } from '../components/SideBarCart'
import '../styles/DigishopPage.css'
import { SideBarHistory } from '../components/SideBarHistory'

export const DigishopPage = () => {

    const [show, setShow] = useState(true)

  return (
    <div className='page-container'>
        <Header/>
        <div className='content'>
            {(show) ?
            <SideBarCart />
            :
            <SideBarHistory/>
            }
            <main className='main-content'>
                <h1>SHOP</h1>
            </main>
        </div>
    </div>
  )
}
