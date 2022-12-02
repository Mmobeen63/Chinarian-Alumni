import * as React from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { TextField } from "../Common/TextField";
import { Stack } from "../Common/Stack";
import { Button } from "../Common/Button";
import { createUserData } from "../../Redux/Reducers/auth";
import { Typography } from "../Common/Typography";
import { BLACK, GHOST_WHITE } from "../../Config/Palette";
import {UserData} from '../../type/index'
import { Dispatch } from "@reduxjs/toolkit";
import { SIGNUP_WITH_GMAIL, SIGN_UP } from "../../Config/Constants";
import { useFormik } from "formik";
import * as Yup from "yup"

const StyledInputFields = styled(Stack)(({ theme }) => ({
  marginTop: "50px",
  alignItems: "center",
}));
const Signup = () => {
  const formik=useFormik<UserData>({
    initialValues:{
      fullName : "",
      email: "",
      password: "",
      checkPassword: "",
      showPassword:false   
    },
    validationSchema: Yup.object({
      fullName : Yup.string(),
      email: Yup.string(),
      password: Yup.string(),
      checkPassword: Yup.string(),
      showPassword: Yup.boolean()     
    }),
    onSubmit: values=>{
    alert(JSON.stringify(values,null,2))
    }
  })
  const navigate : NavigateFunction = useNavigate();
  const dispatch : Dispatch = useDispatch();
  const auth = getAuth();
  const signupWIthGmail =()=>{
    alert("Enable signup with Gmail");
  }
  
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth , formik.values.email, formik.values.password)
      .then((userCredential ) => {
        navigate("/register")
        alert("Signed up Successfuly");
        const user = userCredential.user;
        dispatch(createUserData(user));
        localStorage.setItem("clientId",user.uid);
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
        <TextField
          type= "text"
          variant="outlined"
          label="Full Name"
          value={formik.values.fullName}
          name="fullName"
          onChange={formik.handleChange}
          required
        ></TextField>
        <TextField
          type= "text"
          variant="outlined"
          label="Email"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          required
        ></TextField>
        <TextField
          variant="outlined"
          label="Password"
          value={formik.values.password}
          name="password"
          type="password"
          onChange={formik.handleChange}
          required
        ></TextField>
        <TextField
          type="password"
          variant="outlined"
          label="Re-Enter password"
          value={formik.values.checkPassword}
          name="checkPassword"
          onChange={formik.handleChange}
          required
        ></TextField>
        <Button style={{}} onClick={handleSubmit}>{SIGN_UP}</Button>
        <Button style={{backgroundColor:GHOST_WHITE, color: BLACK}} onClick={signupWIthGmail}>{SIGNUP_WITH_GMAIL}</Button>
      </StyledInputFields>
    </Box>
  );
};

export default Signup