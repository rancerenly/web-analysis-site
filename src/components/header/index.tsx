import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          <img
            alt="ИТМО"
            src="/images/itmo-web-tech-logo-light.svg"
            height="60"
            width="160"
            className="d-inline-block"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
