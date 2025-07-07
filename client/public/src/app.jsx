import React, { useState } from 'react';
import Tabs from './components/Tabs';
import CharacterGenerator from './components/CharacterGenerator';
import './styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('character');

  const tabs = [
    { id: 'character', label: 'Character', component: <CharacterGenerator /> },
    { id: 'faction', label: 'Faction', component: <div>Faction Generator (TBD)</div> },
    { id: 'religion', label: 'Religion', component: <div>Religion Generator (TBD)</div> },
    { id: 'worldbuilding', label: 'Worldbuilding', component: <div>Worldbuilding Generator (TBD)</div> },
    { id: 'misc', label: 'Miscellaneous', component: <div>Misc Generator (TBD)</div> },
    { id: 'dynamic', label: 'Dynamic', component: <div>Dynamic Generator (TBD)</div> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-amber-400 mb-8">Neoantica Name Generator</h1>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
