import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className=" my-5 mainPage">
        <section className="bg-dark text-light p-4 mt-4 rounded border">
          <h2 className="text-center mb-4">Agregar Nueva Cita</h2>
          <Formulario></Formulario>
        </section>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <a href="https://github.com/KameyhaFacundo" className="text-secondary">
          Facundo Kameyha
        </a>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
