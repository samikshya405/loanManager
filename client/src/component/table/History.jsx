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
import EditIcon from "@mui/icons-material/Edit";
import Edit from "@mui/icons-material/Edit";

export default function History() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };
  return (
    <TableContainer component={Paper} sx={{ mb: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Loan Funds
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Interest Type
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Interest Rate
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Interest Paid
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Payment Type
            </TableCell>

            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center">04/06/2024</TableCell>

            <TableCell align="center">- Rs 2000</TableCell>
            <TableCell align="center">P.D</TableCell>
            <TableCell align="center">Rs 200</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Nabil Bank</TableCell>
            <TableCell align="center">
              <Edit sx={{ color: "blue", cursor: "pointer" }} />
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center">04/06/2024</TableCell>

            <TableCell align="center">+ Rs 2000</TableCell>
            <TableCell align="center">P.D</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center" sx={{ color: "green" }}>
              {" "}
              + Rs 200
            </TableCell>
            <TableCell align="center">Nabil Bank</TableCell>
            <TableCell align="center">
              <Edit sx={{ color: "blue", cursor: "pointer" }} />
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center">04/06/2024</TableCell>

            <TableCell align="center">+ Rs 2000</TableCell>
            <TableCell align="center">P.D</TableCell>
            <TableCell align="center"></TableCell>
            
            <TableCell align="center" sx={{ color: "green" }}>
              {" "}
              + Rs 200
            </TableCell>
            <TableCell align="center">Cash</TableCell>
            <TableCell align="center">
              <Edit sx={{ color: "blue", cursor: "pointer" }} />
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center">04/06/2024</TableCell>

            <TableCell align="center">+ Rs 2000</TableCell>
            <TableCell align="center">P.D</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center" sx={{ color: "green" }}>
              {" "}
              + Rs 200
            </TableCell>
            <TableCell align="center">Nabil Bank</TableCell>
            <TableCell align="center">
              <Edit sx={{ color: "blue", cursor: "pointer" }} />
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <TableCell align="center">Samikshya</TableCell>
            <TableCell align="center">04/06/2024</TableCell>

            <TableCell align="center">- Rs 2000</TableCell>
            <TableCell align="center">P.A</TableCell>
            <TableCell align="center">20%</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Cash</TableCell>
            <TableCell align="center">
              <Edit sx={{ color: "blue", cursor: "pointer" }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
