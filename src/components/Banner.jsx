import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import Alert from "react-bootstrap/Alert";
import bootstrap from "../assets/img/bootstrap.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // text animation di banner
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <div className="ale">
          <Alert key="danger" variant="danger">
            Open it on PC browser for better UI, cause the css for mobile is not
            finished yet hehe...
          </Alert>
        </div>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my website</span>
            <h1 className="txt">
              {`Hi I'm Fikri `}
              <span className="wrap">
                <br />
                {text}
              </span>
            </h1>
            <p>
              Hello everyone my name is Fikri Rizaldi, Everyone 
              usually called me Fikri, I'm a college student at 
              Universitas Pembangunan Jaya.
            </p>
            {/* <button onClick={() => console.log("connect")}>
              Lets connect <ArrowRightCircle size={25} />{" "}
            </button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header IMG" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
