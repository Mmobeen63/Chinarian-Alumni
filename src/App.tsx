import * as React from "react";
import { NavBar } from "./Components/Containers/NavBar";
import { Router } from "./Routing/Router";
function App() {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
