import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      title: "Instagram Scraper",
      description: "A Python tool for scraping Instagram profile metrics.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      link: "https://github.com/gladwinjs/Web-Scrapping",
    },
    {
      title: "Bill Reminder App",
      description: "Web app to track and manage your bill payments.",
      img: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/6cc15fa4-99c8-11e6-964f-01f8ec4b0f05/3656267460/easy-bills-reminder-screenshot.pngf",
      link: "https://github.com/gladwinjs/Bill-Payment-Reminder",
    },
    {
      title: "Text Sentiment Analysis",
      description: "Focuses on determining the emotional tone of textual data.",
      img: "https://imerit.net/wp-content/uploads/2021/07/what-is-sentiment-analysis.jpg",
      link: "https://github.com/gladwinjs",
    },
  ];

  return (
    <ProjectsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>
      <div className="projects">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <ProjectCard>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </ProjectCard>
          </motion.div>
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  padding: 50px 0;
  background-color: #f9f9f9;
  text-align: center;

  h1 {
    color: #333;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const ProjectCard = styled.div`
  width: 300px;
  height: 400px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .img-container {
    width: 100%;
    height: 60%;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

  .info {
    padding: 20px;
    text-align: left;

    h3 {
      margin-bottom: 10px;
      color: #007bff;
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 10px;
      color: #555;
      line-height: 1.5;
    }

    a {
      color: #007bff;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
        text-decoration: underline;
      }
    }
  }
`;
