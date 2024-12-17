import React from "react";
import styled from "styled-components";

const WorkExperience = () => {
  return (
    <ExperienceContainer>
      <h1>Work Experience</h1>
      <div className="experience">
          <ProjectCard>
          <h3>Data Science Intern</h3>
          <p>Oasis Info Byte | July – August 2024</p>
          <ul>
            <li>Performed thorough data analysis to uncover trends and correlations.</li>
            <li>Implemented data validation processes to ensure data integrity.</li>
          </ul>
          <a href="https://github.com/gladwinjs/OIBSIP">View on GitHub</a>
          </ProjectCard>
          <ProjectCard>
          <h3>Machine Learning Intern</h3>
          <p>Code Alpha | July – August 2024</p>
          <ul>
            <li>Implemented machine learning techniques and feature engineering.</li>
            <li>Evaluated models using precision, recall, and AUC-ROC metrics.</li>
          </ul>
          <a  href="https://github.com/gladwinjs/CodeAlpha">View on GitHub</a>
          </ProjectCard>
          <ProjectCard>
          <h3>Artificial Intelligence Intern</h3>
          <p>Hunar Intern | Oct – Nov 2024</p>
          <ul>
            <li>Developed an AI-powered chatbot for automated query resolution.</li>
            <li>Built an image classification model using CNNs.</li>
            <li>Designed a weather prediction system with machine learning algorithms.</li>
          
          </ul>
          <a href="https://github.com/gladwinjs/Hunar-Internship">View on GitHub</a>
          </ProjectCard>
      </div>
    </ExperienceContainer>
  );
};

export default WorkExperience;

/* Styled Components */
const ExperienceContainer = styled.div`
  padding: 2rem;
  background:rgb(17, 32, 70);
  min-height: 100vh;
  text-align: center;
  

  h1 {
    color: #007bff;
    margin-bottom: 1.5rem;
  }

  .experience {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

    h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }
      

    p {
      color: #555;
      margin-bottom: 1rem;
    }

    ul {
      text-align: left;
      list-style: disc;
      margin-left: 1rem;

      li {
        margin-bottom: 0.5rem;
        color: #666;
      }
    }
  }
`;
const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
    a {
      color: #007bff;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
        text-decoration: underline;
      }
  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    color: #007bff;
  }
`;