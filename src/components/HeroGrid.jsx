"use client";

import { useState, useMemo } from "react";
import { heroes } from "../data/heroes";
import { roles } from "../data/roles";
import { filterHeroes } from "../lib/utils";
import SearchBar from "./SearchBar";
import RoleFilter from "./RoleFilter";
import HeroCard from "./HeroCard";
import { RotateCcw } from "lucide-react";

export default function HeroGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Get search suggestions (simple version using your existing data)
  const suggestions = useMemo(() => {
    if (!searchTerm || searchTerm.length < 1) return [];

    return heroes
      .filter((hero) =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm]);

  // Use your existing filterHeroes function
  const filteredHeroes = useMemo(() => {
    return filterHeroes(heroes, searchTerm, selectedRole);
  }, [searchTerm, selectedRole]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedRole("all");
  };

  const hasActiveFilters = searchTerm || selectedRole !== "all";

  return (
    <div>
      {/* Enhanced Search and Filters Section */}
      <div className="mb-10 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 shadow-lg">
        <div className="space-y-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            suggestions={suggestions}
            showAdvanced={showAdvanced}
            onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
          />

          <RoleFilter
            roles={roles.map((role) => ({
              ...role,
              count: heroes.filter((h) =>
                role.id === "all"
                  ? true
                  : h.role === role.id || h.secondaryRole === role.id
              ).length,
            }))}
            selectedRole={selectedRole}
            onRoleChange={setSelectedRole}
            showCounts={true}
          />
        </div>
      </div>

      {/* Enhanced Results Header */}
      <div className="mb-8 flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-gradient-to-b from-teal-400 to-yellow-400 rounded-full"></div>
          <p className="text-gray-300 font-medium">
            Showing{" "}
            <span className="text-teal-400 font-bold">
              {filteredHeroes.length}
            </span>{" "}
            of{" "}
            <span className="text-yellow-400 font-bold">{heroes.length}</span>{" "}
            heroes
          </p>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Clear Filters
          </button>
        )}
      </div>

      {/* Enhanced Results Grid - Updated for 2 columns on mobile */}
      {filteredHeroes.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <div className="text-6xl mb-6 opacity-60">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-3">
            No heroes found
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Try adjusting your search or filters to find what you're looking
            for.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}
    </div>
  );
}
