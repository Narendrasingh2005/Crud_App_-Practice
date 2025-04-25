const express = require('express')
const cors = require('cors')
const axios = require('axios')
const database=require('./database');
const student=require('./studentmodel');
const fs= require('fs/promises')
const app = express()
let users =[];
database();
app.use(express.json())
app.use(cors())
// const readdata=async ()=>{
//     users=JSON.parse(await fs.readFile('./data.json','utf8'))
// }
// const writedata=async ()=>{
//    await fs.writeFile('./data.json',JSON.stringify(users))
// }
// readdata();
app.get('/users', async (req, res) => {
    // res.json(users);
    try{
        res.status(200).json(await student.find());
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
app.post('/users',async(req,res)=>{
    try{
        const sdata=req.body;
        let id=parseInt(Math.random()*1000);
        sdata.id=id;
        await student.create(sdata);
        res.status(200).json({message:"data add successfully"});
    }catch(err){
        res.status(500).json({message:err.message})
    }
    
})
app.put('/users/:id/',async(req,res) => {

    const uid = req.params.id;
    const {name,age} = req.body;
    const data = await student.findOne({id:uid});

    if(data == null)
    {
        res.json({message:"Update is not possible"});
    }
    await data.updateOne({name:name,age:age});
    res.json({message:"Updation is successfull!!!!"});
})

app.delete('/users/:id', async(req,res) => {
    const uid = req.params.id;
    const data = await student.findOne({id:uid});
    if(data == null)
    {
        res.json({message:"ID is not found"});
    }
    console.log(data);
    await data.deleteOne();
    res.json({message:"Data delete successfully"});
    

})
app.listen(9000,()=>{
    console.log('Server is running on port 9000')
});