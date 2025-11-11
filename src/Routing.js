import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Project/About'
import Home from './Project/Home'
import Projects from './Project/Projects'
import Contact from './Project/Contact'



const Routing = () => {
  return (
    <Routes>
        
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/projects' Component={Projects}/>
            <Route path='/contact' Component={Contact}/>

    </Routes>
  )
}

export default Routing