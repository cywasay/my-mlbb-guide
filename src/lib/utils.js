// lib/utils.js

// === HERO UTILITIES ===

// Search heroes by name
export function searchHeroes(heroes, searchTerm) {
  if (!searchTerm) return heroes;

  return heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Filter heroes by role
export function filterByRole(heroes, role) {
  if (role === "all") return heroes;

  return heroes.filter(
    (hero) => hero.role === role || hero.secondaryRole === role
  );
}

// Combined search and filter for heroes
export function filterHeroes(heroes, searchTerm, selectedRole) {
  let filtered = heroes;

  // Apply role filter first
  filtered = filterByRole(filtered, selectedRole);

  // Then apply search
  filtered = searchHeroes(filtered, searchTerm);

  return filtered;
}

// Find hero by slug
export function findHeroBySlug(heroes, slug) {
  return heroes.find((hero) => hero.slug === slug);
}

// Get heroes by role for suggestions
export function getHeroesByRole(heroes, role, limit = 3) {
  return heroes.filter((hero) => hero.role === role).slice(0, limit);
}

// === ITEM UTILITIES ===

// Search items by name
export function searchItems(items, searchTerm) {
  if (!searchTerm) return items;

  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Filter items by type and tier
export function filterItems(items, type, tier) {
  let filtered = items;

  if (type !== "all") {
    filtered = filtered.filter((item) => item.type === type);
  }

  if (tier !== "all") {
    filtered = filtered.filter((item) => item.tier === tier);
  }

  return filtered;
}

// Combined search and filter for items
export function filterItemsComplete(
  items,
  searchTerm,
  selectedType,
  selectedTier
) {
  let filtered = items;

  // Apply filters first
  filtered = filterItems(filtered, selectedType, selectedTier);

  // Then apply search
  filtered = searchItems(filtered, searchTerm);

  return filtered;
}

// Find item by slug
export function findItemBySlug(items, slug) {
  return items.find((item) => item.slug === slug);
}

// Get items by type
export function getItemsByType(items, type, limit = 6) {
  return items.filter((item) => item.type === type).slice(0, limit);
}

// Get items suitable for a role
export function getItemsForRole(items, role, limit = 6) {
  return items
    .filter((item) => item.bestFor && item.bestFor.includes(role))
    .slice(0, limit);
}

// Sort items by price
export function sortItemsByPrice(items, ascending = true) {
  return [...items].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
}

// Get build path items (for future enhancement)
export function getBuildPathItems(items, targetItem) {
  if (!targetItem.buildPath) return [];

  return targetItem.buildPath
    .map((componentName) => items.find((item) => item.name === componentName))
    .filter(Boolean);
}

// === GENERAL UTILITIES ===

// Create URL-friendly slug from name
export function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Format price with commas
export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Get stat display name
export function getStatDisplayName(statKey) {
  const statNames = {
    physicalAttack: "Physical Attack",
    magicPower: "Magic Power",
    physicalDefense: "Physical Defense",
    magicResistance: "Magic Resistance",
    physicalPEN: "Physical Penetration",
    magicPEN: "Magic Penetration",
    cooldownReduction: "Cooldown Reduction",
    attackSpeed: "Attack Speed",
    criticalChance: "Critical Chance",
    lifesteal: "Lifesteal",
    spellVamp: "Spell Vamp",
    movementSpeed: "Movement Speed",
    HP: "Health Points",
    mana: "Mana",
    HPRegen: "HP Regeneration",
    manaRegen: "Mana Regeneration",
  };

  return statNames[statKey] || statKey.replace(/([A-Z])/g, " $1").trim();
}
