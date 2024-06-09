import { Box } from "@mui/material";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Box
      height={"100vh"}
      bgcolor={"var(--secondary)"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box minHeight={"80vh"} bgcolor={"white"} width={"80%"}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
