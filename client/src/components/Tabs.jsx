import React from 'react';

function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div>
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded ${activeTab === tab.id ? 'bg-amber-400 text-gray-900' : 'bg-gray-700 text-gray-100'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.find((tab) => tab.id === activeTab).component}
    </div>
  );
}

export default Tabs;
