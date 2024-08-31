import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionContainer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">アコーディオン</h2>
      <Accordion title="セクション 1" content="これはセクション 1 の内容です。" />
      <Accordion title="セクション 2" content="これはセクション 2 の内容です。" />
      <Accordion title="セクション 3" content="これはセクション 3 の内容です。" />
    </div>
  );
};

export default AccordionContainer;
