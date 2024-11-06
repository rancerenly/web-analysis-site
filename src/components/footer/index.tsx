import Container from "react-bootstrap/Container";

function Footer(): JSX.Element {
  return (
    <footer className="bg-body-tertiary py-3 mt-auto">
      <Container className="d-flex flex-row justify-content-center gap-3">
        <p className="m-0">© 2024 mrskycriper & rancerenly</p>
        <a href="https://github.com/rancerenly/web-analysis-site">
          <i className="bi-github me-1" style={{ width: "16px" }} />
          GitHub
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
