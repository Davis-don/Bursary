
import React from 'react'
import axios from 'axios';
import './Dashboard.css'
import { IoMenuOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoMdClose } from "react-icons/io";
import { useState,useEffect } from 'react';

function Dashboard() {
  let [myData, setMyData] = useState(null);
    const [sidebar,setSidebar]=useState(false);
    const [dash,setDash]=useState(true);
    const [reserve,setReserve]=useState(false);
    const [Loading,setLoading]=useState(true)
    const token = localStorage.getItem('token');
    const [userCred,setuserCred]=useState("")
    


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/Login/account/dashboard/applicant', {
            headers: {
              Authorization: token
            }
          });
            if (response.data.user === "applicant") {
              setMyData(response.data);
              setLoading(false);
            } else {
              console.log("User is not an applicant:", response.data);
              setLoading(false);
            }
           
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
    
      fetchData();
    }, [token]); // Make sure to include all dependencies here
    
  return (
    <>{Loading ? <h1>LOADING</h1> :
    <div className='overall-dashboard-container'>
        
        <header className='dashboard-header'>
       <div className='logo-company-name'>
        <p className='dashboard-logo-title text-light'>Bursary</p>
       </div>
        </header>
        { dash && <>
        <div className='dashboard-body'>
        <h4 className='text-light'>Dashboard</h4>
        <div className='dashboard-card-holders'>
            <div className='card dashboard-card'>
         <p>Welcome back </p>
         <h3>{myData.result[0].AppFirstName + " " + myData.result[0].AppLastName}</h3>
         <div className='message-container text-light'>
            <p className='text-dark'>Your Bursary application status is <span className='text-danger'>{myData.Allocation}</span></p>
         </div>
            </div>
        </div>
        </div>
        </>
}
{
   reserve &&  <>
    <div className='dashboard-body'>
    <h4 className='text-light'>Reserve</h4>
    <div className='dashboard-card-holders'>
            <div className='card dashboard-card-reservation'>
         <form>
         <h3 style={{textAlign:"center"}}>Make reservations</h3>
            <label style={{width:'100%'}}>Number of reservation
                <input type='number'className='form-control' placeholder='Number of reservations'/>
            </label>
            <label style={{width:'100%'}}>Date
                <input type='date'className='form-control'placeholder='Date'/>
            </label>
            <div className='login-btn-div'>
                <button className='btn btn-outline-dark'>Submit</button>
            </div>
            </form>
            </div>
        </div>
    </div>
    </>
}
        { sidebar && <div className='dasboard-sidebar'>
        <IoMdClose className='fs-1' onClick={()=>setSidebar(false)}/>
            <h3 style={{textAlign:"center"}}>Menu</h3>
            <ul className='list-unstyled reservation-ul'>
                <li onClick={()=>{setDash(true);setReserve(false);setSidebar(false)}}>Dashboard</li>
            <li onClick={()=>{setDash(false);setReserve(true);setSidebar(false)}}>Make Reservation</li>
            </ul>
        </div>
}
        <footer className='dashboard-footer'>

        </footer>
    

        <>

        </>
        </div>}
        </>
  )
}

export default Dashboard