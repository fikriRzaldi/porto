import { Col, Row, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6} style={{ marginTop: "30px" }}>
            <h1 className="logo">mynfix</h1>
          </Col>
          <Col
            sm={6}
            className="text-center text-sm-end"
            style={{ marginTop: "30px" }}
          >
            <div className="social-icon">
              <a href="https://github.com/mynfix">
                <img src={navIcon1} alt="" />
              </a>
              <a href="">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/fikrizald/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>&copy; Fikri Rizaldi. All Right reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
