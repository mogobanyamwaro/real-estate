import React, { useState } from 'react';
import DropDown from './components/DropDown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { SlideData } from './data/SliderData';
import GlobalStyles from './globalStyles';
import { InfoData, InfoDataTwo } from './data/InfoData';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SlideData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </div>
  );
}

export default App;
