import React from "react";


class class_component extends React.Component {

    constructor() {
        super()
        this.state = {
            answer: "Priyanshu Singh",
            bol: true,
            answer2: "Deepanshu Singh"
        }

    }


    render() {

        let display_text;

        if (this.state.bol) {
            display_text = this.state.answer;
        }
        else {
            display_text = this.state.answer2
        }

        return (
            < div >


                <h1> {display_text} </h1>





            </div >
        )

    }
}

// no need to write a props here just pass the value in the jsx and access in the file by this.props.varibale_name
export default class_component