import { Card, Container, Button } from "react-bootstrap";
import { EXAM_FILE } from "@/constants";

function ExamCard(): JSX.Element {
  return (
    <Card className="text-center">
      <Card.Header as="h1">Вопросы для вступительного экзамена</Card.Header>
      <Card.Body>
        <Card.Text className="fs-4">
          Из этих вопросов будут состоять билеты на экзамене.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className="d-flex justify-content-center p-0 gap-3">
          <Button size="lg" href={EXAM_FILE}>
            Открыть
          </Button>
          <a className="btn btn-primary btn-lg" href={EXAM_FILE} download>
            Сохранить
          </a>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default ExamCard;
