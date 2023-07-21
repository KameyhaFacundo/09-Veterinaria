import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="bg-dark text-light">
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="nombreMascota">
            <Form.Label>Nombre de Mascota</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dueñoMascota">
            <Form.Label>Dueño de Mascota</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="fecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="hora">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="sintomas" className="mb-3">
        <Form.Label>Síntomas</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Agregar Nueva Cita
      </Button>
    </Form>
  );
};

export default Formulario;
