import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import './Hero.css'
function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/originals/23/06/6a/23066a400088462c450f4c827a323044.jpg"
          alt="First slide"
          fluid={true}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/originals/23/06/6a/23066a400088462c450f4c827a323044.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/originals/23/06/6a/23066a400088462c450f4c827a323044.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;