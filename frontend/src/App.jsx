import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <div className='mx-4 sm:mx-[10%]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

