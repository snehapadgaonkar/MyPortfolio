import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // Import the CSS file for custom styles
import laptop from "../../Assets/Projects/laptop.png";

function ProjectCards(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const laptopImage = new Image();
    const screenImage = new Image();

    laptopImage.src = laptop; // Load the laptop background
    screenImage.src = props.imgPath; // Load the dashboard or project image

    laptopImage.onload = () => {
      // Set canvas size to match laptop image size
      canvas.width = laptopImage.width;
      canvas.height = laptopImage.height;

      // Draw laptop background
      ctx.drawImage(laptopImage, 0, 0, canvas.width, canvas.height);

      // Adjust the screen image to fit inside the laptop screen area
      const screenX = canvas.width * 0.14; // Left offset for screen area
      const screenY = canvas.height * 0.09; // Top offset for screen area
      const screenWidth = canvas.width * 0.69; // Width of screen area
      const screenHeight = canvas.height * 0.78; // Height of screen area

      // Draw the screen image within the laptop screen
      screenImage.onload = () => {
        // Ensure the image fills the screen area proportionally
        ctx.drawImage(screenImage, screenX, screenY, screenWidth, screenHeight);
      };
    };
  }, [props.imgPath]);

  return (
    <Card className="project-card-view">
      <div className="laptop-container">
        <canvas ref={canvasRef} className="laptop-canvas" />
      </div>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Wrapper for buttons */}
        <div className="button-container">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
          {/* You can add more buttons here if needed */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
