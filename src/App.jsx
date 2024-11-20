import React from 'react'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Userdetails from './Pages/Userdetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/:id' element={<Userdetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
