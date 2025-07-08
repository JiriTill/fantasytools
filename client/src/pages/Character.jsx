import React, { useState } from 'react';
import axios from 'axios';

export default function Character() {
  const [form, setForm] = useState({
    gender: 'Male',
    race: 'Human',
    profession: 'Combat oriented',
    socialClass: 'Commoner',
    tone: 'Harsh'
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNames([]);

    try {
      const prompt = `Generate 10 fantasy names for a ${form.gender.toLowerCase()} ${form.race.toLowerCase()} character. The character is ${form.profession.toLowerCase()}, belongs to ${form.socialClass.toLowerCase()}, and the name should sound ${form.tone.toLowerCase()}. Return only the names in a list format.`;

      const response = await axios.post('/api/generate', { prompt });
      setNames(response.data.names);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Fantasy Character Name Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
        <label className="block">
          Gender:
          <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        <label className="block">
          Race:
          <select name="race" value={form.race} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Human', 'Elf', 'Orc', 'Dwarf', 'Halfling', 'Hobbit', 'Goblin', 'Gnome', 'Dragonborn', 'Half-Dragon', 'Aasimar', 'Tiefling', 'Undead', 'Beastfolk', 'Giant'].map(r => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Profession:
          <select name="profession" value={form.profession} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Combat oriented', 'Magical', 'Craft and Trade', 'Stealth and Rogue', 'Nature-based', 'Religious', 'Noble', 'Seafaring and Exotic', 'Dark or Forbidden'].map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Social Class:
          <select name="socialClass" value={form.socialClass} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Nobility', 'Military', 'Middle class (Tradefolk)', 'Commoner', 'Outcast or criminal', 'Mythical'].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Tone:
          <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Harsh', 'Elegant', 'Short', 'Mysterious'].map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <button type="submit" disabled={loading} className="bg-indigo-600 hover:bg-indigo-500 w-full py-2 rounded font-semibold">
          {loading ? 'Generating...' : 'Generate Names'}
        </button>
      </form>

      {names.length > 0 && (
        <div className="mt-10 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Name Suggestions:</h2>
          <ul className="list-disc list-inside space-y-1">
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ads Placeholder */}
      <div className="mt-12 w-full max-w-md text-center border-t border-indigo-700 pt-6">
        <p className="text-sm text-gray-400">[Google Ads or affiliate space here]</p>
      </div>
    </div>
  );
}

