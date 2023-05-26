const express= require('express');
const Student=require("./models/students"); 
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello to the mainpage Hi");
})
app.post('/students',async(req,res)=>{
    try{
    const user=new Student(req.body);
    const result = await user.save();
    res.status(201).send(user);
    }catch(err)
    {res.status(400).send(err)}
})
app.get('/students',async(req,res)=>{
    try{
        const result=await Student.find();
        res.status(200).send(result);
    }
    catch{
        res.send(404).send(err);
    }

})
app.get('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await Student.findById(_id);
      
        if(!result)
        {
            console.log(result);   
            res.status(404).send();
        }
        else 
        res.send(result);
    }
    catch(err){
        res.status(500).send(err);
    }

})
app.listen(8000,()=>{
    console.log("listening");
});