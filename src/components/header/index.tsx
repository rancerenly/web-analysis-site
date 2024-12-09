import { Navbar, Container } from "react-bootstrap";
import ThemeSwitcher from "@/components/theme-switcher";
import { APP_BASE_PATH } from "@/constants";

function Header(): JSX.Element {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href={APP_BASE_PATH} style={{ color: "white" }}>
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
