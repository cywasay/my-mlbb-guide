// src/components/SearchBar.jsx
import { Search, X, Filter, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchBar({
  searchTerm,
  onSearchChange,
  suggestions = [],
  showAdvanced = false,
  onToggleAdvanced,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          onSearchChange(suggestions[selectedIndex].name);
          setShowSuggestions(false);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const clearSearch = () => {
    onSearchChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search heroes, abilities, items..."
          value={searchTerm}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setShowSuggestions(true);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setShowSuggestions(true);
            setIsFocused(true);
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 200);
            setIsFocused(false);
          }}
          className={`
            w-full px-4 py-3 pl-12 pr-20 
            bg-gray-800 border rounded-lg outline-none 
            text-[#f0f0f0] placeholder-[#b0bec5]
            transition-all duration-200 ease-in-out
            ${
              isFocused
                ? "border-[#1fab89] ring-2 ring-[#1fab89]/20 shadow-lg"
                : "border-gray-600 hover:border-gray-500"
            }
          `}
        />

        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Search
            className={`w-5 h-5 transition-colors duration-200 ${
              isFocused ? "text-[#1fab89]" : "text-[#b0bec5]"
            }`}
          />
        </div>

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <AnimatePresence>
            {searchTerm && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clearSearch}
                className="p-1 rounded-full hover:bg-gray-700 transition-colors duration-150"
                title="Clear search"
              >
                <X className="w-4 h-4 text-[#b0bec5] hover:text-[#f0f0f0]" />
              </motion.button>
            )}
          </AnimatePresence>

          {onToggleAdvanced && (
            <motion.button
              onClick={onToggleAdvanced}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                p-1 rounded-full transition-all duration-200
                ${
                  showAdvanced
                    ? "bg-[#1fab89] text-[#0b132b] shadow-md"
                    : "hover:bg-gray-700 text-[#b0bec5] hover:text-[#f0f0f0]"
                }
              `}
              title="Advanced filters"
            >
              <motion.div
                animate={{ rotate: showAdvanced ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Filter className="w-4 h-4" />
              </motion.div>
            </motion.button>
          )}
        </div>
      </div>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.15 }}
                  onClick={() => {
                    onSearchChange(suggestion.name);
                    setShowSuggestions(false);
                  }}
                  className={`
                    flex items-center gap-3 px-4 py-3 cursor-pointer 
                    transition-colors duration-150
                    ${
                      index === selectedIndex
                        ? "bg-[#1fab89] text-[#0b132b]"
                        : "hover:bg-gray-700 text-[#f0f0f0]"
                    }
                  `}
                >
                  <img
                    src={suggestion.image}
                    alt={suggestion.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">
                      {suggestion.name}
                    </div>
                    <div
                      className={`text-sm flex items-center gap-1 ${
                        index === selectedIndex
                          ? "text-[#0b132b]/70"
                          : "text-[#b0bec5]"
                      }`}
                    >
                      <Sparkles className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{suggestion.role}</span>
                    </div>
                  </div>
                  {suggestion.tier && (
                    <div
                      className={`
                      px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                      ${
                        index === selectedIndex
                          ? "bg-[#0b132b]/20 text-[#0b132b]"
                          : "bg-gray-600 text-[#f0f0f0]"
                      }
                    `}
                    >
                      {suggestion.tier}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
