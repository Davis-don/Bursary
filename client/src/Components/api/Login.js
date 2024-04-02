import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Createacc from './Createacc'
import { useNavigate } from 'react-router-dom';
// import Createacc from './Createacc'
import { Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [Login,setLogin]=useState(true)
    const [Create,setCreate]=useState(false)
    const [success,setSuccess]=useState(false);
    const [fail,setFail]=useState(false);
    const [token,setToken]=useState("")
    const [loginCred,setLoginCred]=useState({
        nationalId:"",
        password:""
    })
    const updateCred=(e)=>{
    setLoginCred({
        ...loginCred,[e.target.name]:e.target.value

    })
     }
     let handlepost=async (e)=>{
        e.preventDefault();
        try{
   let response=await fetch("http://localhost:4000/Login/account",{
       method:"POST",
       headers:{
           "content-type":"application/json"
       },
       body:JSON.stringify(loginCred)
   })
   if(response){
    const data=await response.json();
    console.log(data.token)
    // if(data.token){
    //     setToken(data.token);
    //     setSuccess(true)
    //     setFail(false)
    //     localStorage.setItem('token', `Bearer ${data.token}`);
    //     const token = localStorage.getItem('token');
    //     console.log("heloo here")
    //     console.log(token)
    //       navigate('/applicant/dashboard')
        
    // }
    if(data.user=="ADMIN"){
        setToken(data.token);
        setSuccess(true);
        setFail(false);
        localStorage.setItem('token', `Bearer ${data.token}`);
        const token = localStorage.getItem('token');
        console.log(token)
        navigate("/applicant/dashboard/admin")

    }
    else if(data.user === "applicant"){
        setToken(data.token);
        setSuccess(true);
        setFail(false);
        localStorage.setItem('token', `Bearer ${data.token}`);
        const token = localStorage.getItem('token');
        navigate("/applicant/dashboard")
        
       
    }
    else{
        setCreate(false)
        setFail(true);
        console.log("error")
    }
    
    
   }
   else{
    setCreate(false)
        setFail(true);
       let errordata=await response.json();
       console.log(errordata);
   }
        }
        catch(error){
            setCreate(false)
        setFail(true);

       console.log(error)
        }
   }
  return ( 
    <div className='overall-login-container'>
        <div className='login-form'>
            {
                success && <div class="alert alert-success">
                <strong>Success!</strong> Login Successfull
              </div>
            }
            {
               fail &&  <div class="alert alert-danger">
                <strong>Unsuccessful!</strong>Check credentials or create account
              </div>
            }
      { Login &&  <form onSubmit={handlepost}>
            <h3 style={{textAlign:"center"}}>LOGIN</h3>
            <label style={{width:'100%'}}>UserName
                <input onChange={updateCred} name='nationalId' type='text'className='form-control' placeholder='username'/>
            </label>
            <label style={{width:'100%'}}>Password
                <input onChange={updateCred} name='password' type='password'className='form-control' placeholder='password'/>
            </label>
            <div className='login-btn-div'>
                <button className='btn btn-outline-dark'>Login</button>
                
            </div>
            <p style={{textAlign:'center'}}>Already have an account?<span className='text-primary'onClick={()=>{setLogin(false);setCreate(true)}}>Sign in</span></p>
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