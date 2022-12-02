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
exports.Stack = void 0;
const react_1 = require("react");
const system_1 = require("@mui/system");
const Stack = (_a) => {
    var { direction, children } = _a, Props = __rest(_a, ["direction", "children"]);
    return (react_1.default.createElement(system_1.Stack, Object.assign({ direction: direction }, Props), children));
};
exports.Stack = Stack;
Stack.defaultProps = {
    direction: "column",
    children: react_1.default.createElement(react_1.default.Fragment, null, "no children found"),
};
//# sourceMappingURL=Stack.js.map