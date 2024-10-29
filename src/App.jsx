import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import Services from './pages/Services'
import FinancialAudit from './pages/FinancialAudit'

const App = () => {
  return (
    <div>
       
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/> }/>
        <Route path='/service' element={<Services/> }/>
        <Route path='/financial_audit' element={<FinancialAudit/> }/>
       </Routes>
    </div>
  )
}

export default App;