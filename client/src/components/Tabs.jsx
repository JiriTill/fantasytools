import React from 'react';

function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div>
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                ? 'bg-fantasy-gold text-fantasy-dark shadow-lg shadow-fantasy-gold/50'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
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
