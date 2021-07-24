const express=require('express');
const router=express.Router();
router.use((req,res,next)=>{
    console.log(`Admin login at ${Date.now()}`);
    next();
});

router.get("/",(req,res)=>{
    res.status(200).send("Admin Page");
});
router.get("/:name",(req,res)=>{
    res.status(200).send(`hello admin ${req.params.name}`);
});


module.exports=router;