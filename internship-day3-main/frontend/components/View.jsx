import{Button, Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from'axios';
import { useNavigate } from 'react-router-dom';
 
//const rows={"MovieName":"kilukkam","category":"comedy","MovieDirector":"abc","ReleaseYear":"2002"},
          // {"MovieName":"punjabi house","category":"comedy","MovieDirector":"abc","ReleaseYear":"2005"},
       //  {"MovieName":"cid moosa","category":"comedy","MovieDirector":"abc","ReleaseYear":"2007"}
const View = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/movies').then((res)=>{
      //console.log(res);
      setRows(res.data);
    })
  },[])
  let deleteMovie=(p)=>{
    axios.delete('http://localhost:4000/movieremoval/'+p)
    .then((res)=>{
      alert('Deleted')
      window.location.reload()
    })
.catch((error)=>{
alert(error)
    })
}

var navigate=useNavigate();
let updateMovie=(movie)=>{
  navigate('/add',{state:{movie}})
}
 
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>MovieName</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Movie Director</TableCell>
            <TableCell align="right">Release Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.movieName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row. movieName}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.movieDirector}</TableCell>
              <TableCell align="right">{row.releaseYear}</TableCell>
              <TableCell align="right"><Button variant="contained" color="secondary"
              onClick={()=>{updateMovie(row)}}>Edit</Button></TableCell>
              <TableCell align="right"><Button variant="contained" color="error"
              onClick={()=>{deleteMovie(row._id)}}>Delete</Button></TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    
  
export default View