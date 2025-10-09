import React from "react";

import "./App.css";
import Myapp from "./components/Myapp";
import Footer from "./components/Footer";

function App() {
  const nums = [1, 2, 3, 4, 5];
  const new_num = nums.map((n) => n * 2);
  console.log(new_num);
  return (
    <div>
      <Myapp />
      <Footer />
    </div>
  );
}

export default App;
