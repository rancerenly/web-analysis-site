import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Main(): JSX.Element {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Container className="d-flex flex-column h-100 py-5 gap-3">
        <Card className="p-3">
          <Card.Text>Сайт программы веб-технологий</Card.Text>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
