import React, { Component } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 1, name: "Аліна", surname: "Бровко", phone: "+380968847202" },
        { id: 2, name: "Ольга", surname: "Вовк", phone: "+380978567267" },
        { id: 3, name: "Інна", surname: "Бондар", phone: "+380967854234" },
      ],
      form: false,
    };
  }
  showForm = () => {
    this.setState({ form: true });
  };
  hideForm = () => {
    this.setState({ form: false });
  };
  addContact = (contact) => {
    const contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({ contacts: contacts });
  };

  deleteContact = (id) => {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);

    this.setState({ contacts: contacts });
  };
  render() {
    let form = this.state.form ? (
      <Form hideForm={this.hideForm} addContact={this.addContact} />
    ) : undefined;
    return (
      <div className="container">
        <h3>Контакти</h3>
        {form}
        <Table
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
        <button onClick={this.showForm}>Додати</button>
      </div>
    );
  }
}
