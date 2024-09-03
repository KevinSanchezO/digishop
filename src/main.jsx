import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import { BrowserRouter } from 'react-router-dom'
import { Digishop } from './Digishop'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Digishop/>
    </BrowserRouter>
  </StrictMode>,
)
