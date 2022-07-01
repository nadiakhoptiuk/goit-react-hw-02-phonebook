import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactsList.module.css';
import userContact from '../../images/userContact.svg';

export default class ContactsList extends Component {
  render() {
    const { filteredContacts } = this.props;

    return (
      <ul className={s.contactsList}>
        {filteredContacts.map(filteredContact => (
          <li key={nanoid()} className={s.contactItem}>
            <img
              className={s.icon}
              src={userContact}
              alt="user icon"
              width={30}
              height={30}
            />
            <p className={s.contactName}>{filteredContact.name}:</p>
            <p className={s.contactNumber}>{filteredContact.number}</p>
          </li>
        ))}
      </ul>
    );
  }
}
