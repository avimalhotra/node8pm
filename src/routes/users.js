const express=require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("User Page");
});
router.get("/:username",(req,res)=>{
    res.status(200).send(`hello user ${req.params.username}`);
});


module.exports=router;