import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import CustomInput from "../component/auth/CustomInput";
// import loginBg from "../../assets/image/loginBg.png";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { CustomInput, CustomSelect } from "../../component/auth/CustomInput";
// import { fetchUserInfo, userLogin } from "../../utils/axiosHelper";
// import { toast } from "react-toastify";
import loan from '../../assets/image/loan.webp'
import bg from '../../assets/image/trans.png'
import { useNavigate } from "react-router-dom";
const inputs = [
 
  {
    name: "email",
    label: "Email",
    id: "email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    id: "password",
    type: "password",
  },
];
const initialState = {
  department: "",
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setformData] = useState(initialState);
  const navigate = useNavigate();
  const [isInValid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsInvalid(false);

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <Box padding={3}>
      
      <Grid container height="100vh" alignItems="center" spacing={5}>
        <Grid item sx={{display:"flex", justifyContent:"center", alignItems:"center"}} md={5} lg={6}>
          <img src={bg} alt="hospital image"  />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={6}>
          <Typography align="center" component="h1" variant="h5">
            Log in
          </Typography>

          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            {isInValid && (
              <Typography p={1} color={"red"}>
                Invalid login Credentials !
              </Typography>
            )}
            {inputs.map((input, index) => {
              return (
                <div key={index}>
                  {input.type !== "select" ? (
                    <CustomInput {...input} onChange={handleChange} />
                  ) : (
                    <CustomSelect
                      input={input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              );
            })}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: "var(--primary)" }}
            >
              Log In
            </Button>
            <Typography align="center">
              <Link href="/signup" variant="body2" align="center">
                {"Don't have an account? Sign Up"}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;