import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import { theme } from './styles/theme';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/contact';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
      <Portfolio />
      <Skills/>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
