// src/components/HeroCard.jsx
import Link from "next/link";
import {
  Shield,
  Sword,
  Sparkles,
  Target,
  Heart,
  Zap,
  Star,
  Award,
  ArrowRight,
} from "lucide-react";

const roleIcons = {
  tank: Shield,
  fighter: Sword,
  mage: Sparkles,
  marksman: Target,
  support: Heart,
  assassin: Zap,
};

const roleColors = {
  tank: "bg-blue-500",
  fighter: "bg-red-500",
  mage: "bg-purple-500",
  marksman: "bg-orange-500",
  support: "bg-green-500",
  assassin: "bg-pink-500",
};

const difficultyColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
};

export default function HeroCard({ hero }) {
  const RoleIcon = roleIcons[hero.role];
  const roleColor = roleColors[hero.role] || "bg-gray-500";
  const difficultyColor = difficultyColors[hero.difficulty] || "bg-gray-500";
  const buildCount = Object.keys(hero.builds || {}).length;

  return (
    <Link href={`/hero/${hero.slug}`}>
      <div className="group bg-gray-800 rounded-lg shadow-md sm:hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-700 sm:hover:border-[#1fab89] sm:transform sm:hover:scale-105 flex flex-col h-full w-full">
        {/* Mobile: Full card with overlay content */}
        <div className="sm:hidden relative h-44 bg-gray-900 overflow-hidden flex-shrink-0">
          {/* Background Image */}
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: hero.imagePosition || "50% 15%" }}
            onError={(e) => {
              console.log("Image failed to load:", e.target.src);
              e.target.src = "/images/placeholder-hero.jpg";
            }}
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

          {/* Role Badge */}
          <div
            className={`absolute top-1.5 left-1.5 ${roleColor} px-1.5 py-0.5 rounded-full flex items-center gap-1`}
          >
            <RoleIcon className="w-2.5 h-2.5 text-white" />
          </div>

          {/* Difficulty Badge */}
          <div
            className={`absolute top-1.5 right-1.5 ${difficultyColor} px-1.5 py-0.5 rounded-full`}
          >
            <span className="text-[10px] font-medium text-white capitalize">
              {hero.difficulty}
            </span>
          </div>

          {/* Hero Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-2">
            {/* Hero Name with text shadow */}
            <h3
              className="text-sm font-bold text-white mb-1.5 line-clamp-1"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              {hero.name}
            </h3>

            {/* Role Tags */}
            <div className="flex gap-1 mb-1.5">
              <span
                className={`${roleColor} text-white px-1.5 py-0.5 rounded text-[10px] font-medium flex items-center gap-0.5 flex-shrink-0`}
              >
                <RoleIcon className="w-2.5 h-2.5" />
                <span className="truncate">{hero.role}</span>
              </span>
              {hero.secondaryRole && (
                <span className="px-1.5 py-0.5 bg-[#9d4edd] text-white rounded text-[10px] font-medium flex-shrink-0 truncate">
                  {hero.secondaryRole}
                </span>
              )}
            </div>

            {/* Skills and Builds info with text shadow */}
            <div className="flex items-center justify-between text-[10px] text-white">
              <div
                className="flex items-center gap-0.5"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                <Star className="w-2.5 h-2.5" />
                <span>{hero.skills?.length || 4} Skills</span>
              </div>
              <div
                className="flex items-center gap-0.5"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                <Award className="w-2.5 h-2.5" />
                <span>
                  {buildCount} Build{buildCount !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original layout with hover effects */}
        <div className="hidden sm:block">
          {/* Hero Image - Fixed height container */}
          <div className="h-40 lg:h-48 bg-gray-900 relative overflow-hidden flex-shrink-0">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={{ objectPosition: hero.imagePosition || "50% 15%" }}
              onError={(e) => {
                console.log("Image failed to load:", e.target.src);
                e.target.src = "/images/placeholder-hero.jpg";
              }}
            />

            {/* Role Badge - Desktop */}
            <div
              className={`absolute top-2 left-2 lg:top-3 lg:left-3 ${roleColor} px-2 py-1 rounded-full flex items-center gap-1`}
            >
              <RoleIcon className="w-3 h-3 text-white" />
              <span className="text-xs font-medium text-white capitalize">
                {hero.role}
              </span>
            </div>

            {/* Difficulty Badge - Desktop */}
            <div
              className={`absolute top-2 right-2 lg:top-3 lg:right-3 ${difficultyColor} px-2 py-1 rounded-full`}
            >
              <span className="text-xs font-medium text-white capitalize">
                {hero.difficulty}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* View Details on Hover - Desktop only */}
            <div className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#1fab89] text-[#0b132b] px-2 py-1 rounded-full flex items-center gap-1">
                <span className="text-xs font-medium">View Guide</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Hero Info - Desktop */}
          <div className="p-3 lg:p-4 flex flex-col flex-1">
            {/* Hero Name - Fixed height */}
            <div className="mb-2 h-7 flex items-start">
              <h3 className="text-base lg:text-lg font-semibold text-[#ffffff] group-hover:text-[#1fab89] transition-colors line-clamp-1">
                {hero.name}
              </h3>
            </div>

            {/* Role Tags - Always show consistent space */}
            <div className="flex gap-2 mb-3 h-7 items-start">
              <span
                className={`${roleColor} text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1 flex-shrink-0`}
              >
                <RoleIcon className="w-3 h-3" />
                <span>{hero.role}</span>
              </span>
              {hero.secondaryRole ? (
                <span className="px-2 py-1 bg-[#9d4edd] text-[#ffffff] rounded text-xs font-medium flex-shrink-0">
                  {hero.secondaryRole}
                </span>
              ) : (
                <span className="px-2 py-1 bg-transparent text-transparent rounded text-xs font-medium flex-shrink-0">
                  Secondary
                </span>
              )}
            </div>

            {/* Description - Desktop only with fixed height */}
            <div className="mb-3 h-10">
              <p className="text-[#b0bec5] text-sm line-clamp-2">
                {hero.description ||
                  "Master this powerful hero with our comprehensive guide."}
              </p>
            </div>

            {/* Skills Preview - Always show consistent info */}
            <div className="flex items-center justify-between text-xs text-[#b0bec5] mt-auto">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>{hero.skills?.length || 4} Skills</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>
                  {buildCount} Build{buildCount !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
