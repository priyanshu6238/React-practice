import React from "react";

function Counter(props) {
  console.log(props);
  return (
    <div>
      <img src={props.contact.imgUrl} alt="mypic" />
      <h3> {props.contact.phone}</h3>
      <p>{props.contact.name}</p>
    </div>
  );
}

export default Counter;
