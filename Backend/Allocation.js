const express=require('express');
const routes=express.Router();

const pool=require('./Dbconfig')
pool.getConnection((error,connection)=>{
    if (error) throw error;
    //execute querries here
    routes.post('/accept',(req,res)=>{
        const {applicantId}=req.body
        {
            //update status
            let sql="UPDATE allocationtbl SET allocStatus = 'Allocated' " +
             "WHERE appId = " + "'" + applicantId + "'";
             pool.query(sql,(error,result)=>{
            if(error) throw error
            res.status(200).json({message:"Allocated successfully"})
             })
        }
        console.log("accept")
    })
    routes.post('/reject',(req,res)=>{
        const {applicantId}=req.body
        {
            
        }
        {
            //update status
            let sql="UPDATE allocationtbl SET allocStatus = 'Denied' " + 
             "WHERE appId = " + "'" + applicantId + "'";
             pool.query(sql,(error,result)=>{
            if(error) throw error
            
            res.status(200).json({message:"Allocation denied successsfully"})
             })
        }
        
        console.log('reject')
    })

})


module.exports=routes



