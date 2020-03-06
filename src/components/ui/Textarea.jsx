import React from 'react';
import { Form } from 'react-bootstrap';

const Textarea = ({
  label,
  ...custom
}) => (
  <Form.Group controlId={label}>
    {
      label &&
      <Form.Label className="form-label-block">{label}</Form.Label>
    }
    <Form.Control
      as="textarea"
      rows="3"
      {...custom}
    />
  </Form.Group>
);

export default Textarea;
