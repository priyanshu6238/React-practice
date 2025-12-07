import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      isFriendly: true,
      fav_color: "blue",
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
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
        <br />
        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />

        <select
          value={this.state.fav_color}
          name="fav_color"
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>

        <button type="submit">Submit</button>
        <h1>
          {this.state.name} {this.state.email} {this.state.fav_color}
        </h1>
      </form>
    );
  }
}

export default Form;
