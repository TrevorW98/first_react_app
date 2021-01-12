import { Carousel } from 'react-bootstrap';
import Screenshot from '../../images/Screen.png';
import Screentwo from '../../images/Screentwo.png';
import Screenthree from '../../images/Screenthree.png';

const car = () => {
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

export default car;