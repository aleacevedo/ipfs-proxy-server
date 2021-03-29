import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Badge,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
} from "shards-react";
import ReactJson from "react-json-view";

import PageTitle from "../layouts/PageTitle";
import { getApiKeys, getLogs } from "../services/backend";

export default function ApiKeys() {
  const [apiKeys, setApiKeys] = useState([]);
  const [selectedApiKey, setSelectedApiKey] = useState(undefined);
  const [logs, setLogs] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  const jsonViewProps = {
    name: null,
    indentWidth: 2,
    displayObjectSize: false,
    displayDataTypes: false,
    enableClipboard: false,
  };

  const toggleModal = () => setOpenModal(!openModal);

  useEffect(() => {
    getApiKeys().then((response) => {
      if (response.status !== 200) return;
      setApiKeys(response.data.apiKeys);
    });
  }, []);

  useEffect(() => {
    if (!selectedApiKey) return;
    getLogs(selectedApiKey.id).then((response) => {
      if (response.status !== 200) return;
      setLogs({ logs: response.data.logs });
    });
  }, [selectedApiKey]);

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
                    <td>{apiKey.id}</td>
                    <td>
                      {apiKey.active ? (
                        <Badge theme="success">Si</Badge>
                      ) : (
                        <Badge theme="danger">No</Badge>
                      )}
                    </td>
                    <td>
                      {new Date(apiKey.createdAt).toLocaleString("es", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </td>
                    <React.Fragment>
                      <td>
                        <Button
                          onClick={() => {
                            setSelectedApiKey(apiKey);
                            setOpenModal(true);
                          }}
                        >
                          Ver
                        </Button>
                      </td>
                    </React.Fragment>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>{" "}
      <Modal open={openModal} toggle={toggleModal} scrollable={true}>
        <ModalHeader>{`Logs of ${
          selectedApiKey && selectedApiKey.id
        }`}</ModalHeader>
        <ModalBody>
          <ReactJson {...jsonViewProps} src={logs} />
        </ModalBody>
      </Modal>
    </Container>
  );
}
