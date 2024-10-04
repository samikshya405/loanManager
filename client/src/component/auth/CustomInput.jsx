
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createTheme
  
 
} from "@mui/material";
// import createTheme from "@mui/material/styles/createTheme";
// import { createTheme } from "@mui/material/styles";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

//kjfjhdfjghdfj
import React from "react";
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
  },
});

export const CustomInput = ({prefix, ...input }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        
        <TextField
          margin= {input.label && "normal"}
          required
          fullWidth
          {...input}
          autoComplete="current-password"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">{prefix}</InputAdornment>,
          }}
        />
      </ThemeProvider>
    </>
  );
};

export const CustomSelect = ({ input, value, onChange }) => {
  const { option, label, ...rest } = input;

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <ThemeProvider theme={theme}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select value={value} label={label} {...rest} onChange={onChange}>
              {option?.map((item) => {
                return (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box>
    </>
  );
};