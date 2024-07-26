const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://allanjoy321:alan08@cluster0.4gg5dee.mongodb.net/internshipmovieDB?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
console.log('DB connected');
})
.catch((res)=>{
    console.log('DB is not connected');
})