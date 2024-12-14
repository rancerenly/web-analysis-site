import { Card, Container, Button } from "react-bootstrap";
import { ABIT_URL } from "@/constants";

function AboutCard(): JSX.Element {
  return (
    <Card className="text-center border-0">
      <Card.Header
        as="h1"
        className="border-0"
        style={{ background: "none" }}
        id="abit"
      >
        Подробнее
      </Card.Header>
      <Card.Body>
        <Card.Text className="fs-4">
          Более подробная информация об образовательной программе доступна на
          сайте приёмной комиссии.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-0" style={{ background: "none" }}>
        <Container className="d-flex justify-content-center p-0 gap-3">
          <Button size="lg" href={ABIT_URL}>
            Перейти
          </Button>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default AboutCard;
