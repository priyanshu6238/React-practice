import React from "react";

function Footer() {
  let name = "priyanshu Singh";
  const date = 10;
  if (date < 10) {
    name = "Deepanshu Singh";
  } else {
    name = "Riyanshu Singh";
  }

  const styles = {
    color: "black",
    textAlign: "center",
    backgroungColor: "black",
  };
  return (
    <div style={styles}>
      <input type="checkbox" />
      <label>Accept Terms and Conditions {name}</label>
    </div>
  );
}

export default Footer;
