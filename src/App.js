import React from 'react';
import SimpleSlider from './components/Slider';
import AccordionContainer from './components/Accordion';
import TabsContainer from './components/Tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleSlider />
        <AccordionContainer />
        <TabsContainer />
      </header>
    </div>
  );
}

export default App;
