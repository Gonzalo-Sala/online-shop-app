import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CartApp />
    </StrictMode>
  </BrowserRouter>
)
