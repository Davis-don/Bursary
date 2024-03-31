import React from 'react'
import './Createacc.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function Createacc() {
    const [personalData,setPersonalData]=useState(true)
    const [Gurdiandetails,setGuardianDetails]=useState(false)
    const [schooldetails,setSchooldetails]=useState(false)
  return (
    <div className='overall-create-account'>
        <form>
        <h3 style={{textAlign:"center"}}>Create Account</h3>
            {
                personalData && <>
                <h6 style={{textAlign:"center"}}>Personal Information</h6>
            <label style={{width:'100%'}}>First Name
                <input type='text'className='form-control' placeholder='First Name'/>
            </label>
            <label style={{width:'100%'}}>Last Name
                <input type='text'className='form-control' placeholder='Last Name'/>
            </label>
            <label style={{width:'100%'}}>Applicant National id
                <input type='number'className='form-control' placeholder='National Id'/>
            </label>
            <label style={{width:'100%'}}>Applicant Email Adress
                <input type='email'className='form-control' placeholder='Email Adress'/>
            </label>
            <label style={{width:'100%'}}>Phone number
                <input type='number'className='form-control' placeholder='+254****'/>
            </label>
            <label style={{width:'100%'}}>Upload Id(front side)
            <input type="file" name="myfile"/>
            </label>
            <div className='login-btn-div'>
                <button onClick={()=>{setGuardianDetails(true);setPersonalData(false);setSchooldetails(false)}} className='btn btn-outline-dark'>Next</button>
            </div>
        
                </>
            }
        {
            Gurdiandetails && <>
            <h6 style={{textAlign:"center"}}>Gurdian information</h6>
            <form>
            <label for="cars" style={{width:'100%'}}>How many parents do you have

<select name="gurdian" className='form-control'>
  <option value="one">one</option>
  <option value="both">Both</option>
  <option value="none">None</option>
</select>
</label>
<label style={{width:'100%'}}>Gurdian Name 
                <input type='text'className='form-control' placeholder='Name'/>
            </label>
            <label style={{width:'100%'}}>Gurdian National Id
                <input type='number'className='form-control' placeholder='National Id'/>
            </label>
            <label style={{width:'100%'}}>Gurdian Phone number
                <input type='number'className='form-control' placeholder='+254****'/>
            </label>
            <label for="cars" style={{width:'100%'}}>Relationship with gurdian

<select name="relationship" className='form-control'>
  <option value="Mother">Mother</option>
  <option value="Fathher">Father</option>
  <option value="other">other</option>
</select>
</label>
<label style={{width:'100%'}}>Upload Gurdian Id(front side)
            <input type="file" name="myfile"/>
            </label>
            <div className='login-btn-div'>
                <button onClick={()=>{setGuardianDetails(false);setPersonalData(false);setSchooldetails(true)}} className='btn btn-outline-dark'>Next</button>
            </div>
            </form>
            </>

        }
        {
            schooldetails && <>
            <h6 style={{textAlign:"center"}}>School details</h6>
            <label style={{width:'100%'}}>School Name
                <input type='text'className='form-control' placeholder='School'/>
            </label>
            <label style={{width:'100%'}}>year of admission
                <input type='number'className='form-control' placeholder='Year'/>
            </label>
            <label style={{width:'100%'}}>Registration number
                <input type='text'className='form-control' placeholder='Reg number'/>
            </label>
            <label style={{width:'100%'}}>Course of study
                <input type='text'className='form-control' placeholder='Course'/>
            </label>
            <label style={{width:'100%'}}>Year of study
                <input type='text'className='form-control' placeholder='Year of study'/>
            </label>
            <div className='login-btn-div'>
                <button type='submit' className='btn btn-outline-dark'>submit</button>
            </div>
            </>
        }
        </form>
        </div>
  )
}

export default Createacc