import React from 'react';
import { Form } from 'react-bootstrap';

const Select = (props) => {
  const {
    label,
    children,
    errorMessage,
    ...custom
  } = props;

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      {
        label &&
        <Form.Label className="form-label-block">{label}</Form.Label>
      }
      <Form.Control
        as="select"
        className={errorMessage && 'error'}
        { ...custom }
      >
        {children}
      </Form.Control>
      {errorMessage && <span className="error-text">{errorMessage}</span>}
    </Form.Group>
  );
};

export default Select;
