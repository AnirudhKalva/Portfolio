import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import react-slick

const PortfolioSection = styled.section`
  padding: 4rem 2rem;
  
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  flex-direction: column; /* Ensure the content stacks in column layout */
  min-height: 80vh; /* Ensure full viewport height */
  background: linear-gradient(135deg, #3a3a3a, #1c1c1c);
`;

const Arrow = styled.div`
  display: block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevArrow = ({ className, onClick }) => (
  <Arrow className={className} onClick={onClick} style={{ left: '15px' }}>
    
  </Arrow>
);

const NextArrow = ({ className, onClick }) => (
  <Arrow className={className} onClick={onClick} style={{ right: '15px' }}>
  </Arrow>
);


const SliderWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
`;

const SectionTitle = styled(motion.h1)`
  color:  '#ff6347';
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const SlideWrapper = styled.div`
  position: relative;
  padding: 3rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  color: white;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 10px;
  }
`;

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <PortfolioSection>
      <SliderWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: '#ff6347' }}
        >
          Innovative Creations: A Journey Through Code and Solutions
        </SectionTitle>

        <Slider {...settings}>
          <SlideWrapper bgImage="https://via.placeholder.com/600x400?text=Examination+Management">
            <h3>STET Examination Management System</h3>
            <p>
            The system includes a mobile application where the users can login, register
for the STET exam by filling the application form, upload the required documents and download the admit card. Integrated
real-time notifications via SMS and email, and implemented Kafka for data streaming and AWS S3 for secure document
storage and has a responsive chatbot. The system also has a web application for the administrator usage.
              <br />
              <strong>Tech Stack:</strong>Kotlin,
              ReactJS, MongoDB, AWS, Google Firebase
            </p>
          </SlideWrapper>

          <SlideWrapper bgImage="https://via.placeholder.com/600x400?text=Drowsiness+Detection">
            <h3>Driver Drowsiness Detection System</h3>
            <p>
              A system that detects driver drowsiness through extended eye closure, alerting the driver with a beep and sending a recording to an emergency contact via email.
              <br />
              <strong>Tech Stack:</strong> Python, OpenCV, Keras
            </p>
          </SlideWrapper>

          <SlideWrapper bgImage="https://via.placeholder.com/600x400?text=Music+Streaming">
            <h3>Music Streaming Web Application</h3>
            <p>
              A comprehensive music streaming platform with user management, multi-language support, and features for managing music categories, favorites, and downloads.
              <br />
              <strong>Tech Stack:</strong> ReactJS, NodeJS, Bootstrap, MongoDB
            </p>
          </SlideWrapper>

          <SlideWrapper bgImage="https://via.placeholder.com/600x400?text=Covid+Analysis">
            <h3>Covid Analysis and Predictions</h3>
            <p>
              Analyzed and visualized Covid-19 data, making future predictions using machine learning models.
              <br />
              <strong>Tech Stack:</strong> Python
            </p>
          </SlideWrapper>
        </Slider>
      </SliderWrapper>
    </PortfolioSection>
  );
};

export default Portfolio;