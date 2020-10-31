import React from "react"
import Question from "./Question"
import AnswerList from "./AnswerList"


const QuizArea = (props) => {

    return( 
    
       <div >
        
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>

        
)

    
}


export default QuizArea;
