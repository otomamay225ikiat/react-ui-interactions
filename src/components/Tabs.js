import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab.name
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-6 bg-gray-50">
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
      <h2 className="text-3xl font-bold mb-6">タブ</h2>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsContainer;
