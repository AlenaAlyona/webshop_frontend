import React from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import ToolBar from "./pages/Toolbar";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <HomePage />
    </div>
  );
}

export default App;
