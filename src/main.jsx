import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Shop from './components/Shop/Shop.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Contact from './components/Contact/Contact.jsx'
import Faq from './components/Faq/Faq.jsx'




const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path='/' element={<Layout />} >  
  <Route path='' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/faq' element={<Faq/>}/>

  </Route>
)
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
