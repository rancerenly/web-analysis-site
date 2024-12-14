import { Container } from "react-bootstrap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  AboutCard,
  CareerCard,
  ExamCard,
  PlanCard,
  ReviewCard,
  VideoCard,
} from "@/components/cards";

function Main(): JSX.Element {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Container className="d-flex flex-column min-h-100 py-5 gap-5">
        <AboutCard />
        <CareerCard />
        <VideoCard />
        <ReviewCard />
        <PlanCard />
        <ExamCard />
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
