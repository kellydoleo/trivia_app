import React from "react"


const TotalCorrect = (props) => {
    return(
        <div style={{float:"left", marginLeft:"10%"}} >

            <h3>Correct: {props.correct}</h3>
        </div>
    )
}

export default TotalCorrect;