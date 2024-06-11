import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const navigation = [
  {
    name: "Dashboard",

    link: "/",
  },
  {
    name: "Recieved",

    link: "/recieved",
  },
  {
    name: "Given",

    link: "/given",
  },
  {
    name: "Paid",

    link: "/paid",
  },
  {
    name: "People",
    link: "/people",
  },
];

const Sidebar = ({ title }) => {
  const navigate = useNavigate();
  const hanldeClick = (link) => {
    navigate(link);
  };

  return (
    <Box
      width={"250px"}
      bgcolor={"var(--blue)"}
      sx={{ display: "flex", alignItems: "center", position:"sticky", top:0, left:0, height:"100vh" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        {navigation.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                bgcolor: title === item.name ? "white" : "inherit",
                color: title === item.name ? "blue" : "white",
                fontWeight: "bold",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                cursor: "pointer",
                width: "80%",
                py: 1,
                textAlign: "center",
              }}
              onClick={() => hanldeClick(item.link)}
            >
              {item.name}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
