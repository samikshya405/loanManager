import React, { useState } from "react";
import MainLayout from "../../component/layout/MainLayout";
import { Box, Button, Grid, InputLabel, Typography } from "@mui/material";
import { CustomInput, CustomSelect } from "../../component/auth/CustomInput";
const inputs = [
  {
    name: "name",
    label: "Name",
    id: "name",
    type: "select",
    option: [
      {
        name: "sami",
      },
      {
        name: "sadi",
      },
    ],
  },
  {
    name: "paidAmount",
    label: "Paid Amount",
   
    type: "number",
    prefix: "Rs",
  },
  {
    name: "date",
    label: "Paid Date",
    id: "date",
    type: "date",
  },

  {
    name: "tranferType",
    label: "Tranfer Type",
    id: "transferType",
    type: "select",
    option: [
      {
        name: "Bank",
      },
      {
        name: "Cash",
      },
    ],
  },
];
const initialState = {
  name: "",
  loanAmount: "",
};

const Paid = () => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <MainLayout title={"Paid"}>
      <Box
        component={"form"}
        p={3}
        sx={{
          display: "flex",
          alignItems: "center",

          height: "100%",
        }}
      >
        <Box width={"100%"}>
          <Typography sx={{ py: 4, fontWeight: "bold" }}>
            Fill this form if you have paid money to others.
          </Typography>
          <Grid container columnSpacing={4} rowSpacing={1}>
            {inputs.map(({ label, ...input }, i) => {
              return (
                <Grid item xs={12} md={6} key={input.id + i}>
                  {input.type !== "select" ? (
                    <>
                      <InputLabel sx={{ p: 1 }}>{label}</InputLabel>
                      <CustomInput
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <InputLabel sx={{ p: 1 }}>{label}</InputLabel>
                      <CustomSelect
                        input={input}
                        value={formData[input.name]}
                        onChange={handleChange}
                      />
                    </>
                  )}
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ textAlign: "end", p: 3 }}>
            <Button variant="contained" style={{ background: "var(--blue)" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Paid;
