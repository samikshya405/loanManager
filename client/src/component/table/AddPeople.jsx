import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CustomInput } from "../auth/CustomInput";
import { InputLabel } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";
import { postNewCustomer } from "../../axios/axiosHelper";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
const inputs = [
  {
    name: "fName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lName",
    label: "Last Name",
    type: "text",
    required: true,
  },

  {
    name: "address",
    label: "Address",
    type: "text",
    required: true,
  },
  {
    name: "citizenship",
    label: "Citizenship Number",
    type: "text",
    required: false,
  },
];
const initialState ={
  fName:"",
  lName:"",
  address:"",
  citizenship:""


}

export default function AddPeople() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState(initialState)
  const {_id} = useSelector(state=>state.auth.userCredentials)
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  };
const handleSubmit = async(e)=>{
  e.preventDefault()
  
  const result = await postNewCustomer(_id, formData)

  console.log(result);
  console.log(_id);
  console.log(formData);

  setOpen(false)
}

  return (
    <div>
      <Button
        variant="contained"
        sx={{ px: 3 }}
        style={{ background: "var(--blue)" }}
        onClick={handleOpen}
      >
        Add People
      </Button>
      <Modal
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style} component={"form"} onSubmit={handleSubmit}>
        <Typography textAlign={"end"} ><CloseIcon sx={{cursor:"pointer"}} onClick={handleClose}/></Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add People
          </Typography>
          {inputs.map(({ label, ...input }, i) => {
            return (
              <Box key={i}>
                <InputLabel>{label}</InputLabel>
                <CustomInput key={i} {...input} onChange={handleChange} />
              </Box>
            );
          })}
          <Box sx={{ textAlign: "end", p: 2 }}>
            <Button
              variant="contained"
              sx={{ px: 3 }}
              style={{ background: "var(--blue)" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
