const express=require('express')
const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const cors = require('cors'); 
app.use(cors());

const startsystem=require('./Systeminit')
app.use('/Start/system',startsystem)
const createAccount=require('./Createaccount')
app.use('/create/account',createAccount)
const Login=require('./Login')
app.use("/Login/account",Login)
const allocate=require('./Allocation')
app.use('/allocate',allocate);


app.listen(4000,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('listening on port 4000')
    }
})