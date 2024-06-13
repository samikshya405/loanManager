import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FaCoins } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { logout } from "../../axios/axiosHelper";
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

const Sidebar = ({ title }) => {
  const navigate = useNavigate();
  const hanldeClick = (link) => {
    navigate(link);
  };
  const handleLogout = () => {
    
    logout();
    navigate('/login');
    
  };
  return (
    <Box
      width={"20%"}
      className="sidemenu"
      bgcolor={"var(--blue)"}
      sx={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        height: "100vh",
      }}
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                gap: "10px",
              }}
              onClick={() => hanldeClick(item.link)}
            >
              <item.icon style={{ fontSize: "25px" }} />{" "}
              <span className="menu">{item.name}</span>
            </Box>
          );
        })}
        <Box
          sx={{
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
           
            cursor: "pointer",
            width: "80%",
            gap: "10px",
            color: "white",
           
         
          }}
          onClick={handleLogout}
        >
          <PowerSettingsNewIcon style={{ fontSize: "25px" }} /> Logout
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
