import {BrowserRouter,Routes as Rotas ,Route} from 'react-router-dom'
import { Requests } from './Pages/Requests'
import { Showcase } from './Pages/Showcase'

export const Routes=()=>{
    return <BrowserRouter>
            <Rotas>
             <Route path='/'  element={<Showcase/>} />
             <Route path='/pedidos'  element={<Requests/>} />
            </Rotas>
    </BrowserRouter>
}