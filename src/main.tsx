import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as RouterApp } from 'react-router-dom'
import { ContextProvider } from './Context/ContextProvider'
import { AuthProvider } from './Context/AuthContext'
import {ModalLoginProvider} from './../src/Context/modaLoginContext'
import { MenuMobileProvider } from './Context/menuMobileContext'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <MenuMobileProvider>
      <ModalLoginProvider>
      <ContextProvider>
            <AuthProvider>
                     <RouterApp>
                        <React.StrictMode>
                           <App />
                        </React.StrictMode>
                     </RouterApp>
            </AuthProvider>
   </ContextProvider>
 </ModalLoginProvider>
   </MenuMobileProvider>
)
