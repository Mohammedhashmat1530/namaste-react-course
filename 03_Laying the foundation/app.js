import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", { id: "hello", style: { backgroundColor: "red", display: "none" } }, "Hello hustler!");
/*
const parent = React.createElement("div", { id: "parent" },React.createElement("div",{id:"child"},[React.createElement("h1",{},"Once a Hustler"),React.createElement("h1",{},"Is always a Hustler")]));
*/

//JSX (transpiled before it reached the JS) - PARCEL - Babel
const jsxHeading = <h1 id="hello">Hello Hustler hashmat  hsh            !</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

// wrap both heading and parent
const app=React.createElement("div",{},[heading,parent]);
root.render(jsxHeading);



