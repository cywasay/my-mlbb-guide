// data/items.js
export const items = [
  {
    id: 1,
    name: "Blade of Despair",
    slug: "blade-of-despair",
    type: "Attack",
    tier: "Tier 3",
    price: 3010,
    image: "/images/items/blade-of-despair.jpg",
    description:
      "Greatly increases physical attack and provides percentage physical penetration.",
    stats: {
      physicalAttack: 160,
      physicalPEN: 25,
    },
    unique: {
      name: "Despair",
      description:
        "Attacking enemy heroes with HP below 50% increases Physical Attack by 25% for 2s (effect cooldown: 5s).",
    },
    buildPath: ["Vampire Mallet", "Berserker's Fury"],
    bestFor: ["Assassin", "Fighter", "Marksman"],
    counters: ["High HP tanks", "Shield users"],
    guide: {
      whenToBuy:
        "Mid to late game for burst damage dealers who need high physical attack.",
      tips: [
        "Perfect for heroes who can quickly burst low HP enemies",
        "Combine with other physical penetration items for maximum effectiveness",
        "Essential for physical damage carries in team fights",
      ],
    },
  },
  {
    id: 2,
    name: "Endless Battle",
    slug: "endless-battle",
    type: "Attack",
    tier: "Tier 3",
    price: 2470,
    image: "/images/items/endless-battle.jpg",
    description:
      "Provides physical attack, HP, mana, lifesteal, and cooldown reduction with true damage proc.",
    stats: {
      physicalAttack: 65,
      HP: 800,
      mana: 400,
      lifesteal: 15,
      cooldownReduction: 10,
    },
    unique: {
      name: "Divine Justice",
      description:
        "After using a skill, the next Basic Attack deals 60% Physical Attack as True Damage (1.5s cooldown).",
    },
    buildPath: ["Vampire Mallet", "Vitality Crystal", "Magic Crystal"],
    bestFor: ["Fighter", "Assassin"],
    counters: ["Pure tanks", "Anti-heal items"],
    guide: {
      whenToBuy: "Core item for skill-based physical heroes who need sustain.",
      tips: [
        "Use skills before basic attacks to trigger true damage",
        "Excellent for heroes with low cooldown skills",
        "Provides good sustain and burst potential",
      ],
    },
  },
  {
    id: 3,
    name: "Hunter Strike",
    slug: "hunter-strike",
    type: "Attack",
    tier: "Tier 3",
    price: 2010,
    image: "/images/items/hunter-strike.jpg",
    description:
      "Increases physical attack and cooldown reduction, with movement speed stacks.",
    stats: {
      physicalAttack: 80,
      cooldownReduction: 15,
    },
    unique: {
      name: "Hunt",
      description:
        "Dealing damage to enemy heroes increases Movement Speed by 15%. Stacks up to 5 times for 3s.",
    },
    buildPath: ["Storm Sword", "Pillager Axe"],
    bestFor: ["Assassin", "Fighter"],
    counters: ["Crowd control", "Slow effects"],
    guide: {
      whenToBuy: "Early to mid game for mobile physical damage dealers.",
      tips: [
        "Stack movement speed by hitting enemies in team fights",
        "Great for chasing down low HP enemies",
        "Synergizes well with heroes who have multiple damage instances",
      ],
    },
  },
  {
    id: 4,
    name: "Malefic Roar",
    slug: "malefic-roar",
    type: "Attack",
    tier: "Tier 3",
    price: 2060,
    image: "/images/items/malefic-roar.jpg",
    description:
      "Provides physical attack and percentage physical penetration.",
    stats: {
      physicalAttack: 60,
      physicalPEN: 40,
    },
    unique: {
      name: "Armor Buster",
      description:
        "When attacking enemies, the Physical PEN of this item can be increased to 60% when enemy has more Physical Defense.",
    },
    buildPath: ["Vampire Mallet", "Blade"],
    bestFor: ["Marksman", "Assassin", "Fighter"],
    counters: ["Low armor enemies", "Magic damage"],
    guide: {
      whenToBuy: "Against high armor enemies or tank-heavy compositions.",
      tips: [
        "Essential against tanky team compositions",
        "More effective against enemies with high physical defense",
        "Core item for late-game physical damage dealers",
      ],
    },
  },
  {
    id: 5,
    name: "Lightning Truncheon",
    slug: "lightning-truncheon",
    type: "Magic",
    tier: "Tier 3",
    price: 2250,
    image: "/images/items/lightning-truncheon.jpg",
    description: "Increases magic power and mana, with chain lightning effect.",
    stats: {
      magicPower: 75,
      mana: 600,
      cooldownReduction: 10,
    },
    unique: {
      name: "Resonate",
      description:
        "Every 6s, the next damaging skill will trigger chain lightning, dealing Magic Damage to 3 enemies.",
    },
    buildPath: ["Staff of Wishes", "Magic Crystal"],
    bestFor: ["Mage"],
    counters: ["Spread formations", "Magic resistance"],
    guide: {
      whenToBuy: "Core item for AoE mages who want additional wave clear.",
      tips: [
        "Excellent for clearing minion waves quickly",
        "Triggers on any damaging skill, including ultimates",
        "Most effective when enemies are grouped together",
      ],
    },
  },
  {
    id: 6,
    name: "Holy Crystal",
    slug: "holy-crystal",
    type: "Magic",
    tier: "Tier 3",
    price: 2180,
    image: "/images/items/holy-crystal.jpg",
    description:
      "Greatly increases magic power and provides percentage magic power boost.",
    stats: {
      magicPower: 100,
    },
    unique: {
      name: "Mystery",
      description: "Increases Magic Power by 21-35% (scales with level).",
    },
    buildPath: ["Staff of Wishes", "Magic Blade"],
    bestFor: ["Mage"],
    counters: ["Magic resistance", "Burst prevention"],
    guide: {
      whenToBuy: "Core damage item for burst mages in mid to late game.",
      tips: [
        "Provides the highest magic power scaling in the game",
        "Essential for mages who need maximum burst damage",
        "More effective in late game when you have higher base magic power",
      ],
    },
  },
  {
    id: 7,
    name: "Divine Glaive",
    slug: "divine-glaive",
    type: "Magic",
    tier: "Tier 3",
    price: 1970,
    image: "/images/items/divine-glaive.jpg",
    description:
      "Increases magic power and provides percentage magic penetration.",
    stats: {
      magicPower: 65,
      magicPEN: 40,
    },
    unique: {
      name: "Spellbreaker",
      description:
        "When HP is higher than 70%, the unique effect of this item increases by 30%.",
    },
    buildPath: ["Staff of Wishes", "Blade"],
    bestFor: ["Mage"],
    counters: ["Low magic resistance", "Burst damage"],
    guide: {
      whenToBuy: "Against magic resistance heavy team compositions.",
      tips: [
        "Essential against tanky enemies with magic resistance",
        "Stay above 70% HP for maximum penetration",
        "Core item for mid to late game mage builds",
      ],
    },
  },
  {
    id: 8,
    name: "Dominance Ice",
    slug: "dominance-ice",
    type: "Defense",
    tier: "Tier 3",
    price: 2010,
    image: "/images/items/dominance-ice.jpg",
    description:
      "Provides physical defense, mana, and cooldown reduction with attack speed reduction aura.",
    stats: {
      physicalDefense: 70,
      mana: 500,
      cooldownReduction: 15,
    },
    unique: {
      name: "Arctic Cold",
      description:
        "Reduces Attack Speed of nearby enemies by 30% and reduces Shield and HP Regen effects by 50%.",
    },
    buildPath: ["Leather Jerkin", "Magic Crystal"],
    bestFor: ["Tank", "Fighter"],
    counters: ["Attack speed carries", "Healing heroes"],
    guide: {
      whenToBuy:
        "Against attack speed based marksmen or healing heavy compositions.",
      tips: [
        "Excellent counter to attack speed based heroes",
        "Reduces enemy healing and regeneration effects",
        "Stay close to enemies to apply the debuff aura",
      ],
    },
  },
  {
    id: 9,
    name: "Athena's Shield",
    slug: "athenas-shield",
    type: "Defense",
    tier: "Tier 3",
    price: 2150,
    image: "/images/items/athenas-shield.jpg",
    description: "Provides magic resistance and HP with a magic damage shield.",
    stats: {
      magicResistance: 62,
      HP: 900,
      HPRegen: 10,
    },
    unique: {
      name: "Shield",
      description:
        "Can absorb 510-1350 Magic Damage (scales with level). Shield regenerates 10s after not taking Magic Damage.",
    },
    buildPath: ["Magic Blade", "Vitality Crystal"],
    bestFor: ["Tank", "Fighter"],
    counters: ["Magic burst", "AoE mages"],
    guide: {
      whenToBuy: "Against magic damage heavy team compositions or burst mages.",
      tips: [
        "Essential against magic burst heroes",
        "Shield regenerates when you avoid magic damage",
        "Combine with other magic resistance items for maximum protection",
      ],
    },
  },
  {
    id: 10,
    name: "Immortality",
    slug: "immortality",
    type: "Defense",
    tier: "Tier 3",
    price: 2120,
    image: "/images/items/immortality.jpg",
    description: "Provides physical defense and HP with resurrection effect.",
    stats: {
      physicalDefense: 40,
      HP: 800,
    },
    unique: {
      name: "Immortal",
      description:
        "Resurrect in 2s after dying and gain 15% HP and a shield that can absorb 300-1000 damage (scales with level). 180s cooldown.",
    },
    buildPath: ["Leather Jerkin", "Vitality Crystal"],
    bestFor: ["Tank", "Fighter", "Core carries"],
    counters: ["Burst damage", "Execute effects"],
    guide: {
      whenToBuy:
        "Core defensive item for important team members or when facing burst compositions.",
      tips: [
        "Provides a second chance in crucial team fights",
        "Long cooldown means positioning is still important",
        "Most effective on heroes who can impact fights after resurrection",
      ],
    },
  },
];
