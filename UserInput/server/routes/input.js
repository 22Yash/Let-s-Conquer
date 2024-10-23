const express = require('express');
const router = express.Router()
const Input = require('../model/inputmodel') //const varaible2 = require()


router.post('/',async (req,res)=>{
    const {name , email , contactno} = req.body;

    if(!name || !email || !contactno){
        return res.status(422).json({err:"fill all details"})
    }

    try{
        const input = new Input({name,email,contactno}) //const variable1 = new variable2({input field})
        await input.save()  //await variable1.save()
        res.status(201).json({ message: "Successfully submitted" });

    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

})



module.exports = router;
