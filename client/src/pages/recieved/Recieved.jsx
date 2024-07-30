import React, { useEffect, useState } from "react";
import MainLayout from "../../component/layout/MainLayout";
import { Box, Button, Grid, InputLabel, Typography } from "@mui/material";
import { CustomInput, CustomSelect } from "../../component/auth/CustomInput";
import { getAllMember } from "../../axios/axiosHelper";
import { useSelector } from "react-redux";

const data = [
  {
    name: "transactionType",
    label: "Transaction Type",
    id: "transactionType",
    type: "select",
    option: [{ name: "Loan Payment" }, { name: "Deposits" }],
    required: true,
  },
  {
    name: "name",
    label: "Name",
    id: "name",
    type: "select",
    option: [{ name: "sami" }, { name: "sadi" }],
    required: true,
  },
  {
    name: "loanAmount",
    label: "Received Amount",
    id: "loanAmount",
    type: "number",
    prefix: "Rs",
    required: true,
  },
  {
    name: "date",
    label: "Received Date",
    id: "date",
    type: "date",
    required: true,
  },
  {
    name: "interestType",
    label: "Interest Type",
    id: "interestType",
    type: "select",
    option: [{ name: "Interest PA" }, { name: "Interest PD" }],
    required: true,
  },
  {
    name: "transferType",
    label: "Transfer Type",
    id: "transferType",
    type: "select",
    option: [{ name: "Bank" }, { name: "Cash" }],
    required: true,
  },
  {
    name: "rate",
    label: "Rate",
    id: "rate",
    type: "number",
    required: true,
  },
];

const initialState = {
  transactionType: "",
  name: "",
  loanAmount: "",
  date: "",
  interestType: "",
  transferType: "",
  rate: "",
  maturityDate: "",
  bankName: "",
};

const Received = () => {
  const [formData, setFormData] = useState(initialState);
  const [inputdata, setInputData] = useState(data);
  const {_id} = useSelector(state=>state.auth.userCredentials)

  const getMember = async () => {
    try {
      const result = await getAllMember(_id)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMember()
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For testing purposes
    // Implement your form submission logic here
  };

  return (
    <MainLayout title={"Received"}>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        p={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box>
          <Typography sx={{ py: 4, fontWeight: "bold" }}>
            Fill this form if you have received money from others.
          </Typography>
          <Grid container columnSpacing={4} rowSpacing={1}>
            {inputdata.map(({ label, ...input }, i) => (
              <Grid item xs={12} md={6} key={input.id + i}>
                {input.type !== "select" ? (
                  <>
                    <InputLabel sx={{ p: 1 }}>
                      {label}
                      {input.required && <>*</>}
                    </InputLabel>
                    <CustomInput
                      key={input.id}
                      {...input}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <InputLabel sx={{ p: 1 }}>
                      {label}
                      {input.required && <>*</>}
                    </InputLabel>
                    <CustomSelect
                      input={input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </>
                )}
              </Grid>
            ))}
            {formData.transactionType === "Deposits" && (
              <Grid item xs={12} md={6}>
                <InputLabel sx={{ p: 1 }}>Maturity Date</InputLabel>
                <CustomInput
                  key="maturityDate"
                  name="maturityDate"
                  // label="Maturity Date"
                  type="date"
                  value={formData.maturityDate}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {formData.transferType === "Bank" && (
              <Grid item xs={12} md={6}>
                <InputLabel sx={{ p: 1 }}>Bank Name *</InputLabel>
                <CustomInput
                  name="bankName"
                  required
                  type="text"
                  value={formData.bankName}
                  onChange={handleChange}
                />
              </Grid>
            )}
          </Grid>
          <Box sx={{ textAlign: "end", p: 3 }}>
            <Button
              variant="contained"
              style={{ background: "var(--blue)" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Received;
