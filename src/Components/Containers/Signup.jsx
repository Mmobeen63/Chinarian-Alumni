import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { TextFieldCom } from "../Common/TextField";
import { StackComp } from "../Common/Stack";
import { ButtonCom } from "../Common/Button";
import { createUserData } from "../../Redux/Reducers/auth";
import { Typography } from "../Common/Typography";
import { SIGN_UP } from "../../Config/Constants";

const StyledInputFields = styled(StackComp)(({ theme }) => ({
  marginTop: "50px",
  alignItems: "center",
}));
export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const auth = getAuth();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        alert("Signed up Successfuly");
        
        const user = userCredential.user;
        dispatch(createUserData(user));
        const cli_id = localStorage.setItem("clientId",user.uid);
        navigate("/register")
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 2, width: "75ch" },
        "& .MuiTypography-root":{fontSize:"40px", paddingBottom:"30px"}
      }}
      component="form"
    >
      <StyledInputFields>
      <Typography>
      {SIGN_UP}
    </Typography>
        <TextFieldCom
          variant="standard"
          label="Enter Full Name"
          value={data.fullName}
          name="fullName"
          onChange={handleChange}
          required
        ></TextFieldCom>
        <TextFieldCom
          variant="standard"
          label="Email"
          value={data.email}
          name="email"
          onChange={handleChange}
          required
        ></TextFieldCom>
        <TextFieldCom
          variant="standard"
          label="Enter Password"
          value={data.password}
          name="password"
          onChange={handleChange}
          required
        ></TextFieldCom>
        <TextFieldCom
          variant="standard"
          label="Re-Enter password"
          value={data.checkPassword}
          name="checkPassword"
          onChange={handleChange}
          required
        ></TextFieldCom>
        <ButtonCom onClick={handleSubmit}>Signup</ButtonCom>
      </StyledInputFields>
    </Box>
  );
};
