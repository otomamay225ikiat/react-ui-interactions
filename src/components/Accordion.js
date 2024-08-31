import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

const AccordionContainer = () => {
  return (
    <div>
      <h2>アコーディオン</h2>
      <Accordion title="セクション 1" content="これはセクション 1 の内容です。" />
      <Accordion title="セクション 2" content="これはセクション 2 の内容です。" />
      <Accordion title="セクション 3" content="これはセクション 3 の内容です。" />
    </div>
  );
};

export default AccordionContainer;
