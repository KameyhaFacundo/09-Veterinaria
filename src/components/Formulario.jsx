import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Citas from "./Citas";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setDuenioMascota] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [citas, setCitas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaCita = {
      nombreMascota,
      nombreDuenio,
      fecha,
      hora,
      sintomas,
    };

    setCitas([...citas, nuevaCita]);

    setNombreMascota("");
    setDuenioMascota("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  const hayCitas = () => {
    return citas.length > 0 ? (
      <Citas citas={citas} borrarCita={borrarCita}></Citas>
    ) : (
      <div
        className="p-5"
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      >
        <h3 className="text-center p-5">No hay citas</h3>
      </div>
    );
  };

  const borrarCita = (borrarMascota) => {
    let listaCitas = citas.filter(
      (itemCita) => itemCita.nombreMascota !== borrarMascota
    );
    setCitas(listaCitas);
  };

  return (
    <>
      <Form
        className="bg-dark text-light p-4 my-4 rounded border"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mb-4">Veterinaria</h2>
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
            <Form.Group controlId="nombreDuenio">
              <Form.Label>Dueño de Mascota</Form.Label>
              <Form.Control
                type="text"
                value={nombreDuenio}
                onChange={(e) => setDuenioMascota(e.target.value)}
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
      <h1>{hayCitas()}</h1>
    </>
  );
};

export default Formulario;
