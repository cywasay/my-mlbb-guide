'use client'

import { heroes } from '../../../data/heroes';
import { findHeroBySlug } from '../../../lib/utils';
import { notFound } from 'next/navigation';
import ItemBuild from '../../../components/ItemBuild';
import SkillGuide from '../../../components/SkillGuide';
import { use } from 'react';

export default function HeroDetailPage({ params }) {
  const resolvedParams = use(params);
  const hero = findHeroBySlug(heroes, resolvedParams.slug);
  
  if (!hero) {
    notFound();
  }

  const handleImageError = (e) => {
    e.target.src = '/images/placeholder-hero.jpg';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Header */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-700">
        <div className="flex items-center gap-6">
          <img 
            src={hero.image} 
            alt={hero.name}
            className="w-24 h-24 rounded-lg object-cover"
            style={{ objectPosition: '50% 15%' }}
            onError={handleImageError}
          />
          <div>
            <h1 className="text-3xl font-bold text-[#ffffff]">{hero.name}</h1>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 bg-[#1fab89] text-[#0b132b] rounded-full text-sm font-medium">
                {hero.role}
              </span>
              {hero.secondaryRole && (
                <span className="px-3 py-1 bg-[#9d4edd] text-[#ffffff] rounded-full text-sm font-medium">
                  {hero.secondaryRole}
                </span>
              )}
              <span className="px-3 py-1 bg-[#f5c542] text-[#0b132b] rounded-full text-sm font-medium">
                {hero.difficulty}
              </span>
            </div>
            <p className="text-[#b0bec5] mt-3">{hero.description}</p>
          </div>
        </div>
      </div>

      {/* Guide Overview */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-[#ffffff] mb-4">Hero Guide</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Overview</h3>
            <p className="text-[#f0f0f0]">{hero.guide.overview}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Playstyle</h3>
            <p className="text-[#f0f0f0]">{hero.guide.playstyle}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Pro Tips</h3>
            <ul className="list-disc list-inside text-[#f0f0f0] space-y-1">
              {hero.guide.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Counters</h3>
              <div className="flex flex-wrap gap-2">
                {hero.guide.counters.map((counter, index) => (
                  <span key={index} className="px-2 py-1 bg-red-900 text-red-300 rounded text-sm">
                    {counter}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Synergies</h3>
              <div className="flex flex-wrap gap-2">
                {hero.guide.synergies.map((synergy, index) => (
                  <span key={index} className="px-2 py-1 bg-green-900 text-green-300 rounded text-sm">
                    {synergy}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <SkillGuide skills={hero.skills} />

      {/* Builds */}
      <div className="space-y-6">
        {Object.entries(hero.builds).map(([buildType, build]) => (
          <ItemBuild 
            key={buildType}
            title={`${buildType.charAt(0).toUpperCase() + buildType.slice(1)} Build`}
            build={build}
          />
        ))}
      </div>
    </div>
  );
}