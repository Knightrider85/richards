import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  const footerStyle = {
    backgroundColor: "#333", // Dark background color
    color: "#ff9100", // Text color
    padding: "2rem 0", // Add some padding for better spacing
  };

  const colStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md style={colStyle}>
            <div>
              <h5>Kontakt Information</h5>
              <p>Richards Byggservice</p>
              <p>Kungsbacka vägen 6</p>
              <p>
                Mobil: <a href="tel:+46708867701">070-8867701</a>
              </p>{" "}
              <p>
                Email: 
                <a
                  href="mailto:richardsbyggserviceab@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  richardsbyggserviceab@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col md style={colStyle}>
            <div>
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
