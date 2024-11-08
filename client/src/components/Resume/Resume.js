import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Resume.css";
import ResumePDF from "../../Assets/my_resume.pdf";

const Resume = () => {
  return (
    <Container fluid className="resume-section py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="text-center">
          <h2 className="resume-title mb-4">
            My <strong className="purple">Resume </strong>
          </h2>
          <div className="resume-iframe-container mb-4">
            <iframe
              src={ResumePDF}
              className="resume-iframe"
              title="Resume"
              width="100%"
              height="600"
            ></iframe>
          </div>
          <div className="resume-buttons">
            <Button
              variant="outline-light"
              href={ResumePDF}
              target="_blank"
              className="download-button px-4 py-2"
            >
              Download Resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
