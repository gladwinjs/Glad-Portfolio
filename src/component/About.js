import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import profileImage from './assets/profile.jpg';


const About = () => {
  return (
    <AboutSection
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* About Me Section */}
      <motion.div
        className="content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="profile">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="text">
          <h2>About Me</h2>
          <p>
            I’m a passionate data scientist with a strong foundation in machine
            learning, data analytics, and frontend development. I’m always
            excited about solving complex problems and learning new things.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <SkillsContainer>
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h3>

        {/* Programming Languages */}
        <div className="skills-section">
          <h4>Programming Languages</h4>
          <ul>
            <li>
              <SkillBar skill="Python" progress={70} />
            </li>
            <li>
              <SkillBar skill="Data Science" progress={85} />
            </li>
            <li>
              <SkillBar skill="Machine Learning" progress={90} />
            </li>
            <li>
              <SkillBar skill="Front-End Development" progress={85}/>
            </li>
          </ul>
        </div>
      </SkillsContainer>

      <Tooltip id="progress-tooltip" />
    </AboutSection>
  );
};

const SkillBar = ({ skill, progress }) => (
  <SkillContainer
    as={motion.div}
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <p>{skill}</p>
    <div
      data-tooltip-id="progress-tooltip"
      data-tooltip-content={`${progress}%`}
    >
      <ProgressBar progress={progress} />
    </div>
  </SkillContainer>
);

const ProgressBar = ({ progress }) => (
  <ProgressContainer>
    <motion.div
      className="filled"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
    ></motion.div>
  </ProgressContainer>
);

export default About;

const AboutSection = styled.div`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  padding: 50px 0;
  overflow: hidden;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    text-align: left;

    .profile {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      flex: 1;
      h2 {
        font-size: 2rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.6;
      }
    }
  }
`;

const SkillsContainer = styled.div`
  margin-top: 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #333;
  }

  .skills-section {
    margin-bottom: 40px;

    h4 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #333;
    }
  }
`;

const SkillContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;

  p {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .filled {
    height: 100%;
    background-color: #007bff;
    border-radius: 25px;
  }
`;
