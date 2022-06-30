import React, { Component } from 'react';
import Section from './Section';
import FormAddContact from './FormAddContact';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact></FormAddContact>
        </Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}
