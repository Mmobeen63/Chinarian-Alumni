"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const react_1 = require("react");
const logo_jpg_1 = require("../../Assets/logo.jpg");
const Constants_1 = require("../../Config/Constants");
const Palette_1 = require("../../Config/Palette");
const List_jsx_1 = require("../Common/List.jsx");
const ListItem_1 = require("../Common/ListItem");
const material_1 = require("@mui/material");
const NavBar_style_1 = require("../Common/NavBar.style");
const StyledHeader = (0, material_1.styled)("header")(({ theme }) => ({
    backgroundColor: Palette_1.GHOST_WHITE,
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-Between"
}));
const StyledHeaderContent = (0, material_1.styled)("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: "20px",
    justifyItems: "space-between",
    "& img": {
        width: "50px",
        height: "50px",
        margin: "20px 0px 0px 75px",
    },
}));
const NavBar = () => {
    return (react_1.default.createElement(StyledHeader, null,
        react_1.default.createElement(StyledHeaderContent, null,
            react_1.default.createElement("img", { src: logo_jpg_1.default, alt: "Logo" }),
            Constants_1.NAV_LINKS.map((data) => (react_1.default.createElement(List_jsx_1.List, null,
                react_1.default.createElement(ListItem_1.ListItem, null,
                    react_1.default.createElement(NavBar_style_1.StyledLink, { to: data.path }, data.label))))))));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map