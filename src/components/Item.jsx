import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

const Item = ({
  nombreMascota,
  nombreDuenio,
  fecha,
  hora,
  sintomas,
  borrarCita,
}) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={3}>
            <div
              className="d-flex justify-content-center align-items-center mb-3"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "#007bff",
                padding: 0,
                margin: 0,
              }}
            ></div>
          </Col>
          <Col>
            <p className="mb-4 fs-6">Mascota: {nombreMascota}</p>

            <p className="mb-3 fs-6">Dueño: {nombreDuenio}</p>
          </Col>
        </Row>
        <hr className="border-1 my-0" />
        <Row className=" fs-6">
          <p>Fecha: {fecha}</p>
          <p>Hora: {hora}</p>
          <p>Síntomas: {sintomas}</p>
        </Row>
        <hr className="border-1 my-0" />
      </Card.Body>

      <Button
        className="m-2"
        variant="success"
        onClick={() => borrarCita(nombreMascota)}
      >
        Borrar
      </Button>
    </Card>
  );
};

export default Item;
