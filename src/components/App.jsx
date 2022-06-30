import React, { Component } from 'react';
import Section from './Section';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log({ contacts: [...this.state.contacts, this.state.name] });
    this.setState(prevState => ({
      contacts: [...prevState.contacts, prevState.name],
    }));
    this.formReset(evt);
  };

  handleChange = evt => {
    const newName = evt.target.value;
    this.setState({ name: newName });
  };

  formReset = evt => {
    this.setState({ name: '' });
    evt.target.reset();
  };

  render() {
    const { handleSubmit, handleChange, state } = this;
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact
            onSubmitForm={handleSubmit}
            onChangeForm={handleChange}
            // state={state}
          ></FormAddContact>
        </Section>
        <Section title="Contacts">
          <ContactsList state={state}></ContactsList>
        </Section>
      </>
    );
  }
}
