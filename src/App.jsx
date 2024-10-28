import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contact' element ={<Contact/>} />
       </Routes>
    </div>
  )
}

export default App;