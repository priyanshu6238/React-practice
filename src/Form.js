import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
        <h1>
          {this.state.name} {this.state.email}
        </h1>
      </form>
    );
  }
}

export default Form;
