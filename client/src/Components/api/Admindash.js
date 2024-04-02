
import React from 'react'
import axios from 'axios';
import './Dashboard.css'
import { IoMenuOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoMdClose } from "react-icons/io";
import { useState,useEffect } from 'react';
import { ImStatsBars } from "react-icons/im";
import './Admindash.css'

function Dashboardadmin() {
  let [myData, setMyData] = useState(null);
    const [sidebar,setSidebar]=useState(false);
    const [dash,setDash]=useState(true);
    const [reserve,setReserve]=useState(false);
    const [Loading,setLoading]=useState(true)
    const token = localStorage.getItem('token');
    const [userCred,setuserCred]=useState("")
    const [serverMessage,setServermsg]=useState("")
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          
          const response = await axios.get('http://localhost:4000/Login/account/dashboard/admin', {
            headers: {
              Authorization: token
            }
          });
          
            if (response.data.user === "applicant") {
              setMyData(response.data);
              setLoading(false);
            } 
             else if(response.data.user === "admin"){
              setMyData(response.data);
               setLoading(false);
               //console.log(myData.result)
             }
            else{
              
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
    //console.log(myData.result)
    let Message;

    
  




//     const renderUsers = () => {
//       const userRows = []; // Array to hold JSX for table rows
  
//       // Iterate over the users array using a for loop
      
//       for (let i = 0; i < myData.result.length; i++) {
//         const user = myData.result[i];
        
//         if(user.Family=="none"){
//           Message="95%"
//               }
//               else if(user.Family=="one"){
//                 Message="65%"
//               }
//               else{
//                 Message="35%"
//               }

// const handleAccept=async (e)=>{
//   e.preventDefault();
//   console.log(user.AppNationalId)
//   const userIdentiy={
//     applicantId:user.AppNationalId
//   }
//   try{
//   let response=await fetch("http://localhost:4000/allocate/accept",{
//    method:"POST",
//    headers:{
//     "content-type":"application/json"
//    },
//     body:JSON.stringify(userIdentiy)
//    })
//    if(response){
//     const data=await response.json();
//     setServermsg(data.message)
//    }
//    else{
// const errrdata=await response.json();
// console.log(errrdata)
//    }
//   }
//   catch (error){
//     console.log(error)
//   }
// }

// const handleDeny=async (e)=>{
//   e.preventDefault();
//   console.log(user.appId)
//   const userIdentiy={
//     applicantId:user.appId
//   }
//   try{
//   let response=await fetch("http://localhost:4000/allocate/reject",{
//    method:"POST",
//    headers:{
//     "content-type":"application/json"
//    },
//     body:JSON.stringify(userIdentiy)
//    })
//    if(response){
//     const data=await response.json();
//     setServermsg(data.message)
//    }
//    else{
// const errrdata=await response.json();
// console.log(errrdata)
//    }
//   }
//   catch (error){
//     console.log(error)
//   }
// }
    
//         userRows.push(
//           <tr key={user.appId}>
//             <td className='text-dark'>{user.AppNationalId}</td>
//             <td className='text-dark'>{user.allocStatus}</td>
//             <td className='text-warning'>{Message}</td>
//             <td><button className='btn btn-outline-success btn-sm'onClick={handleAccept}>Accept</button>
//             <button className='btn btn-outline-danger btn-sm' onClick={handleDeny}>Reject</button>
//             </td>
//             {/* Render more columns as needed */}
            
//           </tr>
//         );
//       }
  
//       return userRows; // Return the array of table rows
//     };
    
   
    
  return (
    <>{Loading ? <h1>LOADING</h1> :
    <div className='overall-dashboard-container'>
        
        <header className='dashboard-header'>
       <div className='logo-company-name'>
        <p className='dashboard-logo-title text-light'>Bursary</p>
       </div>
       <div className='menu-bar-dashboard'>
       <IoMenuOutline className='fs-1 text-light' onClick={()=>setSidebar(true)}/>
       </div>
        </header>
        { dash && <>
        <div className='dashboard-body'>
        <h4 className='text-light'>ADMIN Dashboard</h4>
        <div className='overall-dash-card-holders'>
          <div className='dash-div bg-info'>
            <div className='items-text-card'>
            <div className='item-no-value'><ImStatsBars /></div>
              <h3>Applications</h3>
              <div className='item-no-value'>40</div>
            </div>
          </div>
          <div className='dash-div bg-warning'>
            <div className='items-text-card'>
            <div className='item-no-value'><ImStatsBars /></div>
              <h3>pending</h3>
              <div className='item-no-value'>40</div>
            </div>
          </div>
          <div className='dash-div bg-success'>
            <div className='items-text-card'>
            <div className='item-no-value'><ImStatsBars /></div>
              <h3>Approved</h3>
              <div className='item-no-value'>40</div>
            </div>
          </div>
          <div className='dash-div bg-danger'>
            <div className='items-text-card'>
            <div className='item-no-value'><ImStatsBars /></div>
              <h3>Rejected</h3>
              <div className='item-no-value'>40</div>
            </div>
          </div>
        </div>
        <div>
        </div>
{/*       
        <div>
      <div className='Bursary-approve'>
      <p className='text-danger'>{serverMessage}</p>
      <table className='table-approve'>
        <thead>
          <tr>
            <th className='text-dark'>ID</th>
            <th className='text-dark'>Status</th>
            <th className='text-dark'>% Allocation</th>
            <th className='text-dark'>Disbursement</th>
          
          </tr>
        </thead>
        <tbody>
          {renderUsers()} 
        </tbody>
      </table>
    </div>
    </div>
 */}

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
            <li onClick={()=>{setDash(false);setReserve(true);setSidebar(false)}}>Bursary Alocation tools</li>
            <li onClick={()=>{setDash(false);setReserve(true);setSidebar(false)}}>Student information</li>
            <li onClick={()=>{setDash(false);setReserve(true);setSidebar(false)}}>Make Reservation</li>
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

export default Dashboardadmin
