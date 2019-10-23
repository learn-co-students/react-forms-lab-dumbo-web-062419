import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: '',
    charsLeft: this.props.maxChars
  }

  formHandler = event => {
    this.setState({charsLeft: this.state.charsLeft-1});
    this.setState({message: event.target.value});
  }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.formHandler}  name="message" id="message" />
        <p>Characters remaining: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
