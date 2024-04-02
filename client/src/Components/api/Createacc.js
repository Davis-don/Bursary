import React from 'react'
import './Createacc.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Createacc() {
    const navigate = useNavigate();
    const [personalData,setPersonalData]=useState(true)
    const [Gurdiandetails,setGuardianDetails]=useState(false)
    const [schooldetails,setSchooldetails]=useState(false)
    const [passwordstuff,setPassword]=useState(false)
    const [passMessage,setPassmessage]=useState(false)
    const [serverreply,setServerreply]=useState("")
    const [form,setForm]=useState(true)
    const [appData,setappData]=useState({
        applicantfirstName: "",
        applicantlastName: "",
        applicantnationalId: "",
        applicantemailAdress: "",
        applicantphoneNumber: "",
        applicantIdimage: "",
        parentsNumber:"",
        gurdianName: "",
        GurdianContact: "",
        gurdianNationalid:"",
        Relationship: "",
        parentidimage: "",
        Schoolname: "",
        yearofAdmision: "",
        Regnumber: "",
        Course: "",
        yearofSturdY: "",
        password:"",
        confirmPassword:""



    })
    const updateData=(e)=>{
        setappData({
            ...appData,[e.target.name]:e.target.value
        })
        console.log(appData)
        if(appData.password!=appData.confirmPassword){
         setPassmessage(true);
        }
        
    }
    const handlepost=async (e)=>{
e.preventDefault();
        try{
            const response=await fetch ('http://localhost:4000/create/account',{
                method:'post',
                headers:{
                  "Content-Type": "application/json"
                },
                body:JSON.stringify(appData)
              })
              if (response){
                const data=await response.json()
                setServerreply(data.message)
                setTimeout(() => {
                    navigate("/")
                }, 3000);
                
              }
              else{
                const errordata=await response.json();
                console.log(errordata)
              }
        }
        
        catch (error){
  console.log(error)
        }
    }
  return (
    <>
     { form && <div className='overall-create-account'>
         <form onSubmit={handlepost}>
        <h3 style={{textAlign:"center"}}>Create Account</h3>
            {
                personalData && <>
                <h6 style={{textAlign:"center"}}>Personal Information</h6>
            <label style={{width:'100%'}}>First Name
                <input onChange={updateData} name='applicantfirstName' type='text'className='form-control' placeholder='First Name'/>
            </label>
            <label style={{width:'100%'}}>Last Name
                <input onChange={updateData} name='applicantlastName' type='text'className='form-control' placeholder='Last Name'/>
            </label>
            <label style={{width:'100%'}}>Applicant National id
                <input onChange={updateData} name='applicantnationalId' type='number'className='form-control' placeholder='National Id'/>
            </label>
            <label style={{width:'100%'}}>Applicant Email Adress
                <input onChange={updateData} name='applicantemailAdress' type='email'className='form-control' placeholder='Email Adress'/>
            </label>
            <label style={{width:'100%'}}>Phone number
                <input onChange={updateData} name='applicantphoneNumber' type='number'className='form-control' placeholder='+254****'/>
            </label>
            <label style={{width:'100%'}}>Upload Id(front side)
            <input  type="file" onChange={updateData} name='applicantIdimage'/>
            </label>
            <div className='login-btn-div'>
                <button onClick={()=>{setGuardianDetails(true);setPersonalData(false);setSchooldetails(false);setPassword(false)}} className='btn btn-outline-dark'>Next</button>
            </div>
        
                </>
            }
        {
            Gurdiandetails && <>
            <h6 style={{textAlign:"center"}}>Gurdian information</h6>
            
            <label for="cars" style={{width:'100%'}}>How many parents do you have

<select onClick={updateData} name="parentsNumber" className='form-control'>
<option>---select---</option>
  <option value="one">one</option>
  <option value="two">Both</option>
  <option value="none">None</option>
</select>
</label>
<label style={{width:'100%'}}>Gurdian Name 
                <input onChange={updateData} name='gurdianName' type='text'className='form-control' placeholder='Name'/>
            </label>
            <label style={{width:'100%'}}>Gurdian National Id
                <input onChange={updateData} name='gurdianNationalid' type='number'className='form-control' placeholder='National Id'/>
            </label>
            <label style={{width:'100%'}}>Gurdian Phone number
                <input onChange={updateData} name='GurdianContact' type='number'className='form-control' placeholder='+254****'/>
            </label>
            <label for="relationship" style={{width:'100%'}}>Relationship with gurdian

<select onClick={updateData} name="Relationship" className='form-control'>
<option>---select---</option>
  <option value="Mother">Mother</option>
  <option value="Fathher">Father</option>
  <option value="other">other</option>
</select>
</label>
<label style={{width:'100%'}}>Upload Gurdian Id(front side)
            <input onChange={updateData} type="file" name="parentidimage"/>
            </label>
            <div className='login-btn-div'>
                <button onClick={()=>{setGuardianDetails(false);setPersonalData(false);setSchooldetails(true);setPassword(false)}} className='btn btn-outline-dark'>Next</button>
            </div>
            
            </>

        }
        {
            schooldetails && <>
            <h6 style={{textAlign:"center"}}>School details</h6>
            <label style={{width:'100%'}}>School Name
                <input onChange={updateData} name='Schoolname' type='text'className='form-control' placeholder='School'/>
            </label>
            <label style={{width:'100%'}}>year of admission
                <input onChange={updateData} name='yearofAdmision' type='number'className='form-control' placeholder='Year'/>
            </label>
            <label style={{width:'100%'}}>Registration number
                <input onChange={updateData} name='Regnumber' type='text'className='form-control' placeholder='Reg number'/>
            </label>
            <label style={{width:'100%'}}>Course of study
                <input onChange={updateData} name='Course' type='text'className='form-control' placeholder='Course'/>
            </label>
            <label style={{width:'100%'}}>Year of study
                <input onChange={updateData} name='yearofSturdY' type='text'className='form-control' placeholder='Year of study'/>
            </label>
            <div className='login-btn-div'>
            <button onClick={()=>{setGuardianDetails(false);setPersonalData(false);setSchooldetails(false);setPassword(true)}} className='btn btn-outline-dark'>Next</button>
            </div>
            </>
        }
        { passwordstuff &&
            <>
        <h6 style={{textAlign:"center"}}>Set Password</h6>
        { passMessage && <div class="alert alert-info">
  <strong></strong> Makesure password and confirm password matches
</div>}
{  <div class="alert alert-info">
  <strong>{serverreply}</strong> 
</div>}
        <label style={{width:"100%"}}>Password
        <input onChange={updateData} name='password' type='password'className='form-control' placeholder='password'/>
        </label>
        <label style={{width:"100%"}}> confirm Password
        <input onChange={updateData} name='confirmPassword' type='password'className='form-control' placeholder='password'/>
        </label>
        <div className='login-btn-div'>
                <button type='submit' className='btn btn-outline-dark'>Submit</button>
            </div>
            </>
        }
        </form>
        </div>}
        </>
  )
}

export default Createacc