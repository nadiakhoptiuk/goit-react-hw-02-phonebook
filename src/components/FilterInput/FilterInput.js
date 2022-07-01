import React, { Component } from 'react';
import s from './FilterInput.module.css';

export default class FilterInput extends Component {
  render() {
    const { state, onFindContacts } = this.props;

    return (
      <>
        {state.contacts.length ? (
          <label className={s.inputLabel}>
            Find contact by name
            <input
              className={s.filterInput}
              type="text"
              name="filter"
              onChange={onFindContacts}
            />
          </label>
        ) : (
          <p className={s.notification}>You haven't added any contact yet...</p>
        )}
      </>
    );
  }
}
