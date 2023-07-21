import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [dueñoMascota, setDueñoMascota] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nombre Mascota:", nombreMascota);
    console.log("Dueño Mascota:", dueñoMascota);
    console.log("Fecha:", fecha);
    console.log("Hora:", hora);
    console.log("Síntomas:", sintomas);
    e.target.reset();
  };

  return (
    <Form className="bg-dark text-light" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="nombreMascota">
            <Form.Label>Nombre de Mascota</Form.Label>
            <Form.Control
              type="text"
              value={nombreMascota}
              onChange={(e) => setNombreMascota(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dueñoMascota">
            <Form.Label>Dueño de Mascota</Form.Label>
            <Form.Control
              type="text"
              value={dueñoMascota}
              onChange={(e) => setDueñoMascota(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="fecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="hora">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="sintomas" className="mb-3">
        <Form.Label>Síntomas</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Agregar Nueva Cita
      </Button>
    </Form>
  );
};

export default Formulario;
