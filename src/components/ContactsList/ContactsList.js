import React, { Component } from 'react';
import ContactItem from 'components/ContactItem';
import s from './ContactsList.module.css';

export default class ContactsList extends Component {
  render() {
    const { filteredContacts } = this.props;

    return (
      <ul className={s.contactsList}>
        {filteredContacts.map(filteredContact => (
          <ContactItem
            key={filteredContact.id}
            contactData={filteredContact}
          ></ContactItem>
        ))}
      </ul>
    );
  }
}
