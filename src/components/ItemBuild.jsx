"use client";

// components/ItemBuild.jsx
import Link from "next/link";
import { items } from "../data/items";
import { createSlug } from "../lib/utils";
import {
  Sword,
  Shield,
  Zap,
  Heart,
  Star,
  Sparkles,
  Zap as SpellIcon,
} from "lucide-react";

const itemTypeIcons = {
  Attack: Sword,
  Defense: Shield,
  Magic: Zap,
  Support: Heart,
  Movement: Star,
};

const itemTypeColors = {
  Attack: "bg-red-500/20 border-red-500/30 text-red-400",
  Defense: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  Magic: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  Support: "bg-green-500/20 border-green-500/30 text-green-400",
  Movement: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
};

// Helper function to find item by name
function findItemByName(itemName) {
  return (
    items.find((item) => item.name === itemName) || {
      name: itemName,
      slug: createSlug(itemName),
      type: "Unknown",
      price: 0,
      image: null,
    }
  );
}

export default function ItemBuild({ title, build }) {
  if (!build) return null;

  // Calculate total build cost
  const totalCost =
    build.items?.reduce((total, itemName) => {
      const item = findItemByName(itemName);
      return total + (item.price || 0);
    }, 0) || 0;

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#ffffff]">{title}</h3>
        {totalCost > 0 && (
          <div className="text-right">
            <div className="text-sm text-gray-400">Total Cost</div>
            <div className="text-lg font-bold text-[#f5c542]">
              {totalCost.toLocaleString()} Gold
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Items */}
        {build.items && build.items.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#b0bec5] mb-3 uppercase tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Core Items ({build.items.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {build.items.map((itemName, index) => {
                const item = findItemByName(itemName);
                const TypeIcon = itemTypeIcons[item.type] || Sword;
                const typeColorClass =
                  itemTypeColors[item.type] ||
                  "bg-gray-500/20 border-gray-500/30 text-gray-400";

                return (
                  <Link
                    key={index}
                    href={`/items/${item.slug}`}
                    className="group"
                  >
                    <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg border border-gray-600 hover:border-[#1fab89] transition-all duration-200 hover:bg-gray-850">
                      {/* Order Number */}
                      <div className="w-8 h-8 bg-gradient-to-r from-[#1fab89] to-[#159f76] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-lg">
                        {index + 1}
                      </div>

                      {/* Item Icon */}
                      <div className="w-12 h-12 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0 group-hover:border-[#1fab89]/50 transition-colors overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                        ) : null}
                        <div className="hidden w-full h-full bg-gray-700 rounded-full items-center justify-center">
                          <TypeIcon className="w-6 h-6 text-gray-400 group-hover:text-[#1fab89] transition-colors" />
                        </div>
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-[#f0f0f0] group-hover:text-[#1fab89] transition-colors text-sm truncate">
                          {item.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          {item.price > 0 && (
                            <span className="text-xs text-[#f5c542] font-medium">
                              {item.price.toLocaleString()}g
                            </span>
                          )}
                          {item.type !== "Unknown" && (
                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${typeColorClass}`}
                            >
                              {item.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Emblem and Spell */}
        <div className="grid md:grid-cols-2 gap-4">
          {build.emblem && (
            <div>
              <h4 className="text-sm font-semibold text-[#b0bec5] mb-2 uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Emblem
              </h4>
              <div className="p-4 bg-gradient-to-r from-[#1fab89]/10 to-[#159f76]/10 rounded-lg border border-[#1fab89]/30 text-center">
                <span className="font-medium text-[#1fab89] text-lg">
                  {build.emblem}
                </span>
              </div>
            </div>
          )}

          {build.spell && (
            <div>
              <h4 className="text-sm font-semibold text-[#b0bec5] mb-2 uppercase tracking-wide flex items-center gap-2">
                <SpellIcon className="w-4 h-4" />
                Battle Spell
              </h4>
              <div className="p-4 bg-gradient-to-r from-[#9d4edd]/10 to-[#7b2cbf]/10 rounded-lg border border-[#9d4edd]/30 text-center">
                <span className="font-medium text-[#9d4edd] text-lg">
                  {build.spell}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Build Strategy (if provided) */}
        {build.strategy && (
          <div>
            <h4 className="text-sm font-semibold text-[#b0bec5] mb-2 uppercase tracking-wide">
              Strategy
            </h4>
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-600">
              <p className="text-gray-300 text-sm leading-relaxed">
                {build.strategy}
              </p>
            </div>
          </div>
        )}

        {/* Build Priority (if you want to add this later) */}
        {build.priority && (
          <div>
            <h4 className="text-sm font-semibold text-[#b0bec5] mb-2 uppercase tracking-wide">
              Build Priority
            </h4>
            <div className="p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30">
              <p className="text-blue-300 text-sm">{build.priority}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
