"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const react_1 = require("react");
const material_1 = require("@mui/material");
const styled_1 = require("@emotion/styled");
const StyledTextField = (0, styled_1.default)(material_1.TextField)(({ theme }) => ({
    boxSizing: "border-box",
    width: "418px",
    height: "56px",
    // left: "510px",
    // top: "255px",
    //border: "2px solid #D9D9D9",
    borderRadius: "10px",
}));
const TextField = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledTextField, Object.assign({}, props));
};
exports.TextField = TextField;
TextField.defaultProps = {
    children: react_1.default.createElement(react_1.default.Fragment, null, " No children"),
};
//# sourceMappingURL=TextField.js.map