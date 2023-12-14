import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Products from "./components/Products/Products"
import Cart from './components/Cart/Cart'
import './App.css'


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element = {<Cart />}  />
        

      </Routes>
      </BrowserRouter>
      
      
    </div>
  )


}
export default App