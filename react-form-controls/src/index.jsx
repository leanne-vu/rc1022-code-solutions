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
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input onChange={this.handleUsernameChange} value={this.state.username}></input>
        </label>
        <label>
          Password
          <input type="password" onChange={this.handlePasswordChange} value={this.state.password}></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
