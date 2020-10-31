import React from "react"

const Answer = (props) => {
    return(
        <div>
            <div className="cursor website-rec-2" onClick={() => props.handleClick(props.choice)}>{props.answer}</div>
        </div>
    )
}

export default Answer