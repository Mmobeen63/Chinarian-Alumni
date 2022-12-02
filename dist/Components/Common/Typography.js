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
exports.Typography = void 0;
const react_1 = require("react");
const material_1 = require("@mui/material");
const Typography = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(material_1.Typography, Object.assign({}, props), children));
};
exports.Typography = Typography;
Typography.defaultProps = {
    children: react_1.default.createElement(react_1.default.Fragment, null, "No children provided")
};
//# sourceMappingURL=Typography.js.map