import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import ClassCount from "./components/ClassCount";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ClassCount />
    </div>
  );
}

export default App;
