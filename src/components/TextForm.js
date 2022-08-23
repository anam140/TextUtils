import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");

  const handleUpClick = () => {
    console.log(" Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase", "success")
  };

  const handleCopy = () => {
    // let newText = '';
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text is Copied", "success")
  };

  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces has been removed", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Cleared Text!", "success")
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="6"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpace}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1> <i>Your Text Summary: </i></h1>
        <p>
          Word Count: <b> {text.split(" ").length}</b> and Letter Count:{" "} <b> {text.length}</b>
        </p>
        <p>Minutes required to read: {0.08 * text.split(" ").length}</p>
        <h2>Preview:</h2>
        <p> {text.length > 0 ? text : "Enter Text above for Preview: "} </p>
      </div>
    </>
  );
}
