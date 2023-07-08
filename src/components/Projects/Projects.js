import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import yt from "../../Assets/Projects/yt.png";
import po from "../../Assets/Projects/po.png";
import food from "../../Assets/Projects/food.png";
import pet from "../../Assets/Projects/pet.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="A todo list made with React.js provides a user-friendly interface to manage tasks efficiently and stay organized."
              ghLink="https://github.com/SanjoySaha24/To-do-list_React"
              demoLink="https://todolistnet.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt}
              isBlog={false}
              title="Youtube clone"
              description="The YouTube clone, built with React.js, Material-UI, and API integration, delivers a feature-rich platform with responsive design, video playback, search functionality, user authentication, and dynamic content loading. It replicates the familiar YouTube experience while providing customization and extensibility for developers.
               "
              ghLink="https://github.com/SanjoySaha24/YOUTUBE"
              demoLink="https://youtubeclone-reactjs.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={po}
              isBlog={false}
              title="Portfolio"
              description="The portfolio website built with React.js and Material-UI showcases my skills, projects, and achievements. It features responsive design, smooth animations, and interactive components to present my work effectively and impressively."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery Website UI"
              description="The food delivery website, designed using HTML and CSS, offers a seamless ordering experience. It showcases a variety of delicious dishes, provides easy navigation, and ensures a visually appealing layout. Customers can explore menus, place orders, and enjoy convenient delivery options."
              ghLink="https://github.com/SanjoySaha24/VAT-FoodDeliveryWebsite"
              demoLink="https://sanjoysaha24.github.io/VAT-FoodDeliveryWebsite/"
/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet}
              isBlog={false}
              title="PetZee"
              description="One-stop solution for pet owners and their furry
              friends.
              • Focused on developing the front-end part of the
              pet-shop section, ensuring a user-friendly and intuitive interface for customers"
              ghLink="https://github.com/SanjoySaha24/Project-PetZee"
              demoLink="https://petzee.pikselas.repl.co/Portfolio%20Page/portfolio.html"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
