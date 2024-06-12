import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";

const MainLayout = ({ title, children }) => {
  return (
    <Box
      minHeight={"100vh"}
      position={"relative"}
      bgcolor={"var(--secondary)"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box  bgcolor={"white"} width={"100%"} display={"flex"}>
        <Sidebar title={title} />
        <Box className="main" width={"calc(100% - 20%)"}  minHeight={"100vh"} >
          {/* <Typography sx={{ fontWeight: "bold", p: 1, fontSize: "20px" }}>
            {title}
          </Typography> */}
          <Box height="calc(100% - 36px)" >{children}</Box>
        </Box>
      </Box>
      <Box height={"5vh"} width={"100%"} position={"absolute"} bottom={0} sx={{position:"fixed"}}>
      <BottomBar/>

      </Box>
      
    </Box>
  );
};

export default MainLayout;
