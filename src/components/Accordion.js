import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={`w-full text-left py-4 px-6 transition-colors duration-300 ${
          isOpen ? 'bg-gray-200 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
      </button>
      <div
        className={`transition-max-height duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100 bg-gray-50 p-6' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const AccordionContainer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">アコーディオン</h2>
      <Accordion title="セクション 1" content="これはセクション 1 の内容です。" />
      <Accordion title="セクション 2" content="これはセクション 2 の内容です。" />
      <Accordion title="セクション 3" content="これはセクション 3 の内容です。" />
    </div>
  );
};

export default AccordionContainer;
