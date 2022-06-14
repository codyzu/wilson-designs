import { Container, Row, Col } from "reactstrap";
import { Link, useSearchParams } from "react-router-dom";
import classes from "./home.module.css";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const imageModules = import.meta.glob("./images/*.jpg");

const images = Object.keys(imageModules)
  .sort()
  .reverse()
  .map((image) => new URL(image, import.meta.url).href);

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const photo = searchParams.get("photo");

  if (photo) {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            <img
              src={photo}
              className="image-fluid"
              style={{ maxWidth: "100vw", maxHeight: "100vh" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs="auto" className={classes.funky}>
          <h1 className="fw-bold d-inline-flex flex-column align-items-center">
            <span>Wilson</span>
            <span>Designs</span>
          </h1>
        </Col>
      </Row>
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
        {images.map((image) => (
          <Col key={image} xs={12} sm={6} lg={4} className="p-5">
            <a
              href={`/?${new URLSearchParams({ photo: image }).toString()}`}
              onClick={(e) => {
                e.preventDefault();
                setSearchParams({ photo: image });
              }}
            >
              <div className="ratio ratio-16x9 justify-content-center">
                <img
                  src={image}
                  className="img-fluid rounded shadow-lg mw-100 mh-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
