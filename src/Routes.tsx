import {Routes as Rotas ,Route} from 'react-router-dom'
import {DeliveryPage } from './Pages/DeliveryPage'
import { Showcase } from './Pages/Showcase'
import { AccountPage } from './Pages/AccountPage'
import { PrivateRoute } from './Components/PrivateRoute'




export const Routes=()=>{
  
    return <>
            <Rotas>
             <Route path='/' element={<Showcase/>} />
             <Route path='/pedidos'  element={<DeliveryPage/>} />
             <Route path='/user'  element={<PrivateRoute><AccountPage/></PrivateRoute>} />
            <Route path='/:slug' element={<Showcase/>} />
          </Rotas>
  

           
    </>
}