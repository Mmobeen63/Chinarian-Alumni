"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavStyle = exports.StyledLink = void 0;
const styled_1 = require("@emotion/styled");
const react_router_dom_1 = require("react-router-dom");
const Palette_1 = require("../../Config/Palette");
const Typography_1 = require("./Typography");
exports.StyledLink = (0, styled_1.default)(react_router_dom_1.NavLink)(({ theme }) => ({
    color: Palette_1.BLACK,
    textDecoration: "none",
}));
exports.NavStyle = (0, styled_1.default)(Typography_1.Typography)(({ theme }) => ({
    color: Palette_1.BLACK,
}));
//# sourceMappingURL=NavBar.style.js.map