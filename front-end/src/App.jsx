import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {  
  return (
  <div className='App'>
    <>
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route >
            <Route path='/' element={<h1> Product Listing Component</h1>} ></Route> 
            <Route path='/about' element={<h1> this is About</h1>}></Route> 
            <Route path ='/add' element={<h1> Add Product Component</h1>}></Route>
            <Route path='/update' element={<h1> Update Product Component</h1>}></Route>
            <Route path='/profile' element={<h1> Profile Component</h1>}></Route>
            </Route>

            <Route path='/login' element={<Login/>}></Route>
      </Routes>  
      </BrowserRouter>
    <Footer />
    </>
      
  </div>
  )
}

export default App
