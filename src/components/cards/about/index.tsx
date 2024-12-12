import { Card } from "react-bootstrap";

function AboutCard(): JSX.Element {
  return (
    <Card className="text-center border-0">
      <Card.Header as="h1" className="border-0" style={{ background: "none" }}>
        О программе
      </Card.Header>
      <Card.Body>
        <Card.Text className="fs-4">
          Вы станете специалистом по анализу веб-технологий и инструментов
          веб-разработки, проектированию веб-решений, овладеете навыками
          креативного мышления и научно-исследовательской работы в области
          экосистем веб-языков, новых подходов к решениям традиционных задач и
          прогнозирования развития веб-технологий.
        </Card.Text>
        <Card.Text className="fs-4">
          На программе учат анализировать веб-технологии и веб-решения, студенты
          изучают языки программирования, такие как JavaScript, TypeScript,
          Python, Java, Kotlin. За время обучения магистранты исследуют рынок
          технологий, проводят эксперименты, делятся хорошими практиками
          фронтенд и бэкенд разработки и реализуют собственный проект, для
          которого подбирают оптимальное сочетание инструментов, таких как
          Svelte, TypeScript, GraphQL, Node.js, JWT, Docker. По окончании
          программы выпускник может занимать должности: Middle JavaScript /
          Fullstack Developer, Senior JavaScript Developer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
