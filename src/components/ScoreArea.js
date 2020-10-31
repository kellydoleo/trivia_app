import React from "react"
import TotalCorrect from "./TotalCorrect"
import TotalIncorrect from "./TotalIncorrect"

const ScoreArea = (props) => {
    return(
        <>
        
        <div className="score-area emblema-font" >
        <div className="website-cir" ></div>
        <div className="website-cir-2" ></div>
        <div className="website-cir-3" ></div>
        <div style={{float:"left"}} className="website-rec-3" ></div>
        <TotalCorrect correct={props.correct}/>
        <TotalIncorrect incorrect={props.incorrect} />
        </div>
        </>
    )
}

export default ScoreArea