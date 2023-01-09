import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import wa from "../assets/img/wa-proj.png";
import appotek from "../assets/img/appotek.png";
import ppcb from "../assets/img/ppcb.png";
import appetite from "../assets/img/appetite.png";
import mindcafe from "../assets/img/mindcafe.png";
import choco from "../assets/img/choco.png";

export const Projects = () => {
  const projects = [
    {
      title: "Appotek",
      description: "Simple Pharmacy WebApp Made With PHP",
      imgUrl: appotek,
      link: "https://github.com/mynfix/appotek",
    },
    {
      title: "PPCB",
      description: "PHP CRUD",
      imgUrl: ppcb,
      link: "https://github.com/mynfix/PPCB.ID",
    },
    {
      title: "Whatsapp Clone",
      description: "Next JS Project",
      imgUrl: wa,
      link: "https://github.com/mynfix/whatsapp-cl-v2",
    },
  ];
  const design = [
    {
      title: "Appetite",
      description: "Web Restaurant Design",
      imgUrl: appetite,
      link: "https://www.figma.com/file/pjZaqk0g0Wn4BAGfDj0rVz/appetite?node-id=0%3A1",
    },
    {
      title: "MindCafe",
      description: "Landing Page Cafe Design",
      imgUrl: mindcafe,
      link: "https://www.figma.com/file/TdpxiX7Ks6UhXmI9IIlz0m/Cafe-Landing-Page",
    },
    {
      title: "Chocolate UI",
      description: "UI Design",
      imgUrl: choco,
      link: "https://www.figma.com/file/DkMLz9DCzvbPHd5R1hm3xI/ntah?node-id=0%3A1&t=0hDZyJKqPA49BriQ-1",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some projects that I've done</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">WEB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">UI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Random</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="konten">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {design.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Empty</p>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
