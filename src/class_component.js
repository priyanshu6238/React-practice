import React from "react";


class class_component extends React.Component {

    constructor() {
        super()
        this.state = {
            answer: "Priyanshu Singh"
        }
    }
    render() {

        return (
            < div >

                <h1> {this.state.answer} </h1>

            </div >
        )

    }
}

// no need to write a props here just pass the value in the jsx and access in the file by this.props.varibale_name
export default class_component