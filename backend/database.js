const mongoose =require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://Narendra2005:root@cluster0.9sc1wnx.mongodb.net/crud-live?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('database connect successfully')

    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbConn;