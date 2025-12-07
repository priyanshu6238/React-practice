import React from "react";

function Project_loading1(props) {

    return (
        <div>
            {props.isLoading ? <h1>Loading....</h1> : <h1>some cool stuf is going to show</h1>}

        </div>
    )
}

export default Project_loading1 