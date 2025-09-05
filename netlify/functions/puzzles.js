const PUZZLES_JSON = [
  {
    "finalWord": "BRIEF",
    "guessWord": "BLARE",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "APRON",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "JOLLY",
    "guessWord": "JUROR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "AUGUR",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ETHOS",
    "guessWord": "DETOX",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "LOGIC",
    "guessWord": "INGOT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "NIGHT",
    "guessWord": "NYMPH",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "VOICE",
    "guessWord": "SIEVE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "JUICE",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "GLORY",
    "guessWord": "ALGAE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GLEAM",
    "guessWord": "ELATE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "GRAZE",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MOCHA",
    "guessWord": "BACON",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "RIDGE",
    "guessWord": "ROGER",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "CREDO",
    "guessWord": "INTRO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "GOOSE",
    "guessWord": "GEEKY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "GRAND",
    "guessWord": "CAIRN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "TRIBE",
    "guessWord": "DOUBT",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GOURD",
    "guessWord": "SYNOD",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "QUACK",
    "guessWord": "SCUBA",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "PINCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "COVER",
    "guessWord": "REVUE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "AHEAD",
    "guessWord": "ADAPT",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "VIGIL",
    "guessWord": "VOILA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "FROTH",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SEWER",
    "guessWord": "ASKEW",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "STOKE",
    "guessWord": "UTTER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "HOBBY",
    "guessWord": "BRIBE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "THIRD",
    "guessWord": "WORLD",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "WREST",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GRIEF",
    "guessWord": "SHELF",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "GEEKY",
    "guessWord": "SEGUE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "FEWER",
    "guessWord": "ROWDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MINTY",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MIMIC",
    "guessWord": "SWAMI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "HEAVY",
    "guessWord": "SIEVE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "BUXOM",
    "guessWord": "STORM",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "LATHE",
    "guessWord": "TIGHT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "STOOP",
    "guessWord": "GUSTO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "FIBRE",
    "guessWord": "LABOR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "DEBUT",
    "guessWord": "QUEUE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "VENOM",
    "guessWord": "FORUM",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SNUFF",
    "guessWord": "SUING",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DONUT",
    "guessWord": "TANGO",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "FEVER",
    "guessWord": "FIERY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "FRIAR",
    "guessWord": "PROOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ROUGH",
    "guessWord": "RUMOR",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "WHEAT",
    "guessWord": "STRAW",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "GRIME",
    "guessWord": "EAGER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "EDIFY",
    "guessWord": "EIGHT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "UTILE",
    "guessWord": "STOOL",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FAULT",
    "guessWord": "FRAIL",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "VERGE",
    "guessWord": "VIGIL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "BELLE",
    "guessWord": "SLYLY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "ERODE",
    "guessWord": "ADORN",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "INCUR",
    "guessWord": "CRIER",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "RAVEN",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TOTAL",
    "guessWord": "CAROL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "PUPPY",
    "guessWord": "UPSET",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "GREAT",
    "guessWord": "WRATH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "ALIVE",
    "guessWord": "EVICT",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "PETTY",
    "guessWord": "TAPER",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "GRACE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "ADAPT",
    "guessWord": "IDEAL",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "MANOR",
    "guessWord": "RENAL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "LIEGE",
    "guessWord": "STEAL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ERUPT",
    "guessWord": "REUSE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "GLEAN",
    "guessWord": "KNELT",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "SHORT",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "BASIN",
    "guessWord": "TITAN",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "ROBOT",
    "guessWord": "URBAN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "LYMPH",
    "guessWord": "HIPPO",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "BOTCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BLOAT",
    "guessWord": "STOLE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "FECAL",
    "guessWord": "FRAME",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "COUCH",
    "guessWord": "HENCE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "NEWER",
    "guessWord": "ROWDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TENOR",
    "guessWord": "EXTOL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "WATCH",
    "guessWord": "MACHO",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "FORGE",
    "guessWord": "HERON",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "DEMUR",
    "guessWord": "HUMID",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "BUTTE",
    "guessWord": "TRUER",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "NAVEL",
    "guessWord": "LIVID",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "STUMP",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "PIETY",
    "guessWord": "STEIN",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "TYING",
    "guessWord": "LYRIC",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SLINK",
    "guessWord": "LOGIN",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "NATAL",
    "guessWord": "NYLON",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEASE",
    "guessWord": "LUSTY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "ROUND",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "STRIP",
    "guessWord": "BLIMP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "OCEAN",
    "guessWord": "SCUBA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "DRAMA",
    "guessWord": "ARRAY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SNEER",
    "guessWord": "VERSO",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "SHUCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "STRUT",
    "guessWord": "UTILE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "HORNY",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "UPPER",
    "guessWord": "URINE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "TENTH",
    "guessWord": "ENACT",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "BARON",
    "guessWord": "TURBO",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "CASTE",
    "guessWord": "USAGE",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "PAPAL",
    "guessWord": "SEPIA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "KINKY",
    "guessWord": "KNIFE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "BLAME",
    "guessWord": "FILMY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "CYBER",
    "guessWord": "BONEY",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "UNTIL",
    "guessWord": "ULCER",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CHOKE",
    "guessWord": "HELLO",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHEIK",
    "guessWord": "FLASK",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CLEAN",
    "guessWord": "SLICE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FETCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "LIMBO",
    "guessWord": "CAMEL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MEDAL",
    "guessWord": "LODGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ALGAE",
    "guessWord": "GRUEL",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "GEESE",
    "guessWord": "ESSAY",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "STOUT",
    "guessWord": "FETUS",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "CACHE",
    "guessWord": "ECLAT",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "BESET",
    "guessWord": "GEESE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "WOVEN",
    "guessWord": "NAVAL",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "CHASE",
    "guessWord": "CATCH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "KNACK",
    "guessWord": "ENEMA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "RATTY",
    "guessWord": "ATTIC",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "REACT",
    "guessWord": "TWICE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STORK",
    "guessWord": "OVERT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STUNG",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "BRUSH",
    "guessWord": "HORSE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "NAVAL",
    "guessWord": "NINJA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PHASE",
    "guessWord": "GRAPH",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "INGOT",
    "guessWord": "ENNUI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CANOE",
    "guessWord": "EATEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "ENJOY",
    "guessWord": "EJECT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CLINK",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "QUIET",
    "guessWord": "TRUCE",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SWELL",
    "guessWord": "SOWER",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "ZONAL",
    "guessWord": "ZEBRA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "TWIXT",
    "guessWord": "SWAMI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "DREAD",
    "guessWord": "AGENT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SCOOP",
    "guessWord": "TORSO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "PASTA",
    "guessWord": "PLEAT",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CRUSH",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "DATUM",
    "guessWord": "DUSTY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FINAL",
    "guessWord": "VIOLA",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TORUS",
    "guessWord": "SETUP",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DECOR",
    "guessWord": "CANOE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "VOWEL",
    "guessWord": "VAGUE",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "EQUAL",
    "guessWord": "PEARL",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "BANJO",
    "guessWord": "INTRO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BRICK",
    "guessWord": "ORBIT",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GROPE",
    "guessWord": "HIPPO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SLATE",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "RIDER",
    "guessWord": "THEIR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "DUSTY",
    "guessWord": "DYING",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SPORE",
    "guessWord": "APNEA",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "POSSE",
    "guessWord": "VERSO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "ALOUD",
    "guessWord": "DROOL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "STYLE",
    "guessWord": "SATYR",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "UNITY",
    "guessWord": "YOUTH",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SHALL",
    "guessWord": "WELSH",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "LOBBY",
    "guessWord": "LAYER",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEDGE",
    "guessWord": "ALIGN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "SOLID",
    "guessWord": "DROIT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "HYDRO",
    "guessWord": "RAYON",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "SASSY",
    "guessWord": "ASSET",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SCANT",
    "guessWord": "ACORN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CAPUT",
    "guessWord": "TOPIC",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "COUNT",
    "guessWord": "SPURN",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "AWARD",
    "guessWord": "ALTAR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "LUMEN",
    "guessWord": "MOURN",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "BRASH",
    "guessWord": "HORSE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "FORCE",
    "guessWord": "FLAIR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "THREE",
    "guessWord": "TWEAK",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "PLACE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GUILD",
    "guessWord": "GAUDY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "GONER",
    "guessWord": "RENAL",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SLURP",
    "guessWord": "SCOUR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FIRST",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "AFTER",
    "guessWord": "AORTA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "UNDID",
    "guessWord": "URBAN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "KAPPA",
    "guessWord": "OPERA",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CRANK",
    "guessWord": "ADORN",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SNARE",
    "guessWord": "INCUR",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SCREW",
    "guessWord": "MACAW",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "PRESS",
    "guessWord": "FETUS",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "VICAR",
    "guessWord": "RABBI",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FUZZY",
    "guessWord": "UNIFY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SMOKY",
    "guessWord": "BOSOM",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SAUNA",
    "guessWord": "HUMAN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "OUTGO",
    "guessWord": "GAMUT",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "REALM",
    "guessWord": "AXIOM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "POOCH",
    "guessWord": "COPSE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "CRANE",
    "guessWord": "ARSON",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CHIRP",
    "guessWord": "MYRRH",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SLIMY",
    "guessWord": "PALSY",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "PEACH",
    "guessWord": "SEPIA",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "AROMA",
    "guessWord": "RHYME",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MANIA",
    "guessWord": "PAGAN",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FRESH",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "DEALT",
    "guessWord": "APTLY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "STRAY",
    "guessWord": "TAROT",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "PATTY",
    "guessWord": "ATTIC",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "RAJAH",
    "guessWord": "RUMBA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PERIL",
    "guessWord": "PINEY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SPITE",
    "guessWord": "APART",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SUMAC",
    "guessWord": "COMMA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BILLY",
    "guessWord": "PLUMB",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "GUAVA",
    "guessWord": "MAUVE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MORPH",
    "guessWord": "RUMOR",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "LOWLY",
    "guessWord": "ROYAL",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "WORSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "KNOCK",
    "guessWord": "ROCKY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "IRATE",
    "guessWord": "INEPT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "MACRO",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "JELLY",
    "guessWord": "JOKER",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SCOFF",
    "guessWord": "MOTIF",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "LEFTY",
    "guessWord": "REALM",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "DICEY",
    "guessWord": "TACIT",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "BLANK",
    "guessWord": "LIKEN",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SISSY",
    "guessWord": "BASIS",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "TRAMP",
    "guessWord": "TAKER",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHAPE",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BERET",
    "guessWord": "GENRE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "LEMON",
    "guessWord": "NYMPH",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PESTO",
    "guessWord": "DETOX",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CLASS",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SHEAR",
    "guessWord": "ALGAE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CHART",
    "guessWord": "TOUCH",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SWARM",
    "guessWord": "ROAST",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "VIVID",
    "guessWord": "DUVET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MOUND",
    "guessWord": "OVOID",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "MAPLE",
    "guessWord": "PUPIL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "YIELD",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "STONY",
    "guessWord": "TIPSY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SALON",
    "guessWord": "LAPSE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "MUSHY",
    "guessWord": "BOSOM",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "COCOA",
    "guessWord": "SCOOP",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CRISP",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHIRK",
    "guessWord": "SIXTH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "DOZEN",
    "guessWord": "VIDEO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "ROGER",
    "guessWord": "GOURD",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "TODDY",
    "guessWord": "OXIDE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PROVE",
    "guessWord": "HEAVY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BIGOT",
    "guessWord": "ORGAN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "STAND",
    "guessWord": "GONAD",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "START",
    "guessWord": "TERRA",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "HAPPY",
    "guessWord": "HUMAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SEDAN",
    "guessWord": "NUDGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "TODAY",
    "guessWord": "LOATH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CUTIE",
    "guessWord": "FRUIT",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "CABIN",
    "guessWord": "NINJA",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "TANGO",
    "guessWord": "IGLOO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "JOIST",
    "guessWord": "JUMBO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "STATE",
    "guessWord": "OTHER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPOUT",
    "guessWord": "OPTIC",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SWEPT",
    "guessWord": "OPERA",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "DANCE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MOVER",
    "guessWord": "REVUE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SMITE",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "NICER",
    "guessWord": "ALIEN",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "GOOEY",
    "guessWord": "YOUNG",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPOON",
    "guessWord": "POOCH",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SHEEN",
    "guessWord": "NIECE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "RISEN",
    "guessWord": "SEDAN",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SHAKY",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "WACKY",
    "guessWord": "ICILY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "GLOAT",
    "guessWord": "GAVEL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "KRILL",
    "guessWord": "KHAKI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LAYER",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "NYMPH",
    "guessWord": "HYDRO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "REPLY",
    "guessWord": "ALPHA",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "VISTA",
    "guessWord": "HABIT",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "COULD",
    "guessWord": "HELLO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BLADE",
    "guessWord": "SCALD",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "STUNT",
    "guessWord": "UTILE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "VIDEO",
    "guessWord": "CREDO",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SHREW",
    "guessWord": "BELOW",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "VAUNT",
    "guessWord": "AVIAN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHEER",
    "guessWord": "PAYEE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TASTY",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "JAUNT",
    "guessWord": "DONUT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "DELVE",
    "guessWord": "LARVA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SLIDE",
    "guessWord": "HEIST",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "FOAMY",
    "guessWord": "ANIME",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "WHITE",
    "guessWord": "PIETY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "PAGAN",
    "guessWord": "GAMMA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CRAWL",
    "guessWord": "STAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CIRCA",
    "guessWord": "RUMBA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BATTY",
    "guessWord": "ABBEY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "STARK",
    "guessWord": "SATIN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "QUITE",
    "guessWord": "GUEST",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "STOCK",
    "guessWord": "ACORN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RISER",
    "guessWord": "FIBRE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TREAT",
    "guessWord": "STEER",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "DEITY",
    "guessWord": "TARDY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "WILLY",
    "guessWord": "WHEEL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FIERY",
    "guessWord": "IRATE",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "LOOSE",
    "guessWord": "VERSO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "CLANK",
    "guessWord": "CORAL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FORTY",
    "guessWord": "OVATE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LOUSY",
    "guessWord": "USUAL",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "ZESTY",
    "guessWord": "HYENA",
    "pattern": "⬛🟨🟨⬛⬛"
  },
  {
    "finalWord": "STOIC",
    "guessWord": "ITCHY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "NUTTY",
    "guessWord": "SUING",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "CHAOS",
    "guessWord": "CRUSH",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SWOON",
    "guessWord": "DOWNY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "NIECE",
    "guessWord": "ENNUI",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "BLOND",
    "guessWord": "OLIVE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "GREEN",
    "guessWord": "GNOME",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "UNSET",
    "guessWord": "NASTY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BASAL",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLEEP",
    "guessWord": "SCALP",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "APHID",
    "guessWord": "REHAB",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "AIDER",
    "guessWord": "PRIOR",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "TACKY",
    "guessWord": "STAKE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SLOTH",
    "guessWord": "LATCH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "MICRO",
    "guessWord": "CIRCA",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "JUICY",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "IDIOM",
    "guessWord": "INTRO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "APTLY",
    "guessWord": "TITAN",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "AMONG",
    "guessWord": "OMBRE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SNARL",
    "guessWord": "GENRE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "CROWN",
    "guessWord": "WOOER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SOOTY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨⬛🟨⬛"
  },
  {
    "finalWord": "BRINE",
    "guessWord": "FIEND",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "AMAZE",
    "guessWord": "FEMME",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "FUNGI",
    "guessWord": "GIVEN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "WHOLE",
    "guessWord": "CELLO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SHOCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "COVET",
    "guessWord": "VIDEO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "SCARF",
    "guessWord": "ACUTE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SAVVY",
    "guessWord": "ASSAY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "DEPTH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "READY",
    "guessWord": "ERODE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "DEBUG",
    "guessWord": "BEARD",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRAVE",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CABLE",
    "guessWord": "BELLY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "VOCAL",
    "guessWord": "CROAK",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "PINKY",
    "guessWord": "ALIKE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "ANNEX",
    "guessWord": "NINJA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "DROIT",
    "guessWord": "DETER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "THONG",
    "guessWord": "GNOME",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "DREAM",
    "guessWord": "AGENT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MIDGE",
    "guessWord": "LEGGY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "GAYLY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LOCAL",
    "guessWord": "LEACH",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "CAGEY",
    "guessWord": "ADAGE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "EATER",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "PASTE",
    "guessWord": "SAINT",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "MASSE",
    "guessWord": "DATUM",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SWATH",
    "guessWord": "THETA",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SHINY",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "CONCH",
    "guessWord": "NICHE",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "WIELD",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SHOWY",
    "guessWord": "AWOKE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GUPPY",
    "guessWord": "SYRUP",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "ERROR",
    "guessWord": "CANOE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DEBAR",
    "guessWord": "RABBI",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "ALLOW",
    "guessWord": "AWOKE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "OVINE",
    "guessWord": "ORGAN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "BEGAN",
    "guessWord": "INLAY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "WOODY",
    "guessWord": "SYNOD",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "GORGE",
    "guessWord": "VERSO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "PILOT",
    "guessWord": "PHOTO",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "KARMA",
    "guessWord": "OMEGA",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "FETID",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SPURN",
    "guessWord": "UPPER",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "RALPH",
    "guessWord": "LEAPT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "EMBER",
    "guessWord": "RUPEE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BRACE",
    "guessWord": "CRUMB",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "STOLE",
    "guessWord": "HOTLY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CUMIN",
    "guessWord": "FUNGI",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SLAIN",
    "guessWord": "TITAN",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "FOYER",
    "guessWord": "HERON",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "WORRY",
    "guessWord": "RETRO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BLOOM",
    "guessWord": "OPIUM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LEAPT",
    "guessWord": "LITHE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "SLOOP",
    "guessWord": "POLYP",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "SPINE",
    "guessWord": "APRON",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SATIN",
    "guessWord": "VITAL",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "SCOUR",
    "guessWord": "SALVO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SMOCK",
    "guessWord": "GECKO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "FLOCK",
    "guessWord": "GECKO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "MADLY",
    "guessWord": "SLIMY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "REHAB",
    "guessWord": "SCRUB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "SNAKY",
    "guessWord": "ENEMA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BOXER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BULLY",
    "guessWord": "PLUMB",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "EARTH",
    "guessWord": "ENTRY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "VALET",
    "guessWord": "VICAR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "MOTOR",
    "guessWord": "MIRTH",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DANDY",
    "guessWord": "ANGRY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "ROOMY",
    "guessWord": "MOURN",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "REPEL",
    "guessWord": "RASPY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "PLUCK",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ADORE",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "LOVER",
    "guessWord": "OLDEN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "NOISY",
    "guessWord": "NADIR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SCALE",
    "guessWord": "OCTET",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "TERSE",
    "guessWord": "THEIR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "VIGOR",
    "guessWord": "GONER",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "TOUCH",
    "guessWord": "SLOSH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "ANGLE",
    "guessWord": "UNTIL",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BROOD",
    "guessWord": "URBAN",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TRIED",
    "guessWord": "ROUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "MINOR",
    "guessWord": "DENIM",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "BOUGH",
    "guessWord": "DOING",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CHORE",
    "guessWord": "HYDRO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "PURSE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "TUBAL",
    "guessWord": "QUART",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BYLAW",
    "guessWord": "POLYP",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "FUROR",
    "guessWord": "SCOUR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "RIGHT",
    "guessWord": "RHINO",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "BURLY",
    "guessWord": "GLORY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "ICING",
    "guessWord": "IMAGE",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "TURBO",
    "guessWord": "BERET",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CATTY",
    "guessWord": "TODAY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "CLOAK",
    "guessWord": "ULTRA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STERN",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "FALSE",
    "guessWord": "DELTA",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "PREEN",
    "guessWord": "ERROR",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SKIER",
    "guessWord": "ROUSE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "POUND",
    "guessWord": "DEUCE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LEVEL",
    "guessWord": "BELIE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SPARK",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "PIZZA",
    "guessWord": "ZEBRA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FULLY",
    "guessWord": "BLUFF",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "DEMON",
    "guessWord": "NYMPH",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "VIRAL",
    "guessWord": "VAPOR",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "TASTE",
    "guessWord": "USAGE",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "CRESS",
    "guessWord": "SURGE",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "CRUMB",
    "guessWord": "THROB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CLUCK",
    "guessWord": "STALK",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "TABLE",
    "guessWord": "ABBOT",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "LEAST",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "PRIOR",
    "guessWord": "SPIRE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "BRIAR",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLEAR",
    "guessWord": "LOCAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ECLAT",
    "guessWord": "ACTOR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "DISCO",
    "guessWord": "POSIT",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "DOPEY",
    "guessWord": "VIDEO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "POPPY",
    "guessWord": "EPOXY",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "SMEAR",
    "guessWord": "IMBUE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "GUESS",
    "guessWord": "BASIS",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "LIVID",
    "guessWord": "TILDE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "INBOX",
    "guessWord": "RELAX",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "STINT",
    "guessWord": "ETHIC",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "GREED",
    "guessWord": "GECKO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "PERKY",
    "guessWord": "EVOKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "TORCH",
    "guessWord": "SLOSH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "ACTOR",
    "guessWord": "COLON",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PLANE",
    "guessWord": "EMAIL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ADOBE",
    "guessWord": "IDEAL",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "WHIFF",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "HAREM",
    "guessWord": "CHASM",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "INPUT",
    "guessWord": "IONIC",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "SWUNG",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SLUSH",
    "guessWord": "GHOUL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SPIKE",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "EMBED",
    "guessWord": "BEARD",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "DECOY",
    "guessWord": "DODGE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "WINCH",
    "guessWord": "WRING",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "ROVER",
    "guessWord": "OPERA",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "SAVOY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "HEART",
    "guessWord": "HALVE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "ABODE",
    "guessWord": "BAWDY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "INANE",
    "guessWord": "IDEAL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "ARROW",
    "guessWord": "AWOKE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SNORE",
    "guessWord": "INCUR",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CRAFT",
    "guessWord": "CAPER",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "BUILD",
    "guessWord": "LIMBO",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "DRONE",
    "guessWord": "ARDOR",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "THORN",
    "guessWord": "TAROT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "CIDER",
    "guessWord": "INCUR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "HASTE",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "GOING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "IGLOO",
    "guessWord": "OUTGO",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "YOUNG",
    "guessWord": "DODGY",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "DINGY",
    "guessWord": "DRINK",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DOGMA",
    "guessWord": "GNOME",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BELLY",
    "guessWord": "LAPEL",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SALLY",
    "guessWord": "FLAIL",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "MUMMY",
    "guessWord": "UNMET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LOWER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SHANK",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "DWARF",
    "guessWord": "HYDRO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "LURID",
    "guessWord": "DERBY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "OCCUR",
    "guessWord": "ROGUE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ENEMA",
    "guessWord": "EMAIL",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "FORTH",
    "guessWord": "MOTEL",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "VERSO",
    "guessWord": "PRIMO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "EMAIL",
    "guessWord": "MOVIE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "JUMPY",
    "guessWord": "UNMET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "IDEAL",
    "guessWord": "IGLOO",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "BLINK",
    "guessWord": "KRILL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SPASM",
    "guessWord": "SMEAR",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "EDICT",
    "guessWord": "IDYLL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "REVEL",
    "guessWord": "VIRAL",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "GAILY",
    "guessWord": "FELLA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BAGGY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DROLL",
    "guessWord": "CREDO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "GAUZE",
    "guessWord": "FUZZY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "CLOSE",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "QUAIL",
    "guessWord": "UMBRA",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "SHOWN",
    "guessWord": "WELSH",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "TACIT",
    "guessWord": "INCUR",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "COMIC",
    "guessWord": "MECCA",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "TATTY",
    "guessWord": "TYING",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "GRADE",
    "guessWord": "MANGE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "TONIC",
    "guessWord": "SUMAC",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "BREAK",
    "guessWord": "OBESE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CHURN",
    "guessWord": "MYRRH",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TRITE",
    "guessWord": "WEIRD",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "HOIST",
    "guessWord": "VISIT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "RUPEE",
    "guessWord": "REEDY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ULCER",
    "guessWord": "URINE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SENSE",
    "guessWord": "ENNUI",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MELON",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TAMER",
    "guessWord": "THYME",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "REBUS",
    "guessWord": "CHESS",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CLAIM",
    "guessWord": "SWAMI",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "PIANO",
    "guessWord": "PREEN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "HOTEL",
    "guessWord": "HALVE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "HOVER",
    "guessWord": "VIDEO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "AMEND",
    "guessWord": "IMPEL",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "BURST",
    "guessWord": "TUBAL",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BOBBY",
    "guessWord": "OBESE",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "STEIN",
    "guessWord": "ATONE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "QUILL",
    "guessWord": "ENNUI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "HAUNT",
    "guessWord": "HEFTY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "NERDY",
    "guessWord": "CREDO",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CAULK",
    "guessWord": "FLUKE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "PERCH",
    "guessWord": "FLESH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "QUEER",
    "guessWord": "PAYEE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FLECK",
    "guessWord": "KNELT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "FLUTE",
    "guessWord": "ALTER",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "DROOP",
    "guessWord": "RECAP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TRUST",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "RECUT",
    "guessWord": "NICER",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "PATSY",
    "guessWord": "PSALM",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "HEADY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "OMEGA",
    "guessWord": "POESY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SWING",
    "guessWord": "AGAIN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "PUNCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "ERECT",
    "guessWord": "ETHOS",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "APART",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CEDAR",
    "guessWord": "RIDGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SLANG",
    "guessWord": "ALGAE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "MOGUL",
    "guessWord": "IMBUE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "WRECK",
    "guessWord": "WORSE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "SOUND",
    "guessWord": "FRAUD",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "VOILA",
    "guessWord": "VERSO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SNUCK",
    "guessWord": "CUMIN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FEIGN",
    "guessWord": "UNITY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "OLDER",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "HATER",
    "guessWord": "ABHOR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PLUMB",
    "guessWord": "PSALM",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FUSSY",
    "guessWord": "ISSUE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "DIRGE",
    "guessWord": "FUNGI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CHALK",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BEARD",
    "guessWord": "SHADY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "DUMPY",
    "guessWord": "MORPH",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "VALVE",
    "guessWord": "VIVID",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "PLANK",
    "guessWord": "APING",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CRAVE",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ALLOT",
    "guessWord": "ATTIC",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "RUGBY",
    "guessWord": "ORGAN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SCOLD",
    "guessWord": "ACTOR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "FIFTY",
    "guessWord": "VINYL",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPELT",
    "guessWord": "OPINE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SWEET",
    "guessWord": "AWASH",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "OVERT",
    "guessWord": "AVOID",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TWANG",
    "guessWord": "SWEAT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "DROOL",
    "guessWord": "LABOR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BRING",
    "guessWord": "AGAIN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "AWASH",
    "guessWord": "TWEAK",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SURLY",
    "guessWord": "MYRRH",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "TIGHT",
    "guessWord": "ITCHY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SHINE",
    "guessWord": "FIEND",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WIDOW",
    "guessWord": "DIODE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "RERUN",
    "guessWord": "GENRE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "WELCH",
    "guessWord": "FRESH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CLANG",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ICILY",
    "guessWord": "ECLAT",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "OPIUM",
    "guessWord": "BUXOM",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "COUGH",
    "guessWord": "MACHO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "RADIO",
    "guessWord": "RUMBA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "GECKO",
    "guessWord": "IGLOO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "RADII",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "UTTER",
    "guessWord": "URBAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "LADEN",
    "guessWord": "NUDGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ARBOR",
    "guessWord": "TIBIA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLAST",
    "guessWord": "ELBOW",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GLAND",
    "guessWord": "GAVEL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "PUBIC",
    "guessWord": "STRIP",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MILKY",
    "guessWord": "AMPLY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "ANIME",
    "guessWord": "ENNUI",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "HURRY",
    "guessWord": "RARER",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "OFFER",
    "guessWord": "OVARY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "HEFTY",
    "guessWord": "ELFIN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SHORN",
    "guessWord": "INTRO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "APPLY",
    "guessWord": "YIELD",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "RETRO",
    "guessWord": "RURAL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "POSIT",
    "guessWord": "TULIP",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STUDY",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SCALP",
    "guessWord": "OCTAL",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BATCH",
    "guessWord": "FACET",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "RALLY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BLEND",
    "guessWord": "DRONE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "RANDY",
    "guessWord": "ANODE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CHIDE",
    "guessWord": "CEDAR",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SLICK",
    "guessWord": "LOCUS",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "GUEST",
    "guessWord": "EGRET",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "FLUME",
    "guessWord": "ALBUM",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SPOOK",
    "guessWord": "PHOTO",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PLEAT",
    "guessWord": "TOPAZ",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SQUAT",
    "guessWord": "JUNTA",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "COLOR",
    "guessWord": "ROACH",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "BROWN",
    "guessWord": "ORBIT",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "CLOUD",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "MACHO",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TWEAK",
    "guessWord": "SWATH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "VISIT",
    "guessWord": "ETHOS",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "SPOOL",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GRANT",
    "guessWord": "GLEAN",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "PASTY",
    "guessWord": "CAPUT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "MEDIA",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "HAIRY",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "SEPIA",
    "guessWord": "IMPEL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SLEEK",
    "guessWord": "KNELT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "ABBEY",
    "guessWord": "HYENA",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "BONEY",
    "guessWord": "EPOXY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "ABATE",
    "guessWord": "TRIBE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "RECUR",
    "guessWord": "MEDIC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "PRUDE",
    "guessWord": "DROOP",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "WENCH",
    "guessWord": "WHINY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "CONDO",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LYRIC",
    "guessWord": "HYDRO",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "CHUTE",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "RHINO",
    "guessWord": "HIPPO",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "PLATE",
    "guessWord": "POLAR",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "HUMPH",
    "guessWord": "SHAPE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "FETAL",
    "guessWord": "TERRA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "AROSE",
    "guessWord": "AORTA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "VITAL",
    "guessWord": "VODKA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LARVA",
    "guessWord": "ABOVE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FORTE",
    "guessWord": "ROTOR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "GRAPE",
    "guessWord": "ADOPT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "UNZIP",
    "guessWord": "PANIC",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "JIFFY",
    "guessWord": "FUNGI",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "SCENT",
    "guessWord": "CLEAN",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "HUSSY",
    "guessWord": "CHESS",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "KNEED",
    "guessWord": "NOMAD",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SOLVE",
    "guessWord": "SPIEL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "MINIM",
    "guessWord": "IRONY",
    "pattern": "🟨⬛⬛🟨⬛"
  },
  {
    "finalWord": "BUDDY",
    "guessWord": "DYING",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "MAJOR",
    "guessWord": "BANJO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "MANGO",
    "guessWord": "GONER",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "GIDDY",
    "guessWord": "INDEX",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PRONG",
    "guessWord": "GNOME",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "ENTRY",
    "guessWord": "EERIE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "MOURN",
    "guessWord": "REUSE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ALERT",
    "guessWord": "ACTOR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "LEACH",
    "guessWord": "CEDAR",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "MOUNT",
    "guessWord": "TURBO",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FLARE",
    "guessWord": "OPERA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "FUNNY",
    "guessWord": "UNITY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SPOOF",
    "guessWord": "MOTIF",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "RAZOR",
    "guessWord": "DOZEN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "STORE",
    "guessWord": "ETHIC",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CROAK",
    "guessWord": "PRIMO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FILTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "HORDE",
    "guessWord": "HYENA",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "SNACK",
    "guessWord": "PECAN",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SCRUB",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SPADE",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "HOTLY",
    "guessWord": "HYDRO",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "BRINK",
    "guessWord": "RABID",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "ROAST",
    "guessWord": "RETRO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "UPSET",
    "guessWord": "UNITY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SHARD",
    "guessWord": "DEBAR",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "CANDY",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BANAL",
    "guessWord": "AVIAN",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "HATCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "DROVE",
    "guessWord": "SALVO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BERRY",
    "guessWord": "RUGBY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "MODEM",
    "guessWord": "ODDLY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "EXIST",
    "guessWord": "ENNUI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PENNE",
    "guessWord": "LINEN",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "STEEP",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "MORON",
    "guessWord": "OWNER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "FACET",
    "guessWord": "AFOOT",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "WAVER",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "FLORA",
    "guessWord": "ATOLL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "FLING",
    "guessWord": "GIANT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "COVEY",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "ODDLY",
    "guessWord": "DOWEL",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "DIODE",
    "guessWord": "DREAD",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "AMPLE",
    "guessWord": "ANGEL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "DIMLY",
    "guessWord": "HUMID",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SPIRE",
    "guessWord": "INERT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DUMMY",
    "guessWord": "MAGMA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SALAD",
    "guessWord": "SLIDE",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "BRAWL",
    "guessWord": "ORBIT",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FRAME",
    "guessWord": "RUMBA",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "TENSE",
    "guessWord": "SEDAN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "STAGE",
    "guessWord": "OUTGO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "TOPAZ",
    "guessWord": "TROPE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SCOPE",
    "guessWord": "OCTET",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "WREAK",
    "guessWord": "ABACK",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DERBY",
    "guessWord": "REHAB",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPOKE",
    "guessWord": "POSIT",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "WOUND",
    "guessWord": "DOZEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "GROSS",
    "guessWord": "AGONY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BLARE",
    "guessWord": "EMBER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SYRUP",
    "guessWord": "LUPUS",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "OVATE",
    "guessWord": "IVORY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "RASPY",
    "guessWord": "POSER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CLUMP",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "PEARL",
    "guessWord": "PINEY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "LAPEL",
    "guessWord": "ABLED",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SOWER",
    "guessWord": "THREW",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "UNFIT",
    "guessWord": "OFTEN",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "THERE",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "HILLY",
    "guessWord": "VINYL",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "CREEK",
    "guessWord": "TRACT",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "TIDAL",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "STINK",
    "guessWord": "GIANT",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "GRAPH",
    "guessWord": "LAUGH",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "ANGER",
    "guessWord": "RENEW",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SHIED",
    "guessWord": "APHID",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SURGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FLOAT",
    "guessWord": "ULTRA",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BASIL",
    "guessWord": "TIBIA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "QUASH",
    "guessWord": "HUSKY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "PRINT",
    "guessWord": "FIRST",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "INTER",
    "guessWord": "ITCHY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "STAVE",
    "guessWord": "LARVA",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BASIS",
    "guessWord": "CACTI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "TONAL",
    "guessWord": "LOGIN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "BONGO",
    "guessWord": "PHOTO",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "ILIAC",
    "guessWord": "HAVOC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "EIGHT",
    "guessWord": "ETUDE",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "MURAL",
    "guessWord": "URBAN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CLICK",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "STOVE",
    "guessWord": "UTTER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "NEVER",
    "guessWord": "ANVIL",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CUBIC",
    "guessWord": "BICEP",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "SANER",
    "guessWord": "CLEAR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "HYMEN",
    "guessWord": "EYING",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "MERCY",
    "guessWord": "WRECK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "GRUFF",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GUILE",
    "guessWord": "GROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SPUNK",
    "guessWord": "USING",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "WORST",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ALIGN",
    "guessWord": "OMEGA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GODLY",
    "guessWord": "HYDRO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "SHOOK",
    "guessWord": "SOUTH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "TESTY",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "ABUSE",
    "guessWord": "SEGUE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "PLIED",
    "guessWord": "DRIVE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "MOOSE",
    "guessWord": "CAMEO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SEEDY",
    "guessWord": "YIELD",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "RADAR",
    "guessWord": "HYDRO",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "PENNY",
    "guessWord": "EMPTY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "FLACK",
    "guessWord": "ALOOF",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CHEST",
    "guessWord": "CATTY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "TRAIN",
    "guessWord": "ENACT",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "UNTIE",
    "guessWord": "NUTTY",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "MOIST",
    "guessWord": "SWAMI",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "HELIX",
    "guessWord": "IDEAL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "ANGRY",
    "guessWord": "GNOME",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BASTE",
    "guessWord": "RESET",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "HEIST",
    "guessWord": "HITCH",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ALONE",
    "guessWord": "ELFIN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "REFER",
    "guessWord": "ELFIN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PARKA",
    "guessWord": "OPERA",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "WEIRD",
    "guessWord": "WORDY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SHOOT",
    "guessWord": "TABOO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CAPER",
    "guessWord": "BICEP",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "LOUSE",
    "guessWord": "LUPUS",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "FRISK",
    "guessWord": "RINSE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "IDYLL",
    "guessWord": "EDIFY",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "OWNER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "HARDY",
    "guessWord": "HYMEN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "MATCH",
    "guessWord": "OCTET",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SHAVE",
    "guessWord": "LARVA",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BUILT",
    "guessWord": "LIMBO",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "MUCKY",
    "guessWord": "COMFY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "GAUDY",
    "guessWord": "DYING",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "INTRO",
    "guessWord": "TIARA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "BUSHY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "THANK",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "WEARY",
    "guessWord": "ROWDY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "LIBEL",
    "guessWord": "TILDE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SWAMI",
    "guessWord": "TWIST",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "DRAPE",
    "guessWord": "HORDE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "GRIND",
    "guessWord": "ORGAN",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "ADAGE",
    "guessWord": "PUDGY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "DOLLY",
    "guessWord": "DYING",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SPIKY",
    "guessWord": "SEPIA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "TRACE",
    "guessWord": "RANCH",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SNOWY",
    "guessWord": "ONION",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PLEAD",
    "guessWord": "APHID",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "BIRCH",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SPIED",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SATYR",
    "guessWord": "RAISE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "FLICK",
    "guessWord": "ALOOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "GHOST",
    "guessWord": "GRATE",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "BINGO",
    "guessWord": "RHINO",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "BLEAT",
    "guessWord": "THETA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "GAMUT",
    "guessWord": "IMBUE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "TWICE",
    "guessWord": "DEITY",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "KNEEL",
    "guessWord": "KEBAB",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "UNION",
    "guessWord": "INNER",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "ALIEN",
    "guessWord": "LOGIN",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "BLOKE",
    "guessWord": "OMBRE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PEDAL",
    "guessWord": "PSALM",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "WARTY",
    "guessWord": "AWAIT",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "MERIT",
    "guessWord": "STEIN",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "EMPTY",
    "guessWord": "SMELT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "LUMPY",
    "guessWord": "HYMEN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "EPOXY",
    "guessWord": "PIXIE",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "DIARY",
    "guessWord": "AFIRE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "WOKEN",
    "guessWord": "BORNE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BORAX",
    "guessWord": "DETOX",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "TROVE",
    "guessWord": "ORGAN",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SUGAR",
    "guessWord": "DOGMA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TEETH",
    "guessWord": "TITLE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "HUTCH",
    "guessWord": "THICK",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SOGGY",
    "guessWord": "SYRUP",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BASIC",
    "guessWord": "BONUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ELFIN",
    "guessWord": "LOFTY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SPANK",
    "guessWord": "OPERA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "DRINK",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SHAWL",
    "guessWord": "USUAL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "RELAX",
    "guessWord": "ANNEX",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "PLAIN",
    "guessWord": "PROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "DECAL",
    "guessWord": "CLOAK",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "REMIT",
    "guessWord": "TUMOR",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "WORLD",
    "guessWord": "RADIO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SPORT",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BOOST",
    "guessWord": "MOTTO",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SLANT",
    "guessWord": "ECLAT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "RANGE",
    "guessWord": "FORGO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "NASTY",
    "guessWord": "UNITE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "WIGHT",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TAFFY",
    "guessWord": "STRAY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "MANLY",
    "guessWord": "MYRRH",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CHUNK",
    "guessWord": "KHAKI",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SALVO",
    "guessWord": "TORSO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "PUSHY",
    "guessWord": "QUASH",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SHOAL",
    "guessWord": "VIOLA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "CRIME",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "USUAL",
    "guessWord": "ULTRA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "PHONY",
    "guessWord": "NOOSE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LOAMY",
    "guessWord": "LINGO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "MONEY",
    "guessWord": "DECOY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "TIBIA",
    "guessWord": "BIRTH",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "FLAKE",
    "guessWord": "LUCKY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LEASH",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "GOLEM",
    "guessWord": "LIMBO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "CREPT",
    "guessWord": "EGRET",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "STAID",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "GLARE",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "SORRY",
    "guessWord": "ARTSY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "BREED",
    "guessWord": "BEADY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DUVET",
    "guessWord": "DIRTY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "BRAIN",
    "guessWord": "TAPIR",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "WORDY",
    "guessWord": "WEIRD",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "WRIST",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "MOSSY",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "ADOPT",
    "guessWord": "PHOTO",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "COUPE",
    "guessWord": "POESY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "DIVER",
    "guessWord": "REVUE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "DEATH",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "WOULD",
    "guessWord": "AUDIO",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SPLIT",
    "guessWord": "APTLY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CHECK",
    "guessWord": "GEEKY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "RUDDY",
    "guessWord": "HYDRO",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "VENUE",
    "guessWord": "VIXEN",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "REACH",
    "guessWord": "ROCKY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LODGE",
    "guessWord": "GIDDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "RECAP",
    "guessWord": "CHIRP",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "CRIMP",
    "guessWord": "OPIUM",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "ABACK",
    "guessWord": "BATCH",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "RIGID",
    "guessWord": "RABBI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SWORE",
    "guessWord": "OWING",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SCION",
    "guessWord": "ACRID",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "TUBER",
    "guessWord": "KEBAB",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RULER",
    "guessWord": "LABOR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "MAYBE",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ALOOF",
    "guessWord": "EXTOL",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PARSE",
    "guessWord": "TERRA",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "BROIL",
    "guessWord": "CURIO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SHORE",
    "guessWord": "CHAIR",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SMACK",
    "guessWord": "BASIC",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "POLKA",
    "guessWord": "GECKO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "QUEUE",
    "guessWord": "BAYOU",
    "pattern": "⬛⬛⬛⬛🟨"
  },
  {
    "finalWord": "WHILE",
    "guessWord": "HALVE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "RACER",
    "guessWord": "CAIRN",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "GROUT",
    "guessWord": "BRUTE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GRAIN",
    "guessWord": "INANE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "STRAP",
    "guessWord": "CHIRP",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CABBY",
    "guessWord": "RUMBA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DRIFT",
    "guessWord": "TAFFY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "STOOD",
    "guessWord": "ETUDE",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "WRATH",
    "guessWord": "PARTY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "JEWEL",
    "guessWord": "DWELT",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "ENEMY",
    "guessWord": "YIELD",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MOULT",
    "guessWord": "MELON",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BOULE",
    "guessWord": "EBONY",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "PROUD",
    "guessWord": "RAPID",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "DOUGH",
    "guessWord": "SHRUG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "ATTIC",
    "guessWord": "SUMAC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "BRUNT",
    "guessWord": "THUMB",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PLANT",
    "guessWord": "ECLAT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "UNCLE",
    "guessWord": "EXCEL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "FENCE",
    "guessWord": "OFTEN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "AGREE",
    "guessWord": "ARENA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "COACH",
    "guessWord": "SHOCK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "VODKA",
    "guessWord": "GECKO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WHELP",
    "guessWord": "WALTZ",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "CLUED",
    "guessWord": "DOWEL",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CLERK",
    "guessWord": "LEARN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "VOGUE",
    "guessWord": "VENOM",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "RATIO",
    "guessWord": "REACT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "JERKY",
    "guessWord": "DRYER",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "HAUTE",
    "guessWord": "HUMAN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "ACUTE",
    "guessWord": "VISTA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "LABEL",
    "guessWord": "LILAC",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "NANNY",
    "guessWord": "SATYR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "TUTOR",
    "guessWord": "MOTTO",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "RETRY",
    "guessWord": "RARER",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SUSHI",
    "guessWord": "SIXTH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "TIGER",
    "guessWord": "STAIR",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "HOUND",
    "guessWord": "OVOID",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WAIVE",
    "guessWord": "CURVY",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "VOUCH",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WINCE",
    "guessWord": "FUNGI",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "HAZEL",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WELSH",
    "guessWord": "ISLET",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "GLASS",
    "guessWord": "GAVEL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "WHIRL",
    "guessWord": "WILLY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ALBUM",
    "guessWord": "FLORA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "TWEED",
    "guessWord": "CADET",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "TRACK",
    "guessWord": "GREAT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "ELIDE",
    "guessWord": "EIGHT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "FLESH",
    "guessWord": "LEACH",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "PLUMP",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TABOO",
    "guessWord": "ORBIT",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "DEVIL",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "THESE",
    "guessWord": "TENET",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "OVOID",
    "guessWord": "OUTGO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "BOOTY",
    "guessWord": "ABATE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "RIFLE",
    "guessWord": "LOFTY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "STOMP",
    "guessWord": "TULIP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WAGER",
    "guessWord": "ANGRY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "LEANT",
    "guessWord": "TWINE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "KNIFE",
    "guessWord": "GENIE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "CAVIL",
    "guessWord": "RABBI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SLOSH",
    "guessWord": "LOOPY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "GRILL",
    "guessWord": "GIVER",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHEET",
    "guessWord": "HASTY",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "JUROR",
    "guessWord": "JOUST",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "EJECT",
    "guessWord": "SCENE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "THUMB",
    "guessWord": "DUTCH",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SMILE",
    "guessWord": "QUALM",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WRITE",
    "guessWord": "SWIRL",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "BLAND",
    "guessWord": "GONAD",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "TWIST",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "ROACH",
    "guessWord": "CLOTH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "NADIR",
    "guessWord": "NEEDY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "CYNIC",
    "guessWord": "CIRCA",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "COWER",
    "guessWord": "NEWLY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GLOOM",
    "guessWord": "LIMBO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SILKY",
    "guessWord": "LIKEN",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "FISHY",
    "guessWord": "YACHT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SHARE",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SONIC",
    "guessWord": "PIANO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "PAYER",
    "guessWord": "APNEA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "INDEX",
    "guessWord": "RELAX",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CHAFF",
    "guessWord": "THETA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "DELTA",
    "guessWord": "TEPID",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "GUISE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SEMEN",
    "guessWord": "MEANT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "COYLY",
    "guessWord": "HELLO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BADLY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "CHOIR",
    "guessWord": "ACRID",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "POESY",
    "guessWord": "COUPE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BURNT",
    "guessWord": "ROUND",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "VALUE",
    "guessWord": "EASEL",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "AGORA",
    "guessWord": "RUMBA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "EXALT",
    "guessWord": "OXIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ROTOR",
    "guessWord": "ARTSY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "MOUSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "NASAL",
    "guessWord": "NYLON",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "SHOUT",
    "guessWord": "RHINO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "GULLY",
    "guessWord": "MOGUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "IMPLY",
    "guessWord": "ILIAC",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "TAPER",
    "guessWord": "THETA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "GRAVY",
    "guessWord": "GONER",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FIBER",
    "guessWord": "DIRGE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "STAMP",
    "guessWord": "WAIST",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "AXION",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SAVOR",
    "guessWord": "OPERA",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "VOMIT",
    "guessWord": "VERSO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "DULLY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "PIXEL",
    "guessWord": "BUXOM",
    "pattern": "⬛⬛🟩⬛⬛"
  },
  {
    "finalWord": "GROIN",
    "guessWord": "PRIMO",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "DITTY",
    "guessWord": "OCTET",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CHANT",
    "guessWord": "ASCOT",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "LINGO",
    "guessWord": "NEIGH",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "OCTET",
    "guessWord": "ACUTE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "LURCH",
    "guessWord": "RULER",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "MOLDY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TITHE",
    "guessWord": "TRIED",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "QUOTH",
    "guessWord": "CUTIE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "INLAY",
    "guessWord": "SNARL",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "ROWER",
    "guessWord": "RURAL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "SIEGE",
    "guessWord": "GEEKY",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SQUIB",
    "guessWord": "CLIMB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "NOSEY",
    "guessWord": "BONUS",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SNAIL",
    "guessWord": "LEARN",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SYNOD",
    "guessWord": "HYMEN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CHUCK",
    "guessWord": "CUBIC",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "PLAIT",
    "guessWord": "PROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FROCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GIANT",
    "guessWord": "WAIST",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "BICEP",
    "guessWord": "EQUIP",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "AWFUL",
    "guessWord": "RIFLE",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "WHARF",
    "guessWord": "WREAK",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TRUSS",
    "guessWord": "CHAOS",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "GYPSY",
    "guessWord": "SPASM",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LINER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "ROOST",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PLUME",
    "guessWord": "PURER",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "GROOM",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CARVE",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "PATCH",
    "guessWord": "OCTET",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "PUREE",
    "guessWord": "UNZIP",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "MAUVE",
    "guessWord": "EQUAL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "PALSY",
    "guessWord": "PECAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SCRUM",
    "guessWord": "ACORN",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SERUM",
    "guessWord": "PRISM",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "PUTTY",
    "guessWord": "OCTET",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CURVE",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "GUMMY",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨🟨⬛⬛"
  },
  {
    "finalWord": "BOOZY",
    "guessWord": "BAYOU",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "COBRA",
    "guessWord": "OMEGA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "ESSAY",
    "guessWord": "ALGAE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHACK",
    "guessWord": "MARSH",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "FLAIR",
    "guessWord": "FATAL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHIRE",
    "guessWord": "SERUM",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "STING",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FJORD",
    "guessWord": "FELON",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "ROUTE",
    "guessWord": "RIVET",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "ELATE",
    "guessWord": "SHALT",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "ESTER",
    "guessWord": "EERIE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "DELAY",
    "guessWord": "ALGAE",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "PAYEE",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SWIFT",
    "guessWord": "TAFFY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SNORT",
    "guessWord": "MOURN",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "FABLE",
    "guessWord": "EXALT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ELDER",
    "guessWord": "RIFLE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "AMBLE",
    "guessWord": "EMPTY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SKULK",
    "guessWord": "LAUGH",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TEACH",
    "guessWord": "RECUT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SLING",
    "guessWord": "ALGAE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPOIL",
    "guessWord": "OPERA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CIGAR",
    "guessWord": "RECAP",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TWEET",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "DITCH",
    "guessWord": "CLOTH",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "AGILE",
    "guessWord": "GRIEF",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BUNNY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CRASS",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BUGGY",
    "guessWord": "DERBY",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SHADY",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "FATTY",
    "guessWord": "STATE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "BUTCH",
    "guessWord": "DUCHY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "FILMY",
    "guessWord": "MOTIF",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SHARP",
    "guessWord": "MORPH",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "NINNY",
    "guessWord": "ENNUI",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "STUCK",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ELUDE",
    "guessWord": "ULTRA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PRIME",
    "guessWord": "ERUPT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "CRAZY",
    "guessWord": "FRITZ",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "REARM",
    "guessWord": "RURAL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BORNE",
    "guessWord": "BASIN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SETUP",
    "guessWord": "SOUTH",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MUNCH",
    "guessWord": "NIECE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MOLAR",
    "guessWord": "SALVO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "TOUGH",
    "guessWord": "DONUT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "STAKE",
    "guessWord": "TACKY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "BREAD",
    "guessWord": "OBESE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CRATE",
    "guessWord": "RATTY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "RABBI",
    "guessWord": "CIRCA",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "NINTH",
    "guessWord": "NADIR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "MAFIA",
    "guessWord": "SWAMI",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "PINEY",
    "guessWord": "GIANT",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "CANAL",
    "guessWord": "CHINA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "GUMBO",
    "guessWord": "DOUBT",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "ADORN",
    "guessWord": "ODDLY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "JOUST",
    "guessWord": "JETTY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "SCENE",
    "guessWord": "ACORN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ABIDE",
    "guessWord": "BELIE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SPEND",
    "guessWord": "BUSED",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "TRIAL",
    "guessWord": "ARTSY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "POUTY",
    "guessWord": "PROUD",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "QUASI",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BONUS",
    "guessWord": "RERUN",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "JUNTA",
    "guessWord": "AUDIT",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLING",
    "guessWord": "IONIC",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "GROAN",
    "guessWord": "ANODE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "LEAKY",
    "guessWord": "EVOKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PINTO",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "EERIE",
    "guessWord": "ENNUI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "GONAD",
    "guessWord": "BANJO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "STARE",
    "guessWord": "ENTRY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "GAFFE",
    "guessWord": "BEEFY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BITTY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "FORGO",
    "guessWord": "PHOTO",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "LADLE",
    "guessWord": "ELDER",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "MINER",
    "guessWord": "NIECE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "PLAZA",
    "guessWord": "PECAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SPACE",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPINY",
    "guessWord": "APRON",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "LOFTY",
    "guessWord": "RIFLE",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "ETUDE",
    "guessWord": "EDIFY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ELITE",
    "guessWord": "HEIST",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GLAZE",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SCONE",
    "guessWord": "ACTOR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "OLDEN",
    "guessWord": "LEDGE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "VILLA",
    "guessWord": "BASIL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SWILL",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "GLOSS",
    "guessWord": "GUSTO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "WAGON",
    "guessWord": "BANJO",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "MINUS",
    "guessWord": "OPIUM",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "GLOVE",
    "guessWord": "LARVA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ARRAY",
    "guessWord": "RERUN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "HITCH",
    "guessWord": "HAIRY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "WHOSE",
    "guessWord": "RHINO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CORER",
    "guessWord": "RADAR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "INERT",
    "guessWord": "ITCHY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SLOPE",
    "guessWord": "HIPPO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DRESS",
    "guessWord": "ETHOS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WHINE",
    "guessWord": "FIEND",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "IDIOT",
    "guessWord": "DETOX",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CREST",
    "guessWord": "TIPSY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FLUFF",
    "guessWord": "AWFUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "BATON",
    "guessWord": "INBOX",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CURIO",
    "guessWord": "RHINO",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "GUILT",
    "guessWord": "TRAIL",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SCOWL",
    "guessWord": "SONIC",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "LABOR",
    "guessWord": "LIMBO",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "MARSH",
    "guessWord": "ROAST",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "UMBRA",
    "guessWord": "USUAL",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "AFFIX",
    "guessWord": "ALOOF",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "CHAFE",
    "guessWord": "HEFTY",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "ORBIT",
    "guessWord": "OBESE",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ELBOW",
    "guessWord": "ORBIT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SHAFT",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "BEADY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "CREED",
    "guessWord": "ACRID",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "HEATH",
    "guessWord": "THANK",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SMALL",
    "guessWord": "GLEAM",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SURER",
    "guessWord": "REBAR",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "ARISE",
    "guessWord": "FIBRE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "FIELD",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FARCE",
    "guessWord": "FLAIR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "USING",
    "guessWord": "SCION",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "EXTRA",
    "guessWord": "OXIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLUNG",
    "guessWord": "ULCER",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "ALPHA",
    "guessWord": "KOALA",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SEVER",
    "guessWord": "PAYEE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DRIED",
    "guessWord": "ROUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FLAKY",
    "guessWord": "PARKA",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BILGE",
    "guessWord": "GENIE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "CAMEL",
    "guessWord": "BALMY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "POKER",
    "guessWord": "ANKLE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SKUNK",
    "guessWord": "KAYAK",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SWEAR",
    "guessWord": "TWANG",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GLINT",
    "guessWord": "SPLIT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "NOOSE",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "VIOLA",
    "guessWord": "VYING",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "PHONE",
    "guessWord": "CANOE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "RINSE",
    "guessWord": "RESET",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "TEASE",
    "guessWord": "TASTY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "FEMME",
    "guessWord": "MODEM",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "MANGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SALTY",
    "guessWord": "ASSAY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "CONIC",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "GOODY",
    "guessWord": "OVOID",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "FREED",
    "guessWord": "TEPID",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "FROND",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FAINT",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ASKEW",
    "guessWord": "AWASH",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FERRY",
    "guessWord": "FRIED",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SNOUT",
    "guessWord": "ATOLL",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "PAINT",
    "guessWord": "PIZZA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "DIZZY",
    "guessWord": "INDEX",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "BUDGE",
    "guessWord": "DOUGH",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ACORN",
    "guessWord": "CHOIR",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "MAMBO",
    "guessWord": "ARMOR",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "COVEN",
    "guessWord": "NAVAL",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "WIDTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CROSS",
    "guessWord": "ETHOS",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "GUSTY",
    "guessWord": "SURGE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "MURKY",
    "guessWord": "FLUKE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "FREER",
    "guessWord": "ERUPT",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "WHINY",
    "guessWord": "SWISH",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "SWISH",
    "guessWord": "HUMUS",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "HOUSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "BAGEL",
    "guessWord": "LABOR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "URINE",
    "guessWord": "ERUPT",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "ETHER",
    "guessWord": "EERIE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "DRAWN",
    "guessWord": "SNOWY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "RAMEN",
    "guessWord": "MACRO",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "DADDY",
    "guessWord": "DREAD",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "OAKEN",
    "guessWord": "APNEA",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ABOVE",
    "guessWord": "TRIBE",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "LOCUS",
    "guessWord": "LAUGH",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "TAROT",
    "guessWord": "MACRO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "GIRLY",
    "guessWord": "REALM",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "THINK",
    "guessWord": "NOTCH",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SCARY",
    "guessWord": "MICRO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "NOBLY",
    "guessWord": "NYMPH",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BRAWN",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "MORAL",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "LAPSE",
    "guessWord": "LOCUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "CELLO",
    "guessWord": "SOLVE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GRIPE",
    "guessWord": "EAGER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "AFOUL",
    "guessWord": "SHELF",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "CHARM",
    "guessWord": "RHYME",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "LOSER",
    "guessWord": "VALOR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "AGATE",
    "guessWord": "THETA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "PETAL",
    "guessWord": "TERRA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "TROOP",
    "guessWord": "PARTY",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "PRIDE",
    "guessWord": "RUPEE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PIPER",
    "guessWord": "DIRGE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "CHORD",
    "guessWord": "SYNOD",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "FOGGY",
    "guessWord": "POLYP",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "WRUNG",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "DOWNY",
    "guessWord": "OWNER",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "RENAL",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DALLY",
    "guessWord": "SATYR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "NERVE",
    "guessWord": "ENTRY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "CRASH",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MINCE",
    "guessWord": "FUNGI",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BROAD",
    "guessWord": "CREDO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SHAKE",
    "guessWord": "HUNKY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FEMUR",
    "guessWord": "FRIED",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "CLIMB",
    "guessWord": "FILMY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "STEED",
    "guessWord": "ETHIC",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "WALTZ",
    "guessWord": "APTLY",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "TOKEN",
    "guessWord": "MONTH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "APPLE",
    "guessWord": "EXULT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "DWELT",
    "guessWord": "TWANG",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "VIPER",
    "guessWord": "EQUIP",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "TOXIN",
    "guessWord": "TANGO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FLYER",
    "guessWord": "SATYR",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CRACK",
    "guessWord": "KAYAK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "AISLE",
    "guessWord": "LASSO",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "DRUID",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLACK",
    "guessWord": "KAYAK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "DOWRY",
    "guessWord": "WEIRD",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "TEPEE",
    "guessWord": "EMPTY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BEVEL",
    "guessWord": "ELDER",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "MAMMA",
    "guessWord": "ANIME",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LOATH",
    "guessWord": "THIGH",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "METER",
    "guessWord": "ARTSY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "ISSUE",
    "guessWord": "SUING",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "ADEPT",
    "guessWord": "EDIFY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "KIOSK",
    "guessWord": "OBESE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PIQUE",
    "guessWord": "EIGHT",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CAUSE",
    "guessWord": "USURP",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SUITE",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PRICK",
    "guessWord": "RISKY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "PRANK",
    "guessWord": "POKER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "WRING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SWINE",
    "guessWord": "UNTIE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "FRONT",
    "guessWord": "ARTSY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "AGENT",
    "guessWord": "TAWNY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "VAPID",
    "guessWord": "MEDIA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SMOKE",
    "guessWord": "OMEGA",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "TEARY",
    "guessWord": "ERASE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "BUYER",
    "guessWord": "RURAL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "NEEDY",
    "guessWord": "OUTDO",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "DIRTY",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MACAW",
    "guessWord": "COCOA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ALLEY",
    "guessWord": "EMAIL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "FLUNG",
    "guessWord": "SNUCK",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GRAIL",
    "guessWord": "GONER",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PULSE",
    "guessWord": "LOUSY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SLICE",
    "guessWord": "SCOWL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "RANCH",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DRANK",
    "guessWord": "ORDER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "AGLOW",
    "guessWord": "CAROL",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "VERSE",
    "guessWord": "USHER",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "HENCE",
    "guessWord": "ENACT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "BELCH",
    "guessWord": "WHEEL",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "DAILY",
    "guessWord": "SCALD",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "ROYAL",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "QUEEN",
    "guessWord": "EVENT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "HUMAN",
    "guessWord": "HORNY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "MERGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BETEL",
    "guessWord": "BLITZ",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "AXIAL",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GAWKY",
    "guessWord": "ALIKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "HABIT",
    "guessWord": "HYENA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ORGAN",
    "guessWord": "OWNER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "HUNKY",
    "guessWord": "BUYER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TOXIC",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "MEALY",
    "guessWord": "EAGLE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CAROL",
    "guessWord": "LYRIC",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PADDY",
    "guessWord": "SPADE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "PATIO",
    "guessWord": "POISE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SINEW",
    "guessWord": "BELOW",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "INEPT",
    "guessWord": "ITCHY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "PEACE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SPICE",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BROOK",
    "guessWord": "ABACK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "FOLLY",
    "guessWord": "LAYER",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "CHILI",
    "guessWord": "UNCLE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "MUSTY",
    "guessWord": "MOUSE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "PLUNK",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BLEAK",
    "guessWord": "OBESE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CRIER",
    "guessWord": "WEIRD",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "EPOCH",
    "guessWord": "OPIUM",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "TAINT",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "EXACT",
    "guessWord": "ENEMA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "BRAKE",
    "guessWord": "ABACK",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "RENEW",
    "guessWord": "ROWDY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "THICK",
    "guessWord": "KITTY",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "LUCID",
    "guessWord": "DECAL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SILLY",
    "guessWord": "SLAIN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "ASSET",
    "guessWord": "PSALM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TAUNT",
    "guessWord": "STAIN",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SAUTE",
    "guessWord": "AUNTY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ROUSE",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "QUALM",
    "guessWord": "AXIOM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SWEAT",
    "guessWord": "TWANG",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BOOZE",
    "guessWord": "ZONAL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PROSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "TAPIR",
    "guessWord": "DEPOT",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "HONEY",
    "guessWord": "YOUNG",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "CHARD",
    "guessWord": "DEATH",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SMIRK",
    "guessWord": "SIREN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SIEVE",
    "guessWord": "PRIVY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SHALE",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "EMCEE",
    "guessWord": "ECLAT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CARRY",
    "guessWord": "LYRIC",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "HAVEN",
    "guessWord": "HINGE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "WIMPY",
    "guessWord": "SWEPT",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "EVICT",
    "guessWord": "OVATE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "DYING",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "SPECK",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "FETUS",
    "guessWord": "ETHOS",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "HASTY",
    "guessWord": "HUMUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "RIGOR",
    "guessWord": "REIGN",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BIRTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "OMBRE",
    "guessWord": "ARBOR",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "FRANK",
    "guessWord": "KNAVE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "FLIRT",
    "guessWord": "TIARA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "RIPER",
    "guessWord": "FIERY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "RELIC",
    "guessWord": "FILET",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "CLACK",
    "guessWord": "COCOA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "RUSTY",
    "guessWord": "STONY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "EVADE",
    "guessWord": "EXTRA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SHOVE",
    "guessWord": "BRAVO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "QUELL",
    "guessWord": "BOULE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "NINJA",
    "guessWord": "VOILA",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "EXCEL",
    "guessWord": "LEACH",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "FLUKE",
    "guessWord": "SKUNK",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SWASH",
    "guessWord": "WATCH",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "HIPPY",
    "guessWord": "CHIRP",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "CLONE",
    "guessWord": "CORAL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "FOLIO",
    "guessWord": "TABOO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "FLOSS",
    "guessWord": "AFOOT",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "DIGIT",
    "guessWord": "DEBUG",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "CYCLE",
    "guessWord": "ECLAT",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "CHILL",
    "guessWord": "NICHE",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "APING",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WAFER",
    "guessWord": "FEMUR",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "WHOOP",
    "guessWord": "PROWL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "MAKER",
    "guessWord": "ARMOR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "BINGE",
    "guessWord": "TITAN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "PRUNE",
    "guessWord": "PECAN",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "ABASE",
    "guessWord": "ASCOT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "PIVOT",
    "guessWord": "POISE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "STILT",
    "guessWord": "TRITE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "CREAM",
    "guessWord": "MOLAR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "MADAM",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SHARK",
    "guessWord": "ROAST",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "CLOCK",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "QUOTE",
    "guessWord": "DUVET",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "WOMAN",
    "guessWord": "TONGA",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "LLAMA",
    "guessWord": "LADLE",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "GRUNT",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CRUDE",
    "guessWord": "NERDY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CEASE",
    "guessWord": "PSALM",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GAYER",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ABYSS",
    "guessWord": "BONUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WHALE",
    "guessWord": "WREAK",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MELEE",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "GUIDE",
    "guessWord": "GRUEL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "RURAL",
    "guessWord": "LILAC",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ARTSY",
    "guessWord": "ROOST",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BUSED",
    "guessWord": "USAGE",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "ROGUE",
    "guessWord": "EIGHT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "REBUT",
    "guessWord": "ARGUE",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "RELAY",
    "guessWord": "LOYAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SIXTY",
    "guessWord": "ISSUE",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "LOGIN",
    "guessWord": "YOUNG",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "OUTDO",
    "guessWord": "FETID",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "NEIGH",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "REUSE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "THETA",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "FROST",
    "guessWord": "VERSO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BOSOM",
    "guessWord": "MAMBO",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "GIVER",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PRISM",
    "guessWord": "POSER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "AVOID",
    "guessWord": "VOMIT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "LITHE",
    "guessWord": "LEFTY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "GAZER",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "PANSY",
    "guessWord": "HYENA",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "TRUCE",
    "guessWord": "THEIR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FROZE",
    "guessWord": "FLAIR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PALER",
    "guessWord": "EMAIL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "OUGHT",
    "guessWord": "JUNTO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "WISER",
    "guessWord": "STAIR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SUNNY",
    "guessWord": "ONSET",
    "pattern": "⬛🟨🟨⬛⬛"
  },
  {
    "finalWord": "BISON",
    "guessWord": "BANJO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "GREET",
    "guessWord": "GECKO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CHINA",
    "guessWord": "HAUNT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CHESS",
    "guessWord": "HUMUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "AGONY",
    "guessWord": "IGLOO",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SMITH",
    "guessWord": "VISTA",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WRONG",
    "guessWord": "WOULD",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "WHISK",
    "guessWord": "WIGHT",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FLINT",
    "guessWord": "PILOT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "GLYPH",
    "guessWord": "ALIGN",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AMUSE",
    "guessWord": "MARSH",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "TUNIC",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SMART",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "MYRRH",
    "guessWord": "HYENA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PANIC",
    "guessWord": "PRAWN",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "AWAKE",
    "guessWord": "OWNER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "BAKER",
    "guessWord": "BLOKE",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CRIED",
    "guessWord": "ROUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SHALT",
    "guessWord": "THETA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "ENACT",
    "guessWord": "ELFIN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FELLA",
    "guessWord": "AGLOW",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LORRY",
    "guessWord": "LEMON",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "ABHOR",
    "guessWord": "BRIAR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "TRUCK",
    "guessWord": "REACT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "PRIED",
    "guessWord": "RIGID",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SNIFF",
    "guessWord": "MOTIF",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SPEAR",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SIGMA",
    "guessWord": "OMEGA",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "STANK",
    "guessWord": "AGENT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "DROWN",
    "guessWord": "WOODY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "STAIR",
    "guessWord": "SIREN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "EVOKE",
    "guessWord": "VERSO",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "GLOBE",
    "guessWord": "RUGBY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SPURT",
    "guessWord": "OPIUM",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "MUSKY",
    "guessWord": "PSALM",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "CREME",
    "guessWord": "CELLO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "POLAR",
    "guessWord": "PIVOT",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "TREND",
    "guessWord": "TEARY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TALLY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "PRIVY",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AGING",
    "guessWord": "IGLOO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "USAGE",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ELECT",
    "guessWord": "EXTOL",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "EQUIP",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ALOFT",
    "guessWord": "AFTER",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "CANON",
    "guessWord": "ACTOR",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "STALL",
    "guessWord": "ADULT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CARAT",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLUER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CATCH",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "GLADE",
    "guessWord": "SCALD",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "RIVET",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "NOMAD",
    "guessWord": "NUDGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "THIEF",
    "guessWord": "SHEIK",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SHIRT",
    "guessWord": "MYRRH",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "QUILT",
    "guessWord": "CUTIE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "ATONE",
    "guessWord": "ANGST",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "CATER",
    "guessWord": "ENTRY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BIOME",
    "guessWord": "TEMPO",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "EVERY",
    "guessWord": "EARTH",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "CRAZE",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ELOPE",
    "guessWord": "HIPPO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WHEEL",
    "guessWord": "NEWLY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "CRONY",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FERAL",
    "guessWord": "ANGEL",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SPEAK",
    "guessWord": "RECAP",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "LIGHT",
    "guessWord": "BATHE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "PLAID",
    "guessWord": "PROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ALLOY",
    "guessWord": "AORTA",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "TIPSY",
    "guessWord": "HYPER",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GRIMY",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CACAO",
    "guessWord": "OAKEN",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BLOWN",
    "guessWord": "ALBUM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TRUNK",
    "guessWord": "URBAN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CRONE",
    "guessWord": "SCOUR",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "FLASH",
    "guessWord": "FELLA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "TRASH",
    "guessWord": "ROUGH",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "VISOR",
    "guessWord": "BRAVO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "RESIN",
    "guessWord": "TENOR",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "RAINY",
    "guessWord": "ACRID",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "WATER",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "FOUND",
    "guessWord": "FEIGN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "COPSE",
    "guessWord": "CEDAR",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "QUART",
    "guessWord": "ADULT",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "ANVIL",
    "guessWord": "TIDAL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "TRIAD",
    "guessWord": "TEARY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SULLY",
    "guessWord": "FLAIL",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "ENNUI",
    "guessWord": "EATEN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SHUSH",
    "guessWord": "CHAOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FAIRY",
    "guessWord": "INFER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SKILL",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "RISKY",
    "guessWord": "SIREN",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "ENSUE",
    "guessWord": "DONUT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "ARSON",
    "guessWord": "ESSAY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "MOTIF",
    "guessWord": "MAIZE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEPER",
    "guessWord": "GENRE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "THRUM",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "TULIP",
    "guessWord": "USURP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "KOALA",
    "guessWord": "KNEEL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ORDER",
    "guessWord": "ARSON",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "MANIC",
    "guessWord": "NINJA",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "WAIST",
    "guessWord": "QUASI",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BOWEL",
    "guessWord": "SOLVE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "USHER",
    "guessWord": "ASIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ASSAY",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TRUER",
    "guessWord": "ROTOR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "CADDY",
    "guessWord": "SCALD",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "VIRUS",
    "guessWord": "BASIS",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "HUMUS",
    "guessWord": "ENSUE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "GROVE",
    "guessWord": "GUARD",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "INNER",
    "guessWord": "RANGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "GOLLY",
    "guessWord": "LILAC",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ABBOT",
    "guessWord": "COCOA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "AUDIO",
    "guessWord": "GUIDE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CLOTH",
    "guessWord": "LOFTY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "BRAVO",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FLUSH",
    "guessWord": "FULLY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PROXY",
    "guessWord": "ROOST",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "STUNK",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "MASON",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "CHEAP",
    "guessWord": "PHONE",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SANDY",
    "guessWord": "GONAD",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "ROUGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "TRAIL",
    "guessWord": "THIRD",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BLAZE",
    "guessWord": "BOWEL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "BLISS",
    "guessWord": "MISSY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "DONOR",
    "guessWord": "NYLON",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "CHEAT",
    "guessWord": "CLOTH",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "DEBIT",
    "guessWord": "DRIVE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "SHRUG",
    "guessWord": "MARSH",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SCALD",
    "guessWord": "ECLAT",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "MAGIC",
    "guessWord": "CACTI",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "STICK",
    "guessWord": "KIOSK",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "QUEST",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "SMASH",
    "guessWord": "SEMEN",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "CHEER",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "FORAY",
    "guessWord": "COBRA",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "WEDGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "COAST",
    "guessWord": "SUMAC",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "EAGER",
    "guessWord": "ERUPT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "THEME",
    "guessWord": "TOTEM",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "WROTE",
    "guessWord": "WHEAT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "AZURE",
    "guessWord": "SCUBA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ANNUL",
    "guessWord": "ADULT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MIRTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BRINY",
    "guessWord": "ORBIT",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "LEARN",
    "guessWord": "OPERA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "UNIFY",
    "guessWord": "URBAN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SLACK",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "VAPOR",
    "guessWord": "PUPAL",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "CROUP",
    "guessWord": "INCUR",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SNOOP",
    "guessWord": "INTRO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "GRAFT",
    "guessWord": "STAIR",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "TAKER",
    "guessWord": "STAIR",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "RESET",
    "guessWord": "ARSON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "EARLY",
    "guessWord": "EXERT",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "TOWEL",
    "guessWord": "TENOR",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FANCY",
    "guessWord": "SYNOD",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SPENT",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "RODEO",
    "guessWord": "VERSO",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "GNOME",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SLEPT",
    "guessWord": "LEANT",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "REEDY",
    "guessWord": "EXERT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "HANDY",
    "guessWord": "DYING",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "DECRY",
    "guessWord": "MEDIC",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "CAMEO",
    "guessWord": "BACON",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "BAYOU",
    "guessWord": "ARBOR",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "FAUNA",
    "guessWord": "LUNAR",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "FLOUR",
    "guessWord": "ANNUL",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CHAIR",
    "guessWord": "COBRA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "GENRE",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "JUNTO",
    "guessWord": "JOIST",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "MONTH",
    "guessWord": "VENOM",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "PULPY",
    "guessWord": "LOUSY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "SOBER",
    "guessWord": "ELBOW",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SWOOP",
    "guessWord": "WHELP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CAIRN",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "NEWLY",
    "guessWord": "UNWED",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "MAYOR",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "KEBAB",
    "guessWord": "KNIFE",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ARMOR",
    "guessWord": "ORBIT",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BEGET",
    "guessWord": "AGENT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "AWOKE",
    "guessWord": "SKATE",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "WINDY",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MODAL",
    "guessWord": "RADIO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "FILER",
    "guessWord": "THEIR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "CABAL",
    "guessWord": "ILIAC",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "PRICE",
    "guessWord": "POLAR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "KNAVE",
    "guessWord": "KINKY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "NICHE",
    "guessWord": "NOTCH",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SWIRL",
    "guessWord": "STAIR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "MODEL",
    "guessWord": "OXIDE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SNIPE",
    "guessWord": "BASIN",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "TERRA",
    "guessWord": "EGRET",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SHUNT",
    "guessWord": "SETUP",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "VOTER",
    "guessWord": "VISTA",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "GAMMA",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CHASM",
    "guessWord": "BOSOM",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "STAFF",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STORY",
    "guessWord": "SAVOR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "REIGN",
    "guessWord": "PIGGY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "SINCE",
    "guessWord": "CIDER",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SWORD",
    "guessWord": "OWNER",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "POLYP",
    "guessWord": "SATYR",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "DEIGN",
    "guessWord": "PIGGY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "KNOLL",
    "guessWord": "KINKY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "WOOLY",
    "guessWord": "LAYER",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "HUMID",
    "guessWord": "DATUM",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "LOYAL",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MOUTH",
    "guessWord": "WROTE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "JETTY",
    "guessWord": "TOTEM",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "ADMIT",
    "guessWord": "EDIFY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SOAPY",
    "guessWord": "ADEPT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PARRY",
    "guessWord": "POLAR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CRAMP",
    "guessWord": "SCOOP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "ONSET",
    "guessWord": "EATEN",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SPARE",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "HUMOR",
    "guessWord": "GAMUT",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "DAUNT",
    "guessWord": "ABOUT",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ULTRA",
    "guessWord": "URINE",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "LUNAR",
    "guessWord": "INLAY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MAMMY",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "CROOK",
    "guessWord": "MORON",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "BLURT",
    "guessWord": "ELBOW",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "STEER",
    "guessWord": "ETHIC",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "HOMER",
    "guessWord": "ABHOR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "VERVE",
    "guessWord": "SAVVY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "DEUCE",
    "guessWord": "EDICT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "EYING",
    "guessWord": "SHRUG",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "QUOTA",
    "guessWord": "ULTRA",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "UNDUE",
    "guessWord": "DATUM",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "WAXEN",
    "guessWord": "PIXIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SHIFT",
    "guessWord": "SATIN",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DINER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CHUMP",
    "guessWord": "SUMAC",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "KAYAK",
    "guessWord": "ABACK",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "FUDGE",
    "guessWord": "BUSED",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FIFTH",
    "guessWord": "VITAL",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "THUMP",
    "guessWord": "UNZIP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LEAVE",
    "guessWord": "LIVID",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEECH",
    "guessWord": "MELEE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GAUGE",
    "guessWord": "DEBUG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SPILL",
    "guessWord": "FLAIL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SLEET",
    "guessWord": "SALTY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SKIMP",
    "guessWord": "PRICK",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "YEAST",
    "guessWord": "YIELD",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "DRAIN",
    "guessWord": "DAUNT",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "CURLY",
    "guessWord": "INCUR",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "PAPER",
    "guessWord": "COPSE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "QUICK",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "GAMER",
    "guessWord": "AUGUR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "SCRAP",
    "guessWord": "BICEP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "DENSE",
    "guessWord": "RESIN",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "ARENA",
    "guessWord": "SNEER",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GUARD",
    "guessWord": "LUNAR",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BALER",
    "guessWord": "EAGLE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "WRACK",
    "guessWord": "WARTY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "JUDGE",
    "guessWord": "JOKER",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SNIDE",
    "guessWord": "WINDY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "AVERT",
    "guessWord": "TREND",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "MOTTO",
    "guessWord": "DATUM",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "FRIED",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BERTH",
    "guessWord": "BLEAT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "ABLED",
    "guessWord": "EBONY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SLUNG",
    "guessWord": "USURP",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FRAUD",
    "guessWord": "FLORA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "PROBE",
    "guessWord": "PEARL",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "OFTEN",
    "guessWord": "AFOUL",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "UNCUT",
    "guessWord": "CHANT",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ACRID",
    "guessWord": "CHORD",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "RIVAL",
    "guessWord": "IDLER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "NORTH",
    "guessWord": "TRASH",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "BUNCH",
    "guessWord": "CUBIC",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "WEAVE",
    "guessWord": "ASKEW",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "POISE",
    "guessWord": "SKIMP",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "RIPEN",
    "guessWord": "PAGAN",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "PURGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "CHIEF",
    "guessWord": "FAITH",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLEED",
    "guessWord": "ALIBI",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "FATAL",
    "guessWord": "OFTEN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SWEEP",
    "guessWord": "RUPEE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BRASS",
    "guessWord": "ESSAY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "AMITY",
    "guessWord": "SMEAR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "OPERA",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "LINEN",
    "guessWord": "NEWLY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "AWARE",
    "guessWord": "ARRAY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SHAME",
    "guessWord": "MOCHA",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "FLASK",
    "guessWord": "AFOUL",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "AVAIL",
    "guessWord": "VISTA",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "PARTY",
    "guessWord": "TERRA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SKATE",
    "guessWord": "EKING",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "DRYLY",
    "guessWord": "WORLD",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BOAST",
    "guessWord": "PATSY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CURVY",
    "guessWord": "CROUP",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "LEMUR",
    "guessWord": "LUNGE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SOOTH",
    "guessWord": "POSIT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "ALIKE",
    "guessWord": "LUCKY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ALONG",
    "guessWord": "KNOLL",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "LATTE",
    "guessWord": "UNTIL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SONAR",
    "guessWord": "NASAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "GAVEL",
    "guessWord": "SALVO",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "HELLO",
    "guessWord": "SOLVE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "STASH",
    "guessWord": "SETUP",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "TRAWL",
    "guessWord": "GREAT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "OTHER",
    "guessWord": "ETUDE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "NOISE",
    "guessWord": "NICER",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SWORN",
    "guessWord": "BASIN",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "GIVEN",
    "guessWord": "PIANO",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "NAIVE",
    "guessWord": "CURVY",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "SLUNK",
    "guessWord": "USING",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "JUMBO",
    "guessWord": "UNMET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "CRUEL",
    "guessWord": "RACER",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "MEATY",
    "guessWord": "EMAIL",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "PROWL",
    "guessWord": "SPAWN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "REPAY",
    "guessWord": "COPSE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BUGLE",
    "guessWord": "TUBAL",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SHYLY",
    "guessWord": "AISLE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "BOSSY",
    "guessWord": "SYRUP",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "SAUCY",
    "guessWord": "QUACK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WIDER",
    "guessWord": "RUDDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "HAVOC",
    "guessWord": "RIVAL",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "SMOTE",
    "guessWord": "AMEND",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "COMET",
    "guessWord": "TIMID",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "RIVER",
    "guessWord": "IRATE",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "NOBLE",
    "guessWord": "LOGIN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "DODGY",
    "guessWord": "UDDER",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "LARGE",
    "guessWord": "ROUGH",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SUAVE",
    "guessWord": "SCUBA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "METRO",
    "guessWord": "BATON",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "SPIEL",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "THREW",
    "guessWord": "TAWNY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "TRAIT",
    "guessWord": "NADIR",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "TEMPO",
    "guessWord": "CREPE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "DETOX",
    "guessWord": "ANNEX",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CURSE",
    "guessWord": "DECOR",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SPELL",
    "guessWord": "REPEL",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "WISPY",
    "guessWord": "TWIST",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "CRUST",
    "guessWord": "REBUS",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "IMPEL",
    "guessWord": "LUPUS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "CRICK",
    "guessWord": "KIOSK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "DOING",
    "guessWord": "DROWN",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "PUFFY",
    "guessWord": "TULIP",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "TARDY",
    "guessWord": "ACRID",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "MIDST",
    "guessWord": "AMISS",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SIREN",
    "guessWord": "RAYON",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DUNCE",
    "guessWord": "RUDER",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "FLIER",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "OXIDE",
    "guessWord": "ODDLY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "REGAL",
    "guessWord": "VAGUE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "ISLET",
    "guessWord": "USING",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GROUP",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHADE",
    "guessWord": "HOWDY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "POINT",
    "guessWord": "TRIPE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "GRUEL",
    "guessWord": "GIRLY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DRILL",
    "guessWord": "TILDE",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "GOOFY",
    "guessWord": "IGLOO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "DECAY",
    "guessWord": "ECLAT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "FLAIL",
    "guessWord": "SHELF",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "FRAIL",
    "guessWord": "PROOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "OUNCE",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DOUBT",
    "guessWord": "DUSTY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "OVARY",
    "guessWord": "AVIAN",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "URBAN",
    "guessWord": "USAGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "ANTIC",
    "guessWord": "HAVOC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TIMER",
    "guessWord": "IMPEL",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "VINYL",
    "guessWord": "LYRIC",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "ADULT",
    "guessWord": "UDDER",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SLIME",
    "guessWord": "FILMY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "GIPSY",
    "guessWord": "STRIP",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "COURT",
    "guessWord": "HYDRO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SPERM",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SEGUE",
    "guessWord": "GECKO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CLOVE",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "EASEL",
    "guessWord": "SADLY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SNAKE",
    "guessWord": "AISLE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "DRAWL",
    "guessWord": "DELTA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "JOKER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "ARDOR",
    "guessWord": "RAYON",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "MISER",
    "guessWord": "HAREM",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DEFER",
    "guessWord": "DIRGE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "ALLAY",
    "guessWord": "KAYAK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "DETER",
    "guessWord": "DIRTY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MAXIM",
    "guessWord": "AFFIX",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BEGIN",
    "guessWord": "TITAN",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BRIBE",
    "guessWord": "LIMBO",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "AFIRE",
    "guessWord": "ACRID",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "AGAPE",
    "guessWord": "APING",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "RETCH",
    "guessWord": "RHINO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SIGHT",
    "guessWord": "VISTA",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "DWELL",
    "guessWord": "OWNER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "MERRY",
    "guessWord": "EMBER",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "THOSE",
    "guessWord": "SOOTY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BEGUN",
    "guessWord": "LUMEN",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "UNFED",
    "guessWord": "DRONE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "DODGE",
    "guessWord": "ELDER",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "UNLIT",
    "guessWord": "INCUR",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SHONE",
    "guessWord": "HONOR",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "PSALM",
    "guessWord": "ESSAY",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "BEAST",
    "guessWord": "BUTTE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "MOWER",
    "guessWord": "MASON",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "THROB",
    "guessWord": "TUBER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "INFER",
    "guessWord": "FRIAR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PARER",
    "guessWord": "CREEP",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "AMASS",
    "guessWord": "ASSET",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "OFFAL",
    "guessWord": "EXTOL",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "STONE",
    "guessWord": "UTTER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "KNOWN",
    "guessWord": "ENDOW",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "LAUGH",
    "guessWord": "BULGE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "HOARD",
    "guessWord": "HUMAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "COMFY",
    "guessWord": "ALOFT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "EXULT",
    "guessWord": "TRUER",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "FLOOR",
    "guessWord": "WORLD",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "DRIVE",
    "guessWord": "HEAVY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "RHYME",
    "guessWord": "GLYPH",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "POUCH",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TANGY",
    "guessWord": "AGAIN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "TEPID",
    "guessWord": "PLEAD",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "SAFER",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "MANGA",
    "guessWord": "ALIGN",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "SNEAK",
    "guessWord": "NASAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "VALID",
    "guessWord": "ELFIN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "CROCK",
    "guessWord": "SCOUR",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "CRUMP",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "STEEL",
    "guessWord": "ATONE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLASH",
    "guessWord": "CASTE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "HOWDY",
    "guessWord": "HEDGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "HYPER",
    "guessWord": "PINEY",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "MATEY",
    "guessWord": "HYMEN",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "THEFT",
    "guessWord": "RETCH",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "PUPIL",
    "guessWord": "USURP",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "BATHE",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LUNCH",
    "guessWord": "GHOUL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "BEZEL",
    "guessWord": "SEIZE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "GOUGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ASCOT",
    "guessWord": "AUDIO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LIMIT",
    "guessWord": "CHILI",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "IMAGE",
    "guessWord": "THIGH",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "FICUS",
    "guessWord": "BASIS",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SAINT",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DITTO",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ASIDE",
    "guessWord": "STUDY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FLOOD",
    "guessWord": "ODDLY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "GHOUL",
    "guessWord": "LIGHT",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "CLOWN",
    "guessWord": "PECAN",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "UNITE",
    "guessWord": "ULTRA",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "HIPPO",
    "guessWord": "MORPH",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "GULCH",
    "guessWord": "SHRUG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "PUPAL",
    "guessWord": "PIZZA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SPILT",
    "guessWord": "UNLIT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "WOOZY",
    "guessWord": "OZONE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "CANNY",
    "guessWord": "LYNCH",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "JOINT",
    "guessWord": "JUROR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "DRAKE",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "STIFF",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "WRYLY",
    "guessWord": "GLYPH",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FLANK",
    "guessWord": "LANCE",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "AMPLY",
    "guessWord": "SMEAR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "PRAWN",
    "guessWord": "SNOWY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "TITLE",
    "guessWord": "PILOT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "DRIER",
    "guessWord": "CREDO",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "OWING",
    "guessWord": "IRONY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CHIME",
    "guessWord": "CREAM",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "MOVIE",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BLURB",
    "guessWord": "BALER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "SOUTH",
    "guessWord": "PESTO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BULKY",
    "guessWord": "BOULE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "IONIC",
    "guessWord": "CHOIR",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "KHAKI",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BLIMP",
    "guessWord": "POLYP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "PENCE",
    "guessWord": "RECAP",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "LUPUS",
    "guessWord": "ALPHA",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CURRY",
    "guessWord": "PARER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "HOLLY",
    "guessWord": "BYLAW",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "NURSE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "METAL",
    "guessWord": "LEFTY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SADLY",
    "guessWord": "FALSE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "KNELT",
    "guessWord": "TENET",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "WOOER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BRISK",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "WEIGH",
    "guessWord": "OMEGA",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SHELL",
    "guessWord": "LEACH",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "HINGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PYGMY",
    "guessWord": "GLYPH",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "EVENT",
    "guessWord": "AVIAN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "DUTCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TAKEN",
    "guessWord": "NATAL",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "VALOR",
    "guessWord": "VEGAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "SPLAT",
    "guessWord": "OPERA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "TEDDY",
    "guessWord": "TRIED",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "RABID",
    "guessWord": "AMBER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SPEED",
    "guessWord": "PIECE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLUSH",
    "guessWord": "SQUIB",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "LEGGY",
    "guessWord": "ALIGN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "CHOSE",
    "guessWord": "ACORN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BROOM",
    "guessWord": "FORUM",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "SINGE",
    "guessWord": "UNTIE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "MIGHT",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CLOUT",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "LIKEN",
    "guessWord": "KNOWN",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LEERY",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MEDIC",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "WITCH",
    "guessWord": "WHEAT",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "OCTAL",
    "guessWord": "ACRID",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ENDOW",
    "guessWord": "RENEW",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "OPINE",
    "guessWord": "PREEN",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "ROBIN",
    "guessWord": "IMBUE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "FRITZ",
    "guessWord": "TOPAZ",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SKULL",
    "guessWord": "FLASK",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "BELOW",
    "guessWord": "NEWLY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "INLET",
    "guessWord": "IONIC",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "PENAL",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "FOCUS",
    "guessWord": "CHAOS",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "EGRET",
    "guessWord": "AGORA",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "DRYER",
    "guessWord": "RADAR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "LATER",
    "guessWord": "METRO",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "APNEA",
    "guessWord": "RIPEN",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "PRIMO",
    "guessWord": "IRONY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SUPER",
    "guessWord": "CREEP",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "CLEAT",
    "guessWord": "LEGAL",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ALTER",
    "guessWord": "AORTA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "AMISS",
    "guessWord": "MUCUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SPRIG",
    "guessWord": "TORUS",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SAUCE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MOTEL",
    "guessWord": "DETOX",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "CHAMP",
    "guessWord": "MECCA",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "ALARM",
    "guessWord": "STEAM",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SHEEP",
    "guessWord": "DEPTH",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "NOVEL",
    "guessWord": "LIVID",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SUING",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "HERON",
    "guessWord": "SYNOD",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "FOCAL",
    "guessWord": "SUMAC",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TAWNY",
    "guessWord": "TWEAK",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "CRYPT",
    "guessWord": "STYLE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "ANGEL",
    "guessWord": "BEGAT",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "LANKY",
    "guessWord": "VODKA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ITCHY",
    "guessWord": "LUCID",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "BLUNT",
    "guessWord": "ULCER",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PICKY",
    "guessWord": "SPIKE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "TORSO",
    "guessWord": "GHOST",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SULKY",
    "guessWord": "LOCUS",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "VIXEN",
    "guessWord": "VOILA",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "RUMOR",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SCRAM",
    "guessWord": "SIGMA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "GUSTO",
    "guessWord": "SUING",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "FAITH",
    "guessWord": "YACHT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "STRAW",
    "guessWord": "ALTAR",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "EXERT",
    "guessWord": "OXIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ZEBRA",
    "guessWord": "ABORT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "NOTCH",
    "guessWord": "TENTH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "TRIPE",
    "guessWord": "LEAPT",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "HALVE",
    "guessWord": "HOARD",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "PITCH",
    "guessWord": "NICHE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SKIRT",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "TOWER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TOAST",
    "guessWord": "VERSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SMELT",
    "guessWord": "GLEAM",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "BULGE",
    "guessWord": "EQUAL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "LUNGE",
    "guessWord": "WEIGH",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "ANNOY",
    "guessWord": "CHAOS",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "THROW",
    "guessWord": "RENEW",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FLUNK",
    "guessWord": "AWFUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "AUDIT",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SERIF",
    "guessWord": "SINEW",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "COMMA",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SLASH",
    "guessWord": "STEAL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "BELIE",
    "guessWord": "CLIMB",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "TIARA",
    "guessWord": "THEIR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FLEET",
    "guessWord": "SHELF",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "BLOOD",
    "guessWord": "DROLL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "STUFF",
    "guessWord": "THIEF",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "VEGAN",
    "guessWord": "VINYL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "CACTI",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SALVE",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "HEARD",
    "guessWord": "EVADE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "DEPOT",
    "guessWord": "COPSE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "DOWEL",
    "guessWord": "BAWDY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "BOUND",
    "guessWord": "DOZEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "PLIER",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "HONOR",
    "guessWord": "ROUND",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ATOLL",
    "guessWord": "QUOTA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "STILL",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "LOOPY",
    "guessWord": "PILOT",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "DINGO",
    "guessWord": "ENNUI",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WHACK",
    "guessWord": "TWEAK",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "MUSIC",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "IRONY",
    "guessWord": "IONIC",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "MEANT",
    "guessWord": "ANGST",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "BRIDE",
    "guessWord": "IMBUE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "DUSKY",
    "guessWord": "SYRUP",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "OTTER",
    "guessWord": "ORGAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "QUAKE",
    "guessWord": "EQUIP",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "AWAIT",
    "guessWord": "TWEED",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ARGUE",
    "guessWord": "WRUNG",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BRAND",
    "guessWord": "NOMAD",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SPAWN",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "WASTE",
    "guessWord": "WIGHT",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "CLIFF",
    "guessWord": "LEAFY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LEGAL",
    "guessWord": "EAGER",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "DROSS",
    "guessWord": "REBUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "MULCH",
    "guessWord": "ECLAT",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RUMBA",
    "guessWord": "REHAB",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FLOWN",
    "guessWord": "LINGO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "TWIRL",
    "guessWord": "SWATH",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "ALIBI",
    "guessWord": "CACTI",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TWINE",
    "guessWord": "SWATH",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "BLITZ",
    "guessWord": "TRIBE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "DUCHY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "VYING",
    "guessWord": "CYNIC",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "LIPID",
    "guessWord": "DIMLY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "GENIE",
    "guessWord": "ELFIN",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "FILLY",
    "guessWord": "LEAFY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "BOOTH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TITAN",
    "guessWord": "NINTH",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SAPPY",
    "guessWord": "EPOXY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CLEFT",
    "guessWord": "SHELF",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "GRASP",
    "guessWord": "ORGAN",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "LILAC",
    "guessWord": "BASIL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "RAISE",
    "guessWord": "RUMBA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "THING",
    "guessWord": "GHOUL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AORTA",
    "guessWord": "RUSTY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "BLESS",
    "guessWord": "ALBUM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SLYLY",
    "guessWord": "LLAMA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "TIMID",
    "guessWord": "MOUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "ANGST",
    "guessWord": "ENEMA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "VAULT",
    "guessWord": "VOTER",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "TROPE",
    "guessWord": "HARPY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "LUCKY",
    "guessWord": "CHOKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ANKLE",
    "guessWord": "ALERT",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "GRASS",
    "guessWord": "REBUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FUNKY",
    "guessWord": "BUYER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FINER",
    "guessWord": "NIECE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SALSA",
    "guessWord": "PLAZA",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "CIVIC",
    "guessWord": "ALIBI",
    "pattern": "⬛⬛🟨⬛🟨"
  },
  {
    "finalWord": "USURP",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TOPIC",
    "guessWord": "TEMPO",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FLUID",
    "guessWord": "ALOOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "TRUTH",
    "guessWord": "RATTY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TILDE",
    "guessWord": "IRATE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "LUSTY",
    "guessWord": "TUBAL",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "UDDER",
    "guessWord": "CLUED",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "ERASE",
    "guessWord": "ETHOS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "CHICK",
    "guessWord": "CACTI",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DOWDY",
    "guessWord": "SYNOD",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "HUNCH",
    "guessWord": "NIECE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SERVE",
    "guessWord": "TORUS",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "PLUSH",
    "guessWord": "RALPH",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SEVEN",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TREAD",
    "guessWord": "RADAR",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ENVOY",
    "guessWord": "NAVAL",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LANCE",
    "guessWord": "MECCA",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "WEEDY",
    "guessWord": "ODDLY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BLIND",
    "guessWord": "OLDEN",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SCALY",
    "guessWord": "OCEAN",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "PHOTO",
    "guessWord": "EMPTY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "RAPID",
    "guessWord": "PLIER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SCAMP",
    "guessWord": "BASIC",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "FIGHT",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FANNY",
    "guessWord": "CHINA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SPRAY",
    "guessWord": "ROYAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ELEGY",
    "guessWord": "EGRET",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FIZZY",
    "guessWord": "FRITZ",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "MARCH",
    "guessWord": "MOLAR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "BEEFY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "GAUNT",
    "guessWord": "STAIN",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "ABORT",
    "guessWord": "DEBAR",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "LEAFY",
    "guessWord": "LIEGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "BEECH",
    "guessWord": "NICHE",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "GASSY",
    "guessWord": "ISSUE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "PITHY",
    "guessWord": "PHOTO",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SMELL",
    "guessWord": "AMUSE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "MANGY",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "FELON",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MARRY",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "PIECE",
    "guessWord": "PECAN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PIXIE",
    "guessWord": "ANNEX",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "WITTY",
    "guessWord": "TRITE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "STAIN",
    "guessWord": "UTILE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "DAISY",
    "guessWord": "TIDAL",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "ROWDY",
    "guessWord": "CREDO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "MISSY",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "STACK",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPREE",
    "guessWord": "SEDAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "PUDGY",
    "guessWord": "STUDY",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "BALMY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "VAGUE",
    "guessWord": "SHRUG",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "RAYON",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TRULY",
    "guessWord": "TWIRL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "IDLER",
    "guessWord": "ADEPT",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "EBONY",
    "guessWord": "ELBOW",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DRAFT",
    "guessWord": "DATUM",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "POSER",
    "guessWord": "VAPOR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "ALTAR",
    "guessWord": "ATOLL",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TRYST",
    "guessWord": "TEARY",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TABBY",
    "guessWord": "CYBER",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GLIDE",
    "guessWord": "GREED",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "STEAK",
    "guessWord": "CAULK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TONGA",
    "guessWord": "CARGO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "MUDDY",
    "guessWord": "UNDID",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SLEEP",
    "guessWord": "EQUIP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SHRUB",
    "guessWord": "PLUMB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "FIEND",
    "guessWord": "BEING",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CROWD",
    "guessWord": "ACTOR",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "ONION",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "STEAL",
    "guessWord": "THESE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SIXTH",
    "guessWord": "MAXIM",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "TROLL",
    "guessWord": "ARTSY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FORUM",
    "guessWord": "FAVOR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "IVORY",
    "guessWord": "CHOIR",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "CREAK",
    "guessWord": "DEBAR",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "BEACH",
    "guessWord": "BACON",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "EKING",
    "guessWord": "ELFIN",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "EXPEL",
    "guessWord": "LAPSE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BACON",
    "guessWord": "THROB",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PANEL",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "GRATE",
    "guessWord": "DELTA",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "AFOOT",
    "guessWord": "AUDIO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "BARGE",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PIGGY",
    "guessWord": "SPRIG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "MUCUS",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "SCUBA",
    "guessWord": "CRUMB",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CORAL",
    "guessWord": "RELIC",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "FRUIT",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "BROTH",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "BLUFF",
    "guessWord": "AWFUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "PRONE",
    "guessWord": "PINTO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "THYME",
    "guessWord": "MAYOR",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "CREPE",
    "guessWord": "CELLO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "TUMOR",
    "guessWord": "TOTEM",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "FUGUE",
    "guessWord": "FEIGN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "AMBER",
    "guessWord": "BERET",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "STOOL",
    "guessWord": "UTILE",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "EATEN",
    "guessWord": "ENEMY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "AGAIN",
    "guessWord": "IGLOO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BRAID",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FURRY",
    "guessWord": "RARER",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "THIGH",
    "guessWord": "OUTGO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "PRIZE",
    "guessWord": "POLAR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FOIST",
    "guessWord": "TORUS",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "FRILL",
    "guessWord": "PROOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "GNASH",
    "guessWord": "LAUGH",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "FIXER",
    "guessWord": "BUXOM",
    "pattern": "⬛⬛🟩⬛⬛"
  },
  {
    "finalWord": "CLAMP",
    "guessWord": "SCOOP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TULLE",
    "guessWord": "ALLOT",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "WIDEN",
    "guessWord": "DRONE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "GROWL",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ETHIC",
    "guessWord": "UNTIE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BOARD",
    "guessWord": "READY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SLUMP",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TALON",
    "guessWord": "NASTY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "DRUNK",
    "guessWord": "KRILL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ANODE",
    "guessWord": "DROWN",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "STEAD",
    "guessWord": "BUSED",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "CREEP",
    "guessWord": "SCRAP",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "EXILE",
    "guessWord": "GENIE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "POWER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "HARPY",
    "guessWord": "LEAPT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "GRAVE",
    "guessWord": "GONER",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "PROOF",
    "guessWord": "TORSO",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "CHILD",
    "guessWord": "CAVIL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "ASHEN",
    "guessWord": "PSALM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "HEDGE",
    "guessWord": "THIGH",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "SQUAD",
    "guessWord": "QUOTA",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FLAME",
    "guessWord": "RIFLE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "BIBLE",
    "guessWord": "RABBI",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "OLIVE",
    "guessWord": "EVICT",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "NUDGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "TRICE",
    "guessWord": "CRUEL",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ODDER",
    "guessWord": "ADAGE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ABOUT",
    "guessWord": "SQUAT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "CHAIN",
    "guessWord": "APHID",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SCARE",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "HEAVE",
    "guessWord": "AGREE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "SHELF",
    "guessWord": "LEECH",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ENTER",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "CLASP",
    "guessWord": "USURP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "COLON",
    "guessWord": "LABOR",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "AXIOM",
    "guessWord": "ANNEX",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "YOUTH",
    "guessWord": "TORUS",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "HARSH",
    "guessWord": "SHEER",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "TRACT",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WHICH",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "YEARN",
    "guessWord": "YACHT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "PESKY",
    "guessWord": "PSALM",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BIDDY",
    "guessWord": "DEBIT",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "DENIM",
    "guessWord": "MOUND",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "FLOUT",
    "guessWord": "ANNUL",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "UNMET",
    "guessWord": "TUBER",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "LYNCH",
    "guessWord": "HYMEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CIVIL",
    "guessWord": "CACTI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "OPTIC",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SCORE",
    "guessWord": "ACRID",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BLOCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "HOVEL",
    "guessWord": "EXTOL",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "PURER",
    "guessWord": "SPEAR",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "PORCH",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FROWN",
    "guessWord": "WOOER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "QUERY",
    "guessWord": "YEARN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "OUTER",
    "guessWord": "ORGAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SCOUT",
    "guessWord": "CHAOS",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "CORNY",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "EAGLE",
    "guessWord": "ELECT",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "REFIT",
    "guessWord": "JIFFY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SCREE",
    "guessWord": "OCEAN",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BADGE",
    "guessWord": "GONAD",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "AVIAN",
    "guessWord": "VODKA",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "OZONE",
    "guessWord": "CANOE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "REBAR",
    "guessWord": "ALGAE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CINCH",
    "guessWord": "NEIGH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "LYING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "HORSE",
    "guessWord": "ADORE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "LATCH",
    "guessWord": "OCTET",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "UNDER",
    "guessWord": "RUDDY",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "CHOCK",
    "guessWord": "CACHE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "WOMEN",
    "guessWord": "UNWED",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "HARRY",
    "guessWord": "READY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "SPICY",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "LASSO",
    "guessWord": "LUPUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "YACHT",
    "guessWord": "YEARN",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "STEAM",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩⬛⬛⬛"
  },
  {
    "finalWord": "UNWED",
    "guessWord": "USING",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "CADET",
    "guessWord": "CELLO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "FAVOR",
    "guessWord": "FELLA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ADMIN",
    "guessWord": "AXIOM",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "WORTH",
    "guessWord": "COURT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SKIFF",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "SWAMP",
    "guessWord": "USURP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "IMBUE",
    "guessWord": "OPIUM",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SLAVE",
    "guessWord": "LARVA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "BEFIT",
    "guessWord": "GAFFE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "KNEAD",
    "guessWord": "SNIDE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FREAK",
    "guessWord": "ABACK",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "RARER",
    "guessWord": "ZEBRA",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "BEGAT",
    "guessWord": "HABIT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "GIRTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PAUSE",
    "guessWord": "BAYOU",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FINCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CHEEK",
    "guessWord": "ETHOS",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "STALE",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩⬛⬛⬛"
  },
  {
    "finalWord": "TRUMP",
    "guessWord": "SCRAP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "OBESE",
    "guessWord": "ORBIT",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "THEIR",
    "guessWord": "TWIRL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MAIZE",
    "guessWord": "HAREM",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "PECAN",
    "guessWord": "PANSY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "REBEL",
    "guessWord": "IMBUE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ROCKY",
    "guessWord": "RHYME",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "STALK",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BAWDY",
    "guessWord": "ABBEY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SEIZE",
    "guessWord": "ZESTY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "FILET",
    "guessWord": "ELIDE",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "QUIRK",
    "guessWord": "SHEIK",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "MECCA",
    "guessWord": "CELLO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SOLAR",
    "guessWord": "CARAT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "TRADE",
    "guessWord": "TAKEN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "GROWN",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FEAST",
    "guessWord": "PSALM",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "TOTEM",
    "guessWord": "OPIUM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DAIRY",
    "guessWord": "YEARN",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TENET",
    "guessWord": "NERVE",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRUTE",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "QUARK",
    "guessWord": "AZURE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TOOTH",
    "guessWord": "DITTO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "LEVER",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "JAZZY",
    "guessWord": "WALTZ",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "DILLY",
    "guessWord": "LADLE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CARGO",
    "guessWord": "PIANO",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "MOODY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SCORN",
    "guessWord": "ACRID",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "RUDER",
    "guessWord": "DONOR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BEING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "STORM",
    "guessWord": "TOTEM",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "REVUE",
    "guessWord": "DUVET",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "WHERE",
    "guessWord": "THROW",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "EXTOL",
    "guessWord": "TITLE",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "AUNTY",
    "guessWord": "TUBAL",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "MAGMA",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "LAGER",
    "guessWord": "ALTAR",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "BOOBY",
    "guessWord": "BAYOU",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "KITTY",
    "guessWord": "TRITE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BENCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "LIVER",
    "guessWord": "SPIEL",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BROKE",
    "guessWord": "ABOUT",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "HUSKY",
    "guessWord": "FLUKE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "TROUT",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "NYLON",
    "guessWord": "YOUNG",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "TRICK",
    "guessWord": "ARTSY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "HYENA",
    "guessWord": "NYMPH",
    "pattern": "🟨🟩⬛⬛🟨"
  }
];

module.exports = { PUZZLES_JSON };
