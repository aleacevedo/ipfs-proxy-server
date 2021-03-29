import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, Row, Col } from "shards-react";

import PageTitle from "../layouts/PageTitle";
import MainLayout from "../layouts/MainLayout";

export default function ApiKeys({ apiKeys }) {
  apiKeys = [];
  return (
    <Container fluid>
      <Row className="page-header py-4" noGutters>
        <PageTitle
          className="text-sm-left"
          sm="4"
          subtitle=""
          title="API-KEYS"
        />
      </Row>
      <Card>
        <CardBody>
          <table className="table mb-0 table-hover">
            <thead className="bg-light">
              <tr>
                <th className="border-0" key="id" scope="col">
                  ID
                </th>
                <th className="border-0" key="activated" scope="col">
                  Activated
                </th>
                <th className="border-0" key="createdAt" scope="col">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((apiKey) => {
                return (
                  <tr key={apiKey.id}>
                    <td>apiKey.id</td>
                    <td>apiKey.activate</td>
                    <td>
                      {new Date(apiKey.createdAt).toLocaleString("es", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </td>
                    <React.Fragment>
                      <td>
                        <Link to={`logs/${apiKey.id}`}>Ver</Link>
                      </td>
                    </React.Fragment>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Container>
  );
}
