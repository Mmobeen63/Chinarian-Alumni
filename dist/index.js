"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const App_1 = require("./App");
const react_router_dom_1 = require("react-router-dom");
const reportWebVitals_1 = require("./reportWebVitals");
const react_redux_1 = require("react-redux");
const store_1 = require("./Redux/store");
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
            react_1.default.createElement(App_1.default, null)))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map