import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = { username: '', password: '' };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ username: '', password: '' });
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-username">
          Username
          <input name="username" type="text" id="signup-username" onChange={this.handleUsernameChange} value={this.state.username}></input>
        </label>
        <label htmlFor="signup-password">
          Password
          <input name="password" type="password" id="signup-passwords" onChange={this.handlePasswordChange} value={this.state.password}></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
