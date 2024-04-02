const express=require('express');
const routes=express.Router();

const pool=require('./Dbconfig')

    pool.getConnection((error,connection)=>{
        if (error) throw error;
        //sql querries executed here

        routes.post('/',(req,res)=>{
            {
                //create bursary database
                let sql="CREATE DATABASE IF NOT EXISTS BursaryDB"
                pool.execute(sql,(error,result)=>{
           if(error) throw error
           console.log("database created successsfully");
                })
            }
            {
               // Assuming you have already established a connection to your MySQL database and have a 'pool' object

// Create user account table
let sql = `CREATE TABLE IF NOT EXISTS userAccounttbl (
    AppNationalId INT NOT NULL,
    AppFirstName VARCHAR(100) NOT NULL,
    AppLastName VARCHAR(100) NOT NULL,
    AppEmailAdress VARCHAR(255) NOT NULL,
    AppPhoneNumber VARCHAR(20) NOT NULL,
    AppIdImage BLOB NOT NULL,
    ParentsNumber VARCHAR(10) NOT NULL,
    GurdianName VARCHAR(30) NOT NULL,
    GurdianId INT NOT NULL,
    GurdianPhoneNumber INT NOT NULL,
    Relationship VARCHAR(60) NOT NULL,
    GurdianuploadId BLOB NOT NULL,
    SchoolName VARCHAR(255) NOT NULL,
    YearOfAdmission INT NOT NULL,
    RegNumber VARCHAR(50) NOT NULL,
    Course VARCHAR(255) NOT NULL,
    YearOfStudy VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    PRIMARY KEY (AppNationalId)
)`;

pool.execute(sql, (error, result) => {
    if (error) throw error;
    console.log("User table created");
});

            }
            {
                //create admin table
                let sql = `CREATE TABLE IF NOT EXISTS Admintbl (
                    AdminNationalId INT NOT NULL,
                    AdminFirstName VARCHAR(100) NOT NULL,
                    AdminLastName VARCHAR(100) NOT NULL,
                    Password VARCHAR(255) NOT NULL,
                    PRIMARY KEY (AdminNationalId)
                )`;
                pool.execute(sql, (error, result) => {
                    if (error) throw error;
                    console.log("Admin  table created");
                });

            }
            {
                //create table Allocation
                let sql = `CREATE TABLE IF NOT EXISTS Allocationtbl (
                    appId INT NOT NULL,
                    Family VARCHAR(20) NOT NULL,
                   allocStatus VARCHAR(40) NOT NULL,
                   allocatedAmount INT DEFAULT 0,
                    PRIMARY KEY (appId)
                )`;
                pool.execute(sql, (error, result) => {
                    if (error) throw error;
                    console.log("ALLOCATION  table created");
                });
            }
            {
            //CREATE VIEW users_display_view
                let sql = "CREATE VIEW users_display_view AS " + 
          "SELECT userAccounttbl.AppNationalId, userAccounttbl.AppFirstName, userAccounttbl.AppLastName, userAccounttbl.AppPhoneNumber, userAccounttbl.ParentsNumber, userAccounttbl.GurdianName, userAccounttbl.GurdianPhoneNumber, userAccounttbl.Relationship, userAccounttbl.SchoolName, Allocationtbl.allocStatus, Allocationtbl.allocatedAmount " +
          "FROM userAccounttbl " +
          "INNER JOIN Allocationtbl ON userAccounttbl.AppNationalId = Allocationtbl.appId;";

pool.execute(sql, (error, result) => {
    if (error) {
        if (error.errno === 1050) {
            console.log('View already exists');
        } else {
            console.error('Error creating view:', error);
        }
    } else {
        console.log('View created');
    }
});

             
            }




    //Release the connection back to the pool
connection.release();


    })









})







module.exports=routes