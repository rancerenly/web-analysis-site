import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          <img
            alt=""
            src="/images/itmo-logo-light.svg"
            // width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <p style={{ margin: 0 }}>Веб-технологии</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
