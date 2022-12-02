"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const react_1 = require("react");
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const system_1 = require("@mui/system");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const auth_1 = require("firebase/auth");
const TextField_1 = require("../Common/TextField");
const Stack_1 = require("../Common/Stack");
const Button_1 = require("../Common/Button");
const auth_2 = require("../../Redux/Reducers/auth");
const Typography_1 = require("../Common/Typography");
const Palette_1 = require("../../Config/Palette");
const icons_material_1 = require("@mui/icons-material");
const InputAdornment_1 = require("@mui/material/InputAdornment");
const IconButton_1 = require("@mui/material/IconButton");
const Constants_1 = require("../../Config/Constants");
const StyledInputFields = (0, system_1.styled)(Stack_1.Stack)(({ theme }) => ({
    marginTop: "50px",
    alignItems: "center",
}));
const Signup = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [data, setData] = (0, react_2.useState)({
        fullName: "",
        email: "",
        password: "",
        checkPassword: "",
        showPassword: false
    });
    const auth = (0, auth_1.getAuth)();
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((prevData) => {
            return Object.assign(Object.assign({}, prevData), { [name]: value });
        });
    };
    const signupWIthGmail = () => {
        alert("Enable signup with Gmail");
    };
    const handleSubmit = () => {
        (0, auth_1.createUserWithEmailAndPassword)(auth, data.email, data.password)
            .then((userCredential) => {
            alert("Signed up Successfuly");
            const user = userCredential.user;
            dispatch((0, auth_2.createUserData)(user));
            localStorage.setItem("clientId", user.uid);
            navigate("/register");
        })
            .catch((err) => {
            alert(err.message);
        });
    };
    const handleClickShowPassword = () => {
        setData(Object.assign(Object.assign({}, data), { showPassword: !data.showPassword }));
    };
    return (react_1.default.createElement(material_1.Box, { sx: {
            "& .MuiTextField-root": { m: 2, width: "75ch" },
            "& .MuiTypography-root": { fontSize: "40px", paddingBottom: "30px" }
        }, component: "form" },
        react_1.default.createElement(StyledInputFields, null,
            react_1.default.createElement(Typography_1.Typography, null, Constants_1.SIGN_UP),
            react_1.default.createElement(TextField_1.TextField, { variant: "outlined", label: "Full Name", value: data.fullName, name: "fullName", onChange: handleChange, required: true }),
            react_1.default.createElement(TextField_1.TextField, { variant: "outlined", label: "Email", value: data.email, name: "email", onChange: handleChange, required: true }),
            react_1.default.createElement(TextField_1.TextField, { variant: "outlined", label: "Password", value: data.password, name: "password", type: "password", onChange: handleChange, required: true, endAdornment: react_1.default.createElement(InputAdornment_1.default, { position: "end" },
                    react_1.default.createElement(IconButton_1.default, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword }, data.showPassword ? react_1.default.createElement(icons_material_1.VisibilityOff, null) : react_1.default.createElement(icons_material_1.Visibility, null))) }),
            react_1.default.createElement(TextField_1.TextField, { type: "password", variant: "outlined", label: "Re-Enter password", value: data.checkPassword, name: "checkPassword", onChange: handleChange, required: true }),
            react_1.default.createElement(Button_1.Button, { onClick: handleSubmit }, Constants_1.SIGN_UP),
            react_1.default.createElement(Button_1.Button, { style: { backgroundColor: Palette_1.GHOST_WHITE, color: Palette_1.BLACK }, onClick: signupWIthGmail }, Constants_1.SIGNUP_WITH_GMAIL))));
};
exports.Signup = Signup;
//# sourceMappingURL=Signup.js.map