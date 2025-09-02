// data/heroes.js
export const heroes = [
  {
    id: 1,
    name: "Gusion",
    slug: "gusion",
    role: "assassin",
    secondaryRole: "mage",
    difficulty: "high",
    image: "/images/heroes/gusion.jpg",
    description:
      "A deadly assassin who can eliminate enemies in seconds with his shadow blade techniques.",
    skills: [
      {
        name: "Roulette",
        type: "passive",
        description: "Each dagger hit reduces skill cooldown by 0.5s",
      },
      {
        name: "Sword Spike",
        type: "skill1",
        description: "Throws daggers in target direction dealing magic damage",
      },
      {
        name: "Shadowblade Slaughter",
        type: "skill2",
        description: "Blinks to target location and enhances next basic attack",
      },
      {
        name: "Incandescence",
        type: "ultimate",
        description: "Unleashes all daggers dealing massive magic damage",
      },
    ],
    builds: {
      jungle: {
        items: [
          "Hunter Strike",
          "Blade of Despair",
          "Malefic Roar",
          "Immortality",
          "Athena's Shield",
          "Warrior Boots",
        ],
        emblem: "Assassin",
        spell: "Retribution",
      },
      mid: {
        items: [
          "Lightning Truncheon",
          "Holy Crystal",
          "Divine Glaive",
          "Blood Wings",
          "Winter Truncheon",
          "Arcane Boots",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Gusion is a high-mobility assassin who excels at bursting down squishy targets. His combo potential makes him deadly in the right hands.",
      playstyle:
        "Focus on farming early game, look for picks on isolated enemies, and snowball your advantage.",
      tips: [
        "Master the dagger recall timing for maximum damage",
        "Always position near walls for escape routes",
        "Target enemy marksmen and mages first",
      ],
      counters: ["Khufra", "Franco", "Chou"],
      synergies: ["Tigreal", "Atlas", "Johnson"],
    },
  },
  {
    id: 2,
    name: "Ling",
    slug: "ling",
    role: "assassin",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/ling.jpg",
    description:
      "A wall-walking assassin with incredible mobility and burst potential.",
    skills: [
      {
        name: "Cloud Walker",
        type: "passive",
        description: "Can walk on walls and gains energy over time",
      },
      {
        name: "Finch Poise",
        type: "skill1",
        description: "Jumps to target location dealing physical damage",
      },
      {
        name: "Defiant Sword",
        type: "skill2",
        description: "Charges forward with sword dealing damage to enemies",
      },
      {
        name: "Tempest of Blades",
        type: "ultimate",
        description: "Unleashes sword energy in all directions",
      },
    ],
    builds: {
      jungle: {
        items: [
          "Blade of Despair",
          "Hunter Strike",
          "Endless Battle",
          "Malefic Roar",
          "Immortality",
          "Warrior Boots",
        ],
        emblem: "Assassin",
        spell: "Retribution",
      },
    },
    guide: {
      overview:
        "Ling is a unique assassin who uses walls for mobility. Perfect for players who love hit-and-run tactics.",
      playstyle:
        "Use walls to navigate the map safely, pick off isolated targets, and escape quickly.",
      tips: [
        "Always stay near walls for energy regeneration",
        "Use ultimate from walls for better positioning",
        "Avoid open areas where you can't use passive",
      ],
      counters: ["Saber", "Helcurt", "Natalia"],
      synergies: ["Tigreal", "Gatotkaca", "Atlas"],
    },
  },
  {
    id: 3,
    name: "Kagura",
    slug: "kagura",
    role: "mage",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/kagura.jpg",
    description:
      "An elegant mage who controls her umbrella to deal devastating magic damage.",
    skills: [
      {
        name: "Yin Yang Gathering",
        type: "passive",
        description: "Umbrella returns automatically after 6 seconds",
      },
      {
        name: "Seimei Umbrella Open",
        type: "skill1",
        description: "Throws umbrella forward dealing magic damage",
      },
      {
        name: "Rasho Umbrella Flee",
        type: "skill2",
        description: "Moves to umbrella location or knocks back enemies",
      },
      {
        name: "Yin Yang Overturn",
        type: "ultimate",
        description: "Pulls enemies to umbrella dealing massive damage",
      },
    ],
    builds: {
      mid: {
        items: [
          "Lightning Truncheon",
          "Holy Crystal",
          "Divine Glaive",
          "Blood Wings",
          "Immortality",
          "Arcane Boots",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Kagura is a high-skill mage with incredible burst and mobility when mastered properly.",
      playstyle:
        "Control team fights with umbrella placement, burst priority targets, maintain safe distance.",
      tips: [
        "Practice umbrella positioning for maximum combo potential",
        "Use skill 2 defensively to escape danger",
        "Time ultimate carefully for team fight impact",
      ],
      counters: ["Helcurt", "Natalia", "Hayabusa"],
      synergies: ["Johnson", "Atlas", "Tigreal"],
    },
  },
  {
    id: 4,
    name: "Tigreal",
    slug: "tigreal",
    role: "tank",
    secondaryRole: "support",
    difficulty: "medium",
    image: "/images/heroes/tigreal.jpg",
    description:
      "A reliable tank with excellent crowd control and team fight initiation.",
    skills: [
      {
        name: "Fearless",
        type: "passive",
        description: "Reduces damage taken when HP is low",
      },
      {
        name: "Attack Wave",
        type: "skill1",
        description: "Sends shockwave forward dealing damage",
      },
      {
        name: "Sacred Hammer",
        type: "skill2",
        description: "Charges forward pushing enemies and dealing damage",
      },
      {
        name: "Implosion",
        type: "ultimate",
        description: "Pulls nearby enemies together dealing magic damage",
      },
    ],
    builds: {
      tank: {
        items: [
          "Dominance Ice",
          "Antique Cuirass",
          "Athena's Shield",
          "Immortality",
          "Oracle",
          "Warrior Boots",
        ],
        emblem: "Tank",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Tigreal is the perfect tank for beginners, offering reliable crowd control and team fight presence.",
      playstyle:
        "Initiate team fights, protect your carry, and control enemy positioning.",
      tips: [
        "Use flicker + ultimate combo for surprise initiations",
        "Always position between enemies and your carry",
        "Don't engage without your team nearby",
      ],
      counters: ["Khufra", "Johnson", "Franco"],
      synergies: ["Gusion", "Kagura", "Granger"],
    },
  },
  {
    id: 5,
    name: "Hayabusa",
    slug: "hayabusa",
    role: "assassin",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/hayabusa.jpg",
    description:
      "A swift ninja who excels at single-target elimination with his shadow skills.",
    skills: [
      {
        name: "Ninjutsu: Trace of Shadow",
        type: "passive",
        description:
          "Each skill hit applies a Shadow Mark. At 4 stacks, Hayabusa's next attack deals extra damage.",
      },
      {
        name: "Phantom Shuriken",
        type: "skill1",
        description:
          "Throws 3 shurikens forward, damaging and slowing enemies. Heals Hayabusa slightly if all 3 hit the same target.",
      },
      {
        name: "Quad Shadow",
        type: "skill2",
        description:
          "Dashes forward and releases 3 shadows. Can teleport to them for mobility and outplay potential.",
      },
      {
        name: "Ougi: Shadow Kill",
        type: "ultimate",
        description:
          "Hayabusa disappears and slashes multiple times across enemies in the area, prioritizing fewer targets.",
      },
    ],
    builds: {
      jungle: {
        items: [
          "Blade of the Heptaseas",
          "Hunter Strike",
          "Endless Battle",
          "Malefic Roar",
          "Blade of Despair",
          "Immortality",
        ],
        emblem: "Assassin",
        spell: "Execute",
      },
      sidelane: {
        items: [
          "Blade of the Heptaseas",
          "Hunter Strike",
          "Endless Battle",
          "Malefic Roar",
          "Blade of Despair",
          "Immortality",
        ],
        emblem: "Assassin",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Hayabusa is a swift ninja assassin who excels at single-target elimination. His shadow skills provide excellent mobility and outplay potential.",
      playstyle:
        "Use Quad Shadow to engage or escape. Aim to hit all shurikens for sustain. Farm early for items.",
      tips: [
        "Use Quad Shadow to engage or escape safely",
        "Aim to hit all 3 shurikens on the same target for healing",
        "Farm early game to get core items quickly",
        "Shadow marks are key to maximizing damage output",
      ],
      counters: ["Diggie", "Chou", "Aldous"],
      synergies: ["Atlas", "Khufra", "Tigreal"],
    },
  },
  {
    id: 6,
    name: "Ruby",
    slug: "ruby",
    role: "fighter",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/ruby.jpg",
    description:
      "A lifesteal fighter with strong crowd control and high sustain.",
    skills: [
      {
        name: "Let's Dance!",
        type: "passive",
        description:
          "After each skill, Ruby dashes a short distance and gains lifesteal on her skills.",
      },
      {
        name: "Be Good!",
        type: "skill1",
        description:
          "Ruby slashes with her scythe, damaging and slowing enemies.",
      },
      {
        name: "Don't Run, Wolf King!",
        type: "skill2",
        description:
          "Ruby swings her scythe twice, pulling enemies toward her.",
      },
      {
        name: "I'm Offended!",
        type: "ultimate",
        description: "Ruby hooks all enemies in front of her and stuns them.",
      },
    ],
    builds: {
      sidelane: {
        items: [
          "Warrior Boots",
          "Haas's Claws",
          "Dominance Ice",
          "Immortality",
          "Athena's Shield",
          "Oracle",
        ],
        emblem: "Fighter",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Ruby is a lifesteal fighter with strong crowd control and high sustain. Her ability to chain CC makes her excellent in team fights.",
      playstyle:
        "Use Flicker + Ultimate for surprise engages. Sustain fights with lifesteal and CC chains.",
      tips: [
        "Use Flicker + Ultimate combo for surprise team fight initiations",
        "Chain your crowd control abilities to lock down enemies",
        "Sustain through fights with your lifesteal mechanics",
        "Position yourself to hook multiple enemies with ultimate",
      ],
      counters: ["Eudora", "Aurora", "Pharsa"],
      synergies: ["Cecilion", "Granger", "Claude"],
    },
  },
  {
    id: 7,
    name: "Cecilion",
    slug: "cecilion",
    role: "mage",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/cecillion.jpg",
    description:
      "A scaling mage who deals massive AoE damage and can poke safely from a distance.",
    skills: [
      {
        name: "Overflowing",
        type: "passive",
        description:
          "Max Mana increases his damage. Every skill hit increases max Mana permanently.",
      },
      {
        name: "Bat Impact",
        type: "skill1",
        description:
          "Launches a giant bat forward, dealing damage in its path and exploding on impact.",
      },
      {
        name: "Sanguine Claws",
        type: "skill2",
        description: "Summons claws that immobilize enemies caught in them.",
      },
      {
        name: "Bat Feast",
        type: "ultimate",
        description:
          "Unleashes multiple bats at nearby enemies, dealing continuous magic damage and healing Cecilion.",
      },
    ],
    builds: {
      mid: {
        items: [
          "Arcane Boots",
          "Clock of Destiny",
          "Lightning Truncheon",
          "Ice Queen Wand",
          "Holy Crystal",
          "Blood Wings",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
      sidelane: {
        items: [
          "Arcane Boots",
          "Clock of Destiny",
          "Lightning Truncheon",
          "Ice Queen Wand",
          "Holy Crystal",
          "Blood Wings",
        ],
        emblem: "Mage",
        spell: "Sprint",
      },
    },
    guide: {
      overview:
        "Cecilion is a scaling mage who deals massive AoE damage and can poke safely from a distance. He becomes incredibly powerful in the late game.",
      playstyle:
        "Poke safely in lane with Skill 1. Always farm Mana to scale. Position carefully in teamfights.",
      tips: [
        "Poke enemies safely in lane using Skill 1",
        "Always focus on farming Mana to scale your damage",
        "Position carefully in team fights to maximize damage",
        "Use Skill 2 to immobilize priority targets",
      ],
      counters: ["Hayabusa", "Lancelot", "Ling"],
      synergies: ["Ruby", "Tigreal", "Khufra"],
    },
  },
  {
    id: 8,
    name: "Joy",
    slug: "joy",
    role: "assassin",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/joy.jpg",
    imagePosition: "50% 50%",
    description:
      "An energetic assassin with high mobility and burst magic damage.",
    skills: [
      {
        name: "Humph, Joy's Angry!",
        type: "passive",
        description:
          "Joy gains shield and extra movement speed when hitting enemies with her skills in rhythm.",
      },
      {
        name: "Look, Leonin Crystal!",
        type: "skill1",
        description: "Summons a crystal that deals magic damage in an area.",
      },
      {
        name: "Meow, Rhythm of Joy!",
        type: "skill2",
        description:
          "Dashes in a direction, damaging enemies. Can be cast repeatedly if timed correctly with the beat.",
      },
      {
        name: "Ha, Electrifying Beats!",
        type: "ultimate",
        description:
          "Joy performs a series of AoE magic attacks, gaining CC immunity and movement speed.",
      },
    ],
    builds: {
      jungle: {
        items: [
          "Demon Shoes",
          "Genius Wand",
          "Holy Crystal",
          "Concentrated Energy",
          "Divine Glaive",
          "Winter Truncheon",
        ],
        emblem: "Mage",
        spell: "Sprint",
      },
      sidelane: {
        items: [
          "Demon Shoes",
          "Genius Wand",
          "Holy Crystal",
          "Concentrated Energy",
          "Divine Glaive",
          "Winter Truncheon",
        ],
        emblem: "Mage",
        spell: "Purify",
      },
    },
    guide: {
      overview:
        "Joy is an energetic assassin with high mobility and burst magic damage. She excels at chaining her abilities to maximize damage output.",
      playstyle:
        "Master timing her Skill 2 chains to trigger full rhythm. Use Ultimate after building shields for survivability.",
      tips: [
        "Master timing her Skill 2 chains for maximum rhythm effect",
        "Use Ultimate after building shields for better survivability",
        "Focus on hitting multiple enemies to build shield stacks",
        "Time your abilities to maintain the rhythm for bonus effects",
      ],
      counters: ["Chou", "Franco", "Eudora"],
      synergies: ["Khufra", "Atlas", "Tigreal"],
    },
  },
  {
    id: 9,
    name: "Julian",
    slug: "julian",
    role: "assassin",
    secondaryRole: "fighter",
    difficulty: "high",
    image: "/images/heroes/julian.jpg",
    description:
      "A hybrid assassin-fighter with adaptable skills and heavy burst.",
    skills: [
      {
        name: "Smith's Legacy",
        type: "passive",
        description:
          "After casting two different skills, the next skill is enhanced and all basic skills go on cooldown.",
      },
      {
        name: "Scythe",
        type: "skill1",
        description:
          "Throws a scythe forward, damaging and slowing enemies. Enhanced version pulls enemies toward him.",
      },
      {
        name: "Sword",
        type: "skill2",
        description:
          "Dashes through enemies, dealing damage. Enhanced version allows extra range and slows.",
      },
      {
        name: "Chain",
        type: "ultimate",
        description:
          "Launches chains to immobilize enemies. Enhanced version knocks them up briefly.",
      },
    ],
    builds: {
      jungle: {
        items: [
          "Clock of Destiny",
          "Lightning Truncheon",
          "Concentrated Energy",
          "Holy Crystal",
          "Blood Wings",
          "Divine Glaive",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
      sidelane: {
        items: [
          "Clock of Destiny",
          "Lightning Truncheon",
          "Concentrated Energy",
          "Holy Crystal",
          "Blood Wings",
          "Divine Glaive",
        ],
        emblem: "Mage",
        spell: "Execute",
      },
    },
    guide: {
      overview:
        "Julian is a hybrid assassin-fighter with adaptable skills and heavy burst. His enhanced abilities provide incredible versatility.",
      playstyle:
        "Cycle abilities correctly to always get enhanced skills. Use CC-enhanced Chain for guaranteed combos.",
      tips: [
        "Cycle abilities correctly to always get enhanced skills",
        "Use CC-enhanced Chain for guaranteed combo setups",
        "Master the skill rotation for maximum damage output",
        "Time enhanced abilities for crucial team fight moments",
      ],
      counters: ["Lancelot", "Diggie", "Fanny"],
      synergies: ["Cecilion", "Granger", "Atlas"],
    },
  },
  {
    id: 10,
    name: "Lukas",
    slug: "lukas",
    role: "fighter",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/lukas.jpg",
    description:
      "A new-age fighter with high sustain and flexible damage output.",
    skills: [
      {
        name: "Resilience",
        type: "passive",
        description: "Gains bonus defense and lifesteal when low on HP.",
      },
      {
        name: "Crushing Blow",
        type: "skill1",
        description:
          "Lunges forward, dealing AoE damage and reducing enemy defenses.",
      },
      {
        name: "Iron Guard",
        type: "skill2",
        description: "Shields himself and boosts movement speed briefly.",
      },
      {
        name: "Titan's Wrath",
        type: "ultimate",
        description:
          "Unleashes a massive AoE strike that stuns and deals heavy burst.",
      },
    ],
    builds: {
      sidelane: {
        items: [
          "Warrior Boots",
          "Bloodlust Axe",
          "Dominance Ice",
          "Athena's Shield",
          "Blade of Despair",
          "Immortality",
        ],
        emblem: "Fighter",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Lukas is a new-age fighter with high sustain and flexible damage output. His resilience makes him excellent in extended fights.",
      playstyle:
        "Engage with Skill 1, soak damage with Skill 2, then finish with Ultimate for CC and burst.",
      tips: [
        "Engage fights with Skill 1 to reduce enemy defenses",
        "Use Skill 2 to soak damage and reposition",
        "Save Ultimate for crowd control and burst damage",
        "Take advantage of passive when low on HP for sustain",
      ],
      counters: ["Baxia", "Karrie", "Aurora"],
      synergies: ["Wanwan", "Granger", "Claude"],
    },
  },
  {
    id: 11,
    name: "Phoveus",
    slug: "phoveus",
    role: "fighter",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/phoveus.jpg",
    description: "A tanky fighter who punishes dash-heavy heroes.",
    skills: [
      {
        name: "Deity Intuition",
        type: "passive",
        description:
          "Skill cooldowns are reduced whenever nearby enemies use Blink/Dash.",
      },
      {
        name: "Malefic Terror",
        type: "skill1",
        description:
          "Throws his shield forward, dealing magic damage and marking enemies.",
      },
      {
        name: "Astaros Eye",
        type: "skill2",
        description:
          "Creates a zone that slows enemies and pulls them toward the center.",
      },
      {
        name: "Demonic Force",
        type: "ultimate",
        description:
          "Teleports to enemy dashers, dealing AoE damage and resetting when enemies dash again.",
      },
    ],
    builds: {
      sidelane: {
        items: [
          "Tough Boots",
          "Clock of Destiny",
          "Concentrated Energy",
          "Dominance Ice",
          "Oracle",
          "Immortality",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
      jungle: {
        items: [
          "Tough Boots",
          "Clock of Destiny",
          "Concentrated Energy",
          "Dominance Ice",
          "Oracle",
          "Immortality",
        ],
        emblem: "Mage",
        spell: "Sprint",
      },
    },
    guide: {
      overview:
        "Phoveus is a tanky fighter who punishes dash-heavy heroes. He excels at countering mobile assassins and fighters.",
      playstyle:
        "Hold Ultimate for dash-heavy enemies like Fanny, Lancelot, or Wanwan. Spam abilities to sustain in fights.",
      tips: [
        "Hold Ultimate for dash-heavy enemies like Fanny or Lancelot",
        "Use passive to reduce cooldowns against mobile enemies",
        "Spam abilities to sustain through team fights",
        "Position to catch multiple enemies with Skill 2",
      ],
      counters: ["Cecilion", "Pharsa", "Karrie"],
      synergies: ["Atlas", "Ruby", "Tigreal"],
    },
  },
  {
    id: 12,
    name: "Harith",
    slug: "harith",
    role: "mage",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/harith.jpg",
    description:
      "A mobile mage who relies on dashes and AoE burst inside his ultimate field.",
    skills: [
      {
        name: "Key Insight",
        type: "passive",
        description:
          "Reduces duration of CC by a percentage based on enemies nearby.",
      },
      {
        name: "Synchro Fission",
        type: "skill1",
        description:
          "Releases a phantom copy that explodes, dealing AoE magic damage.",
      },
      {
        name: "Chrono Dash",
        type: "skill2",
        description:
          "Dashes forward, attacking and shielding himself. Resets inside Ultimate.",
      },
      {
        name: "Zaman Force",
        type: "ultimate",
        description:
          "Summons a chrono-field that slows enemies and reduces dash cooldowns.",
      },
    ],
    builds: {
      mid: {
        items: [
          "Calamity Reaper",
          "Magic Shoes",
          "Feather of Heaven",
          "Concentrated Energy",
          "Holy Crystal",
          "Blood Wings",
        ],
        emblem: "Mage",
        spell: "Purify",
      },
      sidelane: {
        items: [
          "Calamity Reaper",
          "Magic Shoes",
          "Feather of Heaven",
          "Concentrated Energy",
          "Holy Crystal",
          "Blood Wings",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Harith is a mobile mage who relies on dashes and AoE burst inside his ultimate field. He becomes incredibly powerful once he gets his ultimate.",
      playstyle:
        "Use dashes inside Zaman Force to spam abilities. Time Skill 2 to avoid damage.",
      tips: [
        "Use dashes inside Zaman Force to spam abilities",
        "Time Skill 2 carefully to avoid incoming damage",
        "Position ultimate to trap enemies inside the field",
        "Focus on building mana and cooldown reduction items",
      ],
      counters: ["Khufra", "Chou", "Hayabusa"],
      synergies: ["Atlas", "Ruby", "Tigreal"],
    },
  },
  {
    id: 13,
    name: "Zhuxin",
    slug: "zhuxin",
    role: "mage",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/zhuxin.jpg",
    description: "A high-burst mage with strong AoE crowd control.",
    skills: [
      {
        name: "Dark Wisdom",
        type: "passive",
        description:
          "Skill damage increases when enemies are affected by crowd control.",
      },
      {
        name: "Abyssal Wave",
        type: "skill1",
        description: "Sends a shockwave forward, dealing magic damage.",
      },
      {
        name: "Shadow Grasp",
        type: "skill2",
        description:
          "Roots enemies in place briefly and amplifies following damage.",
      },
      {
        name: "Cataclysm",
        type: "ultimate",
        description:
          "Calls down a devastating explosion in an area, stunning enemies hit.",
      },
    ],
    builds: {
      mid: {
        items: [
          "Arcane Boots",
          "Clock of Destiny",
          "Lightning Truncheon",
          "Ice Queen Wand",
          "Holy Crystal",
          "Blood Wings",
        ],
        emblem: "Mage",
        spell: "Flicker",
      },
    },
    guide: {
      overview:
        "Zhuxin is a high-burst mage with strong AoE crowd control. She excels at controlling team fights with her CC and burst combination.",
      playstyle:
        "Always chain CC from Skill 2 into Ultimate for guaranteed hits. Farm safely until you get damage core items.",
      tips: [
        "Always chain CC from Skill 2 into Ultimate for guaranteed hits",
        "Farm safely until you get core damage items",
        "Position carefully to maximize AoE damage in team fights",
        "Use passive by hitting CC'd enemies for bonus damage",
      ],
      counters: ["Fanny", "Lancelot", "Diggie"],
      synergies: ["Khufra", "Ruby", "Atlas"],
    },
  },
  // Additional heroes to expand the roster:
  {
    id: 14,
    name: "Fanny",
    slug: "fanny",
    role: "assassin",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/fanny.jpg",
    description: "Cable-swinging assassin with high mobility and energy management.",
    skills: [
      { name: "Air Superiority", type: "passive", description: "Gains damage reduction when airborne" },
      { name: "Tornado Strike", type: "skill1", description: "Throws cables to pull herself and deal damage" },
      { name: "Steel Cable", type: "skill2", description: "Launches cable to terrain for movement" },
      { name: "Cut Throat", type: "ultimate", description: "Spins with cables dealing massive AoE damage" }
    ],
    builds: {
      jungle: {
        items: ["Blade of Despair", "Hunter Strike", "Endless Battle", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Assassin",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "High-skill cable assassin requiring energy management and precise movement.",
      playstyle: "Master cable mechanics, maintain energy, target squishy enemies.",
      tips: ["Practice cable combos", "Monitor energy levels", "Use terrain effectively"],
      counters: ["Khufra", "Chou", "Diggie"],
      synergies: ["Johnson", "Atlas", "Tigreal"]
    }
  },

  {
    id: 15,
    name: "Lancelot",
    slug: "lancelot",
    role: "assassin",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/lancelot.jpg",
    description: "Dashing assassin with immunity frames and reset mechanics.",
    skills: [
      { name: "Soul Cutter", type: "passive", description: "Skills gain immunity and reset on kills" },
      { name: "Puncture", type: "skill1", description: "Dashes forward dealing damage" },
      { name: "Thorned Rose", type: "skill2", description: "Strikes in direction with immunity frames" },
      { name: "Phantom Execution", type: "ultimate", description: "Multiple strikes with increased damage" }
    ],
    builds: {
      jungle: {
        items: ["Hunter Strike", "Blade of Despair", "Endless Battle", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Assassin",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "Mobile assassin with immunity frames and kill reset potential.",
      playstyle: "Chain kills with resets, use immunity frames to avoid damage.",
      tips: ["Time immunity frames", "Chain kills for resets", "Avoid crowd control"],
      counters: ["Saber", "Eudora", "Aurora"],
      synergies: ["Johnson", "Franco", "Atlas"]
    }
  },

  {
    id: 16,
    name: "Granger",
    slug: "granger",
    role: "marksman",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/granger.jpg",
    description: "Burst marksman with limited bullets and high early damage.",
    skills: [
      { name: "Caprice", type: "passive", description: "Every 6th bullet deals critical damage" },
      { name: "Rhapsody", type: "skill1", description: "Dashes backward firing enhanced bullets" },
      { name: "Rondo", type: "skill2", description: "Violinist deals AoE damage around him" },
      { name: "Wildfire Dance", type: "ultimate", description: "Fires bullets in target direction" }
    ],
    builds: {
      gold: {
        items: ["Blade of Despair", "Hunter Strike", "Endless Battle", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Marksman",
        spell: "Flicker"
      }
    },
    guide: {
      overview: "Burst marksman excelling in early to mid game with bullet management.",
      playstyle: "Maximize critical bullets, maintain safe distance, burst priority targets.",
      tips: ["Count bullets carefully", "Use skill 1 for escape", "Focus squishy targets"],
      counters: ["Natalia", "Helcurt", "Saber"],
      synergies: ["Tigreal", "Ruby", "Khufra"]
    }
  },

  {
    id: 17,
    name: "Claude",
    slug: "claude",
    role: "marksman",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/claude.jpg",
    description: "Mobile marksman with stealing mechanic and AoE ultimate.",
    skills: [
      { name: "Battle Side-by-Side", type: "passive", description: "Dexter mimics basic attacks" },
      { name: "Art of Thievery", type: "skill1", description: "Steals enemy attack speed and movement speed" },
      { name: "Battle Mirror Image", type: "skill2", description: "Swaps position with Dexter" },
      { name: "Blazing Duet", type: "ultimate", description: "Rapid fire shots in all directions" }
    ],
    builds: {
      gold: {
        items: ["Demon Hunter Sword", "Golden Staff", "Corrosion Scythe", "Wind of Nature", "Immortality", "Swift Boots"],
        emblem: "Marksman",
        spell: "Flicker"
      }
    },
    guide: {
      overview: "Mobile marksman with unique stealing abilities and strong team fight presence.",
      playstyle: "Steal enemy stats, use monkey for positioning, maximize ultimate damage.",
      tips: ["Use monkey strategically", "Steal from key enemies", "Position for full ultimate"],
      counters: ["Natalia", "Hayabusa", "Saber"],
      synergies: ["Ruby", "Tigreal", "Atlas"]
    }
  },

  {
    id: 18,
    name: "Wanwan",
    slug: "wanwan",
    role: "marksman",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/wanwan.jpg",
    description: "Mobile marksman who triggers ultimates by hitting weakness points.",
    skills: [
      { name: "Tiger Rhythm", type: "passive", description: "Reveals weakness points on enemies" },
      { name: "Swallow's Path", type: "skill1", description: "Dashes and fires crossbow bolt" },
      { name: "Needles in Flowers", type: "skill2", description: "Removes debuffs and gains movement speed" },
      { name: "Crossbow of Tang", type: "ultimate", description: "Unleashes when all weakness points hit" }
    ],
    builds: {
      gold: {
        items: ["Demon Hunter Sword", "Golden Staff", "Corrosion Scythe", "Wind of Nature", "Immortality", "Swift Boots"],
        emblem: "Marksman",
        spell: "Inspire"
      }
    },
    guide: {
      overview: "High-mobility marksman requiring precise weakness point targeting.",
      playstyle: "Target weakness points, maintain mobility, trigger ultimate for team fights.",
      tips: ["Hit all weakness points", "Use skill 2 for cleanse", "Kite enemies effectively"],
      counters: ["Phoveus", "Khufra", "Franco"],
      synergies: ["Ruby", "Tigreal", "Johnson"]
    }
  },

  {
    id: 19,
    name: "Karrie",
    slug: "karrie",
    role: "marksman",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/karrie.jpg",
    description: "Tank-shredding marksman with true damage and mobility.",
    skills: [
      { name: "Lightwheel Mark", type: "passive", description: "Every 3 hits deal percentage true damage" },
      { name: "Spinning Lightwheel", type: "skill1", description: "Throws wheel that returns dealing damage" },
      { name: "Phantom Step", type: "skill2", description: "Dashes with next attack enhanced" },
      { name: "Dual Wield", type: "ultimate", description: "Gains movement speed and double basic attacks" }
    ],
    builds: {
      gold: {
        items: ["Demon Hunter Sword", "Golden Staff", "Corrosion Scythe", "Wind of Nature", "Immortality", "Swift Boots"],
        emblem: "Marksman",
        spell: "Inspire"
      }
    },
    guide: {
      overview: "Tank-killing marksman with true damage passive and high mobility.",
      playstyle: "Kite enemies while maintaining passive stacks, focus tanks first.",
      tips: ["Keep passive stacks active", "Use dash defensively", "Target high HP enemies"],
      counters: ["Natalia", "Saber", "Franco"],
      synergies: ["Johnson", "Ruby", "Tigreal"]
    }
  },

  {
    id: 20,
    name: "Chou",
    slug: "chou",
    role: "fighter",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/chou.jpg",
    description: "Martial artist fighter with crowd control combos and kick mechanics.",
    skills: [
      { name: "Only Fast", type: "passive", description: "Enhanced movement speed and immunity after skills" },
      { name: "Jeet Kune Do", type: "skill1", description: "Three-hit combo with final hit knocking up" },
      { name: "Shunpo", type: "skill2", description: "Dashes to enemy dealing damage" },
      { name: "The Way of Dragon", type: "ultimate", description: "Grabs enemy and kicks them away" }
    ],
    builds: {
      jungle: {
        items: ["Bloodlust Axe", "Hunter Strike", "Blade of Despair", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Fighter",
        spell: "Retribution"
      },
      sidelane: {
        items: ["Bloodlust Axe", "Hunter Strike", "Blade of Despair", "Immortality", "Athena's Shield", "Warrior Boots"],
        emblem: "Fighter",
        spell: "Flicker"
      }
    },
    guide: {
      overview: "Versatile fighter with strong crowd control and mobility combos.",
      playstyle: "Chain combo abilities, use ultimate to isolate enemies, maintain immunity.",
      tips: ["Master skill 1 combo", "Use ultimate positioning", "Time immunity frames"],
      counters: ["Esmeralda", "Khufra", "Aurora"],
      synergies: ["Granger", "Claude", "Cecilion"]
    }
  },

  {
    id: 21,
    name: "Saber",
    slug: "saber",
    role: "assassin",
    secondaryRole: null,
    difficulty: "low",
    image: "/images/heroes/saber.jpg",
    description: "Straightforward assassin with lock-on ultimate and energy swords.",
    skills: [
      { name: "Enemy's Bane", type: "passive", description: "Abilities mark enemies, enhancing damage" },
      { name: "Orbiting Swords", type: "skill1", description: "Swords orbit dealing damage to nearby enemies" },
      { name: "Charge", type: "skill2", description: "Dashes forward damaging enemies in path" },
      { name: "Triple Sweep", type: "ultimate", description: "Locks onto target with unavoidable strikes" }
    ],
    builds: {
      jungle: {
        items: ["Blade of Despair", "Hunter Strike", "Endless Battle", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Assassin",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "Simple assassin perfect for beginners with guaranteed ultimate damage.",
      playstyle: "Target priority enemies with ultimate, use swords for wave clear.",
      tips: ["Save ultimate for key targets", "Use skill 2 for mobility", "Stack marks for damage"],
      counters: ["Winter Truncheon", "Immortality", "Purify"],
      synergies: ["Johnson", "Tigreal", "Franco"]
    }
  },

  {
    id: 22,
    name: "Natalia",
    slug: "natalia",
    role: "assassin",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/natalia.jpg",
    description: "Invisible assassin who specializes in ganking from stealth.",
    skills: [
      { name: "Assassin Instinct", type: "passive", description: "Enters invisibility when near grass" },
      { name: "Claw Dash", type: "skill1", description: "Dashes forward with enhanced basic attack" },
      { name: "Smoke Bomb", type: "skill2", description: "Creates smoke that silences enemies" },
      { name: "The Hunt", type: "ultimate", description: "Marks enemy reducing their vision" }
    ],
    builds: {
      jungle: {
        items: ["Blade of Despair", "Hunter Strike", "Endless Battle", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Assassin",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "Stealth assassin excelling at picking off isolated enemies.",
      playstyle: "Use invisibility for ganks, silence key enemies, hunt priority targets.",
      tips: ["Stay near grass", "Target isolated enemies", "Use silence strategically"],
      counters: ["Diggie", "Saber", "Radiant Armor"],
      synergies: ["Johnson", "Franco", "Atlas"]
    }
  },

  {
    id: 23,
    name: "Helcurt",
    slug: "helcurt",
    role: "assassin",
    secondaryRole: null,
    difficulty: "medium",
    image: "/images/heroes/helcurt.jpg",
    description: "Darkness assassin who silences enemies and gains invisibility.",
    skills: [
      { name: "Race Advantage", type: "passive", description: "Basic attacks silence and gain attack speed" },
      { name: "Shadow Transition", type: "skill1", description: "Teleports behind enemy dealing damage" },
      { name: "Deadly Poisoned Stinger", type: "skill2", description: "Throws stinger that bounces between enemies" },
      { name: "Dark Night Falls", type: "ultimate", description: "Map-wide darkness and gains invisibility" }
    ],
    builds: {
      jungle: {
        items: ["Blade of Despair", "Hunter Strike", "Endless Battle", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Assassin",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "Map-controlling assassin who thrives in darkness and chaos.",
      playstyle: "Use ultimate for team fight disruption, silence priority enemies.",
      tips: ["Time ultimate perfectly", "Target mages and marksmen", "Use darkness for escapes"],
      counters: ["Diggie", "Oracle", "Radiant Armor"],
      synergies: ["Johnson", "Tigreal", "Franco"]
    }
  },

  {
    id: 24,
    name: "Alucard",
    slug: "alucard",
    role: "fighter",
    secondaryRole: null,
    difficulty: "low",
    image: "/images/heroes/alucard.jpg",
    description: "Lifesteal fighter with pursuit abilities and healing mechanics.",
    skills: [
      { name: "Pursuit", type: "passive", description: "Gains lifesteal and chases low HP enemies" },
      { name: "Groundsplitter", type: "skill1", description: "Jumps to target dealing AoE damage" },
      { name: "Whirling Blade", type: "skill2", description: "Spins dealing damage and gaining lifesteal" },
      { name: "Fission Wave", type: "ultimate", description: "Enhances abilities and increases lifesteal" }
    ],
    builds: {
      jungle: {
        items: ["Bloodlust Axe", "Hunter Strike", "Blade of Despair", "Malefic Roar", "Immortality", "Warrior Boots"],
        emblem: "Fighter",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "Beginner-friendly fighter with strong sustain and chase potential.",
      playstyle: "Chase low HP enemies, sustain through fights, build damage items.",
      tips: ["Focus on lifesteal items", "Chase wounded enemies", "Use skill 1 for engagement"],
      counters: ["Deadly Blade", "Dominance Ice", "Crowd control"],
      synergies: ["Johnson", "Tigreal", "Ruby"]
    }
  },

  {
    id: 25,
    name: "Balmond",
    slug: "balmond",
    role: "fighter",
    secondaryRole: "tank",
    difficulty: "low",
    image: "/images/heroes/balmond.jpg",
    description: "Tanky fighter with regeneration and true damage ultimate.",
    skills: [
      { name: "Bloodthirst", type: "passive", description: "Heals when enemies die nearby" },
      { name: "Soul Lock", type: "skill1", description: "Axe spins dealing damage and slowing" },
      { name: "Cyclone Sweep", type: "skill2", description: "Charges forward knocking up enemies" },
      { name: "Lethal Counter", type: "ultimate", description: "Deals true damage based on missing HP" }
    ],
    builds: {
      tank: {
        items: ["Dominance Ice", "Antique Cuirass", "Athena's Shield", "Immortality", "Oracle", "Warrior Boots"],
        emblem: "Tank",
        spell: "Flicker"
      } 
    },
    guide: {
      overview: "Simple tank-fighter hybrid with sustain and execution potential.",
      playstyle: "Engage with skill 2, sustain with passive, finish enemies with ultimate.",
      tips: ["Use ultimate on low HP enemies", "Stay in minion waves", "Engage team fights"],
      counters: ["Karrie", "Esmeralda", "True damage"],
      synergies: ["Granger", "Claude", "Marksmen"]
    }
  },
 {
    id: 26,
    name: "Hanzo",
    slug: "hanzo",
    role: "assassin",
    secondaryRole: "fighter",
    difficulty: "high",
    image: "/images/heroes/hanzo.jpg",
    description: "A deadly ninja who devours his enemies' power.",
    skills: [
      { name: "Ame no Habakiri", type: "passive", description: "Recovers demon blood when nearby units die." },
      { name: "Ninjutsu: Demon Feast", type: "skill1", description: "Consumes a jungle creep instantly." },
      { name: "Ninjutsu: Soul Reap", type: "skill2", description: "Creates a damaging AoE field." },
      { name: "Kinjutsu: Pinnacle Ninja", type: "ultimate", description: "Releases his demon form to fight independently." }
    ],
    builds: {
      jungle: {
        items: ["Raptor Machete", "War Axe", "Blade of Despair", "Malefic Roar", "Hunter Strike", "Immortality"],
        emblem: "Assassin",
        spell: "Retribution"
      }
    },
    guide: {
      overview: "Hanzo excels in ambushes and split-pushing with his demon form.",
      playstyle: "Focus on jungle farm, use ultimate for kills and objectives.",
      tips: ["Stay safe while body is exposed", "Time demon form wisely", "Farm jungle quickly"],
      counters: ["Natalia", "Saber", "Khufra"],
      synergies: ["Angela", "Tigreal", "Atlas"]
    }
  },
  {
    id: 27,
    name: "Kimmy",
    slug: "kimmy",
    role: "marksman",
    secondaryRole: "mage",
    difficulty: "high",
    image: "/images/heroes/kimmy.jpg",
    description: "A hybrid gunner with chemical energy attacks.",
    skills: [
      { name: "Chemist's Instinct", type: "passive", description: "Can move while basic attacking." },
      { name: "Energy Transformation", type: "skill1", description: "Converts basic attacks into energy blasts." },
      { name: "Chemical Refinement", type: "skill2", description: "Sprays chemicals that slow enemies." },
      { name: "Maximum Charge", type: "ultimate", description: "Fires a long-range energy cannon shot." }
    ],
    builds: {
      goldlane: {
        items: ["Glowing Wand", "Ice Queen Wand", "Divine Glaive", "Genius Wand", "Holy Crystal", "Immortality"],
        emblem: "Mage",
        spell: "Flicker"
      }
    },
    guide: {
      overview: "Kimmy mixes marksman and mage playstyles with unique mobility.",
      playstyle: "Kite enemies while firing, poke constantly with long range.",
      tips: ["Aim shots carefully", "Keep distance while moving", "Prioritize positioning"],
      counters: ["Hayabusa", "Lancelot", "Chou"],
      synergies: ["Angela", "Lolita", "Estes"]
    }
  },
  {
    id: 28,
    name: "X.Borg",
    slug: "x-borg",
    role: "fighter",
    secondaryRole: "tank",
    difficulty: "medium",
    image: "/images/heroes/x-borg.jpg",
    description: "A cyborg fighter with explosive firepower.",
    skills: [
      { name: "Firaga Armor", type: "passive", description: "Equips armor that absorbs damage and regenerates." },
      { name: "Fire Missiles", type: "skill1", description: "Shoots fire in a cone, dealing continuous damage." },
      { name: "Fire Stake", type: "skill2", description: "Launches chains to pull enemies." },
      { name: "Last Insanity", type: "ultimate", description: "Charges and explodes in a fiery blast." }
    ],
    builds: {
      exp: {
        items: ["War Axe", "Bloodlust Axe", "Blade of Despair", "Immortality", "Dominance Ice", "Antique Cuirass"],
        emblem: "Fighter",
        spell: "Flicker"
      }
    },
    guide: {
      overview: "X.Borg is durable and deals massive AoE burn damage.",
      playstyle: "Harass enemies with missiles, dive with ultimate for execution.",
      tips: ["Maintain armor bar", "Use missiles to poke safely", "Explode when enemies clump"],
      counters: ["Esmeralda", "Valir", "Diggie"],
      synergies: ["Johnson", "Atlas", "Pharsa"]
    }
  },
  {
    id: 29,
    name: "Lylia",
    slug: "lylia",
    role: "mage",
    secondaryRole: null,
    difficulty: "high",
    image: "/images/heroes/lylia.jpg",
    description: "A mischievous mage who manipulates shadows and bombs.",
    skills: [
      { name: "Angry Gloom", type: "passive", description: "Enhances damage with Gloom levels." },
      { name: "Magic Shockwave", type: "skill1", description: "Releases a damaging shockwave forward." },
      { name: "Angry Gloom Bombs", type: "skill2", description: "Deploys bombs that explode with Gloom." },
      { name: "Black Shoes", type: "ultimate", description: "Returns to a previous position with restored HP and mana." }
    ],
    builds: {
      mid: {
        items: ["Clock of Destiny", "Lightning Truncheon", "Genius Wand", "Holy Crystal", "Divine Glaive", "Immortality"],
        emblem: "Mage",
        spell: "Flicker"
      }
    },
    guide: {
      overview: "Lylia is a burst mage with great mobility and sustain.",
      playstyle: "Spam bombs, retreat with ultimate, control mid lane pressure.",
      tips: ["Use Black Shoes to escape", "Stack bombs for burst", "Rotate to assist side lanes"],
      counters: ["Natalia", "Gusion", "Saber"],
      synergies: ["Atlas", "Khufra", "Angela"]
    }
  }
];

