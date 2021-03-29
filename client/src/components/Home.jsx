import React, { useEffect, useState } from "react";
import { Container, Card, CardBody, Row, Button } from "shards-react";

import PageTitle from "../layouts/PageTitle";
import {
  createApiKey,
  desactivateApiKey,
  getActiveApiKey,
} from "../services/backend";

export default function Home() {
  const [activeApiKey, setActiveApiKey] = useState(null);

  useEffect(() => {
    getActiveApiKey().then((response) => {
      if (response.status !== 200) return;
      setActiveApiKey(response.data.activeApiKey);
    });
  }, []);

  const createApiKeyHandler = () => {
    createApiKey().then((response) => {
      if (response.status !== 201) return;
      setActiveApiKey(response.data.apiKey);
    });
  };

  const desactivateAndCreateApiKeyHandler = async () => {
    desactivateApiKey(activeApiKey.id).then((response) => {
      if (response.status !== 200) return;
      createApiKeyHandler();
    });
  };

  return (
    <Container fluid>
      <Row className="page-header py-4" noGutters>
        <PageTitle className="text-sm-left" sm="4" subtitle="" title="HOME" />
      </Row>
      <Card>
        <CardBody>
          <div>
            {activeApiKey ? (
              <div>
                <p>{`Your active api-key is: ${activeApiKey.id}`}</p>
                <Button onClick={desactivateAndCreateApiKeyHandler}>
                  Create a new api-key and desactivate old one
                </Button>
              </div>
            ) : (
              <div>
                <p>You don not have an apy key, create one please</p>
                <Button onClick={createApiKeyHandler}>Create api-key</Button>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </Container>
  );
}
