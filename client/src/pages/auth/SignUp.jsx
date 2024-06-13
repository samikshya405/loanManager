import React, { useState } from "react";
import bg from "../../assets/image/trans.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import { CustomInput, CustomSelect } from "../../component/auth/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { postNewUser } from "../../axios/axiosHelper";
import { toast } from "react-toastify";
const inputs = [
  {
    name: "name",
    label: "Name",
    id: "name",
    type: "text",
  },
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
  {
    name: "confirmPassword",
    label: "Confirm Password",
    id: "confirmPassword",
    type: "password",
  },
];
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formData, setformData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      return alert("password didnot match");
    }
    const signInPromise = postNewUser(rest);
    toast.promise(signInPromise, {
      pending: "In Progress...",
    });

    const data = await signInPromise;

    console.log(data);

    if (data.status === "success") {
      toast.success("Your account has been created", {
        hideProgressBar: true,
        position: "top-center",
      });
      setformData(initialState);
    }
    if(data.status ==='error'){
      toast.error(data.message , {
        hideProgressBar: true,
        position: "top-center",
      });
    }
  };
  return (
    <Box padding={3}>
      <Grid container height="100vh" alignItems="center" spacing={5}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          md={5}
          lg={6}
        >
          <img src={bg} alt="hospital image" />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={6}>
          <Typography align="center" component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            {inputs.map((input, index) => {
              return (
                <div key={index}>
                  {input.type !== "select" ? (
                    <CustomInput
                      {...input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
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
              Create Account
            </Button>
            <Typography align="center">
              <Link href="/login" variant="body2" align="center">
                {"Already have an account? Login"}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
