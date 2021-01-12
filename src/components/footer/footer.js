import { Container, Row, Col} from 'react-bootstrap';

const Foot = () => {
    return (
        <>
        <Container fluid className="mt-5">
          <Row>
            <Col className="BGColor d-flex justify-content-center">
                <p className="White mt-2">
                  This is a footer here
                </p>
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Foot;