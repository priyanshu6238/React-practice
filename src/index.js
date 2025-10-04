import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return <div className="container"><h1>Priyanshu SINGH</h1>
    <p>I am priyanshu Singh from uttar pradesh gorakhpur ,compeleted my Btech in computer science and engineering from Nit Hamirpur, Gorakhpur</p>
    <ul>
      <li>Goa </li>
      <li>Himachal Pradesh</li>
      <li>Japan</li>
      <li>China</li>
    </ul>
  </div >

}
// the HTML inside the render thing is called jsx and we can only pass single element to the render function.
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
