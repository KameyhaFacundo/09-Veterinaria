import React from "react";
import Item from "./Item";
import { Row, Col } from "react-bootstrap";

const Citas = ({ citas }) => {
  return (
    <>
      <div className="mt-4">
        <h3 className="text-center dark">Administra las citas aqui</h3>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {citas.map((cita, index) => (
            <Col key={index}>
              <Item
                nombreMascota={cita.nombreMascota}
                nombreDuenio={cita.nombreDuenio}
                fecha={cita.fecha}
                hora={cita.hora}
                sintomas={cita.sintomas}
              ></Item>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Citas;
