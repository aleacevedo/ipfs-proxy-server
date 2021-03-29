import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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

import PageTitle from "../layouts/PageTitle";
import { loginUser } from "../services/backend";

export default function LogIn() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const queryParams = new URLSearchParams(useLocation().search);
  const redirectTo = queryParams.get("redirect") || "/home";

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(emailOrUsername, password).then((response) => {
      if (response.status !== 200) return setError(true);
      window.location.href = redirectTo;
    });
  };

  return (
    <Container fluid>
      <Row className="page-header py-4" noGutters>
        <PageTitle className="text-sm-left" sm="4" subtitle="" title="LOG-IN" />
      </Row>
      <Alert theme="danger" open={error}>
        There was an error
      </Alert>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="#usernameOrUsername">Email/Username</label>
              <FormInput
                id="#usernameOrUsername"
                placeholder="Email/Username"
                value={emailOrUsername}
                onChange={(event) => {
                  event.preventDefault();
                  setEmailOrUsername(event.target.value);
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
            <Button type="submit">Log In</Button>
            <hr />
            <a href={`/signup?redirect=${redirectTo}`}>
              Crear una cuenta nueva
            </a>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
