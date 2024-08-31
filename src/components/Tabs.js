import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex border-b border-gray-300 bg-gray-100 rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ease-in-out ${
              activeTab === tab.name
                ? 'border-b-2 border-blue-500 text-blue-600 bg-white'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-200'
            } rounded-t-lg`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div
        className={`relative p-6 bg-gray-50 rounded-b-lg transition-opacity duration-500 ease-in-out ${
          activeTab ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
      >
        <div
          className={`transition-transform duration-500 ease-in-out ${
            activeTab ? 'translate-y-0' : 'translate-y-4'
          }`}
        >
          {tabs.find((tab) => tab.name === activeTab)?.content}
        </div>
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
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">タブ</h2>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsContainer;
