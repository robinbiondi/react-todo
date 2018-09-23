import React, { Component } from 'react';
import {ListInput, ListItem} from 'Components';

class List extends Component {

  state = {
    items: ['hello'],
  };
  render() {
    const { items } = this.state;

    return (
      <div className="List">
        {items.map((item, key) => <ListItem key={item+key} item={item} />)}
        <ListInput
          onPressEnter={this.handleAddItem}
        />
      </div>
    );
  }

  handleAddItem = (item) => {
    const {items} = this.state;

    items.push(item);

    this.setState({
      items: items,
    })
  }
}

export default List;