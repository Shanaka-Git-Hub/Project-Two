import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Producrts from './components/Producrts'
import SelectedItem from './components/SelectedItem'
import ItemCart from './components/ItemCart'

export default function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Producrts/>}/>
          <Route path='/item/:id' element={<SelectedItem/>}/>
          <Route path='/cart' element={<ItemCart/>}/>
        </Routes>
      </Router>
    </div>
  )
}
