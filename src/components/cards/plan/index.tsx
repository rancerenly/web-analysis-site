import { Card, Container, Button } from "react-bootstrap";
import { PLAN_FILE } from "@/constants";

function PlanCard(): JSX.Element {
  const variant = localStorage.getItem("a-b-test-variant") ?? "1";

  return (
    <Card className="text-center border-0">
      <Card.Header
        as="h1"
        className="border-0"
        style={{ background: "none" }}
        id="plan"
      >
        Учебный план
      </Card.Header>
      <Card.Body>
        <Card.Text className="fs-4">
          Чтобы точно знать, что тебя ждет, посмотри план обучения.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-0" style={{ background: "none" }}>
        <Container className="d-flex justify-content-center p-0 gap-3">
          {variant === "2" ? (
            <Button
              size="lg"
              href={PLAN_FILE}
              onClick={() => window.ym(99222941, "reachGoal", "getPlan")}
            >
              Показать страницу
            </Button>
          ) : (
            <a
              className="btn btn-primary btn-lg"
              href={PLAN_FILE}
              download
              onClick={() => window.ym(99222941, "reachGoal", "getPlan")}
            >
              Загрузить файл
            </a>
          )}
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default PlanCard;
