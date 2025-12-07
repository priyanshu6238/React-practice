import React from "react";
import "./Project_on_click.css"; // Import the CSS file

class Project_on_click extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div className="container">
                <h1 className="counter">{this.state.count}</h1>
                <button className="cool-button" onClick={this.handleClick}>
                    Change!
                </button>
            </div>
        );
    }
}

export default Project_on_click;
