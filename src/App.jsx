import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
       </Routes>
    </div>
  )
}

export default App;