import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormInput,
  Container,
  Row,
  CardBody,
  Card,
  Button,
  Alert,
} from "shards-react";
import { useLocation } from "react-router-dom";

import PageTitle from "../layouts/PageTitle";
import { createUser } from "../services/backend";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const queryParams = new URLSearchParams(useLocation().search);
  const redirectTo = queryParams.get("redirect") || "/home";

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(email, username, password).then((response) => {
      if (response.status !== 201) return setError(true);
      window.location.href = redirectTo;
    });
  };

  return (
    <Container fluid>
      <Row className="page-header py-4" noGutters>
        <PageTitle
          className="text-sm-left"
          sm="4"
          subtitle=""
          title="SIGN-UP"
        />
      </Row>
      <Alert theme="danger" open={error}>
        There was an error
      </Alert>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="#email">Email</label>
              <FormInput
                id="#email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  event.preventDefault();
                  setEmail(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Username</label>
              <FormInput
                id="#username"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  event.preventDefault();
                  setUsername(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Password</label>
              <FormInput
                type="password"
                id="#password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  event.preventDefault();
                  setPassword(event.target.value);
                }}
              />
            </FormGroup>
            <Button type="submit">SIGN UP</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
