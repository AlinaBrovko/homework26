import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.surname}</td>
        <td>{item.phone}</td>
        <td
          className="delete"
          onClick={() => {
            this.props.deleteContact(item.id);
          }}
        >
          &#10006;
        </td>
      </tr>
    );
  }
}
