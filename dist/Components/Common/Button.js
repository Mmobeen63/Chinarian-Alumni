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
exports.Button = void 0;
const React = require("react");
const material_1 = require("@mui/material");
const styled_1 = require("@emotion/styled");
const Palette_1 = require("../../Config/Palette");
const StyledButton = (0, styled_1.default)(material_1.Button)(({ theme }) => ({
    backgroundColor: Palette_1.GREEN,
    borderRadius: "29.5px",
    color: Palette_1.WHITE,
    padding: "13px",
    margin: "10px",
    width: "30%",
    fontSize: "13px",
    "&:hover": {
        backgroundColor: Palette_1.GREEN,
    },
}));
const Button = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return React.createElement(StyledButton, Object.assign({}, props), children);
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map