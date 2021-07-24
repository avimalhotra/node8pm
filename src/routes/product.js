const express=require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Product Page");
});
router.get("/:brand",(req,res)=>{
    res.status(200).send(` ${req.params.brand} Products page`);
});
router.get("/:brand/:product",(req,res)=>{
    res.status(200).send(` ${req.params.product} of ${req.params.brand} on  Products page`);
});

module.exports=router;