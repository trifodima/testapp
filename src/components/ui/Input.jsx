import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
  const {
    label,
    errorMessage,
    ...custom
  } = props;

  return (
    <Form.Group controlId={label}>
      {
        label &&
        <Form.Label className="form-label-block">{label}</Form.Label>
      }
      <Form.Control
        className={errorMessage && 'error'}
        {...custom}
      />
      {errorMessage && <span className="error-text">{errorMessage}</span>}
    </Form.Group>
  );
};

export default Input;
