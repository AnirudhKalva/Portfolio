import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer = () => (
  <FooterSection>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </FooterSection>
);

export default Footer;
