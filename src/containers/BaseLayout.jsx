import React, { Component } from 'react';
// import './BaseLayout.scss';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs={12}>
              <main>{this.props.children}</main>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps)(BaseLayout);
