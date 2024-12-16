import { Spinner as SpinnerBS } from "react-bootstrap";

function Spinner(): JSX.Element {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-body">
      <SpinnerBS animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </SpinnerBS>
    </div>
  );
}

export default Spinner;
