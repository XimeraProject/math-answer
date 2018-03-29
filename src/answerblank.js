import React, { Component } from 'react'
// import MathExpression from "./math-expressions.js";

class AnswerBlank extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      correct: 0,
      enteredAnswer: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    if(this.props.changeCallBack !== undefined){
    this.props.changeCallBack(this.props.questionNumber,event);
  }else{
    this.setState({value: event.target.value});
  }

  this.setState({enteredAnswer: "\\("+event.target.value+"\\)" });

    // if(event.key === 'Enter'){
    //   alert("Enter!");
    // }


  }

  handleSubmit(event) {
      event.preventDefault();

     this.setState({enteredAnswer: "\\("+this.state.value+"\\)" });

    }

    componentDidUpdate() {
      // alert('test');
      window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub, "para"]);
    }

  render() {
    return (
      <div className="AnswerBlank">
      <form onSubmit={this.handleSubmit}>
      <label>
      {this.props.questionText}
      <br/>
      <input type="text" onChange={this.handleChange} value={this.props.value}/>
      <p>your answer:</p>
      <div>{this.state.enteredAnswer}</div>
      </label>
      </form>
      </div>
    )
  }
}

export default AnswerBlank
