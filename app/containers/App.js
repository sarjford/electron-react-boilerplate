import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    console.log(this.props.children);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
