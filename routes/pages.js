const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.render("index")
})
router.get('/users',(req,res)=>{
    res.render("users")
})
module.exports=router;