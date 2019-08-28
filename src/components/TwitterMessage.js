import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    const usedChar = this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaining characters: {this.props.maxChars - usedChar}</p>
        <input type="text" name="message" id="message" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
