
const heading = React.createElement("h1", { id: "hello", style: { backgroundColor: "red", display: "none" } }, "Hello hustler!");

const parent = React.createElement("div", { id: "parent" },React.createElement("div",{id:"child"},[React.createElement("h1",{},"Once a Hustler"),React.createElement("h1",{},"Is always a Hustler")]));

const root = ReactDOM.createRoot(document.getElementById('root'));

// wrap both heading and parent
const app=React.createElement("div",{},[heading,parent]);
root.render(app);



