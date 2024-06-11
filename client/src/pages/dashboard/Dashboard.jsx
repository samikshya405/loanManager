import React from "react";
import MainLayout from "../../component/layout/MainLayout";
import { Box, Grid, Typography } from "@mui/material";
import { FaHandHoldingDollar } from "react-icons/fa6";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FaCoins } from "react-icons/fa";
import LineChart from "../../component/chart/LineChart";
// import LineChart from "../../component/chart/LineChart";

const Dashboard = () => {
  return (
    <MainLayout title="Dashboard">
      <Box width={"100%"} pt={4} px={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "var(--recieved)",
                borderRadius: "10px",
                px: 2,
                py: 1,
              }}
            >
              <Box>
                <FaCoins fontSize={"35px"} color="green" />
              </Box>
              <Box>
                <Typography> Principal</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Rs 2300</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "var(--pink)",
                borderRadius: "10px",
                px: 2,
                py: 1,
              }}
            >
              <Box>
                <TrendingUpIcon sx={{ fontSize: "35px", color: "red" }} />
              </Box>
              <Box>
                <Typography> Loan Fund</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Rs 2300</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "var(--orange)",
                borderRadius: "10px",
                px: 2,
                py: 1,
              }}
            >
              <Box>
                <AttachMoneyIcon sx={{ fontSize: "35px", color: "red" }} />
              </Box>
              <Box>
                <Typography> Interest Due</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Rs 2300</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "var(--lightPink)",
                borderRadius: "10px",
                px: 2,
                py: 1,
              }}
            >
              <Box>
                <FaHandHoldingDollar fontSize={"35px"} color="green" />
              </Box>
              <Box>
                <Typography> Receivable Interest</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Rs 2300</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ p: 1, py:3 }}>
          <hr />
          <Box sx={{ textAlign: "center", p: 1 }}>
            <Typography>Available Balance: Rs 8900</Typography>
          </Box>
          <hr />
        </Box>
      <Box sx={{p:2}}>
      <LineChart/>
      </Box>
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
