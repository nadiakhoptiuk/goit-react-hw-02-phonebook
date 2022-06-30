import React, { Component } from 'react';
import { debounce } from 'debounce';
import s from './FormAddContact.module.css';

export default class FormAddContact extends Component {
  render() {
    const { onSubmitForm, onChangeForm } = this.props;

    return (
      <form className={s.form} onSubmit={onSubmitForm}>
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={debounce(onChangeForm, 100)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
