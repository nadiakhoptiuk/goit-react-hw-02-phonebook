import React, { Component } from 'react';
import { debounce } from 'debounce';
import s from './FormAddContact.module.css';

export default class FormAddContact extends Component {
  render() {
    const { onSubmitForm, onChangeName, onChangeNumber } = this.props;

    return (
      <form className={s.form} onSubmit={onSubmitForm}>
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={debounce(onChangeName, 100)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            onChange={debounce(onChangeNumber, 100)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
