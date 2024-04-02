import React from 'react'
import bursarypicture from './Images/rut-miit-oTglG1D4hRA-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='Overall-homepage-container'>
         <div className='homepage-opacity-controller'></div>
         <img src={bursarypicture} className='homepage-background'/>
         <div className='Login-homepage-container bg-dark'>
          <p className='text-light'>Unlock Your Future: Apply for Our Bursary Today! Invest in Your Education, Empower Your Dreams. Join a Community Committed to Your Success. Apply Now</p>
          <div style={{width:"max-content",margin:"auto"}}>
            <Link to="/Login"><button className='btn btn-outline-light'>Apply</button></Link>
          </div>
        </div>
    </div>
  )
}
