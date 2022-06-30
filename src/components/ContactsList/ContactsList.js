import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactsList.module.css';
import userContact from '../../images/userContact.svg';

export default class ContactsList extends Component {
  render() {
    const { state } = this.props;
    const contacts = state.contacts;
    return (
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <li key={nanoid()} className={s.contactItem}>
            <img
              className={s.icon}
              src={userContact}
              alt="icon user"
              width={30}
              height={30}
            />
            <p className={s.contactName}>{contact}</p>
          </li>
        ))}
      </ul>
    );
  }
}
