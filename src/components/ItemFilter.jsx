'use client'

// components/ItemFilter.jsx
import { Sword, Shield, Zap, Heart, Star, Search } from 'lucide-react';

const itemTypeIcons = {
  Attack: Sword,
  Defense: Shield,
  Magic: Zap,
  Support: Heart,
  Movement: Star,
};

const itemTypeColors = {
  Attack: "border-red-500 text-red-400",
  Defense: "border-blue-500 text-blue-400",
  Magic: "border-purple-500 text-purple-400",
  Support: "border-green-500 text-green-400",
  Movement: "border-yellow-500 text-yellow-400",
};

export default function ItemFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedType, 
  setSelectedType,
  selectedTier,
  setSelectedTier,
  itemTypes,
  itemTiers,
  resultCount,
  totalCount 
}) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search items by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#1fab89] transition-colors"
          />
        </div>
      </div>

      {/* Type Filter Buttons */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
          Item Type
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedType === 'all'
                ? 'bg-[#1fab89] border-[#1fab89] text-white'
                : 'border-gray-600 text-gray-400 hover:border-gray-500'
            }`}
          >
            All Types
          </button>
          {itemTypes.filter(type => type !== 'all').map(type => {
            const TypeIcon = itemTypeIcons[type];
            const isSelected = selectedType === type;
            const colorClass = itemTypeColors[type] || "border-gray-500 text-gray-400";
            
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? `bg-opacity-20 ${colorClass.split(' ')[0].replace('border-', 'bg-')} ${colorClass}`
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                {TypeIcon && <TypeIcon className="w-4 h-4" />}
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tier Filter */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
          Tier
        </h3>
        <div className="flex flex-wrap gap-2">
          {itemTiers.map(tier => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedTier === tier
                  ? 'bg-[#1fab89] border-[#1fab89] text-white'
                  : 'border-gray-600 text-gray-400 hover:border-gray-500'
              }`}
            >
              {tier === 'all' ? 'All Tiers' : tier}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          Showing <span className="text-[#1fab89] font-medium">{resultCount}</span> of{' '}
          <span className="text-white font-medium">{totalCount}</span> items
        </p>
      </div>
    </div>
  );
}