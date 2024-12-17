import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EducationAchievements = () => {
  return (
    <EducationAchievementsContainer>
      {/* Education Section */}
      <EducationSection
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Educational Qualifications
        </motion.h3>
        <div className="education-list">
          <motion.div
            className="education-item"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Bachelor of Technology in Artificial Intelligence & Data Science</h4>
            <p>Coimbatore Institute of Engineering and Technology</p>
            <p>CGPA 8.57</p>
          </motion.div>
          <motion.div
            className="education-item"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4>Rose Mary Matric Hr Sec School</h4>
            <p>12th Grade 88.67%</p>
          </motion.div>
        </div>
      </EducationSection>

      {/* Achievements Section */}
      <AchievementsSection
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Achievements
        </motion.h3>
        <div className="achievements-list">
          <motion.div
            className="achievement-item"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Academic Achiever</h4>
            <p>2nd Rank Holder during Academic year 2022-2024</p>
          </motion.div>
          <motion.div
            className="achievement-item"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4>Authoured a Book</h4>
            <p>Legal Assistance an AI Empowered Legal System(Yet to be Published)</p>
          </motion.div>
        </div>
      </AchievementsSection>
    </EducationAchievementsContainer>
  );
};

export default EducationAchievements;

// Styled Components
const EducationAchievementsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Place Education and Achievements side by side */
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  padding: 30px;
  margin-bottom: 50px; /* Ensures space before footer */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack sections vertically on smaller screens */
  }
`;

const EducationSection = styled.div`
  background: #ffffff;
  border: 2px solid #007bff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .education-list {
    margin-top: 20px;
  }

  .education-item {
    margin-bottom: 30px;
    text-align: left;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateX(10px);
    }

    h4 {
      font-size: 1.3rem;
      margin-bottom: 5px;
      color: #333;
    }

    p {
      font-size: 1.1rem;
      color: #555;
    }
  }
`;

const AchievementsSection = styled.div`
  background: #ffffff;
  border: 2px solid #28a745;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .achievements-list {
    margin-top: 20px;
  }

  .achievement-item {
    margin-bottom: 30px;
    text-align: left;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateX(10px);
    }

    h4 {
      font-size: 1.3rem;
      margin-bottom: 5px;
      color: #333;
    }

    p {
      font-size: 1.1rem;
      color: #555;
    }
  }
`;
