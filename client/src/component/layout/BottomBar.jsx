import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FaCoins } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
const navigation = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    link: "/",
  },
  {
    name: "Recieved",
    icon: FaHandHoldingDollar,
    link: "/recieved",
  },
  {
    name: "Given",
    icon: TrendingUpIcon,
    link: "/given",
  },
  {
    name: "Paid",
    icon: AttachMoneyIcon,
    link: "/paid",
  },
  {
    name: "People",
    icon: PeopleIcon,
    link: "/people",
  },
];

const BottomBar = ({ title }) => {
  const navigate = useNavigate();
  const hanldeClick = (link) => {
    navigate(link);
  };

  return (
    // <Box
    //   width={"20%"}
    //   className="bottomMenu"
    //   bgcolor={"var(--blue)"}
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     position: "sticky",
    //     top: 0,
    //     left: 0,
    //     height: "100vh",
    //   }}
    // >
    <Box
      className="bottomMenu"
      sx={{
        width: "100%",
        display: "flex",
        height: "5vh",
        bgcolor: "var(--blue)",
        //   flexDirection: "column",
        //   gap: "70px",
        justifyContent: "space-between",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              gap: "10px",
            }}
            onClick={() => hanldeClick(item.link)}
          >
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <item.icon style={{ fontSize: "25px" }} />
              <span style={{fontSize:"8px"}}>{item.name}</span>
            </Box>
          </Box>
        );
      })}
    </Box>
    // </Box>
  );
};

export default BottomBar;
