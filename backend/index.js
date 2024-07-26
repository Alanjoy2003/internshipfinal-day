const express=require('express')
const app=new express();
const PORT=4000;
 //connect the connection js to server file
 const cors = require('cors');
require('./connection');
const moviedata=require('./model/MovieData')

app.use(express.json());
app.use(cors())
//API endpoint fetch data from DB
app.get('/movies',async(req,res)=>{
try{
    const data=await moviedata.find();
    res.send(data);
}
catch(error){
console.log("Error occurs");
}
})

//API endpoint to post a new movie data to the DB
app.post('/new-movie',async(req,res)=>{
    try{
        var item=req.body;
        const dataitem=new moviedata(item);
        const savedata=await dataitem.save();
        res.send('Post successful');
    }
    catch(error){
            console.log(error);
    }
})


//API endpoint for deleting the movie document
app.delete('/movieremoval/:id',async(req,res)=>{
try{
await moviedata.findByIdAndDelete(req.params.id);
res.send('Deleted successfully');
}
catch(error){
    console.log(error);
}
})
//API endpoint for updating movie document
app.put('/movie-updation/:id',async(req,res)=>{
    try{
await moviedata.findByIdAndDelete(req.params.id,req.body)
res.send("Update successfully")
    }
    catch(error){
        console.log(error)
    }
})

//checking whether the srever is live or not
app.listen(PORT,()=>{
    console.log("server is running on Port Number:4000");
})