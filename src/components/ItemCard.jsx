"use client";

// components/ItemCard.jsx
import Link from "next/link";
import { Sword, Shield, Zap, Heart, Star } from "lucide-react";

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

export default function ItemCard({ item }) {
  // Validate required props
  if (!item) {
    console.error("ItemCard: item prop is required");
    return null;
  }

  const TypeIcon = itemTypeIcons[item.type] || Sword;
  const typeColor = itemTypeColors[item.type] || "bg-gray-500";

  return (
    <Link href={`/items/${item.slug}`}>
      <div className="group bg-gray-800 border border-gray-700 rounded-lg hover:border-[#1fab89] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-full flex flex-col h-full">
        {/* Item Image/Icon - Fixed height container */}
        <div className="h-24 sm:h-32 lg:h-40 bg-gray-900 relative p-2 sm:p-3 lg:p-6 flex items-center justify-center overflow-hidden flex-shrink-0">
          <img
            src={item.image || `/images/items/${item.slug}.png`}
            alt={item.name}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-full items-center justify-center flex-shrink-0">
            <TypeIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#f0f0f0]" />
          </div>

          {/* Type Badge - Responsive */}
          <div
            className={`absolute top-1 right-1 sm:top-2 sm:right-2 lg:top-3 lg:right-3 ${typeColor} px-1 py-0.5 sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 rounded-full flex items-center gap-0.5 sm:gap-1 z-10`}
          >
            <TypeIcon className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white" />
            <span className="text-[10px] sm:text-xs font-medium text-white hidden sm:inline">
              {item.type}
            </span>
          </div>

          {/* Tier Badge - Responsive */}
          {item.tier && (
            <div className="absolute top-1 left-1 sm:top-2 sm:left-2 lg:top-3 lg:left-3 bg-gray-700 px-1 py-0.5 sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 rounded-full z-10">
              <span className="text-[10px] sm:text-xs font-medium text-gray-300">
                {item.tier}
              </span>
            </div>
          )}
        </div>

        {/* Item Info - Consistent structure for all cards */}
        <div className="p-2 sm:p-3 lg:p-4 flex flex-col h-full">
          {/* Title - Fixed height container */}
          <div className="mb-1 sm:mb-2 h-8 sm:h-6 flex items-start">
            <h3 className="text-sm font-semibold text-[#ffffff] group-hover:text-[#1fab89] transition-colors line-clamp-2 sm:line-clamp-1 leading-tight">
              {item.name}
            </h3>
          </div>

          {/* Price - Always show space for price */}
          <div className="mb-1 sm:mb-2 h-4">
            {item.price ? (
              <div className="text-xs sm:text-sm text-[#f5c542] font-medium">
                {item.price.toLocaleString()} Gold
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-transparent">
                0 Gold
              </div>
            )}
          </div>

          {/* Description - Always show on desktop, consistent height */}
          <div className="mb-2 sm:mb-3 hidden sm:block h-10">
            <p className="text-[#b0bec5] text-xs sm:text-sm line-clamp-2">
              {item.description || "No description available."}
            </p>
          </div>

          {/* Stats Preview - Always show 2 stats consistently */}
          <div className="space-y-0.5 sm:space-y-1 flex-1">
            {item.stats ? (
              <>
                {Object.entries(item.stats)
                  .slice(0, 2)
                  .map(([stat, value], index) => (
                    <div key={stat} className="flex justify-between text-[10px] sm:text-xs">
                      <span className="text-[#b0bec5] capitalize truncate flex-1 mr-1">
                        {stat.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="text-[#1fab89] font-medium flex-shrink-0">
                        +{typeof value === "string" ? value : value}
                        {stat.includes("PEN") ? "%" : ""}
                      </span>
                    </div>
                  ))}
                {/* Fill empty stat slots if less than 2 stats */}
                {Object.keys(item.stats).length < 2 && (
                  <div className="flex justify-between text-[10px] sm:text-xs opacity-50">
                    <span className="text-[#b0bec5]">-</span>
                    <span className="text-[#1fab89]">-</span>
                  </div>
                )}
                {/* More stats indicator */}
                {Object.keys(item.stats).length > 2 && (
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    +{Object.keys(item.stats).length - 2} more stats
                  </div>
                )}
              </>
            ) : (
              // Show placeholder stats if none exist
              <>
                <div className="flex justify-between text-[10px] sm:text-xs opacity-50">
                  <span className="text-[#b0bec5]">No stats available</span>
                  <span className="text-[#1fab89]">-</span>
                </div>
                <div className="flex justify-between text-[10px] sm:text-xs opacity-50">
                  <span className="text-[#b0bec5]">-</span>
                  <span className="text-[#1fab89]">-</span>
                </div>
              </>
            )}
          </div>

          {/* Best For Preview - Always show on desktop with consistent height */}
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-700 hidden sm:block h-8">
            <div className="flex flex-wrap gap-1">
              {item.bestFor && item.bestFor.length > 0 ? (
                <>
                  {item.bestFor.slice(0, 2).map((role, index) => (
                    <span
                      key={index}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#1fab89]/20 text-[#1fab89] rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                  {item.bestFor.length > 2 && (
                    <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700 text-gray-400 rounded-full">
                      +{item.bestFor.length - 2}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-[10px] sm:text-xs text-gray-500 opacity-50">
                  Universal
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}