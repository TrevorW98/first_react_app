import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const List = () => {
    return (
        <>
      <Container className="mt-5">
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>No style</ListGroup.Item>
              <ListGroup.Item variant="primary">Primary</ListGroup.Item>
              <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
              <ListGroup.Item variant="success">Success</ListGroup.Item>
              <ListGroup.Item variant="danger">Danger</ListGroup.Item>
              <ListGroup.Item variant="light">Light</ListGroup.Item>
              <ListGroup.Item variant="dark">Dark</ListGroup.Item>
              <ListGroup.Item variant="warning">Warning</ListGroup.Item>
              <ListGroup.Item variant="info">Info</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
    )
}
export default List;