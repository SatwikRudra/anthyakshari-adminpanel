const express=require('express');
const app=express();
const path=require('path');

//routes
app.set("view engine","hbs");

app.use('/',require('./routes/pages'));

const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory))


app.listen(5005,()=>{

    console.log("port is running on 5005");

}) 




