const express=require('express');

const app=express();


//application level setting

app.set('view engine','ejs');

//routing

app.get('/',(req,res)=>{
res.send('home page ');
})


app.post('/api/data',(res,req)=>{
    res.json({
        message:'Data recived',
        data:req.body
    })

})


app.use((err,req,res)=>{
    console.log(err)
    res.status(500).send('somting want wrong')
})