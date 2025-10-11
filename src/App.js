import React from "react";

import "./App.css";
import Myapp from "./components/Myapp";
import Footer from "./components/Footer";
import joker from "./joker"
function App() {


  const jokerComponent = joker.map(num => <Myapp question={num.question} location={num.location} />)


  return (
    <div>
      {jokerComponent}
      <Footer />
    </div>
  );
}

export default App;
