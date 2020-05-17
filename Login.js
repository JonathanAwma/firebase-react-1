import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default () => (
  <div class="login-card">
    <Card style={{ width: "200px" }}>
      <Card.Body>
        <div>
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button type="submit" varient="primary">
              LogIn
            </Button>
          </Form>
        </div>
      </Card.Body>
    </Card>
  </div>
);
