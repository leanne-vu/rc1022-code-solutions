import React from 'react';
export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = { password: '' };
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.password.length >= 8) {
      return (
        <form>
          <label htmlFor="signup-password">Password</label>
          <input name="password" type="password" id="signup-passwords" onChange={this.handlePasswordChange} value={this.state.password}></input>
          <i className="fa-solid fa-check"></i>
        </form>
      );
    } else if (this.state.password.length < 8) {
      return (
        <form>
          <label htmlFor="signup-password">Password</label>
          <input name="password" type="password" id="signup-passwords" onChange={this.handlePasswordChange} value={this.state.password}></input>
          <i className="fa-solid fa-x"></i>
          <p>A password is required</p>
        </form>
      );
    }
  }
}
