import React from 'react'
import bursarypicture from './Images/rut-miit-oTglG1D4hRA-unsplash.jpg'
import './Homepag.css'
import Login from './Components/api/Login'

function Homepage() {
  return (
    <div className='Overall-homepage-container'>
        <img src={bursarypicture} className='homepage-background'/>
        <div className='homepage-opacity-controller'></div>
        <div className='Login-homepage-container'>
          <Login/>
        </div>
        <Login/>
        </div>
  )
}

export default Homepage