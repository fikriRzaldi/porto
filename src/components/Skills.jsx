import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import php from "../assets/img/php.png";
import js from "../assets/img/js.png";
import nextjs from "../assets/img/nextjs.svg";
import react from "../assets/img/react.png";
import figma from "../assets/img/figma.png";
import bootstrap from "../assets/img/bootstrap.png";
import tailwind from "../assets/img/tailwind.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Some skills that I've learned and used in my projects. I'm still
                learning and improving my skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Image" />
                  <h5>Next JS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5 style={{ marginTop: "63px" }}>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Image" style={{ height: "50%" }} />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
