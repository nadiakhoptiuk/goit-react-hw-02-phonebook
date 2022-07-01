import React, { Component } from 'react';
import Section from './Section';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import FilterInput from './FilterInput';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, number: prevState.number },
      ],
    }));

    this.formReset(evt);
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

  onInputFind = evt => {
    const stringForFilter = evt.target.value;
    this.setState({ filter: stringForFilter });
  };

  filterContacts = () => {
    const { filter: stringForFilter, contacts } = this.state;
    return stringForFilter
      ? contacts.filter(contact => contact.name.includes(stringForFilter))
      : contacts;
  };

  render() {
    const {
      handleSubmit,
      handleChangeName,
      handleChangeNumber,
      onInputFind,
      filterContacts,
      state,
    } = this;
    const filteredContacts = filterContacts();

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
          <FilterInput onFindContacts={onInputFind} state={state}></FilterInput>
          <ContactsList filteredContacts={filteredContacts}></ContactsList>
        </Section>
      </>
    );
  }
}
