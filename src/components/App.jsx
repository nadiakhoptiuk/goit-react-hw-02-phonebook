import React, { Component } from 'react';

import Section from './Section';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import FilterInput from './FilterInput';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contactObj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactObj],
    }));
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
    const { handleSubmit, onInputFind, filterContacts, state } = this;
    const filteredContacts = filterContacts();

    return (
      <>
        <Section title="Phonebook">
          <FormAddContact onSubmitForm={handleSubmit}></FormAddContact>
        </Section>
        <Section title="Contacts">
          <FilterInput onFindContacts={onInputFind} state={state}></FilterInput>
          <ContactsList filteredContacts={filteredContacts}></ContactsList>
        </Section>
      </>
    );
  }
}
