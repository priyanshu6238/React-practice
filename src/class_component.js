import React from "react";


class class_component extends React.Component {
    render() {

        return (
            < div >

                <h1> {this.props.name} </h1>

            </div >
        )

    }
}

// no need to write a props here just pass the value in the jsx and access in the file by this.props.varibale_name
export default class_component