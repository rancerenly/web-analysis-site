import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ThemeSwitcher from "@/components/theme-switcher";

function Header(): JSX.Element {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand
          href={`${import.meta.env.BASE_URL}`}
          style={{ color: "white" }}
        >
          <img
            alt="ИТМО"
            src="images/itmo-web-tech-logo-light.svg"
            height="60"
            width="160"
            className="d-inline-block"
          />
        </Navbar.Brand>
        <ThemeSwitcher />
      </Container>
    </Navbar>
  );
}

export default Header;
