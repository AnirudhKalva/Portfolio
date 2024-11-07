import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProfileSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background: linear-gradient(135deg, #3a3a3a, #1c1c1c);
  min-height: 60vh; /* Makes sure the section covers the full height of the viewport */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%; /* Takes up the left half of the screen */
`;

const RightSection = styled.div`
  width: 50%; /* Takes up the right half of the screen */
  padding-left: 2rem; /* Adds some space between the left and right sections */
`;

const ProfilePic = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 5rem;
  margin-bottom: 1rem;
  text-align: left;
  color: white;
`;

const HeroText = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  color: white;
`;

const Profile = () => (
  <ProfileSection>
    {/* Left Section with Name and Profile Picture */}
    <LeftSection>
      <Name>Anirudh Kalva</Name>
      <ProfilePic src="https://via.placeholder.com/250" alt="Anirudh Kalva" />
    </LeftSection>

    {/* Right Section with Hero Text and About Text */}
    <RightSection>
    <HeroText>
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontWeight: 'bold',color: '#ff6347' }}
        >
          Crafting Digital Experiences,
        </motion.span>
        <br />
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ color: '#ff6347' }}
        >
          One Line of Code
        </motion.span>
        <br />
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ color: '#ff6347' }}
        >
          At a Time.
        </motion.span>
      </HeroText>

      <AboutText>
        I am a passionate developer with a love for creating beautiful, functional websites and applications. Below, you'll find some of the work I'm most proud of.
      </AboutText>
    </RightSection>
  </ProfileSection>
);

export default Profile;
