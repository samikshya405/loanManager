import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function PeoplesTable() {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/profile')

    }
   
   
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Principal
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Loan Funds
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Interest Due
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Receivable Interest
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } , cursor:"pointer"}} onClick={()=>handleClick()}>
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center" sx={{color:"orange"}}>Rs 4500</TableCell>
            
            <TableCell align="center" sx={{color:"blue"}}></TableCell>
            <TableCell align="center" sx={{color:"red"}}>Rs 500</TableCell>
            <TableCell align="center" sx={{color:"green"}}></TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor:"pointer" }} onClick={handleClick}>
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center" sx={{color:"orange"}}></TableCell>
            
            <TableCell align="center" sx={{color:"blue"}}>Rs 4500</TableCell>
            <TableCell align="center" sx={{color:"red"}}></TableCell>
            <TableCell align="center" sx={{color:"green"}}>Rs 500</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor:"pointer" }} onClick={handleClick}>
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center" sx={{color:"orange"}}></TableCell>
            
            <TableCell align="center" sx={{color:"blue"}}>Rs 4500</TableCell>
            <TableCell align="center" sx={{color:"red"}}></TableCell>
            <TableCell align="center" sx={{color:"green"}}>Rs 500</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor:"pointer" }} onClick={handleClick}>
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center" sx={{color:"orange"}}></TableCell>
            
            <TableCell align="center" sx={{color:"blue"}}>Rs 4500</TableCell>
            <TableCell align="center" sx={{color:"red"}}></TableCell>
            <TableCell align="center" sx={{color:"green"}}>Rs 500</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor:"pointer" }} onClick={handleClick}>
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center" sx={{color:"orange"}}>Rs 4500</TableCell>
            
            <TableCell align="center" sx={{color:"blue"}}></TableCell>
            <TableCell align="center" sx={{color:"red"}}>Rs 500</TableCell>
            <TableCell align="center" sx={{color:"green"}}></TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor:"pointer" }} onClick={handleClick}>
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center" sx={{color:"orange"}}>Rs 4500</TableCell>
            
            <TableCell align="center" sx={{color:"blue"}}></TableCell>
            <TableCell align="center" sx={{color:"red"}}>Rs 500</TableCell>
            <TableCell align="center" sx={{color:"green"}}></TableCell>
          </TableRow>
          
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
