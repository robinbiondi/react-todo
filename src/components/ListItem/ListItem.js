import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {item} = this.props;

    return (
      <p className="List-item">
        {item}
      </p>
    );
  }
}

export default Header;