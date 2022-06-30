import React, { Component } from 'react';
import Container from '../Container';
import s from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <Container>
          <h1 className={s.title}>{title}</h1>
          {children}
        </Container>
      </section>
    );
  }
}
