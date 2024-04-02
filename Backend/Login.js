const express=require('express');
const routes=express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
let nationalidentity;

const pool=require('./Dbconfig')

    pool.getConnection((error,connection)=>{
        if (error) throw error;
        //sql querries executed here

routes.post("/",(req,res)=>{
    const {nationalId,password}=req.body
    {
        //check whether the user is in database
        sql = 'SELECT * FROM useraccounttbl WHERE AppNationalId = ? AND Password = ?'
        pool.execute(sql,[nationalId, password], (error, result) => {
        if (error) throw error
        if(result[0]==undefined){
            {
                //check in admin table here
            let sql="SELECT * FROM  admintbl WHERE AdminNationalId =" +  "'" + nationalId + "'";
            pool.execute(sql,(error,result)=>{
                if(error) throw error
                if(result[0]==undefined){
                res.status(400).json({message:"Please check on your crediantials or create account"})
                }
                else{
                    const token = jwt.sign({ nationalId: result[0].AppNationalId }, process.env.JWT_SECRET,);
                    const returnData={
                        user:"ADMIN",
                        token
                    }
                    return res.json(returnData);
    //   return res.json({ token });
                }
            })

           
            }
        }
        else{
             // User found, generate JWT token
      const token = jwt.sign({ nationalId: result[0].AppNationalId }, process.env.JWT_SECRET,);
      const returnData={
        user:"applicant",
        token
    }
    return res.json(returnData);
    //   return res.json({ token });
        }
        
     })   
    }
})
const Authenticateuser=(req,res,next)=>{
    const authToken=req.headers['authorization']
    const token=authToken && authToken.split(' ')[1]
    if(token == null) res.sendStatus(400)
    console.log(authToken)
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.error('JWT Verification Error:', err.message);
          // Handle error as needed
        } else {
          // Token is valid, proceed with decoding
          //console.log('Decoded JWT:', decoded);
          nationalidentity=decoded.nationalId;
          next();
    }
      });
    
 }
routes.get('/dashboard/applicant',Authenticateuser,(req,res)=>{
    {
        //get data from allocation table
        let sql="SELECT * FROM  allocationtbl WHERE appId =" +  "'" + nationalidentity + "'";
        pool.execute(sql,(error,result)=>{
            if (error) throw error
            if(result[0]==undefined){
                

            }
            else{
                {
                    //get dashboard data
                    let sql="SELECT * FROM  useraccounttbl WHERE AppNationalId =" +  "'" + nationalidentity + "'";
                    pool.execute(sql,(error,result)=>{
                        if (error) throw error
                        {
                            //get data fron allocation table
                            let sql="SELECT * FROM  allocationtbl WHERE appId =" +  "'" + nationalidentity + "'";
                            pool.execute(sql,(error,data)=>{
                                if(error) throw error

                                const userDashData={
                                    user:"applicant",
                                 Allocation:data[0].allocStatus,
                                 result:result  
                                }
                                res.status(200).json(userDashData);

                            })
                        }
                        
                        
                    })  
                }
            }
            
        })  
    }
    
    
    
    
})
routes.get('/dashboard/admin',Authenticateuser,(req,res)=>{
    {
        //get all data from view
        let sql="SELECT * FROM users_display_view;"
        pool.query(sql,(error,result)=>{
            if (error) throw error
            const allData={
                user:"ADMIN",
                result
            }
            res.status(200).json(allData);
          
        })
    }
    
      
})







         //Release the connection back to the pool
connection.release();
    })

    module.exports=routes