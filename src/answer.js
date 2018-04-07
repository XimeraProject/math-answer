import React, { Component } from 'react'
// import MathExpression from "./math-expressions.js";

class Answer extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      correct: 0,
      enteredAnswer: '',
      answer: window.MathExpression.fromText(this.props.answer),
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    //this.correctString = this.correctString.bind(this);
  }

  handleChange(event){
    event.preventDefault();

    this.setState({submitted: false});

    if(this.props.changeCallBack !== undefined){
      this.props.changeCallBack(this.props.questionNumber,event);
    }else{
      this.setState({value: event.target.value});
    }

    try {
      let answerExpression = window.MathExpression.fromText(event.target.value);
      this.setState({enteredAnswer: "\\("+answerExpression.toLatex()+"\\)" });
    } catch(e) {
      this.setState({enteredAnswer: e});
    }

    // if(event.key === 'Enter'){
    //   alert("Enter!");
    // }


  }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   this.setState({enteredAnswer: "\\("+this.state.value+"\\)" });

  // }

  handleKeyPress(e) {
    if(e.key == "Enter") {
      this.validate();
      this.setState({submitted: true});
    }
  }

  validate() {
    try {
      let response = window.MathExpression.fromText(this.state.value);
      let response_correct = this.state.answer.equals(response);
      this.setState({correct: response_correct ? 1: 0});

    } catch(e) {
      this.setState({correct: 0});
    }


  }

  correctString() {
    if(this.state.submitted) {
      return " which is " + (this.state.correct ? "correct": "incorrect");
    }
    return ""
  }

  componentDidUpdate() {
    // alert('test')
    window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub, "para"]);
  }

  render() {
    return (
	<div className="Answer">
	<input type="text" onChange={this.handleChange} value={this.props.value} onKeyPress={this.handleKeyPress}/>
	<div>You entered <span className="para">{this.state.enteredAnswer}</span>{this.correctString()}. </div>
	</div>
    )
  }
}

export default Answer
