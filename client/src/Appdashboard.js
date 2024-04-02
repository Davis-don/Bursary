import React from 'react'
import "./Appdash.css"
import bursarypicture from './Images/rut-miit-oTglG1D4hRA-unsplash.jpg'

function Appdashboard() {
  return (
    <div className='overall-app-dash'>
        <h1 className='te'>Welcome </h1>
        <div className='homepage-opacity-controller'></div>
        <img src={bursarypicture} className='homepage-background'/>
        </div>
  )
}

export default Appdashboard