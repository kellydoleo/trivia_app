import React from "react"
import "./App.css";
import data from "./data"
import QuizArea from "./components/QuizArea"
import ScoreArea from "./components/ScoreArea"

export default class App extends React.Component  {

constructor(props){
  super(props)

  const dataSet = data
  this.state = {
    current: 0,
    dataSet: dataSet, 
    correct:0,
    incorrect:0  }
    this.handleClick = this.handleClick.bind(this)
}

handleClick(choice) {
  if(choice === this.state.dataSet[this.state.current].correct) {
    
    this.setState({correct: this.state.correct + 1})
    this.setState({current: this.state.current + 1}) 
  } else {
    this.setState({incorrect: this.state.incorrect +1})
    this.setState({current: this.state.current + 1}) 
  }
   if(this.state.current === 20) {
    this.setState({current: 0})
    this.setState({incorrect:0})
    this.setState({correct:0})
  }
}

render(){
  return(
    <>
    <div>
      <ScoreArea correct = {this.state.correct} incorrect= {this.state.incorrect}/>
      <QuizArea handleClick={this.handleClick} dataSet= {this.state.dataSet[this.state.current]} />
    </div>
    <img  src={"https://i.ibb.co/bNWwZLD/3.png" }/>
    </>
  )
} 
}
