import React from 'react';
export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className="display">
          <input className="toggleafter" type="checkbox" onClick={this.handleClick} />
          <p>ON</p>
        </div>
      );
    } else {
      return (
        <div className="display">
          <input className="toggle" type="checkbox" onClick={this.handleClick} />
          <p>OFF</p>
        </div>
      );
    }
  }
}
