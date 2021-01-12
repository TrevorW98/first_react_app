import { Button, Container, Row, Col } from 'react-bootstrap';

const buttons = () => {
    return(
        <>
        <Container className="mt-5">
        <Row>
          <Col>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
          </Col>
          <Col>
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
          </Col>
          <Col>
            <Button variant="danger">Danger</Button>
            <Button variant="light">Light</Button>
            <Button variant="link">Link</Button>
          </Col>
        </Row>
      </Container>
    </>
    )
}

export default buttons;