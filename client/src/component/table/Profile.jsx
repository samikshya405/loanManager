import React from "react";
import MainLayout from "../layout/MainLayout";

import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import History from "./History";

const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/people");
  };
  return (
    <MainLayout title="People">
      <Box sx={{ px: 2 }}>
        <Box>
          <Button
            variant="contained"
            style={{ color: "black", background: "white" }}
            onClick={handleBack}
          >
            <ArrowBackIcon />
            Go Back
          </Button>
        </Box>
        <Paper sx={{ p: 3, my: 3 }}>
          <Box sx={{ display: "flex", py: 1 }}>
            <Box sx={{ width: "30%", fontWeight: "bold" }}> Name</Box>
            <Box sx={{ width: "70%" }}>Samikshya kharel </Box>
          </Box>
          <hr />

          <Box sx={{ display: "flex", py: 1 }}>
            <Box sx={{ width: "30%", fontWeight: "bold" }}>Phone</Box>
            <Box sx={{ width: "70%" }}> 045637347843</Box>
          </Box>
          <hr />
          <Box sx={{ display: "flex", py: 1 }}>
            <Box sx={{ width: "30%", fontWeight: "bold" }}>Address</Box>
            <Box sx={{ width: "70%" }}>kerr parade, Auburn</Box>
          </Box>
          <hr />
          <Box sx={{ display: "flex", py: 1 }}>
            <Box sx={{ width: "30%", fontWeight: "bold" }}>
              Citizenship Number
            </Box>
            <Box sx={{ width: "70%" }}>123456</Box>
          </Box>
          <hr />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            style={{ background: "var(--blue)" }}
          >
            Edit
          </Button>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: "bold", color: "blue" }}>
                Daily Interest Plan
              </Typography>
              <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ width: "40%", fontWeight: "bold" }}>Loan Funds</Box>
                <Box sx={{ width: "60%" }}>Rs 2400</Box>
              </Box>
              <hr />
              <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ width: "40%", fontWeight: "bold" }}>
                  Interest Rate
                </Box>
                <Box sx={{ width: "60%" }}>Rs 2000</Box>
              </Box>
              <hr />
              <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ width: "40%", fontWeight: "bold" }}>
                  Receivable Interest
                </Box>
                <Box sx={{ width: "60%" }}>Rs 4500</Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Paper sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: "bold", color: "blue" }}>
                Yearly Interest Plan
              </Typography>
              <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ width: "40%", fontWeight: "bold" }}>Loan Funds</Box>
                <Box sx={{ width: "60%" }}>Rs 2400</Box>
              </Box>
              <hr />
              <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ width: "40%", fontWeight: "bold" }}>
                  Interest Rate
                </Box>
                <Box sx={{ width: "60%" }}>20% P. A</Box>
              </Box>
              <hr />
              <Box sx={{ display: "flex", py: 1 }}>
                <Box sx={{ width: "40%", fontWeight: "bold" }}>
                  Receivable Interest
                </Box>
                <Box sx={{ width: "60%" }}>Rs 4500</Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          sx={{
            py: 2,
            fontWeight: "bold",
            color: "var(--blue)",
            fontSize: "22px",
          }}
        >
          Transaction
        </Typography>
        <History/>
      </Box>
    </MainLayout>
  );
};

export default Profile;
