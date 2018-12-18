const express = require('express');
const router = express.Router();

const karix = require('./../services/karix');
router.post('/message',async (req,res)=>{
    try{
        let {message} = req.body;
        const karixInstance =  new karix();
        const data = await karixInstance.sendMessage(process.env.KARIX_FROM_NUMBER,["+919810153260"],message);
        res.send(data);
    }catch(e){
        console.log(e);
        res.status(500).send({error:e});
    }

});
router.get('/messages',async (req,res)=>{
    try{
        const karixInstance =  new karix();
        const {page,limit} = req.query;
        const data = await karixInstance.getMessages(page,limit);
        res.send(data);
    }catch(e){
        console.log(e);
        res.status(500).send({error:e});
    }

})
module.exports = router;