"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const auth_1 = require("firebase/auth");
const system_1 = require("@mui/system");
const Typography_1 = require("../Common/Typography");
const Constants_1 = require("../../Config/Constants");
const TextField_1 = require("../Common/TextField");
const icons_material_1 = require("@mui/icons-material");
const InputAdornment_1 = require("@mui/material/InputAdornment");
const IconButton_1 = require("@mui/material/IconButton");
const Stack_1 = require("../Common/Stack");
const Button_1 = require("../Common/Button");
const react_redux_1 = require("react-redux");
const auth_2 = require("../../Redux/Reducers/auth");
const StyledInputFields = (0, system_1.styled)(Stack_1.Stack)(({ theme }) => ({
    alignItems: "center",
    marginTop: "50px"
}));
const Login = () => {
    const auth = (0, auth_1.getAuth)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [data, setData] = (0, react_1.useState)({
        email: "",
        password: "",
        showPassword: true
    });
    const handleSubmit = () => {
        (0, auth_1.signInWithEmailAndPassword)(auth, data.email, data.password)
            .then((userData) => {
            const user = userData.user;
            console.log(user);
            dispatch((0, auth_2.createUserData)(user));
            alert("User Logged In");
        })
            .catch((err) => {
            alert(err.message);
        });
    };
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((prevData) => {
            return Object.assign(Object.assign({}, prevData), { [name]: value });
        });
    };
    const handleClickShowPassword = () => {
        setData(Object.assign(Object.assign({}, data), { showPassword: !data.showPassword }));
    };
    return (react_1.default.createElement(system_1.Box, { sx: {
            "& .MuiTextField-root": { m: 2, width: "75ch" },
            "& .MuiTypography-root": { fontSize: "40px", paddingBottom: "30px" }
        }, component: "form" },
        react_1.default.createElement(StyledInputFields, null,
            react_1.default.createElement(Typography_1.Typography, null, Constants_1.LOGIN),
            react_1.default.createElement(TextField_1.TextField, { variant: "outlined", label: "Email", value: data.email, name: "email", onChange: handleChange, required: true }),
            react_1.default.createElement(TextField_1.TextField, { variant: "outlined", se: true, label: "Password", value: data.password, name: "password", type: "password", onChange: handleChange, required: true, endAdornment: react_1.default.createElement(InputAdornment_1.default, { position: "end" },
                    react_1.default.createElement(IconButton_1.default, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword }, data.showPassword ? react_1.default.createElement(icons_material_1.VisibilityOff, null) : react_1.default.createElement(icons_material_1.Visibility, null))) }),
            react_1.default.createElement(Button_1.Button, { onClick: handleSubmit }, Constants_1.LOGIN))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map