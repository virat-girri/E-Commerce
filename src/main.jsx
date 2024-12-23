import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SingleProduct from './SingleProduct.jsx'
import Error from './Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Cart.jsx'
import MainContext from './MainContext.jsx'
let allPages=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
 
{
  path:'/singlePage/:id',
  element:<SingleProduct/>

},
{
  path:'/singlePage/cart',
  element:<Cart/>

},
{
  path:'*',
  element:<Error/>
}



])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainContext>
    <RouterProvider router={allPages}/>
    </MainContext>
  </StrictMode>,
)
