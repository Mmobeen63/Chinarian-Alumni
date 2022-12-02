import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Box, styled } from '@mui/system'
import { Typography } from '../Common/Typography'
import { LOGIN } from '../../Config/Constants'
import { TextField } from '../Common/TextField'
import  {Stack}  from '../Common/Stack'
import { Button } from '../Common/Button'
import { useDispatch } from 'react-redux'
import { createUserData } from '../../Redux/Reducers/auth'
import { Dispatch } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import * as Yup from "yup"

const StyledInputFields = styled(Stack)(({theme})=>({
    alignItems:"center",
    marginTop: "50px"
   }))
const Login = () => {
  const formik = useFormik<{email:string,password:string}>({
    initialValues:{
      email: "",
      password: "",
    },validationSchema: Yup.object({
      email: Yup.string(),
      password: Yup.string()
    }), onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })
  const auth= getAuth();
  const dispatch : Dispatch = useDispatch();
    const handleSubmit=()=>{
      signInWithEmailAndPassword(auth, formik.values.email,formik.values.password)
      .then((userData)=>{
        const user= userData.user
        console.log(user);
        dispatch(createUserData(user))
        alert("User Logged In")
      })
      .catch((err)=>{
        alert(err.message)
      })
    }
    return (
        <Box
        sx={{
          "& .MuiTextField-root": { m: 2, width: "75ch" },
          "& .MuiTypography-root":{fontSize:"40px", paddingBottom:"30px"}
        }}
        component="form"
      >
        <StyledInputFields  >
        <Typography>
        {LOGIN}
      </Typography>
      <TextField
          variant="outlined"
          label="Email"
          value={formik.values.email}
          type= "text"
          name="email"
          onChange={formik.handleChange}
          required
        />
        <TextField
          props
          variant="outlined"
          label="Password"
          value={formik.values.password}
          name="password"
          type="password"
          onChange={formik.handleChange}
          required
        />
        <Button style={{}} onClick={handleSubmit}>{LOGIN}</Button>
      </StyledInputFields>
      </Box>
  )
}

export default Login