import React, { Component } from 'react';
import me from 'math-expressions';


class Math extends Component {
  constructor(props) {
    super(props);

    let expression = null;
    try {
      expression = me.fromText(this.props.input);
    } catch(e) {

    }

    this.state = {
      originalText: this.props.input,
      expression: expression,
    };
  }

  componentDidUpdate() {
    window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub, "#1"]);
  }

  render() {
    if (this.state.expression == null) {
      return null;
    } else {
    return <span id="1" >{ "\\("+this.state.expression.toLatex()+"\\)" }</span>
    }
  }
}

export default Math
