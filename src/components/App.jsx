import React, { Component } from 'react';
import Section from './Section';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log({ name: this.state.name, number: this.state.number });

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, number: prevState.number },
      ],
    }));
    // this.formReset(evt);
  };

  handleChangeName = evt => {
    const newName = evt.target.value;
    this.setState({ name: newName });
  };

  handleChangeNumber = evt => {
    const newNumber = evt.target.value;
    this.setState({ number: newNumber });
  };

  formReset = evt => {
    this.setState({ name: '', number: '' });
    evt.target.reset();
  };

  render() {
    const { handleSubmit, handleChangeName, handleChangeNumber, state } = this;
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact
            onSubmitForm={handleSubmit}
            onChangeName={handleChangeName}
            onChangeNumber={handleChangeNumber}
            state={state}
          ></FormAddContact>
        </Section>
        <Section title="Contacts">
          <ContactsList state={state}></ContactsList>
        </Section>
      </>
    );
  }
}
