import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  styled,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "./Navbar";

const BoxContainer = styled(Box)(({ theme }) => ({
  background: "#233",
  height: "100vh",
}));

const BoxForm = styled(Box)(({ theme }) => ({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
}));

const TypographyHeading = styled(Typography)(({ theme }) => ({
  color: "#fff",
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom: "1rem",
}));

const InputField = styled(TextField)(({ theme }) => ({
  margin: "1rem 0rem",
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    color: "#69cbdb",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#69cbdb",
    },
    "&:hover fieldset": {
      borderColor: "#69cbdb",
    },
    "&.Mui-focused fieldset": {
      color: "#fff",
      borderColor: "#69cbdb",
    },
  },
}));

const ButtonForm = styled(Button)(({ theme }) => ({
  marginTop: "1rem",
  color: "#fff",
  backgroundColor: "#9416fe",
  "&:hover": {
    backgroundColor: "#69cbdb",
    color: "black",
  },
}));

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <BoxContainer component="div">
        <Grid container justifyContent="center">
          <BoxForm component="form">
            <TypographyHeading variante="h5">
              Say "Hola" 👋🏼 or drop me a message...
            </TypographyHeading>
            <InputField
              fullWidth={true}
              label="name"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="email"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="message"
              variante="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            ></InputField>
            <ButtonForm
              variant="contained"
              fullWidth={true}
              endIcon={<SendIcon></SendIcon>}
            >
              Contact me
            </ButtonForm>
          </BoxForm>
        </Grid>
      </BoxContainer>
    </>
  );
};

export default Contact;
