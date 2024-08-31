import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

const TabsContainer = () => {
  const tabs = [
    {
      name: 'タブ 1',
      content: <div>タブコンテンツ 1</div>,
    },
    {
      name: 'タブ 2',
      content: <div>タブコンテンツ 2</div>,
    },
    {
      name: 'タブ 3',
      content: <div>タブコンテンツ 3</div>,
    },
  ];

  return (
    <div>
      <h2>タブ</h2>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsContainer;
