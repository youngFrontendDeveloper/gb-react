import { Col, Container, ListGroup, Row } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row className="mb-3">
        <h1 className="page__title">This is a Home page</h1>
        <p className="fs-5">
          Это моя учебная работа на курсе GeekBrains:
          <br />
          <span className="fw-bold">"ReactJS. Базовый курс"</span>
        </p>
      </Row>
      <Row>
        <h2 className="mb-2">Изученные темы:</h2>
      </Row>
      <Row>
        <Col className="mx-auto mb-5" sm={10} md={8} lg={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>Компоненты в React</ListGroup.Item>
            <ListGroup.Item>Жизненный цикл компонентов</ListGroup.Item>
            <ListGroup.Item>Роутинг в React</ListGroup.Item>
            <ListGroup.Item>Знакомство с Redux</ListGroup.Item>
            <ListGroup.Item>Redux-middlewares</ListGroup.Item>
            <ListGroup.Item>Работа с API</ListGroup.Item>
            <ListGroup.Item>Знакомство с Firebase</ListGroup.Item>
            <ListGroup.Item>
              Использование в проекте React-Bootstrap
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
