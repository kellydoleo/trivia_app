import React from "react"

const Question = (props) => {
    return(
        <>
        
        <div className="website-rec">
            <h3 className="v-font" >Welcome to Trivia!</h3>
        <h2 className="emblema-font" >{props.dataSet.question}</h2>
        </div>
        </>
    )
}

export default Question