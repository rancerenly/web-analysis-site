import { Container, Card, Button } from "react-bootstrap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PLAN_FILE, EXAM_FILE } from "@/constants";

function Main(): JSX.Element {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Container className="d-flex flex-column h-100 py-5 gap-3">
        <Card>
          <Card.Header>
            <Card.Title>Сайт программы веб-технологий</Card.Title>
          </Card.Header>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Учебный план</Card.Title>
          </Card.Header>

          <Card.Body>
            <Container className="d-flex p-0 gap-2">
              <Button href={PLAN_FILE}>Открыть</Button>
              <a className="btn btn-primary" href={PLAN_FILE} download>
                Сохранить
              </a>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Вопросы к экзамену</Card.Title>
          </Card.Header>

          <Card.Body>
            <Container className="d-flex p-0 gap-2">
              <Button href={EXAM_FILE}>Открыть</Button>
              <a className="btn btn-primary" href={EXAM_FILE} download>
                Сохранить
              </a>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
