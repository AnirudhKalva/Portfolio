import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #3a3a3a, #1c1c1c);
  color: #e0e0e0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff4081;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  justify-items: center;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
`;

const SkillItem = styled(motion.div)`
  background: #333;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #ff4081;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #e0e0e0;
`;

const Skills = () => (
  <SkillsSection>
    <SectionTitle>My Skills</SectionTitle>
    <SkillsGrid>
      <SkillCategory>
        <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-python"></i>
          </SkillIcon>
          <SkillName>Python</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-java"></i>
          </SkillIcon>
          <SkillName>Java</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fa-sharp fa-solid fa-code"></i>
          </SkillIcon>
          <SkillName>C-Sharp</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-js-square"></i>
          </SkillIcon>
          <SkillName>JavaScript</SkillName>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <SkillCategoryTitle>Web Development</SkillCategoryTitle>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-react"></i>
          </SkillIcon>
          <SkillName>ReactJS</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-node-js"></i>
          </SkillIcon>
          <SkillName>Node.js</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fas fa-server"></i>
          </SkillIcon>
          <SkillName>Asp .Net</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fas fa-leaf"></i>
          </SkillIcon>
          <SkillName>Spring</SkillName>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <SkillCategoryTitle>Tools & Technologies</SkillCategoryTitle>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fas fa-database"></i>
          </SkillIcon>
          <SkillName>SQL, MongoDB</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-aws"></i>
          </SkillIcon>
          <SkillName>AWS</SkillName>
        </SkillItem>
        <SkillItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SkillIcon>
            <i className="fab fa-docker"></i>
          </SkillIcon>
          <SkillName>Docker</SkillName>
        </SkillItem>
      </SkillCategory>
    </SkillsGrid>
  </SkillsSection>
);

export default Skills;
