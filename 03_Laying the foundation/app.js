import React from "react";
import ReactDOM from "react-dom/client";

// REact Element
const heading = React.createElement("h1", { id: "hello", style: { backgroundColor: "red", display: "none" } }, "Hello hustler!");


//JSX (transpiled before it reached the JS) - PARCEL - Babel
const jsxHeading = <h1 id="hello">Hello Hustler hashmat  hsh            !</h1>

//REact Component
const ReactComponent1 = () => {
    return <h1 id="hello " style={{ backgroundColor: 'red' }}>Hello Hustler ! hash from ReactComponent1</h1>
}

//React COmponent
const ReactComponent2 = () => (

    <div>
        <h1 id="hello " style={{ backgroundColor: 'red' }}>Hello Hustler ! hash from ReactComponent2 </h1>
        {jsxHeading}
        <ReactComponent1/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<ReactComponent2 />);


