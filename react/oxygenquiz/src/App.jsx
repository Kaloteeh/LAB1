import { useState } from 'react'
import { Button } from '@mui/material'
import { Routes , Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Admin from './components/Admin'
// import Dropdown from './components/Dropdown'
// import Aadmin from './components/Aadmin'
// import Aquestions from './components/Aquestions'


export default function App(){

  return (
    <>
  <Routes>
    <Route path='/' element ={<Layout/>}></Route>
    <Route path='/components/Navbar' element = {<Navbar/>}></Route>
    <Route path='/components/Login' element= {<Login/>}></Route>
    <Route path='/components/Signup' element= {<Signup/>}></Route>
    <Route path='/components/Profile' element= {<Profile/>}></Route>
    <Route path='/components/Admin' element= {<Admin/>}></Route>
    {/* <Route path='/components/Dropdown' element= {<Dropdown/>}></Route> */}
    {/* <Route path='/components/Aadmin' element= {<Aadmin/>}></Route> */}
    {/* <Route path='/components/Aquestions' element= {<Aquestions/>}></Route> */}

    



  </Routes>
    </>
  )
}