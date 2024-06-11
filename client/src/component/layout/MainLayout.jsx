import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ title, children }) => {
  return (
    <Box
      minHeight={"100vh"}
      bgcolor={"var(--secondary)"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box  bgcolor={"white"} width={"100%"} display={"flex"}>
        <Sidebar title={title} />
        <Box width={"calc(100% - 250px)"} minHeight={"100vh"} >
          {/* <Typography sx={{ fontWeight: "bold", p: 1, fontSize: "20px" }}>
            {title}
          </Typography> */}
          <Box height="calc(100% - 36px)" >{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
