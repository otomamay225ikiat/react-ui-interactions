import React from 'react';
import SimpleSlider from './components/Slider';
import AccordionContainer from './components/Accordion';
import TabsContainer from './components/Tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header p-8">
        <SimpleSlider />
        <AccordionContainer />
        <TabsContainer />
      </header>
    </div>
  );
}

export default App;
