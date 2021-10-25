import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function login() {
  return (
    <Container>
      <Row className="mt-3">
        <Col xl={{ size: 4, offset: 4 }} style={{ textAlign: 'center' }}>
          <h1 className="app_title">Yasiin</h1>
        </Col>
      </Row>
      <Row>
        <Col xl={{ size: 4, offset: 4 }}>
          <div className="card">
            <form method="POST">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="form-group">
                <button type="submit" className="button submit">Submit</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
