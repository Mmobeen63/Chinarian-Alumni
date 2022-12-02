"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const CheckLogin = () => {
    const currentUser = (0, react_redux_1.useSelector)((state) => state.authInfo.userInfo);
    const { accessToken } = currentUser;
    const loginStatus = accessToken;
    return loginStatus === undefined ? (react_1.default.createElement(react_router_dom_1.Outlet, null)) : (react_1.default.createElement(react_router_dom_1.Navigate, { to: "/", replace: true }));
};
exports.default = CheckLogin;
//# sourceMappingURL=CheckLogin.js.map