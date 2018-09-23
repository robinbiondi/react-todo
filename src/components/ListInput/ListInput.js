import React, { Component } from 'react';

class Input extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        className="List-input"
        value={value}
        onKeyPress={this.handlePressEnter}
        onChange={this.handleChange}
      />
    );
  }

  handlePressEnter = (event) => {
    const { onPressEnter } = this.props;
    const { value } = this.state;

    if (event.key != 'Enter') return;

    if (onPressEnter)
      onPressEnter(value);
    this.setState({value: ''});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

}

export default Input;