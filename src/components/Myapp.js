import React from "react";

function Myapp(props) {
  return (
    <div className="container">
      <h1>Priyanshu SINGH</h1>
      <p>
        I am priyanshu Singh from uttar pradesh gorakhpur ,compeleted my Btech
        in computer science and engineering from Nit Hamirpur, Gorakhpur
      </p>
      <ul>
        <li>
          <span>
            Location : {props.location}
          </span>

          <span>
            Question : {props.question}
          </span>

        </li>
        {/* <li>Himachal Pradesh</li>
        <li>Japan</li>
        <li>China</li> */}
      </ul>
    </div>
  );
}

// IT is used to export the function to other file and folder
export default Myapp;
