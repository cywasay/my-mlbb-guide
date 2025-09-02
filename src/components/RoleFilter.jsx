// src/components/RoleFilter.jsx
import {
  Shield,
  Sword,
  Sparkles,
  Target,
  Heart,
  Zap,
  Users,
  Star,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const roleIcons = {
  tank: Shield,
  fighter: Sword,
  mage: Sparkles,
  marksman: Target,
  support: Heart,
  assassin: Zap,
  all: Users,
};

export default function RoleFilter({
  roles,
  selectedRole,
  onRoleChange,
  multiSelect = false,
  showCounts = true,
  collapsible = false,
}) {
  const [selectedRoles, setSelectedRoles] = useState(
    multiSelect ? (Array.isArray(selectedRole) ? selectedRole : []) : []
  );
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleRoleClick = (roleId) => {
    if (multiSelect) {
      const newSelection = selectedRoles.includes(roleId)
        ? selectedRoles.filter((id) => id !== roleId)
        : [...selectedRoles, roleId];

      setSelectedRoles(newSelection);
      onRoleChange(newSelection);
    } else {
      onRoleChange(selectedRole === roleId ? "all" : roleId);
    }
  };

  const clearAllFilters = () => {
    if (multiSelect) {
      setSelectedRoles([]);
      onRoleChange([]);
    } else {
      onRoleChange("all");
    }
  };

  const isSelected = (roleId) => {
    return multiSelect
      ? selectedRoles.includes(roleId)
      : selectedRole === roleId;
  };

  const hasActiveFilters =
    (multiSelect && selectedRoles.length > 0) ||
    (!multiSelect && selectedRole !== "all");

  return (
    <div className="space-y-3">
      {/* Header - Responsive flex layout */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm sm:text-base font-medium text-[#f0f0f0]">
            Filter by Role
          </h3>
          {collapsible && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded-full hover:bg-gray-700 hover:shadow-sm border border-transparent hover:border-gray-600"
            >
              <ChevronDown
                className={`w-4 h-4 text-[#b0bec5] transition-transform ${
                  isCollapsed ? "-rotate-90" : ""
                }`}
              />
            </button>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 text-xs sm:text-sm text-[#b0bec5] hover:text-[#f0f0f0] px-2 py-1 rounded-full hover:bg-gray-700 hover:shadow-sm border border-transparent hover:border-gray-600"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Clear</span>
          </button>
        )}
      </div>

      {!isCollapsed && (
        <div className="space-y-3">
          {/* Role buttons - Responsive grid layout */}
          <div className="grid grid-cols-2 xs:flex xs:flex-wrap gap-1.5 sm:gap-2">
            {roles.map((role) => {
              const IconComponent = roleIcons[role.id] || Users;
              const selected = isSelected(role.id);

              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleClick(role.id)}
                  className={`
                    flex items-center justify-center xs:justify-start gap-1 xs:gap-2 px-2 xs:px-3 py-2 rounded-lg font-medium text-xs xs:text-sm
                    min-h-[2.5rem] xs:min-h-0 relative overflow-hidden group
                    ${
                      selected
                        ? "bg-[#1fab89] text-[#0b132b] shadow-lg shadow-[#1fab89]/25 border border-[#06d6a0]"
                        : "bg-gray-800 text-[#f0f0f0] border border-gray-600 hover:bg-[#2d3748] hover:border-[#9d4edd] hover:text-[#ffffff] hover:shadow-md hover:shadow-[#9d4edd]/20"
                    }
                  `}
                  title={role.description || `Filter by ${role.name}`}
                >
                  <IconComponent className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                  <span className="truncate text-center xs:text-left">
                    {role.name}
                  </span>

                  {/* Count badge - Hidden on very small screens */}
                  {showCounts && role.count && (
                    <span
                      className={`
                      hidden xs:inline-flex text-xs px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0
                      ${
                        selected
                          ? "bg-[#0b132b]/30 text-[#0b132b] shadow-sm"
                          : "bg-gray-700 text-[#b0bec5] group-hover:bg-gray-600 group-hover:text-white"
                      }
                    `}
                    >
                      {role.count}
                    </span>
                  )}

                  {/* Star indicator - Only show on mobile when selected */}
                  {selected && (
                    <Star className="w-2.5 h-2.5 xs:w-3 xs:h-3 flex-shrink-0 xs:hidden" />
                  )}
                  {selected && (
                    <Star className="w-3 h-3 flex-shrink-0 hidden xs:inline" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active filters display - for multiSelect mode */}
          {multiSelect && selectedRoles.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-3 border-t border-gray-700">
              <span className="text-xs text-[#b0bec5] mb-1 w-full xs:w-auto xs:mb-0">
                Active filters:
              </span>
              {selectedRoles.map((roleId) => {
                const role = roles.find((r) => r.id === roleId);
                return role ? (
                  <span
                    key={roleId}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-[#1fab89]/20 text-[#1fab89] text-xs rounded-full"
                  >
                    <span className="truncate max-w-20 xs:max-w-none">
                      {role.name}
                    </span>
                    <button
                      onClick={() => handleRoleClick(roleId)}
                      className="hover:text-[#06d6a0] transition-colors flex-shrink-0"
                      aria-label={`Remove ${role.name} filter`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ) : null;
              })}
            </div>
          )}

          {/* Mobile-specific count display when counts are hidden in buttons */}
          {showCounts && (
            <div className="xs:hidden">
              <div className="text-xs text-[#b0bec5] space-y-1">
                <div className="text-[10px] opacity-75 mb-1">Hero counts:</div>
                <div className="flex flex-wrap gap-1">
                  {roles
                    .filter((role) => role.count && isSelected(role.id))
                    .map((role) => (
                      <span
                        key={role.id}
                        className="text-[10px] bg-gray-700/50 px-1.5 py-0.5 rounded"
                      >
                        {role.name}: {role.count}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
