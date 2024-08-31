import React from 'react';
import SimpleSlider from './components/Slider';
import AccordionContainer from './components/Accordion';
import TabsContainer from './components/Tabs';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen pt-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 underline decoration-blue-500 decoration-4 underline-offset-8">
          React UI Interactions
        </h1>
      </header>
      <main className="space-y-12">
        <section className="bg-blue-400 p-8 shadow-lg">
          <SimpleSlider />
        </section>
        <section className="bg-blue-400 p-8 shadow-lg">
          <AccordionContainer />
        </section>
        <section className="bg-blue-400 p-8 shadow-lg">
          <TabsContainer />
        </section>
        <TechStack />
      </main>
    </div>
  );
}

export default App;
