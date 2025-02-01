import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Services from './components/Services'
import { useState } from 'react';
import Settings from './components/Settings';

const App: FC = () => {
  const [primaryColor, setPrimaryColor] = useState(theme.colors.primary);

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
  };

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: primaryColor,
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
         <About />
        <Portfolio />
       <Services />
        <Contact /> 
      </main>
      <Settings onColorChange={handleColorChange} />
    </ThemeProvider>
  );
};

export default App;