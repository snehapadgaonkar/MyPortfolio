import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import virtualcampus from "../../Assets/Projects/virtualcampus.png";
import pocketly from "../../Assets/Projects/pocketly.jpg";
import attendance from "../../Assets/Projects/attendance.png";
import clvprediction from "../../Assets/Projects/clvprediction.png";
import house from "../../Assets/Projects/household.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualcampus}
              title="CampusTradeX: Virtual Campus Marketplace"
              description="The Virtual Campus Marketplace System simplifies the process of acquiring and discarding educational resources, creating a centralized online marketplace that overcomes geographical limitations and ensures equal access for all students."
              ghLink="https://github.com/snehapadgaonkar/Virtual-Campus-Marketplace_java.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pocketly}
              title="Pocketly: Expense Tracker"
              description="This project involves building an Expense Tracker application using the MERN stack (MongoDB, Express.js, React, Node.js) and Axios for making API requests, where a GenAI-powered chatbot allows users to interact and track their expenses in natural language, categorize transactions, and visualize spending patterns through charts and graphs."
              ghLink="https://github.com/snehapadgaonkar/Expense-Tracker.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              title="Student Attendance Dashboard"
              description="The Attendance Dashboard System is a web-based application built using the MERN stack (MongoDB, Express.js, React, Node.js) to facilitate efficient attendance management for schools, allowing users to easily track, record, and report attendance data with insightful visualizations and Axios for API requests."
              ghLink="https://github.com/snehapadgaonkar/attendance-dashboard.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clvprediction}
              title="Customer Lifetime Value Prediction"
              description="This project predicts Customer Lifetime Value (CLV) using classification models based on purchasing behavior, segmenting customers into 'High-Valued' and 'Low-Valued' categories. It employs algorithms like KNN, Logistic Regression, Decision Tree, Random Forest, and Naive Bayes, with metrics including Accuracy, Precision, Recall, F1 Score, and AUC-ROC."
              ghLink="https://github.com/snehapadgaonkar/CLV-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              title="Household Energy Consumption Prediction"
              description="This project develops a predictive model for household energy consumption using the UCI Household Power Consumption Dataset and weather data from the Meteostat API. By applying Linear Regression and evaluating with RMSE, MAE, and R-squared, it provides insights into energy usage patterns, achieving an R-squared value of 99.86%"
              ghLink="https://github.com/snehapadgaonkar/Household-energy-consumption-prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="My Portfolio"
              description="This project involves creating my personal portfolio website using React.js and Tailwind CSS. The portfolio showcases various projects, skills, and experiences in a clean and responsive design. It includes sections such as project showcases, an about me section, contact information, and possibly a blog or resume section. Tailwind CSS is used for styling and ensuring a consistent design system across the website."
              ghLink="https://github.com/your-username/my-portfolio.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
