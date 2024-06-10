import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({title, children }) => {
  return (
    <Box
      height={"100vh"}
      bgcolor={"var(--secondary)"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box minHeight={"80vh"} bgcolor={"white"} width={"80%"} display={"flex"}>
        <Sidebar title={title} />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
