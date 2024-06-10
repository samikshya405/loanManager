import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const navigation = [
  {
    name: "Dashboard",
    active: true,
    link:"/"
  },
  {
    name: "Recieved",
    active: false,
    link:'/recieved'
  },
  {
    name: "Given",
    active: false,
    link:'/given'
  },
  {
    name: "Paid",
    active: false,
    link:'/paid'
  },
];

const Sidebar = ({title}) => {
    const navigate = useNavigate()
    const hanldeClick=(link)=>{
        navigate(link)
      

    }
    
  return (
    <Box
      width={"250px"}
      bgcolor={"blue"}
      sx={{ display: "flex", alignItems: "center" }}
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
                bgcolor: title===item.name ? "white" : "inherit",
                color: title===item.name ? "blue" : "white",
                fontWeight: title===item.name ? "bold" : "inherit",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                cursor: "pointer",
                width: "80%",
                py: 1,
                textAlign: "center",
              }}
              onClick={()=>hanldeClick(item.link)}
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
