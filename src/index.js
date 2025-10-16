import React from "react";
import ReactDOM from "react-dom/client";
// import "./App.css";
// import reportWebVitals from "./reportWebVitals";
// import Project_on_click from "./Project_On_click";
// import Project_on_click from "./Project_On_click";
// // import Myapp from "./components/Myapp";
// import Project_loading from "./Project_loading";
// import App from "./App";
// import Class_component from "./class_component";
import Api_fetch from "./Api_fetch";

const root = ReactDOM.createRoot(document.getElementById("root"));

// the HTML inside the render thing is called jsx and we can only pass single element to the render function.
root.render(<Api_fetch />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
