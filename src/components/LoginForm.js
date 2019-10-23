import React from "react";

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  formHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  formSubmitHandler = event => {
    event.preventDefault();
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} onChange={this.formHandler} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password}  onChange={this.formHandler} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;