const express=require('express');
const routes=express.Router();

const pool=require('./Dbconfig')

pool.getConnection((error,connection)=>{
    if (error) throw error;
    //sql querries executed here
// Route to handle POST requests
routes.post('', (req, res) => {
    const {
      applicantfirstName,
      applicantlastName,
      applicantnationalId,
      applicantemailAdress,
      applicantphoneNumber,
      applicantIdimage,
      parentsNumber,
      gurdianName,
      GurdianContact,
      Relationship,
      parentidimage,
      Schoolname,
      yearofAdmision,
      Regnumber,
      Course,
      yearofSturdY,
      password
    } = req.body;
    const userData=req.body;
  
    // SQL query to insert data into the table
    const sql = `INSERT INTO userAccounttbl 
    (AppNationalId,AppFirstName, AppLastName, AppEmailAdress, 
        AppPhoneNumber, AppIdImage, parentsNumber,gurdianName,GurdianId,GurdianPhoneNumber, 
    Relationship, GurdianuploadId, Schoolname, YearOfAdmission, Regnumber, Course, 
    YearOfStudy, password) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let values = [
        userData.applicantnationalId,
        userData.applicantfirstName,
        userData.applicantlastName,
        userData.applicantemailAdress,
        userData.applicantphoneNumber,
        userData.applicantIdimage,
        userData.parentsNumber,
        userData.gurdianName,
        userData.gurdianNationalid,
        userData.GurdianContact,
        userData.Relationship,
        userData.parentidimage,
       userData.Schoolname,
       userData.yearofAdmision,
        userData.Regnumber,
        userData.Course,
        userData.yearofSturdY,
        userData.password
    ];
    
    pool.query(sql,values, (error, results) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({message:"You incurred some error when creating your account.Please recheck"})
        return;
      }
      {
        // INSERT INTO ALLOCATION TABLE
let sql = "INSERT INTO allocationtbl (appId,Family, allocStatus) VALUES (?, ?, ?)";
let values = [applicantnationalId,parentsNumber,'pending']; // Using parameterized query to prevent SQL injection

pool.query(sql, values, (error, result) => {
  if (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'An error occurred while inserting data.' });
  } else {
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Account Created successfully you can now login using National Id and Password" });
  }
});

      }
      // {
      //   //iNSERT INTO ALLOCATION TABLE
      //   let sql="INSERT INTO allocationtbl (appId,allocStatus)" + 
      //   "VALUES(" + "'" + applicantnationalId + "', pending" + ")";
      //   pool.query(sql,(error,result)=>{
      //     if(error) throw error
      //     else{
      //       console.log("Data inserted successfully");
      //       res.status(200).json({message:"Account Created successfully you can now login using National Id and Password"})
      //     }
      //   })
      // }
    
    });
  });
















    //Release the connection back to the pool
connection.release();
})



module.exports=routes;

