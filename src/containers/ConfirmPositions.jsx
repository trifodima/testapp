import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Button, Card } from 'react-bootstrap';

const ConfirmPositions = (props) => {
  const { positions } = props;

  return (
    <div className="page">
      <h1>Confirm positions</h1>
      {
        !!positions.length
        ? <Accordion>
          {positions && positions.map(position =>
            <Card key={position.id}>
              <Accordion.Toggle as={Card.Header} className="accordion-link" variant="link" eventKey={position.id}>
                {position.title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={position.id}>
                <Card.Body>
                  <ul>
                    <li>
                      <span>Department: </span>
                      <span>{position.department}</span>
                    </li>
                    <li>
                      <span>Description: </span>
                      <span>{position.description}</span>
                    </li>
                    <li>
                      <span>Status: </span>
                      <span>{position.status}</span>
                    </li>
                    <li>
                      <span>Date: </span>
                      <span>{position.date}</span>
                    </li>
                  </ul>
                  {position.status === 'open'
                    ? <div className="button-wrapper">
                      <Button
                        size="lg"
                        type="submit"
                      >Apply</Button>
                    </div>
                    : <div className="alert alert-warning" role="alert">
                      Position status closed
                    </div>
                  }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
        </Accordion>
        : <p>No positions</p>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    positions: state.positionsReducer.positions,
  };
};
export default connect(mapStateToProps)(ConfirmPositions);
