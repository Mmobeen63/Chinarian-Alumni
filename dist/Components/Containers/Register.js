"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = require("../../Firebase/firebaseConfig");
const react_redux_1 = require("react-redux");
const Button_1 = require("../Common/Button");
const react_2 = require("react");
const system_1 = require("@mui/system");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const TextField_1 = require("../Common/TextField");
const Stack_1 = require("../Common/Stack");
const Typography_1 = require("../Common/Typography");
const Constants_1 = require("../../Config/Constants");
const mui_tel_input_1 = require("mui-tel-input");
const StyledInputFields = (0, system_1.styled)(Stack_1.Stack)(({ theme }) => ({
    alignItems: "center ",
    marginTop: "50px"
}));
const Register = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const currentUser = (0, react_redux_1.useSelector)((state) => state.authInfo.userInfo);
    const { email, uid } = currentUser;
    const [registerData, setRegisterData] = (0, react_2.useState)({
        imgUrl: "",
        currentProfession: "",
        country: "",
        email: email,
        phoneNo: "",
        address: "",
        cnic: "",
        passportNo: ""
    });
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
            return Object.assign(Object.assign({}, prevData), { [name]: value });
        });
    };
    const handleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        const { imgUrl, currentProfession, phoneNo, address, cnic, passportNo } = registerData;
        alert("button clicked");
        yield (0, firestore_1.setDoc)((0, firestore_1.doc)(firebaseConfig_1.database, "users", currentUser.uid), {
            userId: uid,
            email: email,
            imgUrl: imgUrl,
            currentProfession: currentProfession,
            phoneNo: phoneNo,
            address: address,
            cnic: cnic,
            passportNo: passportNo,
        })
            .then(() => {
            alert("data entered");
            navigate("/");
        })
            .catch((err) => err);
    });
    return (react_1.default.createElement(material_1.Box, { sx: {
            "& .MuiTextField-root": { m: 2, width: "75ch" },
            "& .MuiTypography-root": { fontSize: "40px", paddingBottom: "30px" }
        }, component: "form" },
        react_1.default.createElement(StyledInputFields, null,
            react_1.default.createElement(Typography_1.Typography, null, Constants_1.REGISTER),
            react_1.default.createElement(mui_tel_input_1.MuiTelInput, { variant: 'standard', placeholder: "Enter Phone No.", value: registerData.phoneNo, name: "phoneNo", onChange: handleChange, required: true }),
            react_1.default.createElement(TextField_1.TextField, { variant: "standard", label: "Email", value: registerData.email, name: "email", onChange: handleChange, required: true }),
            react_1.default.createElement(TextField_1.TextField, { variant: "standard", label: "Address", value: registerData.address, name: "address", onChange: handleChange, required: true }),
            react_1.default.createElement(TextField_1.TextField, { variant: "standard", required: true, label: "CNIC (without dashes)", value: registerData.cnic, name: "cnic", onChange: handleChange }),
            react_1.default.createElement(TextField_1.TextField, { variant: "standard", label: "Passport No (International only)", value: registerData.passportNo, name: "passportNo", onChange: handleChange, required: true }),
            react_1.default.createElement(Button_1.Button, { onClick: handleSubmit }, Constants_1.REGISTER))));
};
exports.default = Register;
//# sourceMappingURL=Register.js.map