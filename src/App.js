import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Carousel, Container, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import Screenshot from './images/Screen.png';
import Screentwo from './images/Screentwo.png';
import Screenthree from './images/Screenthree.png';


function Bar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}


function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img

            width="75%"
            src={Screenshot}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>These are the glitches i've experienced in CYBERPUNK</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            width="75%"
            src={Screentwo}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
        <h3>These are the glitches i've experienced in CYBERPUNK</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            width="75%"
            src={Screenthree}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
        <h3>These are the glitches i've experienced in CYBERPUNK</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

function Butt() {
  return (
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

function LiGroup() {
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

function FooterBar() {
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


function App() {
  return (
    <>
      <Bar />
      <Caro />
      <Butt />
      <LiGroup />
      <FooterBar />
    </>
  );
}

export default App;
