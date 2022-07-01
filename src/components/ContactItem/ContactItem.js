import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userContact from '../../images/userContact.svg';
import s from './ContactItem.module.css';

export default class ContactItem extends Component {
  static propTypes = {
    contactData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contactData, deleteContact } = this.props;

    return (
      <li className={s.contactItem}>
        <img
          className={s.icon}
          src={userContact}
          alt="user icon"
          width={30}
          height={30}
        />
        <p className={s.contactName}>{contactData.name}:</p>
        <p className={s.contactNumber}>{contactData.number}</p>
        <button
          className={s.btnDelete}
          type="button"
          onClick={() => deleteContact(contactData.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
