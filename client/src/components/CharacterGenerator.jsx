import React, { useState } from 'react';

function CharacterGenerator() {
  const [params, setParams] = useState({
    gender: 'Male',
    race: 'Human',
    profession: 'Combat oriented',
    socialClass: 'Nobility',
    personality: 'Brave',
    tone: 'Elegant',
  });
  const [context, setContext] = useState('');
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'character', params, context }),
      });
      const data = await response.json();
      setNames(data);
    } catch (error) {
      console.error(error);
      setNames(['Error generating names']);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Gender</label>
          <select
            value={params.gender}
            onChange={(e) => setParams({ ...params, gender: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Race</label>
          <select
            value={params.race}
            onChange={(e) => setParams({ ...params, race: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          >
            {['Human', 'Elf', 'Orc', 'Dwarf', 'Halfling', 'Hobbit', 'Goblin', 'Gnome', 'Dragonborn', 'Half-Dragon', 'Aasimar', 'Tiefling', 'Undead', 'Beastfolk', 'Giant'].map((race) => (
              <option key={race}>{race}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Profession</label>
          <select
            value={params.profession}
            onChange={(e) => setParams({ ...params, profession: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          >
            {['Combat oriented', 'Magical', 'Craft and Trade', 'Stealth and Rogue', 'Nature-based', 'Religious', 'Noble', 'Seafaring and Exotic', 'Dark or Forbidden'].map((prof) => (
              <option key={prof}>{prof}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Social Class</label>
          <select
            value={params.socialClass}
            onChange={(e) => setParams({ ...params, socialClass: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          >
            {['Nobility', 'Military', 'Middle class (Tradefolk)', 'Commoner', 'Outcast or criminal', 'Mythical'].map((classType) => (
              <option key={classType}>{classType}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Personality</label>
          <input
            type="text"
            value={params.personality}
            onChange={(e) => setParams({ ...params, personality: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
            placeholder="e.g., Brave, Cunning"
          />
        </div>
        <div>
          <label className="block mb-2">Tone</label>
          <select
            value={params.tone}
            onChange={(e) => setParams({ ...params, tone: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          >
            {['Harsh', 'Elegant', 'Short', 'Mysterious'].map((tone) => (
              <option key={tone}>{tone}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2">Additional Context</label>
        <textarea
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded"
          rows="4"
          placeholder="Describe the character (e.g., a brave warrior from a desert tribe)"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="w-full p-3 bg-amber-400 text-gray-900 rounded hover:bg-amber-500"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Names'}
      </button>
      <div className="mt-6">
        <h2 className="text-2xl mb-4">Generated Names</h2>
        <ul className="list-disc pl-6">
          {names.map((name, index) => (
            <li key={index} className="text-lg">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterGenerator;
