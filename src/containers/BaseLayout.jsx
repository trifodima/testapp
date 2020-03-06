import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = (props) => (
  <div>
    <Header />
    <Container>
      <Row>
        <Col xs={12}>
          <main>{props.children}</main>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default connect()(BaseLayout);
