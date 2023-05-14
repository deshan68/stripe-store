import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponents from "./compononts/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <NavbarComponents></NavbarComponents>
    </Container>
  );
}

export default App;
