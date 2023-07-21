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
          <Col>
            <div
              className="d-flex justify-content-center align-items-center mb-3"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            ></div>
          </Col>
          <Col>
            <p className="mb-4">{nombreMascota}</p>

            <p className="mb-3">{nombreDuenio}</p>
          </Col>
        </Row>
        <hr className="border-1 my-0" />
        <Row>
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
