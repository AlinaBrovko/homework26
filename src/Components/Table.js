import React, { Component } from "react";
import Item from "./Item";

export default class extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <table className="contacts">
        <tbody>
          {contacts.map((item) => (
            <Item
              item={item}
              key={item.id}
              deleteContact={this.props.deleteContact}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
