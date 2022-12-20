import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: null, clickedIndex: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ clickedIndex: event.target.textContent, isClicked: event.detail });
  }

  render() {
    const array = this.props.languages;
    const names = array.map(lang => {
      if (this.state.clickedIndex === lang.Language && this.state.isClicked === 1) {
        return (
          <div className="container" key={lang.Language} onClick={this.handleClick}>
            <div className="lang">{lang.Language}</div>
            <div className="deets">{lang.Details}</div>
          </div>
        );
      } else {
        return (
          <div className="container" key={lang.Language} onClick={this.handleClick}>
            <div className="lang">{lang.Language}</div>
          </div>
        );
      }
    }
    );
    return (
      names
    );
  }
}
