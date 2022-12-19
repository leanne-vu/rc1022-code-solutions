import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (this.state.isClicked === false) {
      return (
        <i onClick={this.handleClick} className="fa-solid fa-bars"></i>
      );
    } else if (this.state.isClicked === true) {
      return (
        <div onClick={this.handleClick} className="container-modal">
          <div className="pop-out">
            <div className="row">
              <h1 onClick={this.handleClick} className="pop-words">Menu</h1>
              <h2 onClick={this.handleClick}>About</h2>
              <h2 onClick={this.handleClick}>Get Started</h2>
              <h2 onClick={this.handleClick}>Sign In</h2>
            </div>
          </div>
        </div>
      );
    }
  }
}
