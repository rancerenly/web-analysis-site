import { Card, Container, Button } from "react-bootstrap";
import { PLAN_FILE } from "@/constants";

function PlanCard(): JSX.Element {
  return (
    <Card className="text-center">
      <Card.Header as="h1">Учебный план</Card.Header>
      <Card.Body>
        <Card.Text className="fs-4">
          Чтобы точно знать, что тебя ждет, посмотри план обучения.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className="d-flex justify-content-center p-0 gap-3">
          <Button size="lg" href={PLAN_FILE}>
            Открыть
          </Button>
          <a className="btn btn-primary btn-lg" href={PLAN_FILE} download>
            Сохранить
          </a>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default PlanCard;
