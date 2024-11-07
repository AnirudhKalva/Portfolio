import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, #3a3a3a, #1c1c1c);
  color: #f5f5f5;
  min-height: 100vh;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 1.5rem;
  background: #282828;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0) 70%);
    border-radius: 15px;
    z-index: 0;
  }
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #444;
  background: #333;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff4081;
    outline: none;
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #444;
  background: #333;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff4081;
    outline: none;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem;
  background-color: #ff4081;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.4s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  &:hover {
    background-color: #e0356f;
    transform: scale(1.05);
  }
`;

const Contact = () => (
  <ContactSection>
    <ContactForm
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Drop Me a Line</h2>
      <Input type="text" placeholder="Your Name" />
      <Input type="email" placeholder="Your Email" />
      <Textarea placeholder="Your Message" rows="5" />
      <Button type="submit">Send</Button>
    </ContactForm>
  </ContactSection>
);

export default Contact;
