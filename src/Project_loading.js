import React from "react";
import Project_loading1 from "./Project_loading1"

class Project_loading extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading: true
        }

    }

    componentDidMount() {
        setTimeout(() => {

            this.setState({
                isLoading: false
            })

        }, 15000)
    }

    render() {

        return (
            <div>

                <Project_loading1 isLoading={this.state.isLoading} />
            </div>
        )

    }
}

// no need to write a props here just pass the value in the jsx and access in the file by this.props.varibale_name
export default Project_loading;