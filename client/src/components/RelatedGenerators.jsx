import React from 'react';
import { Link } from 'react-router-dom';

export default function RelatedGenerators({ current }) {
    const generators = [
        { name: 'Character Names', path: '/character', description: 'Fantasy character name generator for D&D & RPGs' },
        { name: 'World Names', path: '/world', description: 'Generate fantasy world & place names' },
        { name: 'Faction Names', path: '/faction', description: 'Create guild & organization names' },
        { name: 'Item Names', path: '/item', description: 'Fantasy weapon & artifact name generator' },
        { name: 'Religion Names', path: '/religion', description: 'Deity & faith name generator' },
        { name: 'Custom Names', path: '/dynamic', description: 'Custom fantasy name generator' },
    ];

    // Filter out the current page
    const related = generators.filter(g => g.path !== current);

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 p-6 bg-fantasy-dark-secondary/50 rounded-xl border border-fantasy-gold/20">
            <h3 className="text-2xl font-bold text-fantasy-gold mb-4 text-center">
                More Fantasy Name Generators
            </h3>
            <p className="text-gray-300 text-center mb-6">
                Explore our other fantasy name generators for complete worldbuilding
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((generator, idx) => (
                    <Link
                        key={idx}
                        to={generator.path}
                        className="p-4 bg-fantasy-dark/50 rounded-lg border border-white/10 hover:border-fantasy-gold hover:bg-fantasy-dark-secondary transition group"
                    >
                        <h4 className="font-bold text-white group-hover:text-fantasy-gold transition mb-2">
                            {generator.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                            {generator.description}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Quick Links */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <Link to="/faq" className="text-fantasy-gold hover:text-white transition mr-6">
                    FAQ - How to Use Our Generators
                </Link>
                <Link to="/" className="text-fantasy-gold hover:text-white transition">
                    All Name Generators
                </Link>
            </div>
        </div>
    );
}
