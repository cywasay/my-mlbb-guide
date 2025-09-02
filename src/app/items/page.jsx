"use client";

// app/items/page.jsx
import { useState, useMemo } from "react";
import { items } from "../../data/items";
import ItemCard from "../../components/ItemCard";
import ItemFilter from "../../components/ItemFilter";
import { filterItemsComplete } from "../../lib/utils";
import { Sword, Shield, Zap, Heart, Star } from "lucide-react";

const itemTypeIcons = {
  Attack: Sword,
  Defense: Shield,
  Magic: Zap,
  Support: Heart,
  Movement: Star,
};

export default function ItemsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTier, setSelectedTier] = useState("all");

  // Get unique item types and tiers for filters
  const itemTypes = useMemo(
    () => ["all", ...new Set(items.map((item) => item.type))],
    []
  );
  const itemTiers = useMemo(
    () => ["all", ...new Set(items.map((item) => item.tier))],
    []
  );

  // Apply filters
  const filteredItems = useMemo(
    () => filterItemsComplete(items, searchTerm, selectedType, selectedTier),
    [searchTerm, selectedType, selectedTier]
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            All Items
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            Discover all items available in Mobile Legends: Bang Bang. Find the
            perfect equipment for your hero build.
          </p>
        </div>

        {/* Filters */}
        <ItemFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedTier={selectedTier}
          setSelectedTier={setSelectedTier}
          itemTypes={itemTypes}
          itemTiers={itemTiers}
          resultCount={filteredItems.length}
          totalCount={items.length}
        />

        {/* Items Grid - Responsive: 3 on mobile, 6 on desktop */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 bg-gray-800 rounded-full flex items-center justify-center">
              <Sword className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              No items found
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base px-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedTier("all");
              }}
              className="px-4 sm:px-6 py-2 bg-[#1fab89] text-white text-sm sm:text-base rounded-lg hover:bg-[#159f76] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Stats - Responsive Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {itemTypes
            .filter((type) => type !== "all")
            .map((type) => {
              const count = items.filter((item) => item.type === type).length;
              const TypeIcon = itemTypeIcons[type] || Sword;

              return (
                <div
                  key={type}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 text-center"
                >
                  <TypeIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-gray-400" />
                  <h4 className="font-semibold text-white text-sm sm:text-base">
                    {count}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{type} Items</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}