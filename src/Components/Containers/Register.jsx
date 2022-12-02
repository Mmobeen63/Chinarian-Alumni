import React from 'react'
import { doc,setDoc } from 'firebase/firestore'
import { database } from "../../firebaseConfig";
import { useSelector } from 'react-redux'
import { ButtonCom } from '../Common/Button';
import { useState } from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { TextFieldCom } from "../Common/TextField";
import { StackComp } from "../Common/Stack";
import { Typography } from "../Common/Typography";
import { REGISTER} from "../../Config/Constants";
import { MuiTelInput } from 'mui-tel-input';

const StyledInputFields = styled(StackComp)(({theme})=>({
 alignItems:"center ",
 marginTop: "50px"
}))
const Register = () => {
  const navigate=useNavigate();
  const currentUser= useSelector((state)=>state.authInfo.userInfo);
  const{email,uid}= currentUser
  
  const [registerData,setRegisterData] = useState({
      imgUrl:"",
      currentProfession:"",
      country: "",
      email: email,
      phoneNo:"",
      address:"",
      cnic:"",
      passportNo:""
    
  })  
  // const imagePostService = async (image) => {
  //   return new Promise(function (resolve, reject) {
  //     const name2 = new Date().getTime() + "" + image.name;
  //     const storageRef = ref(storage, "photos/" + name2);
  //     const uploadTask = uploadBytesResumable(storageRef, image);
  //     console.log("upload task", uploadTask);
  //     uploadTask.on(
  //       "state_changed",
  //       function (snapshot) {
  //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //       },
  //       (error) => {
  //         console.log("error", error);
  
  //         reject(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           resolve(downloadURL);
  //         });
  //       }
  //     );
  //   });
  // };
    const handleChange = (e) => {
      const { value, name } = e.target;
      setRegisterData((prevData) => {
        return { ...prevData, [name]: value };
      });
    };
    const handleSubmit= async()=>{
      const {
      imgUrl,
      currentProfession,
      phoneNo,
      address,
      cnic,
      passportNo}= registerData
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
                value={registerData.phoneNo}
                name="phoneNo"
                onChange={handleChange}
                required
              ></MuiTelInput>
              <TextFieldCom
                variant="standard"
                label="Email"
                value={registerData.email}
                name="email"
                onChange={handleChange}
                required
              ></TextFieldCom>
              <TextFieldCom
                variant="standard"
                label="Address"
                value={registerData.address}
                name="address"
                onChange={handleChange}
                required
              ></TextFieldCom>
              <TextFieldCom
                variant="standard"
                required
                label="CNIC (without dashes)"
                value={registerData.cnic}
                name="cnic"
                onChange={handleChange}
              ></TextFieldCom>
              <TextFieldCom
                variant="standard"
                label="Passport No (International only)"
                value={registerData.passportNo}
                name="passportNo"
                onChange={handleChange}
                required
              ></TextFieldCom>
              <ButtonCom onClick={handleSubmit}>REGISTER NOW</ButtonCom>
            </StyledInputFields>
          </Box>
        );
      
}

export default Register