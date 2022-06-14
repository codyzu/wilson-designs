import { Container, Row, Col } from "reactstrap";
import { useSearchParams } from "react-router-dom";
import cx from "classnames";
import classes from "./home.module.css";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const imageModules = import.meta.globEager("./images/*.jpg");

const images = Object.entries(imageModules).sort(([a], [b]) => {
  if (a < b) {
    return 1;
  }

  if (a > b) {
    return -1;
  }

  return 0;
});

console.log("M", images);

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const photo = searchParams.get("photo");

  if (photo) {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            <img
              src={imageModules[photo].default}
              className="image-fluid"
              style={{ maxWidth: "100vw", maxHeight: "100vh" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <div
        className={cx(
          "vw-100 vh-100 overflow-hidden text-center d-flex justify-content-center mw-100",
          classes.funky,
          classes.hero
        )}
      >
        <h1 className="fw-bold d-inline-flex flex-column align-items-center align-self-center">
          <span>Wilson</span>
          <span>Designs</span>
        </h1>
      </div>
      <Container className="mt-5">
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <h4>Annecy, France</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="tel:+330612345678" className="text-decoration-none">
              <BsPhone className="me-2" />
              +33 6 12 34 56 78
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="mailto:kevin@wilson-designs.fr"
              className="text-decoration-none"
            >
              <AiOutlineMail className="me-2" />
              kevin@wilson-designs.fr
            </a>
          </Col>
        </Row>
        <Row className="g5">
          {images.map(([path, module]) => (
            <Col key={path} xs={12} sm={6} lg={4} className="p-5">
              <a
                href={`/?${new URLSearchParams({ photo: path }).toString()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSearchParams({ photo: path });
                }}
              >
                <div className="ratio ratio-16x9 justify-content-center">
                  <img
                    src={module.default}
                    className="img-fluid rounded shadow-lg mw-100 mh-100"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
              </a>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <small>
              Web design by{" "}
              <a href="https://twitter.com/codyzus">
                <FaTwitter /> @codyzus
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </>
  );
}
