
const path=require('path');
const express= require('express');
console.log(__dirname);
const staticPath=path.join(__dirname,"../public");
const app=express();
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send("yes");
})
app.listen(3000,()=>{
    console.log("LISTENING");
})