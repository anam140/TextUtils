import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// Function based componenet

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not?
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
     showAlert(" Dark Mode has been enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been enabled", "success")
    }
  };
  return (
    // jsx  extension - write html and javascript in curly braces {}
    <>
    {/* <Router> */}
      <Navbar
        title="TestUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />

      {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={ */}
            {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
            {/* }> */}
            {/* </Route>
          </Routes> */}
       
      </div>
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;
