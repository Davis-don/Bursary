import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Createacc from './Createacc'
// import Createacc from './Createacc'
import { Link } from 'react-router-dom'

function Login() {
    const [Login,setLogin]=useState(true)
    const [Create,setCreate]=useState(false)
  return ( 
    <div className='overall-login-container'>
        <div className='login-form'>
      { Login &&  <form>
            <h3 style={{textAlign:"center"}}>LOGIN</h3>
            <label style={{width:'100%'}}>UserName
                <input type='text'className='form-control' placeholder='username'/>
            </label>
            <label style={{width:'100%'}}>Password
                <input type='password'className='form-control' placeholder='password'/>
            </label>
            <div className='login-btn-div'>
                <button className='btn btn-outline-dark'>Login</button>
            </div>
            <p style={{textAlign:'center'}}>Already have an account? <span className='text-primary' onClick={()=>{setLogin(false);setCreate(true)}}>Sign in</span></p>
        </form>
        }
        {Create && <div className='Create-acount-form'>
       <Createacc/>
        </div>
}
    </div>
        </div>
  )
}

export default Login