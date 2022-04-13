import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = { name: "", surname: "", phone: "" };
  }
  changeHeandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  saveContact = (e) => {
    e.preventDefault();
    const contact = this.state;
    contact.id = new Date().getTime();
    this.props.addContact(contact);
    this.props.hideForm();
  };
  render() {
    return (
      <div className="new-contact">
        <div className="new-contact-body">
          <div className="new-contact-header">
            <h4>Новий контакт</h4>
          </div>
          <form onSubmit={this.saveContact}>
            <input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.changeHeandler}
              placeholder="Імʼя"
              required
            />
            <input
              id="surname"
              name="surname"
              value={this.state.surname}
              onChange={this.changeHeandler}
              placeholder="Прізвище"
              required
            />
            <input
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.changeHeandler}
              placeholder="Номер телефону"
              pattern="\+?[0-9\s\-\(\)]+"
              required
            />
            <button type="submit">ТАК</button>
            <button type="reset" onClick={this.props.hideForm}>
              НІ
            </button>
          </form>
        </div>
      </div>
    );
  }
}
