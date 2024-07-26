import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const Add = () => {
 // const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
   "movieName":'',
   "category":'',
   "movieDirector":'',
   "releaseYear":''
  })
let postData=()=>{

  if(location.state!=null) {
    axios.put('http://localhost:4000/movie-updation/'+location.state.movie._id,form)
    .then((res)=>{
      alert('Data updated');
      Navigate('/')
    }).catch((error)=>{
console.log(error);
    })
  }
  else{
  // console.log(form);
  axios.post('http://localhost:4000/new-movie',form).then((res)=>{
    alert('Movie data posted')  
    })
  }}
  // let valueAdd=()=>{
  //   setCounter(counter+1);
  // } 

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})

  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Movie Name"
        defaultValue="Name"
        name='movieName'
        value={form.movieName}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="Category"
        defaultValue="Category"
        name="category"
        value={form.category}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="Movie Director"
        defaultValue="movieDirector"
        name="movieDirector"
        value={form.movieDirector}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="Release Year"
        defaultValue="Year"
        name="releaseYear"
        value={form.releaseYear}
        onChange={valueCap}
      />
      <br/>
      <Button variant="contained" color="success" onClick={postData}>
 Submit
</Button>
<br/>
{/* <small>Button clicked {counter} time(s).</small> */}
         </div>
         </Box>
  )
}

export default Add