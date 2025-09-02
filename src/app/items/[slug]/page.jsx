"use client";

// app/items/[slug]/page.jsx
import { use } from "react"; // Import React.use()
import { notFound } from "next/navigation";
import { items } from "../../../data/items";
import { findItemBySlug } from "../../../lib/utils";
import { Sword, Shield, Zap, Heart, Star, ArrowRight } from "lucide-react";

const itemTypeIcons = {
  Attack: Sword,
  Defense: Shield,
  Magic: Zap,
  Support: Heart,
  Movement: Star,
};

const itemTypeColors = {
  Attack: "bg-red-500",
  Defense: "bg-blue-500",
  Magic: "bg-purple-500",
  Support: "bg-green-500",
  Movement: "bg-yellow-500",
};

export default function ItemPage({ params }) {
  // Remove async since it's a Client Component
  const { slug } = use(params); // Use React.use() to unwrap params
  const item = findItemBySlug(items, slug);

  if (!item) {
    notFound();
  }

  const TypeIcon = itemTypeIcons[item.type] || Sword;
  const typeColor = itemTypeColors[item.type] || "bg-gray-500";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Item Image */}
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-full bg-gray-700 rounded-full items-center justify-center">
                  <TypeIcon className="w-12 h-12 text-gray-400" />
                </div>
              </div>

              {/* Type Badge - moved outside the image container */}
              <div
                className={`absolute -top-2 -right-2 ${typeColor} px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10`}
              >
                <TypeIcon className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  {item.type}
                </span>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {item.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item.tier}
                </span>
                <span className="text-2xl font-bold text-[#f5c542]">
                  {item.price} Gold
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Stats & Effects */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Item Statistics
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(item.stats).map(([stat, value]) => (
                <div
                  key={stat}
                  className="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-600"
                >
                  <span className="text-gray-300 capitalize">
                    {stat.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-[#1fab89] font-bold text-lg">
                    +{value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Effect */}
          {item.unique && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Unique Passive
              </h2>
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#9d4edd] mb-2">
                  {item.unique.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.unique.description}
                </p>
              </div>
            </div>
          )}

          {/* Build Path */}
          {item.buildPath && item.buildPath.length > 0 && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Build Path</h2>
              <div className="flex flex-wrap items-center gap-3">
                {item.buildPath.map((component, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-gray-700 rounded border border-gray-600 text-gray-300 font-medium">
                      {component}
                    </div>
                    {index < item.buildPath.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                ))}
                <ArrowRight className="w-4 h-4 text-gray-500" />
                <div className="px-4 py-2 bg-[#1fab89] text-white rounded font-bold">
                  {item.name}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Usage Info */}
        <div className="space-y-6">
          {/* Best For */}
          {item.bestFor && item.bestFor.length > 0 && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Best For</h3>
              <div className="space-y-2">
                {item.bestFor.map((role, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-[#1fab89]/20 border border-[#1fab89]/30 rounded text-[#1fab89] font-medium text-center"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Counters */}
          {item.counters && item.counters.length > 0 && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Effective Against
              </h3>
              <div className="space-y-2">
                {item.counters.map((counter, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-red-900/20 border border-red-500/30 rounded text-red-400 font-medium text-center"
                  >
                    {counter}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guide */}
          {item.guide && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Usage Guide</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    When to Buy
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.guide.whenToBuy}
                  </p>
                </div>

                {item.guide.tips && item.guide.tips.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Pro Tips
                    </h4>
                    <ul className="space-y-2">
                      {item.guide.tips.map((tip, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#1fab89] font-bold">•</span>
                          <span className="leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
