import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function passwordChange() {
  return (
    <Container>
      <Row className="mt-3">
        <Col xl={{ size: 4, offset: 4 }} style={{ textAlign: 'center' }}>
          <h3 className="page_title">Change Password</h3>
        </Col>
      </Row>
      <Row>
        <Col xl={{ size: 4, offset: 4 }}>
          <div className="card">
            <form method="POST">
              <div className="form-group">
                <label htmlFor="current-password">Current Password:</label>
                <input type="password" name="current-password" id="current-password" />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password:</label>
                <input type="password" name="new-password" id="new-password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm New Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />
              </div>
              <div className="form-group">
                <button type="submit" className="button submit">Save Change</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
