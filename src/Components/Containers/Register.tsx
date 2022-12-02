import * as React from 'react';
import {
  useFormik,
  } from 'formik';
import * as Yup from 'yup';
import { RegisterFormValues } from '../../type';
import { doc,setDoc } from 'firebase/firestore'
import { database } from "../../Firebase/firebaseConfig";
import { useSelector } from 'react-redux'
import { Button } from '../Common/Button';
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Box, MenuItem } from "@mui/material";
import { TextField } from "../Common/TextField";
import { Stack } from "../Common/Stack";
import { Typography } from "../Common/Typography";
import { REGISTER} from "../../Config/Constants";
import { MuiTelInput } from 'mui-tel-input';

const StyledInputFields = styled(Stack)(({theme})=>({
 alignItems:"center ",
 marginTop: "50px"
}))
const Register = () => {
  const navigate=useNavigate();
  const currentUser= useSelector((state: any)=>state.authInfo.userInfo);
  const{email,uid}= currentUser
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      imgUrl:"",
      currentProfession: [{value:"",label:""}],
      email: email,
      phoneNo:"",
      address:"",
      cnic:0,
      passportNo:"",
    },
    validationSchema: Yup.object({
      imgUrl: Yup.string()
        .required('Required'),
      currentProfession: Yup.array(),
      country: Yup.string(),
      phoneNo:Yup.string(),
      address:Yup.string(),
      cnic:Yup.number(),
      passportNo:Yup.string(),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    const handleSubmit= async()=>{
      const {
      imgUrl,
      currentProfession,
      phoneNo,
      address,
      cnic,
      passportNo}= formik.values
      alert("button clicked") 
        await setDoc(
          doc(database, "users",currentUser.uid),{
              userId: uid,
              email:email,
              imgUrl: imgUrl,
              currentProfession: currentProfession,
              phoneNo:phoneNo,
              address:address,
              cnic:cnic,
              passportNo:passportNo,
            })
            .then(()=> {alert("data entered")
            navigate("/")
          })
            .catch((err)=> err)
        }
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
            {REGISTER}
          </Typography>
            <MuiTelInput
            variant='standard'
                placeholder="Enter Phone No."
                value={formik.values.phoneNo}
                onBlur={formik.handleBlur}
                name="phoneNo"
                onChange={formik.handleChange}
                required
              ></MuiTelInput>
              <TextField
                variant="standard"
                select
                label="Select Profession"
                value={formik.values.currentProfession}
                name="currentProfession"
                onChange={formik.handleChange}
                required
              >{formik.values.currentProfession.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}</TextField>
              <TextField
                variant="standard"
                label="Email"
                value={formik.values.email}
                name="email"
                type= "text"
                onChange={formik.handleChange}
                required
              ></TextField>
              <TextField
                variant="standard"
                label="Address"
                value={formik.values.address}
                type= "text"
                name="address"
                onChange={formik.handleChange}
                required
              ></TextField>
              <TextField
                variant="standard"
                required
                label="CNIC (without dashes)"
                value={formik.values.cnic}
                type= "text"
                name="cnic"
                onChange={formik.handleChange}
              ></TextField>
              <TextField
                variant="standard"
                label="Passport No (International only)"
                value={formik.values.passportNo}
                name="passportNo"
                onChange={formik.handleChange}
                type= "text"
                required
              ></TextField>
              <Button style={{}} onClick={handleSubmit}>{REGISTER}</Button>
            </StyledInputFields>
          </Box>
        );
      
}

export default Register