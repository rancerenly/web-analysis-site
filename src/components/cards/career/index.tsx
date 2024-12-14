import { Card, Carousel } from "react-bootstrap";
import styles from "./styles.module.css";

function CareerCard(): JSX.Element {
  return (
    <Card className="text-center border-0">
      <Card.Header
        as="h1"
        className="border-0"
        style={{ background: "none" }}
        id="career"
      >
        Карьера
      </Card.Header>
      <Card.Body>
        <Card.Text className="fs-4">
          По окончании программы вы можете занимать должности: Middle JavaScript
          / Fullstack Developer, Senior JavaScript Developer.
        </Card.Text>
        <Carousel className="bg-white rounded" indicators={false}>
          <Carousel.Item>
            <img
              className={styles.company_logo}
              src="images/company-logos/deutschetelekom.png"
              alt="Логотип Deutsche Telekom"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.company_logo}
              src="images/company-logos/banksanktpeterburg.png"
              alt="Логотип Банк Санкт-Петербург"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.company_logo}
              src="images/company-logos/unidata.png"
              alt="Логотип Unidata"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.company_logo}
              src="images/company-logos/netcracker.png"
              alt="Логотип Netcracker"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.company_logo}
              src="images/company-logos/epam.png"
              alt="Логотип Epam"
            />
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
}

export default CareerCard;
