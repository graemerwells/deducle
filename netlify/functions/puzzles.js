// This file securely stores your puzzle list on the server.

const PUZZLES_JSON = [
  {
    "finalWord": "ABACK",
    "guessWord": "BATCH",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ABASE",
    "guessWord": "ASCOT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ABATE",
    "guessWord": "TRIBE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ABBEY",
    "guessWord": "HYENA",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "ABBOT",
    "guessWord": "COCOA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ABHOR",
    "guessWord": "BRIAR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ABIDE",
    "guessWord": "BELIE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ABLED",
    "guessWord": "EBONY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ABODE",
    "guessWord": "BAWDY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ABORT",
    "guessWord": "DEBAR",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "ABOUT",
    "guessWord": "SQUAT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "ABOVE",
    "guessWord": "TRIBE",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "ABUSE",
    "guessWord": "SEGUE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ABYSS",
    "guessWord": "BONUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "ACORN",
    "guessWord": "CHOIR",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ACRID",
    "guessWord": "CHORD",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ACTOR",
    "guessWord": "COLON",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ACUTE",
    "guessWord": "VISTA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ADAGE",
    "guessWord": "PUDGY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "ADAPT",
    "guessWord": "IDEAL",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "ADEPT",
    "guessWord": "EDIFY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ADMIN",
    "guessWord": "AXIOM",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "ADMIT",
    "guessWord": "EDIFY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ADOBE",
    "guessWord": "IDEAL",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "ADOPT",
    "guessWord": "PHOTO",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "ADORE",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "ADORN",
    "guessWord": "ODDLY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ADULT",
    "guessWord": "UDDER",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AFFIX",
    "guessWord": "ALOOF",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "AFIRE",
    "guessWord": "ACRID",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "AFOOT",
    "guessWord": "AUDIO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "AFOUL",
    "guessWord": "SHELF",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "AFTER",
    "guessWord": "AORTA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "AGAIN",
    "guessWord": "IGLOO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AGAPE",
    "guessWord": "APING",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "AGATE",
    "guessWord": "THETA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "AGENT",
    "guessWord": "TAWNY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "AGILE",
    "guessWord": "GRIEF",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "AGING",
    "guessWord": "IGLOO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AGLOW",
    "guessWord": "CAROL",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "AGONY",
    "guessWord": "IGLOO",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AGORA",
    "guessWord": "RUMBA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "AGREE",
    "guessWord": "ARENA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "AHEAD",
    "guessWord": "ADAPT",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "AIDER",
    "guessWord": "PRIOR",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "AISLE",
    "guessWord": "LASSO",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "ALARM",
    "guessWord": "STEAM",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "ALBUM",
    "guessWord": "FLORA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ALERT",
    "guessWord": "ACTOR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "ALGAE",
    "guessWord": "GRUEL",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "ALIBI",
    "guessWord": "CACTI",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "ALIEN",
    "guessWord": "LOGIN",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ALIGN",
    "guessWord": "OMEGA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ALIKE",
    "guessWord": "LUCKY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ALIVE",
    "guessWord": "EVICT",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "ALLAY",
    "guessWord": "KAYAK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "ALLEY",
    "guessWord": "EMAIL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "ALLOT",
    "guessWord": "ATTIC",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ALLOW",
    "guessWord": "AWOKE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ALLOY",
    "guessWord": "AORTA",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ALOFT",
    "guessWord": "AFTER",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ALONE",
    "guessWord": "ELFIN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "ALONG",
    "guessWord": "KNOLL",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "ALOOF",
    "guessWord": "EXTOL",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ALOUD",
    "guessWord": "DROOL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ALPHA",
    "guessWord": "KOALA",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "ALTAR",
    "guessWord": "ATOLL",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "ALTER",
    "guessWord": "AORTA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "AMASS",
    "guessWord": "ASSET",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "AMAZE",
    "guessWord": "FEMME",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "AMBER",
    "guessWord": "BERET",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "AMBLE",
    "guessWord": "EMPTY",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AMEND",
    "guessWord": "IMPEL",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AMISS",
    "guessWord": "MUCUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "AMITY",
    "guessWord": "SMEAR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AMONG",
    "guessWord": "OMBRE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AMPLE",
    "guessWord": "ANGEL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "AMPLY",
    "guessWord": "SMEAR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AMUSE",
    "guessWord": "MARSH",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ANGEL",
    "guessWord": "BEGAT",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "ANGER",
    "guessWord": "RENEW",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "ANGLE",
    "guessWord": "UNTIL",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ANGRY",
    "guessWord": "GNOME",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "ANGST",
    "guessWord": "ENEMA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ANIME",
    "guessWord": "ENNUI",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "ANKLE",
    "guessWord": "ALERT",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ANNEX",
    "guessWord": "NINJA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ANNOY",
    "guessWord": "CHAOS",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "ANNUL",
    "guessWord": "ADULT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "ANODE",
    "guessWord": "DROWN",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "ANTIC",
    "guessWord": "HAVOC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "ANVIL",
    "guessWord": "TIDAL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "AORTA",
    "guessWord": "RUSTY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "APART",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "APHID",
    "guessWord": "REHAB",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "APING",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "APNEA",
    "guessWord": "RIPEN",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "APPLE",
    "guessWord": "EXULT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "APPLY",
    "guessWord": "YIELD",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "APRON",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "APTLY",
    "guessWord": "TITAN",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "ARBOR",
    "guessWord": "TIBIA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ARDOR",
    "guessWord": "RAYON",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ARENA",
    "guessWord": "SNEER",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "ARGUE",
    "guessWord": "WRUNG",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "ARISE",
    "guessWord": "FIBRE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "ARMOR",
    "guessWord": "ORBIT",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AROMA",
    "guessWord": "RHYME",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "AROSE",
    "guessWord": "AORTA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ARRAY",
    "guessWord": "RERUN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ARROW",
    "guessWord": "AWOKE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ARSON",
    "guessWord": "ESSAY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "ARTSY",
    "guessWord": "ROOST",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "ASCOT",
    "guessWord": "AUDIO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ASHEN",
    "guessWord": "PSALM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ASIDE",
    "guessWord": "STUDY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ASKEW",
    "guessWord": "AWASH",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "ASSAY",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ASSET",
    "guessWord": "PSALM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ATOLL",
    "guessWord": "QUOTA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "ATONE",
    "guessWord": "ANGST",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "ATTIC",
    "guessWord": "SUMAC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "AUDIO",
    "guessWord": "GUIDE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "AUDIT",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "AUGUR",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "AUNTY",
    "guessWord": "TUBAL",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "AVAIL",
    "guessWord": "VISTA",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "AVERT",
    "guessWord": "TREND",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "AVIAN",
    "guessWord": "VODKA",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "AVOID",
    "guessWord": "VOMIT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "AWAIT",
    "guessWord": "TWEED",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "AWAKE",
    "guessWord": "OWNER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AWARD",
    "guessWord": "ALTAR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "AWARE",
    "guessWord": "ARRAY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "AWASH",
    "guessWord": "TWEAK",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "AWFUL",
    "guessWord": "RIFLE",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "AWOKE",
    "guessWord": "SKATE",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "AXIAL",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "AXIOM",
    "guessWord": "ANNEX",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "AXION",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "AZURE",
    "guessWord": "SCUBA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BACON",
    "guessWord": "THROB",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BADGE",
    "guessWord": "GONAD",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "BADLY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BAGEL",
    "guessWord": "LABOR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BAGGY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "BAKER",
    "guessWord": "BLOKE",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "BALER",
    "guessWord": "EAGLE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "BALMY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BANAL",
    "guessWord": "AVIAN",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BANJO",
    "guessWord": "INTRO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BARGE",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BARON",
    "guessWord": "TURBO",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "BASAL",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BASIC",
    "guessWord": "BONUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "BASIL",
    "guessWord": "TIBIA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BASIN",
    "guessWord": "TITAN",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "BASIS",
    "guessWord": "CACTI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BASTE",
    "guessWord": "RESET",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "BATCH",
    "guessWord": "FACET",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BATHE",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BATON",
    "guessWord": "INBOX",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "BATTY",
    "guessWord": "ABBEY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "BAWDY",
    "guessWord": "ABBEY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "BAYOU",
    "guessWord": "ARBOR",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BEACH",
    "guessWord": "BACON",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "BEADY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "BEARD",
    "guessWord": "SHADY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "BEAST",
    "guessWord": "BUTTE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "BEECH",
    "guessWord": "NICHE",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "BEEFY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BEFIT",
    "guessWord": "GAFFE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "BEGAN",
    "guessWord": "INLAY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BEGAT",
    "guessWord": "HABIT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "BEGET",
    "guessWord": "AGENT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "BEGIN",
    "guessWord": "TITAN",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BEGUN",
    "guessWord": "LUMEN",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "BEING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "BELCH",
    "guessWord": "WHEEL",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "BELIE",
    "guessWord": "CLIMB",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "BELLE",
    "guessWord": "SLYLY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BELLY",
    "guessWord": "LAPEL",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "BELOW",
    "guessWord": "NEWLY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "BENCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BERET",
    "guessWord": "GENRE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BERRY",
    "guessWord": "RUGBY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "BERTH",
    "guessWord": "BLEAT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "BESET",
    "guessWord": "GEESE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "BETEL",
    "guessWord": "BLITZ",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "BEVEL",
    "guessWord": "ELDER",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "BEZEL",
    "guessWord": "SEIZE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BIBLE",
    "guessWord": "RABBI",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "BICEP",
    "guessWord": "EQUIP",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "BIDDY",
    "guessWord": "DEBIT",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "BIGOT",
    "guessWord": "ORGAN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "BILGE",
    "guessWord": "GENIE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "BILLY",
    "guessWord": "PLUMB",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "BINGE",
    "guessWord": "TITAN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BINGO",
    "guessWord": "RHINO",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "BIOME",
    "guessWord": "TEMPO",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "BIRCH",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "BIRTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BISON",
    "guessWord": "BANJO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "BITTY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BLACK",
    "guessWord": "KAYAK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BLADE",
    "guessWord": "SCALD",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "BLAME",
    "guessWord": "FILMY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "BLAND",
    "guessWord": "GONAD",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "BLANK",
    "guessWord": "LIKEN",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "BLARE",
    "guessWord": "EMBER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "BLAST",
    "guessWord": "ELBOW",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BLAZE",
    "guessWord": "BOWEL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "BLEAK",
    "guessWord": "OBESE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BLEAT",
    "guessWord": "THETA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BLEED",
    "guessWord": "ALIBI",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "BLEEP",
    "guessWord": "SCALP",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "BLEND",
    "guessWord": "DRONE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "BLESS",
    "guessWord": "ALBUM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BLIMP",
    "guessWord": "POLYP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "BLIND",
    "guessWord": "OLDEN",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BLINK",
    "guessWord": "KRILL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BLISS",
    "guessWord": "MISSY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "BLITZ",
    "guessWord": "TRIBE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BLOAT",
    "guessWord": "STOLE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "BLOCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BLOKE",
    "guessWord": "OMBRE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "BLOND",
    "guessWord": "OLIVE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BLOOD",
    "guessWord": "DROLL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BLOOM",
    "guessWord": "OPIUM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BLOWN",
    "guessWord": "ALBUM",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BLUER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BLUFF",
    "guessWord": "AWFUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "BLUNT",
    "guessWord": "ULCER",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BLURB",
    "guessWord": "BALER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "BLURT",
    "guessWord": "ELBOW",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BLUSH",
    "guessWord": "SQUIB",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BOARD",
    "guessWord": "READY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "BOAST",
    "guessWord": "PATSY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "BOBBY",
    "guessWord": "OBESE",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "BONEY",
    "guessWord": "EPOXY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "BONGO",
    "guessWord": "PHOTO",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "BONUS",
    "guessWord": "RERUN",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "BOOBY",
    "guessWord": "BAYOU",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BOOST",
    "guessWord": "MOTTO",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BOOTH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BOOTY",
    "guessWord": "ABATE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BOOZE",
    "guessWord": "ZONAL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BOOZY",
    "guessWord": "BAYOU",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BORAX",
    "guessWord": "DETOX",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "BORNE",
    "guessWord": "BASIN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "BOSOM",
    "guessWord": "MAMBO",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "BOSSY",
    "guessWord": "SYRUP",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "BOTCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BOUGH",
    "guessWord": "DOING",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BOULE",
    "guessWord": "EBONY",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "BOUND",
    "guessWord": "DOZEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "BOWEL",
    "guessWord": "SOLVE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BOXER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "BRACE",
    "guessWord": "CRUMB",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRAID",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRAIN",
    "guessWord": "TAPIR",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "BRAKE",
    "guessWord": "ABACK",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "BRAND",
    "guessWord": "NOMAD",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "BRASH",
    "guessWord": "HORSE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BRASS",
    "guessWord": "ESSAY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "BRAVE",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRAVO",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRAWL",
    "guessWord": "ORBIT",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BRAWN",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BREAD",
    "guessWord": "OBESE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BREAK",
    "guessWord": "OBESE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BREED",
    "guessWord": "BEADY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "BRIAR",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BRIBE",
    "guessWord": "LIMBO",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "BRICK",
    "guessWord": "ORBIT",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "BRIDE",
    "guessWord": "IMBUE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "BRIEF",
    "guessWord": "BLARE",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "BRINE",
    "guessWord": "FIEND",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "BRING",
    "guessWord": "AGAIN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "BRINK",
    "guessWord": "RABID",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "BRINY",
    "guessWord": "ORBIT",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "BRISK",
    "guessWord": "CRUMB",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "BROAD",
    "guessWord": "CREDO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "BROIL",
    "guessWord": "CURIO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "BROKE",
    "guessWord": "ABOUT",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "BROOD",
    "guessWord": "URBAN",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "BROOK",
    "guessWord": "ABACK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "BROOM",
    "guessWord": "FORUM",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "BROTH",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "BROWN",
    "guessWord": "ORBIT",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BRUNT",
    "guessWord": "THUMB",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "BRUSH",
    "guessWord": "HORSE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BRUTE",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "BUDDY",
    "guessWord": "DYING",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "BUDGE",
    "guessWord": "DOUGH",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BUGGY",
    "guessWord": "DERBY",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "BUGLE",
    "guessWord": "TUBAL",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "BUILD",
    "guessWord": "LIMBO",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "BUILT",
    "guessWord": "LIMBO",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "BULGE",
    "guessWord": "EQUAL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "BULKY",
    "guessWord": "BOULE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "BULLY",
    "guessWord": "PLUMB",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "BUNCH",
    "guessWord": "CUBIC",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BUNNY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BURLY",
    "guessWord": "GLORY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "BURNT",
    "guessWord": "ROUND",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "BURST",
    "guessWord": "TUBAL",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "BUSED",
    "guessWord": "USAGE",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "BUSHY",
    "guessWord": "BYLAW",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "BUTCH",
    "guessWord": "DUCHY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "BUTTE",
    "guessWord": "TRUER",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "BUXOM",
    "guessWord": "STORM",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "BUYER",
    "guessWord": "RURAL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "BYLAW",
    "guessWord": "POLYP",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "CABAL",
    "guessWord": "ILIAC",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "CABBY",
    "guessWord": "RUMBA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CABIN",
    "guessWord": "NINJA",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "CABLE",
    "guessWord": "BELLY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CACAO",
    "guessWord": "OAKEN",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CACHE",
    "guessWord": "ECLAT",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "CACTI",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CADDY",
    "guessWord": "SCALD",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "CADET",
    "guessWord": "CELLO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CAGEY",
    "guessWord": "ADAGE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "CAIRN",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "CAMEL",
    "guessWord": "BALMY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CAMEO",
    "guessWord": "BACON",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "CANAL",
    "guessWord": "CHINA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CANDY",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "CANNY",
    "guessWord": "LYNCH",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "CANOE",
    "guessWord": "EATEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CANON",
    "guessWord": "ACTOR",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CAPER",
    "guessWord": "BICEP",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "CAPUT",
    "guessWord": "TOPIC",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CARAT",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CARGO",
    "guessWord": "PIANO",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CAROL",
    "guessWord": "LYRIC",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CARRY",
    "guessWord": "LYRIC",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "CARVE",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CASTE",
    "guessWord": "USAGE",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "CATCH",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "CATER",
    "guessWord": "ENTRY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "CATTY",
    "guessWord": "TODAY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "CAULK",
    "guessWord": "FLUKE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "CAUSE",
    "guessWord": "USURP",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CAVIL",
    "guessWord": "RABBI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CEASE",
    "guessWord": "PSALM",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CEDAR",
    "guessWord": "RIDGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CELLO",
    "guessWord": "SOLVE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "CHAFE",
    "guessWord": "HEFTY",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "CHAFF",
    "guessWord": "THETA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CHAIN",
    "guessWord": "APHID",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CHAIR",
    "guessWord": "COBRA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CHALK",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CHAMP",
    "guessWord": "MECCA",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "CHANT",
    "guessWord": "ASCOT",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "CHAOS",
    "guessWord": "CRUSH",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CHARD",
    "guessWord": "DEATH",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CHARM",
    "guessWord": "RHYME",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "CHART",
    "guessWord": "TOUCH",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "CHASE",
    "guessWord": "CATCH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "CHASM",
    "guessWord": "BOSOM",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CHEAP",
    "guessWord": "PHONE",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CHEAT",
    "guessWord": "CLOTH",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CHECK",
    "guessWord": "GEEKY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "CHEEK",
    "guessWord": "ETHOS",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "CHEER",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CHESS",
    "guessWord": "HUMUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CHEST",
    "guessWord": "CATTY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "CHICK",
    "guessWord": "CACTI",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "CHIDE",
    "guessWord": "CEDAR",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "CHIEF",
    "guessWord": "FAITH",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CHILD",
    "guessWord": "CAVIL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CHILI",
    "guessWord": "UNCLE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "CHILL",
    "guessWord": "NICHE",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "CHIME",
    "guessWord": "CREAM",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "CHINA",
    "guessWord": "HAUNT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CHIRP",
    "guessWord": "MYRRH",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CHOCK",
    "guessWord": "CACHE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "CHOIR",
    "guessWord": "ACRID",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CHOKE",
    "guessWord": "HELLO",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "CHORD",
    "guessWord": "SYNOD",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CHORE",
    "guessWord": "HYDRO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CHOSE",
    "guessWord": "ACORN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CHUCK",
    "guessWord": "CUBIC",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "CHUMP",
    "guessWord": "SUMAC",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "CHUNK",
    "guessWord": "KHAKI",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "CHURN",
    "guessWord": "MYRRH",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CHUTE",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "CIDER",
    "guessWord": "INCUR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "CIGAR",
    "guessWord": "RECAP",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CINCH",
    "guessWord": "NEIGH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "CIRCA",
    "guessWord": "RUMBA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CIVIC",
    "guessWord": "ALIBI",
    "pattern": "⬛⬛🟨⬛🟨"
  },
  {
    "finalWord": "CIVIL",
    "guessWord": "CACTI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "CLACK",
    "guessWord": "COCOA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "CLAIM",
    "guessWord": "SWAMI",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "CLAMP",
    "guessWord": "SCOOP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CLANG",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CLANK",
    "guessWord": "CORAL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "CLASH",
    "guessWord": "CASTE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "CLASP",
    "guessWord": "USURP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CLASS",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CLEAN",
    "guessWord": "SLICE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "CLEAR",
    "guessWord": "LOCAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CLEAT",
    "guessWord": "LEGAL",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CLEFT",
    "guessWord": "SHELF",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "CLERK",
    "guessWord": "LEARN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CLICK",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CLIFF",
    "guessWord": "LEAFY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "CLIMB",
    "guessWord": "FILMY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CLING",
    "guessWord": "IONIC",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "CLINK",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CLOAK",
    "guessWord": "ULTRA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLOCK",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLONE",
    "guessWord": "CORAL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "CLOSE",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLOTH",
    "guessWord": "LOFTY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CLOUD",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLOUT",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLOVE",
    "guessWord": "ILIAC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CLOWN",
    "guessWord": "PECAN",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CLUCK",
    "guessWord": "STALK",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CLUED",
    "guessWord": "DOWEL",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CLUMP",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CLUNG",
    "guessWord": "ULCER",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "COACH",
    "guessWord": "SHOCK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "COAST",
    "guessWord": "SUMAC",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "COBRA",
    "guessWord": "OMEGA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "COCOA",
    "guessWord": "SCOOP",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "COLON",
    "guessWord": "LABOR",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "COLOR",
    "guessWord": "ROACH",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "COMET",
    "guessWord": "TIMID",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "COMFY",
    "guessWord": "ALOFT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "COMIC",
    "guessWord": "MECCA",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "COMMA",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CONCH",
    "guessWord": "NICHE",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "CONDO",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "CONIC",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "COPSE",
    "guessWord": "CEDAR",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CORAL",
    "guessWord": "RELIC",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "CORER",
    "guessWord": "RADAR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CORNY",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "COUCH",
    "guessWord": "HENCE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "COUGH",
    "guessWord": "MACHO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "COULD",
    "guessWord": "HELLO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "COUNT",
    "guessWord": "SPURN",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "COUPE",
    "guessWord": "POESY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "COURT",
    "guessWord": "HYDRO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "COVEN",
    "guessWord": "NAVAL",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "COVER",
    "guessWord": "REVUE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "COVET",
    "guessWord": "VIDEO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "COVEY",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "COWER",
    "guessWord": "NEWLY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "COYLY",
    "guessWord": "HELLO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CRACK",
    "guessWord": "KAYAK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CRAFT",
    "guessWord": "CAPER",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "CRAMP",
    "guessWord": "SCOOP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CRANE",
    "guessWord": "ARSON",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "CRANK",
    "guessWord": "ADORN",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "CRASH",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CRASS",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CRATE",
    "guessWord": "RATTY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "CRAVE",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "CRAWL",
    "guessWord": "STAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CRAZE",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "CRAZY",
    "guessWord": "FRITZ",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CREAK",
    "guessWord": "DEBAR",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "CREAM",
    "guessWord": "MOLAR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CREDO",
    "guessWord": "INTRO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CREED",
    "guessWord": "ACRID",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "CREEK",
    "guessWord": "TRACT",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "CREEP",
    "guessWord": "SCRAP",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "CREME",
    "guessWord": "CELLO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CREPE",
    "guessWord": "CELLO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "CREPT",
    "guessWord": "EGRET",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "CRESS",
    "guessWord": "SURGE",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "CREST",
    "guessWord": "TIPSY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "CRICK",
    "guessWord": "KIOSK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "CRIED",
    "guessWord": "ROUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "CRIER",
    "guessWord": "WEIRD",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "CRIME",
    "guessWord": "ERECT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "CRIMP",
    "guessWord": "OPIUM",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "CRISP",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CROAK",
    "guessWord": "PRIMO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "CROCK",
    "guessWord": "SCOUR",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "CRONE",
    "guessWord": "SCOUR",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "CRONY",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "CROOK",
    "guessWord": "MORON",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CROSS",
    "guessWord": "ETHOS",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "CROUP",
    "guessWord": "INCUR",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "CROWD",
    "guessWord": "ACTOR",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "CROWN",
    "guessWord": "WOOER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "CRUDE",
    "guessWord": "NERDY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "CRUEL",
    "guessWord": "RACER",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "CRUMB",
    "guessWord": "THROB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "CRUMP",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CRUSH",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "CRUST",
    "guessWord": "REBUS",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "CRYPT",
    "guessWord": "STYLE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "CUBIC",
    "guessWord": "BICEP",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "CUMIN",
    "guessWord": "FUNGI",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "CURIO",
    "guessWord": "RHINO",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "CURLY",
    "guessWord": "INCUR",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "CURRY",
    "guessWord": "PARER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CURSE",
    "guessWord": "DECOR",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "CURVE",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "CURVY",
    "guessWord": "CROUP",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "CUTIE",
    "guessWord": "FRUIT",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "CYBER",
    "guessWord": "BONEY",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "CYCLE",
    "guessWord": "ECLAT",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "CYNIC",
    "guessWord": "CIRCA",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DADDY",
    "guessWord": "DREAD",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "DAILY",
    "guessWord": "SCALD",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DAIRY",
    "guessWord": "YEARN",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DAISY",
    "guessWord": "TIDAL",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "DALLY",
    "guessWord": "SATYR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "DANCE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DANDY",
    "guessWord": "ANGRY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "DATUM",
    "guessWord": "DUSTY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DAUNT",
    "guessWord": "ABOUT",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "DEALT",
    "guessWord": "APTLY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DEATH",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "DEBAR",
    "guessWord": "RABBI",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "DEBIT",
    "guessWord": "DRIVE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DEBUG",
    "guessWord": "BEARD",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "DEBUT",
    "guessWord": "QUEUE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "DECAL",
    "guessWord": "CLOAK",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "DECAY",
    "guessWord": "ECLAT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "DECOR",
    "guessWord": "CANOE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "DECOY",
    "guessWord": "DODGE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "DECRY",
    "guessWord": "MEDIC",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "DEFER",
    "guessWord": "DIRGE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DEIGN",
    "guessWord": "PIGGY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "DEITY",
    "guessWord": "TARDY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "DELAY",
    "guessWord": "ALGAE",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "DELTA",
    "guessWord": "TEPID",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "DELVE",
    "guessWord": "LARVA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "DEMON",
    "guessWord": "NYMPH",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "DEMUR",
    "guessWord": "HUMID",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "DENIM",
    "guessWord": "MOUND",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "DENSE",
    "guessWord": "RESIN",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "DEPOT",
    "guessWord": "COPSE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "DEPTH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "DERBY",
    "guessWord": "REHAB",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "DETER",
    "guessWord": "DIRTY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DETOX",
    "guessWord": "ANNEX",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "DEUCE",
    "guessWord": "EDICT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "DEVIL",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "DIARY",
    "guessWord": "AFIRE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DICEY",
    "guessWord": "TACIT",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "DIGIT",
    "guessWord": "DEBUG",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "DILLY",
    "guessWord": "LADLE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DIMLY",
    "guessWord": "HUMID",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "DINER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DINGO",
    "guessWord": "ENNUI",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "DINGY",
    "guessWord": "DRINK",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "DIODE",
    "guessWord": "DREAD",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DIRGE",
    "guessWord": "FUNGI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DIRTY",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DISCO",
    "guessWord": "POSIT",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "DITCH",
    "guessWord": "CLOTH",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "DITTO",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DITTY",
    "guessWord": "OCTET",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "DIVER",
    "guessWord": "REVUE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "DIZZY",
    "guessWord": "INDEX",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "DODGE",
    "guessWord": "ELDER",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "DODGY",
    "guessWord": "UDDER",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "DOGMA",
    "guessWord": "GNOME",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "DOING",
    "guessWord": "DROWN",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DOLLY",
    "guessWord": "DYING",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "DONOR",
    "guessWord": "NYLON",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "DONUT",
    "guessWord": "TANGO",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "DOPEY",
    "guessWord": "VIDEO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DOUBT",
    "guessWord": "DUSTY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DOUGH",
    "guessWord": "SHRUG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "DOWDY",
    "guessWord": "SYNOD",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "DOWEL",
    "guessWord": "BAWDY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "DOWNY",
    "guessWord": "OWNER",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "DOWRY",
    "guessWord": "WEIRD",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "DOZEN",
    "guessWord": "VIDEO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DRAFT",
    "guessWord": "DATUM",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "DRAIN",
    "guessWord": "DAUNT",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "DRAKE",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DRAMA",
    "guessWord": "ARRAY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "DRANK",
    "guessWord": "ORDER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "DRAPE",
    "guessWord": "HORDE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "DRAWL",
    "guessWord": "DELTA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DRAWN",
    "guessWord": "SNOWY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "DREAD",
    "guessWord": "AGENT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "DREAM",
    "guessWord": "AGENT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "DRESS",
    "guessWord": "ETHOS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DRIED",
    "guessWord": "ROUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DRIER",
    "guessWord": "CREDO",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "DRIFT",
    "guessWord": "TAFFY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "DRILL",
    "guessWord": "TILDE",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "DRINK",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "DRIVE",
    "guessWord": "HEAVY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "DROIT",
    "guessWord": "DETER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "DROLL",
    "guessWord": "CREDO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "DRONE",
    "guessWord": "ARDOR",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "DROOL",
    "guessWord": "LABOR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "DROOP",
    "guessWord": "RECAP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DROSS",
    "guessWord": "REBUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "DROVE",
    "guessWord": "SALVO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "DROWN",
    "guessWord": "WOODY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "DRUID",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "DRUNK",
    "guessWord": "KRILL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "DRYER",
    "guessWord": "RADAR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "DRYLY",
    "guessWord": "WORLD",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "DUCHY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "DULLY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "DUMMY",
    "guessWord": "MAGMA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "DUMPY",
    "guessWord": "MORPH",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "DUNCE",
    "guessWord": "RUDER",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "DUSKY",
    "guessWord": "SYRUP",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "DUSTY",
    "guessWord": "DYING",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "DUTCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "DUVET",
    "guessWord": "DIRTY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "DWARF",
    "guessWord": "HYDRO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "DWELL",
    "guessWord": "OWNER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "DWELT",
    "guessWord": "TWANG",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "DYING",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "EAGER",
    "guessWord": "ERUPT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "EAGLE",
    "guessWord": "ELECT",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "EARLY",
    "guessWord": "EXERT",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "EARTH",
    "guessWord": "ENTRY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "EASEL",
    "guessWord": "SADLY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "EATEN",
    "guessWord": "ENEMY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "EATER",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "EBONY",
    "guessWord": "ELBOW",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "ECLAT",
    "guessWord": "ACTOR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "EDICT",
    "guessWord": "IDYLL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "EDIFY",
    "guessWord": "EIGHT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "EERIE",
    "guessWord": "ENNUI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "EGRET",
    "guessWord": "AGORA",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "EIGHT",
    "guessWord": "ETUDE",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "EJECT",
    "guessWord": "SCENE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "EKING",
    "guessWord": "ELFIN",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "ELATE",
    "guessWord": "SHALT",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "ELBOW",
    "guessWord": "ORBIT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ELDER",
    "guessWord": "RIFLE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "ELECT",
    "guessWord": "EXTOL",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "ELEGY",
    "guessWord": "EGRET",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "ELFIN",
    "guessWord": "LOFTY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ELIDE",
    "guessWord": "EIGHT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ELITE",
    "guessWord": "HEIST",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "ELOPE",
    "guessWord": "HIPPO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ELUDE",
    "guessWord": "ULTRA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "EMAIL",
    "guessWord": "MOVIE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "EMBED",
    "guessWord": "BEARD",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "EMBER",
    "guessWord": "RUPEE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "EMCEE",
    "guessWord": "ECLAT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "EMPTY",
    "guessWord": "SMELT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "ENACT",
    "guessWord": "ELFIN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ENDOW",
    "guessWord": "RENEW",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "ENEMA",
    "guessWord": "EMAIL",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ENEMY",
    "guessWord": "YIELD",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ENJOY",
    "guessWord": "EJECT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ENNUI",
    "guessWord": "EATEN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ENSUE",
    "guessWord": "DONUT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "ENTER",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "ENTRY",
    "guessWord": "EERIE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "ENVOY",
    "guessWord": "NAVAL",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "EPOCH",
    "guessWord": "OPIUM",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "EPOXY",
    "guessWord": "PIXIE",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "EQUAL",
    "guessWord": "PEARL",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "EQUIP",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ERASE",
    "guessWord": "ETHOS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "ERECT",
    "guessWord": "ETHOS",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ERODE",
    "guessWord": "ADORN",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "ERROR",
    "guessWord": "CANOE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ERUPT",
    "guessWord": "REUSE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "ESSAY",
    "guessWord": "ALGAE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ESTER",
    "guessWord": "EERIE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ETHER",
    "guessWord": "EERIE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ETHIC",
    "guessWord": "UNTIE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "ETHOS",
    "guessWord": "DETOX",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "ETUDE",
    "guessWord": "EDIFY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "EVADE",
    "guessWord": "EXTRA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "EVENT",
    "guessWord": "AVIAN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "EVERY",
    "guessWord": "EARTH",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "EVICT",
    "guessWord": "OVATE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "EVOKE",
    "guessWord": "VERSO",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "EXACT",
    "guessWord": "ENEMA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "EXALT",
    "guessWord": "OXIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "EXCEL",
    "guessWord": "LEACH",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "EXERT",
    "guessWord": "OXIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "EXILE",
    "guessWord": "GENIE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "EXIST",
    "guessWord": "ENNUI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "EXPEL",
    "guessWord": "LAPSE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "EXTOL",
    "guessWord": "TITLE",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "EXTRA",
    "guessWord": "OXIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "EXULT",
    "guessWord": "TRUER",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "EYING",
    "guessWord": "SHRUG",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "FABLE",
    "guessWord": "EXALT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "FACET",
    "guessWord": "AFOOT",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "FAINT",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FAIRY",
    "guessWord": "INFER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "FAITH",
    "guessWord": "YACHT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FALSE",
    "guessWord": "DELTA",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "FANCY",
    "guessWord": "SYNOD",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FANNY",
    "guessWord": "CHINA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FARCE",
    "guessWord": "FLAIR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FATAL",
    "guessWord": "OFTEN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FATTY",
    "guessWord": "STATE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "FAULT",
    "guessWord": "FRAIL",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FAUNA",
    "guessWord": "LUNAR",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "FAVOR",
    "guessWord": "FELLA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FEAST",
    "guessWord": "PSALM",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FECAL",
    "guessWord": "FRAME",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FEIGN",
    "guessWord": "UNITY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FELLA",
    "guessWord": "AGLOW",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "FELON",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "FEMME",
    "guessWord": "MODEM",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "FEMUR",
    "guessWord": "FRIED",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FENCE",
    "guessWord": "OFTEN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "FERAL",
    "guessWord": "ANGEL",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "FERRY",
    "guessWord": "FRIED",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FETAL",
    "guessWord": "TERRA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "FETCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "FETID",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FETUS",
    "guessWord": "ETHOS",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "FEVER",
    "guessWord": "FIERY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "FEWER",
    "guessWord": "ROWDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "FIBER",
    "guessWord": "DIRGE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "FIBRE",
    "guessWord": "LABOR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "FICUS",
    "guessWord": "BASIS",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "FIELD",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FIEND",
    "guessWord": "BEING",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "FIERY",
    "guessWord": "IRATE",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FIFTH",
    "guessWord": "VITAL",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FIFTY",
    "guessWord": "VINYL",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "FIGHT",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FILER",
    "guessWord": "THEIR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "FILET",
    "guessWord": "ELIDE",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "FILLY",
    "guessWord": "LEAFY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "FILMY",
    "guessWord": "MOTIF",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "FILTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FINAL",
    "guessWord": "VIOLA",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FINCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "FINER",
    "guessWord": "NIECE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "FIRST",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FISHY",
    "guessWord": "YACHT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FIXER",
    "guessWord": "BUXOM",
    "pattern": "⬛⬛🟩⬛⬛"
  },
  {
    "finalWord": "FIZZY",
    "guessWord": "FRITZ",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FJORD",
    "guessWord": "FELON",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "FLACK",
    "guessWord": "ALOOF",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "FLAIL",
    "guessWord": "SHELF",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "FLAIR",
    "guessWord": "FATAL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "FLAKE",
    "guessWord": "LUCKY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FLAKY",
    "guessWord": "PARKA",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "FLAME",
    "guessWord": "RIFLE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "FLANK",
    "guessWord": "LANCE",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "FLARE",
    "guessWord": "OPERA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "FLASH",
    "guessWord": "FELLA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "FLASK",
    "guessWord": "AFOUL",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FLECK",
    "guessWord": "KNELT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "FLEET",
    "guessWord": "SHELF",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "FLESH",
    "guessWord": "LEACH",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "FLICK",
    "guessWord": "ALOOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FLIER",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "FLING",
    "guessWord": "GIANT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "FLINT",
    "guessWord": "PILOT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "FLIRT",
    "guessWord": "TIARA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "FLOAT",
    "guessWord": "ULTRA",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "FLOCK",
    "guessWord": "GECKO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "FLOOD",
    "guessWord": "ODDLY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "FLOOR",
    "guessWord": "WORLD",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "FLORA",
    "guessWord": "ATOLL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "FLOSS",
    "guessWord": "AFOOT",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FLOUR",
    "guessWord": "ANNUL",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FLOUT",
    "guessWord": "ANNUL",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FLOWN",
    "guessWord": "LINGO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "FLUFF",
    "guessWord": "AWFUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "FLUID",
    "guessWord": "ALOOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FLUKE",
    "guessWord": "SKUNK",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FLUME",
    "guessWord": "ALBUM",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FLUNG",
    "guessWord": "SNUCK",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "FLUNK",
    "guessWord": "AWFUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "FLUSH",
    "guessWord": "FULLY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "FLUTE",
    "guessWord": "ALTER",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "FLYER",
    "guessWord": "SATYR",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "FOAMY",
    "guessWord": "ANIME",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FOCAL",
    "guessWord": "SUMAC",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FOCUS",
    "guessWord": "CHAOS",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "FOGGY",
    "guessWord": "POLYP",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "FOIST",
    "guessWord": "TORUS",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "FOLIO",
    "guessWord": "TABOO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "FOLLY",
    "guessWord": "LAYER",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "FORAY",
    "guessWord": "COBRA",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FORCE",
    "guessWord": "FLAIR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FORGE",
    "guessWord": "HERON",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "FORGO",
    "guessWord": "PHOTO",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "FORTE",
    "guessWord": "ROTOR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "FORTH",
    "guessWord": "MOTEL",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FORTY",
    "guessWord": "OVATE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "FORUM",
    "guessWord": "FAVOR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FOUND",
    "guessWord": "FEIGN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FOYER",
    "guessWord": "HERON",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "FRAIL",
    "guessWord": "PROOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FRAME",
    "guessWord": "RUMBA",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "FRANK",
    "guessWord": "KNAVE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "FRAUD",
    "guessWord": "FLORA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "FREAK",
    "guessWord": "ABACK",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FREED",
    "guessWord": "TEPID",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "FREER",
    "guessWord": "ERUPT",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "FRESH",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FRIAR",
    "guessWord": "PROOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FRIED",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "FRILL",
    "guessWord": "PROOF",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "FRISK",
    "guessWord": "RINSE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "FRITZ",
    "guessWord": "TOPAZ",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "FROCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FROND",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "FRONT",
    "guessWord": "ARTSY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FROST",
    "guessWord": "VERSO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "FROTH",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "FROWN",
    "guessWord": "WOOER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "FROZE",
    "guessWord": "FLAIR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "FRUIT",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "FUDGE",
    "guessWord": "BUSED",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "FUGUE",
    "guessWord": "FEIGN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "FULLY",
    "guessWord": "BLUFF",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "FUNGI",
    "guessWord": "GIVEN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "FUNKY",
    "guessWord": "BUYER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "FUNNY",
    "guessWord": "UNITY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "FUROR",
    "guessWord": "SCOUR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "FURRY",
    "guessWord": "RARER",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "FUSSY",
    "guessWord": "ISSUE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "FUZZY",
    "guessWord": "UNIFY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "GAFFE",
    "guessWord": "BEEFY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "GAILY",
    "guessWord": "FELLA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GAMER",
    "guessWord": "AUGUR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "GAMMA",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "GAMUT",
    "guessWord": "IMBUE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "GASSY",
    "guessWord": "ISSUE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GAUDY",
    "guessWord": "DYING",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "GAUGE",
    "guessWord": "DEBUG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "GAUNT",
    "guessWord": "STAIN",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "GAUZE",
    "guessWord": "FUZZY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "GAVEL",
    "guessWord": "SALVO",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GAWKY",
    "guessWord": "ALIKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GAYER",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "GAYLY",
    "guessWord": "CYCLE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "GAZER",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "GECKO",
    "guessWord": "IGLOO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "GEEKY",
    "guessWord": "SEGUE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "GEESE",
    "guessWord": "ESSAY",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "GENIE",
    "guessWord": "ELFIN",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "GENRE",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GHOST",
    "guessWord": "GRATE",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "GHOUL",
    "guessWord": "LIGHT",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "GIANT",
    "guessWord": "WAIST",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "GIDDY",
    "guessWord": "INDEX",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "GIPSY",
    "guessWord": "STRIP",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "GIRLY",
    "guessWord": "REALM",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GIRTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GIVEN",
    "guessWord": "PIANO",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "GIVER",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "GLADE",
    "guessWord": "SCALD",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "GLAND",
    "guessWord": "GAVEL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "GLARE",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "GLASS",
    "guessWord": "GAVEL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "GLAZE",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GLEAM",
    "guessWord": "ELATE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "GLEAN",
    "guessWord": "KNELT",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "GLIDE",
    "guessWord": "GREED",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "GLINT",
    "guessWord": "SPLIT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "GLOAT",
    "guessWord": "GAVEL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "GLOBE",
    "guessWord": "RUGBY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "GLOOM",
    "guessWord": "LIMBO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "GLORY",
    "guessWord": "ALGAE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GLOSS",
    "guessWord": "GUSTO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "GLOVE",
    "guessWord": "LARVA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GLYPH",
    "guessWord": "ALIGN",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "GNASH",
    "guessWord": "LAUGH",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "GNOME",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GODLY",
    "guessWord": "HYDRO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GOING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "GOLEM",
    "guessWord": "LIMBO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "GOLLY",
    "guessWord": "LILAC",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "GONAD",
    "guessWord": "BANJO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GONER",
    "guessWord": "RENAL",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "GOODY",
    "guessWord": "OVOID",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "GOOEY",
    "guessWord": "YOUNG",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "GOOFY",
    "guessWord": "IGLOO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "GOOSE",
    "guessWord": "GEEKY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "GORGE",
    "guessWord": "VERSO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GOUGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GOURD",
    "guessWord": "SYNOD",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "GRACE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "GRADE",
    "guessWord": "MANGE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "GRAFT",
    "guessWord": "STAIR",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "GRAIL",
    "guessWord": "GONER",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "GRAIN",
    "guessWord": "INANE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "GRAND",
    "guessWord": "CAIRN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "GRANT",
    "guessWord": "GLEAN",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "GRAPE",
    "guessWord": "ADOPT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "GRAPH",
    "guessWord": "LAUGH",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "GRASP",
    "guessWord": "ORGAN",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GRASS",
    "guessWord": "REBUS",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "GRATE",
    "guessWord": "DELTA",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "GRAVE",
    "guessWord": "GONER",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "GRAVY",
    "guessWord": "GONER",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "GRAZE",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GREAT",
    "guessWord": "WRATH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GREED",
    "guessWord": "GECKO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "GREEN",
    "guessWord": "GNOME",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "GREET",
    "guessWord": "GECKO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "GRIEF",
    "guessWord": "SHELF",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "GRILL",
    "guessWord": "GIVER",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "GRIME",
    "guessWord": "EAGER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "GRIMY",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "GRIND",
    "guessWord": "ORGAN",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "GRIPE",
    "guessWord": "EAGER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "GROAN",
    "guessWord": "ANODE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "GROIN",
    "guessWord": "PRIMO",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "GROOM",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GROPE",
    "guessWord": "HIPPO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "GROSS",
    "guessWord": "AGONY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "GROUP",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "GROUT",
    "guessWord": "BRUTE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GROVE",
    "guessWord": "GUARD",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "GROWL",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GROWN",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "GRUEL",
    "guessWord": "GIRLY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "GRUFF",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GRUNT",
    "guessWord": "ARGUE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "GUARD",
    "guessWord": "LUNAR",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "GUAVA",
    "guessWord": "MAUVE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "GUESS",
    "guessWord": "BASIS",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "GUEST",
    "guessWord": "EGRET",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "GUIDE",
    "guessWord": "GRUEL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "GUILD",
    "guessWord": "GAUDY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "GUILE",
    "guessWord": "GROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "GUILT",
    "guessWord": "TRAIL",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "GUISE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "GULCH",
    "guessWord": "SHRUG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "GULLY",
    "guessWord": "MOGUL",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "GUMBO",
    "guessWord": "DOUBT",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "GUMMY",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨🟨⬛⬛"
  },
  {
    "finalWord": "GUPPY",
    "guessWord": "SYRUP",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "GUSTO",
    "guessWord": "SUING",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "GUSTY",
    "guessWord": "SURGE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "GYPSY",
    "guessWord": "SPASM",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "HABIT",
    "guessWord": "HYENA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "HAIRY",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "HALVE",
    "guessWord": "HOARD",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "HANDY",
    "guessWord": "DYING",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "HAPPY",
    "guessWord": "HUMAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "HARDY",
    "guessWord": "HYMEN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "HAREM",
    "guessWord": "CHASM",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "HARPY",
    "guessWord": "LEAPT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HARRY",
    "guessWord": "READY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "HARSH",
    "guessWord": "SHEER",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "HASTE",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HASTY",
    "guessWord": "HUMUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "HATCH",
    "guessWord": "STASH",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "HATER",
    "guessWord": "ABHOR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "HAUNT",
    "guessWord": "HEFTY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "HAUTE",
    "guessWord": "HUMAN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "HAVEN",
    "guessWord": "HINGE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "HAVOC",
    "guessWord": "RIVAL",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "HAZEL",
    "guessWord": "PIZZA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "HEADY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HEARD",
    "guessWord": "EVADE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "HEART",
    "guessWord": "HALVE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "HEATH",
    "guessWord": "THANK",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "HEAVE",
    "guessWord": "AGREE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "HEAVY",
    "guessWord": "SIEVE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HEDGE",
    "guessWord": "THIGH",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "HEFTY",
    "guessWord": "ELFIN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "HEIST",
    "guessWord": "HITCH",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "HELIX",
    "guessWord": "IDEAL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "HELLO",
    "guessWord": "SOLVE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "HENCE",
    "guessWord": "ENACT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "HERON",
    "guessWord": "SYNOD",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HILLY",
    "guessWord": "VINYL",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "HINGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "HIPPO",
    "guessWord": "MORPH",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "HIPPY",
    "guessWord": "CHIRP",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "HITCH",
    "guessWord": "HAIRY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "HOARD",
    "guessWord": "HUMAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "HOBBY",
    "guessWord": "BRIBE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "HOIST",
    "guessWord": "VISIT",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "HOLLY",
    "guessWord": "BYLAW",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "HOMER",
    "guessWord": "ABHOR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "HONEY",
    "guessWord": "YOUNG",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "HONOR",
    "guessWord": "ROUND",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "HORDE",
    "guessWord": "HYENA",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "HORNY",
    "guessWord": "PIANO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "HORSE",
    "guessWord": "ADORE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "HOTEL",
    "guessWord": "HALVE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "HOTLY",
    "guessWord": "HYDRO",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "HOUND",
    "guessWord": "OVOID",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "HOUSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "HOVEL",
    "guessWord": "EXTOL",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "HOVER",
    "guessWord": "VIDEO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "HOWDY",
    "guessWord": "HEDGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "HUMAN",
    "guessWord": "HORNY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "HUMID",
    "guessWord": "DATUM",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "HUMOR",
    "guessWord": "GAMUT",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "HUMPH",
    "guessWord": "SHAPE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "HUMUS",
    "guessWord": "ENSUE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HUNCH",
    "guessWord": "NIECE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "HUNKY",
    "guessWord": "BUYER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "HURRY",
    "guessWord": "RARER",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "HUSKY",
    "guessWord": "FLUKE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "HUSSY",
    "guessWord": "CHESS",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "HUTCH",
    "guessWord": "THICK",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "HYDRO",
    "guessWord": "RAYON",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "HYENA",
    "guessWord": "NYMPH",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "HYMEN",
    "guessWord": "EYING",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "HYPER",
    "guessWord": "PINEY",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "ICILY",
    "guessWord": "ECLAT",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ICING",
    "guessWord": "IMAGE",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "IDEAL",
    "guessWord": "IGLOO",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "IDIOM",
    "guessWord": "INTRO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "IDIOT",
    "guessWord": "DETOX",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "IDLER",
    "guessWord": "ADEPT",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "IDYLL",
    "guessWord": "EDIFY",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "IGLOO",
    "guessWord": "OUTGO",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "ILIAC",
    "guessWord": "HAVOC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "IMAGE",
    "guessWord": "THIGH",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "IMBUE",
    "guessWord": "OPIUM",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "IMPEL",
    "guessWord": "LUPUS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "IMPLY",
    "guessWord": "ILIAC",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "INANE",
    "guessWord": "IDEAL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "INBOX",
    "guessWord": "RELAX",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "INCUR",
    "guessWord": "CRIER",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "INDEX",
    "guessWord": "RELAX",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "INEPT",
    "guessWord": "ITCHY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "INERT",
    "guessWord": "ITCHY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "INFER",
    "guessWord": "FRIAR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "INGOT",
    "guessWord": "ENNUI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "INLAY",
    "guessWord": "SNARL",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "INLET",
    "guessWord": "IONIC",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "INNER",
    "guessWord": "RANGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "INPUT",
    "guessWord": "IONIC",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "INTER",
    "guessWord": "ITCHY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "INTRO",
    "guessWord": "TIARA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "IONIC",
    "guessWord": "CHOIR",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "IRATE",
    "guessWord": "INEPT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "IRONY",
    "guessWord": "IONIC",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "ISLET",
    "guessWord": "USING",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "ISSUE",
    "guessWord": "SUING",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "ITCHY",
    "guessWord": "LUCID",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "IVORY",
    "guessWord": "CHOIR",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "JAUNT",
    "guessWord": "DONUT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "JAZZY",
    "guessWord": "WALTZ",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "JELLY",
    "guessWord": "JOKER",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "JERKY",
    "guessWord": "DRYER",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "JETTY",
    "guessWord": "TOTEM",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "JEWEL",
    "guessWord": "DWELT",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "JIFFY",
    "guessWord": "FUNGI",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "JOINT",
    "guessWord": "JUROR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "JOIST",
    "guessWord": "JUMBO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "JOKER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "JOLLY",
    "guessWord": "JUROR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "JOUST",
    "guessWord": "JETTY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "JUDGE",
    "guessWord": "JOKER",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "JUICE",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "JUICY",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "JUMBO",
    "guessWord": "UNMET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "JUMPY",
    "guessWord": "UNMET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "JUNTA",
    "guessWord": "AUDIT",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "JUNTO",
    "guessWord": "JOIST",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "JUROR",
    "guessWord": "JOUST",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "KAPPA",
    "guessWord": "OPERA",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "KARMA",
    "guessWord": "OMEGA",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "KAYAK",
    "guessWord": "ABACK",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "KEBAB",
    "guessWord": "KNIFE",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "KHAKI",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "KINKY",
    "guessWord": "KNIFE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "KIOSK",
    "guessWord": "OBESE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "KITTY",
    "guessWord": "TRITE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "KNACK",
    "guessWord": "ENEMA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "KNAVE",
    "guessWord": "KINKY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "KNEAD",
    "guessWord": "SNIDE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "KNEED",
    "guessWord": "NOMAD",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "KNEEL",
    "guessWord": "KEBAB",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "KNELT",
    "guessWord": "TENET",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "KNIFE",
    "guessWord": "GENIE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "KNOCK",
    "guessWord": "ROCKY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "KNOLL",
    "guessWord": "KINKY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "KNOWN",
    "guessWord": "ENDOW",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "KOALA",
    "guessWord": "KNEEL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "KRILL",
    "guessWord": "KHAKI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LABEL",
    "guessWord": "LILAC",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "LABOR",
    "guessWord": "LIMBO",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "LADEN",
    "guessWord": "NUDGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "LADLE",
    "guessWord": "ELDER",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "LAGER",
    "guessWord": "ALTAR",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "LANCE",
    "guessWord": "MECCA",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "LANKY",
    "guessWord": "VODKA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "LAPEL",
    "guessWord": "ABLED",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "LAPSE",
    "guessWord": "LOCUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LARGE",
    "guessWord": "ROUGH",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LARVA",
    "guessWord": "ABOVE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LASSO",
    "guessWord": "LUPUS",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LATCH",
    "guessWord": "OCTET",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "LATER",
    "guessWord": "METRO",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "LATHE",
    "guessWord": "TIGHT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LATTE",
    "guessWord": "UNTIL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "LAUGH",
    "guessWord": "BULGE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "LAYER",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LEACH",
    "guessWord": "CEDAR",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "LEAFY",
    "guessWord": "LIEGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEAKY",
    "guessWord": "EVOKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LEANT",
    "guessWord": "TWINE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "LEAPT",
    "guessWord": "LITHE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "LEARN",
    "guessWord": "OPERA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "LEASE",
    "guessWord": "LUSTY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEASH",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "LEAST",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "LEAVE",
    "guessWord": "LIVID",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LEDGE",
    "guessWord": "ALIGN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LEECH",
    "guessWord": "MELEE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "LEERY",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LEFTY",
    "guessWord": "REALM",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "LEGAL",
    "guessWord": "EAGER",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "LEGGY",
    "guessWord": "ALIGN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LEMON",
    "guessWord": "NYMPH",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LEMUR",
    "guessWord": "LUNGE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "LEPER",
    "guessWord": "GENRE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "LEVEL",
    "guessWord": "BELIE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "LEVER",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LIBEL",
    "guessWord": "TILDE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "LIEGE",
    "guessWord": "STEAL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "LIGHT",
    "guessWord": "BATHE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "LIKEN",
    "guessWord": "KNOWN",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LILAC",
    "guessWord": "BASIL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "LIMBO",
    "guessWord": "CAMEL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "LIMIT",
    "guessWord": "CHILI",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "LINEN",
    "guessWord": "NEWLY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "LINER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LINGO",
    "guessWord": "NEIGH",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "LIPID",
    "guessWord": "DIMLY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "LITHE",
    "guessWord": "LEFTY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "LIVER",
    "guessWord": "SPIEL",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "LIVID",
    "guessWord": "TILDE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "LLAMA",
    "guessWord": "LADLE",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "LOAMY",
    "guessWord": "LINGO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "LOATH",
    "guessWord": "THIGH",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LOBBY",
    "guessWord": "LAYER",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LOCAL",
    "guessWord": "LEACH",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "LOCUS",
    "guessWord": "LAUGH",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "LODGE",
    "guessWord": "GIDDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LOFTY",
    "guessWord": "RIFLE",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "LOGIC",
    "guessWord": "INGOT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "LOGIN",
    "guessWord": "YOUNG",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "LOOPY",
    "guessWord": "PILOT",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "LOOSE",
    "guessWord": "VERSO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "LORRY",
    "guessWord": "LEMON",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "LOSER",
    "guessWord": "VALOR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "LOUSE",
    "guessWord": "LUPUS",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "LOUSY",
    "guessWord": "USUAL",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "LOVER",
    "guessWord": "OLDEN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "LOWER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "LOWLY",
    "guessWord": "ROYAL",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "LOYAL",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LUCID",
    "guessWord": "DECAL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "LUCKY",
    "guessWord": "CHOKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LUMEN",
    "guessWord": "MOURN",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "LUMPY",
    "guessWord": "HYMEN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "LUNAR",
    "guessWord": "INLAY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "LUNCH",
    "guessWord": "GHOUL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "LUNGE",
    "guessWord": "WEIGH",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "LUPUS",
    "guessWord": "ALPHA",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "LURCH",
    "guessWord": "RULER",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "LURID",
    "guessWord": "DERBY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "LUSTY",
    "guessWord": "TUBAL",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "LYING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "LYMPH",
    "guessWord": "HIPPO",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "LYNCH",
    "guessWord": "HYMEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "LYRIC",
    "guessWord": "HYDRO",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "MACAW",
    "guessWord": "COCOA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MACHO",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MACRO",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "MADAM",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MADLY",
    "guessWord": "SLIMY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "MAFIA",
    "guessWord": "SWAMI",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "MAGIC",
    "guessWord": "CACTI",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "MAGMA",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "MAIZE",
    "guessWord": "HAREM",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "MAJOR",
    "guessWord": "BANJO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "MAKER",
    "guessWord": "ARMOR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "MAMBO",
    "guessWord": "ARMOR",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "MAMMA",
    "guessWord": "ANIME",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MAMMY",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "MANGA",
    "guessWord": "ALIGN",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "MANGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MANGO",
    "guessWord": "GONER",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "MANGY",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MANIA",
    "guessWord": "PAGAN",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "MANIC",
    "guessWord": "NINJA",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "MANLY",
    "guessWord": "MYRRH",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "MANOR",
    "guessWord": "RENAL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "MAPLE",
    "guessWord": "PUPIL",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MARCH",
    "guessWord": "MOLAR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "MARRY",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "MARSH",
    "guessWord": "ROAST",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "MASON",
    "guessWord": "MEANT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MASSE",
    "guessWord": "DATUM",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "MATCH",
    "guessWord": "OCTET",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "MATEY",
    "guessWord": "HYMEN",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MAUVE",
    "guessWord": "EQUAL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "MAXIM",
    "guessWord": "AFFIX",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "MAYBE",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MAYOR",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MEALY",
    "guessWord": "EAGLE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "MEANT",
    "guessWord": "ANGST",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "MEATY",
    "guessWord": "EMAIL",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "MECCA",
    "guessWord": "CELLO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "MEDAL",
    "guessWord": "LODGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "MEDIA",
    "guessWord": "EXTRA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "MEDIC",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "MELEE",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MELON",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MERCY",
    "guessWord": "WRECK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MERGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "MERIT",
    "guessWord": "STEIN",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MERRY",
    "guessWord": "EMBER",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "METAL",
    "guessWord": "LEFTY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "METER",
    "guessWord": "ARTSY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "METRO",
    "guessWord": "BATON",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "MICRO",
    "guessWord": "CIRCA",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "MIDGE",
    "guessWord": "LEGGY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "MIDST",
    "guessWord": "AMISS",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "MIGHT",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MILKY",
    "guessWord": "AMPLY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "MIMIC",
    "guessWord": "SWAMI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "MINCE",
    "guessWord": "FUNGI",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MINER",
    "guessWord": "NIECE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "MINIM",
    "guessWord": "IRONY",
    "pattern": "🟨⬛⬛🟨⬛"
  },
  {
    "finalWord": "MINOR",
    "guessWord": "DENIM",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "MINTY",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MINUS",
    "guessWord": "OPIUM",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "MIRTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MISER",
    "guessWord": "HAREM",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "MISSY",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "MOCHA",
    "guessWord": "BACON",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "MODAL",
    "guessWord": "RADIO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "MODEL",
    "guessWord": "OXIDE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "MODEM",
    "guessWord": "ODDLY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MOGUL",
    "guessWord": "IMBUE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "MOIST",
    "guessWord": "SWAMI",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "MOLAR",
    "guessWord": "SALVO",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "MOLDY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MONEY",
    "guessWord": "DECOY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "MONTH",
    "guessWord": "VENOM",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "MOODY",
    "guessWord": "CREDO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "MOOSE",
    "guessWord": "CAMEO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "MORAL",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "MORON",
    "guessWord": "OWNER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "MORPH",
    "guessWord": "RUMOR",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "MOSSY",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "MOTEL",
    "guessWord": "DETOX",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "MOTIF",
    "guessWord": "MAIZE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "MOTOR",
    "guessWord": "MIRTH",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MOTTO",
    "guessWord": "DATUM",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MOULT",
    "guessWord": "MELON",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MOUND",
    "guessWord": "OVOID",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "MOUNT",
    "guessWord": "TURBO",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "MOURN",
    "guessWord": "REUSE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MOUSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MOUTH",
    "guessWord": "WROTE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "MOVER",
    "guessWord": "REVUE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "MOVIE",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "MOWER",
    "guessWord": "MASON",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "MUCKY",
    "guessWord": "COMFY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "MUCUS",
    "guessWord": "AMUSE",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "MUDDY",
    "guessWord": "UNDID",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "MULCH",
    "guessWord": "ECLAT",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "MUMMY",
    "guessWord": "UNMET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "MUNCH",
    "guessWord": "NIECE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "MURAL",
    "guessWord": "URBAN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "MURKY",
    "guessWord": "FLUKE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "MUSHY",
    "guessWord": "BOSOM",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "MUSIC",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "MUSKY",
    "guessWord": "PSALM",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "MUSTY",
    "guessWord": "MOUSE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "MYRRH",
    "guessWord": "HYENA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "NADIR",
    "guessWord": "NEEDY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "NAIVE",
    "guessWord": "CURVY",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "NANNY",
    "guessWord": "SATYR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "NASAL",
    "guessWord": "NYLON",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "NASTY",
    "guessWord": "UNITE",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "NATAL",
    "guessWord": "NYLON",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "NAVAL",
    "guessWord": "NINJA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "NAVEL",
    "guessWord": "LIVID",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "NEEDY",
    "guessWord": "OUTDO",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "NEIGH",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "NERDY",
    "guessWord": "CREDO",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "NERVE",
    "guessWord": "ENTRY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "NEVER",
    "guessWord": "ANVIL",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "NEWER",
    "guessWord": "ROWDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "NEWLY",
    "guessWord": "UNWED",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "NICER",
    "guessWord": "ALIEN",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "NICHE",
    "guessWord": "NOTCH",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "NIECE",
    "guessWord": "ENNUI",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "NIGHT",
    "guessWord": "NYMPH",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "NINJA",
    "guessWord": "VOILA",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "NINNY",
    "guessWord": "ENNUI",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "NINTH",
    "guessWord": "NADIR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "NOBLE",
    "guessWord": "LOGIN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "NOBLY",
    "guessWord": "NYMPH",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "NOISE",
    "guessWord": "NICER",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "NOISY",
    "guessWord": "NADIR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "NOMAD",
    "guessWord": "NUDGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "NOOSE",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "NORTH",
    "guessWord": "TRASH",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "NOSEY",
    "guessWord": "BONUS",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "NOTCH",
    "guessWord": "TENTH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "NOVEL",
    "guessWord": "LIVID",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "NUDGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "NURSE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "NUTTY",
    "guessWord": "SUING",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "NYLON",
    "guessWord": "YOUNG",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "NYMPH",
    "guessWord": "HYDRO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "OAKEN",
    "guessWord": "APNEA",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "OBESE",
    "guessWord": "ORBIT",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "OCCUR",
    "guessWord": "ROGUE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "OCEAN",
    "guessWord": "SCUBA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "OCTAL",
    "guessWord": "ACRID",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "OCTET",
    "guessWord": "ACUTE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "ODDER",
    "guessWord": "ADAGE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "ODDLY",
    "guessWord": "DOWEL",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "OFFAL",
    "guessWord": "EXTOL",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "OFFER",
    "guessWord": "OVARY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "OFTEN",
    "guessWord": "AFOUL",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "OLDEN",
    "guessWord": "LEDGE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "OLDER",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "OLIVE",
    "guessWord": "EVICT",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "OMBRE",
    "guessWord": "ARBOR",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "OMEGA",
    "guessWord": "POESY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "ONION",
    "guessWord": "PRIMO",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ONSET",
    "guessWord": "EATEN",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "OPERA",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "OPINE",
    "guessWord": "PREEN",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "OPIUM",
    "guessWord": "BUXOM",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "OPTIC",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "ORBIT",
    "guessWord": "OBESE",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "ORDER",
    "guessWord": "ARSON",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "ORGAN",
    "guessWord": "OWNER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "OTHER",
    "guessWord": "ETUDE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "OTTER",
    "guessWord": "ORGAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "OUGHT",
    "guessWord": "JUNTO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "OUNCE",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "OUTDO",
    "guessWord": "FETID",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "OUTER",
    "guessWord": "ORGAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "OUTGO",
    "guessWord": "GAMUT",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "OVARY",
    "guessWord": "AVIAN",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "OVATE",
    "guessWord": "IVORY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "OVERT",
    "guessWord": "AVOID",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "OVINE",
    "guessWord": "ORGAN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "OVOID",
    "guessWord": "OUTGO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "OWING",
    "guessWord": "IRONY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "OWNER",
    "guessWord": "ERROR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "OXIDE",
    "guessWord": "ODDLY",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "OZONE",
    "guessWord": "CANOE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "PADDY",
    "guessWord": "SPADE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "PAGAN",
    "guessWord": "GAMMA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "PAINT",
    "guessWord": "PIZZA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "PALER",
    "guessWord": "EMAIL",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "PALSY",
    "guessWord": "PECAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "PANEL",
    "guessWord": "LUNAR",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "PANIC",
    "guessWord": "PRAWN",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "PANSY",
    "guessWord": "HYENA",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "PAPAL",
    "guessWord": "SEPIA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "PAPER",
    "guessWord": "COPSE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "PARER",
    "guessWord": "CREEP",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "PARKA",
    "guessWord": "OPERA",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "PARRY",
    "guessWord": "POLAR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "PARSE",
    "guessWord": "TERRA",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "PARTY",
    "guessWord": "TERRA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PASTA",
    "guessWord": "PLEAT",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "PASTE",
    "guessWord": "SAINT",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "PASTY",
    "guessWord": "CAPUT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "PATCH",
    "guessWord": "OCTET",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "PATIO",
    "guessWord": "POISE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PATSY",
    "guessWord": "PSALM",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PATTY",
    "guessWord": "ATTIC",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "PAUSE",
    "guessWord": "BAYOU",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "PAYEE",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PAYER",
    "guessWord": "APNEA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "PEACE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PEACH",
    "guessWord": "SEPIA",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "PEARL",
    "guessWord": "PINEY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "PECAN",
    "guessWord": "PANSY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PEDAL",
    "guessWord": "PSALM",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "PENAL",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "PENCE",
    "guessWord": "RECAP",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "PENNE",
    "guessWord": "LINEN",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "PENNY",
    "guessWord": "EMPTY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PERCH",
    "guessWord": "FLESH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "PERIL",
    "guessWord": "PINEY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "PERKY",
    "guessWord": "EVOKE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PESKY",
    "guessWord": "PSALM",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "PESTO",
    "guessWord": "DETOX",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "PETAL",
    "guessWord": "TERRA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "PETTY",
    "guessWord": "TAPER",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "PHASE",
    "guessWord": "GRAPH",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "PHONE",
    "guessWord": "CANOE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "PHONY",
    "guessWord": "NOOSE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PHOTO",
    "guessWord": "EMPTY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "PIANO",
    "guessWord": "PREEN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PICKY",
    "guessWord": "SPIKE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "PIECE",
    "guessWord": "PECAN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PIETY",
    "guessWord": "STEIN",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "PIGGY",
    "guessWord": "SPRIG",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "PILOT",
    "guessWord": "PHOTO",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "PINCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "PINEY",
    "guessWord": "GIANT",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "PINKY",
    "guessWord": "ALIKE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "PINTO",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PIPER",
    "guessWord": "DIRGE",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "PIQUE",
    "guessWord": "EIGHT",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PITCH",
    "guessWord": "NICHE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "PITHY",
    "guessWord": "PHOTO",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "PIVOT",
    "guessWord": "POISE",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "PIXEL",
    "guessWord": "BUXOM",
    "pattern": "⬛⬛🟩⬛⬛"
  },
  {
    "finalWord": "PIXIE",
    "guessWord": "ANNEX",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "PIZZA",
    "guessWord": "ZEBRA",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "PLACE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PLAID",
    "guessWord": "PROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PLAIN",
    "guessWord": "PROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PLAIT",
    "guessWord": "PROWL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PLANE",
    "guessWord": "EMAIL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PLANK",
    "guessWord": "APING",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "PLANT",
    "guessWord": "ECLAT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "PLATE",
    "guessWord": "POLAR",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "PLAZA",
    "guessWord": "PECAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "PLEAD",
    "guessWord": "APHID",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "PLEAT",
    "guessWord": "TOPAZ",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "PLIED",
    "guessWord": "DRIVE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PLIER",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "PLUCK",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "PLUMB",
    "guessWord": "PSALM",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "PLUME",
    "guessWord": "PURER",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "PLUMP",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "PLUNK",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "PLUSH",
    "guessWord": "RALPH",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "POESY",
    "guessWord": "COUPE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "POINT",
    "guessWord": "TRIPE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "POISE",
    "guessWord": "SKIMP",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "POKER",
    "guessWord": "ANKLE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "POLAR",
    "guessWord": "PIVOT",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "POLKA",
    "guessWord": "GECKO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "POLYP",
    "guessWord": "SATYR",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "POOCH",
    "guessWord": "COPSE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "POPPY",
    "guessWord": "EPOXY",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "PORCH",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "POSER",
    "guessWord": "VAPOR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "POSIT",
    "guessWord": "TULIP",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "POSSE",
    "guessWord": "VERSO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "POUCH",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "POUND",
    "guessWord": "DEUCE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "POUTY",
    "guessWord": "PROUD",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "POWER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "PRANK",
    "guessWord": "POKER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "PRAWN",
    "guessWord": "SNOWY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "PREEN",
    "guessWord": "ERROR",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PRESS",
    "guessWord": "FETUS",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "PRICE",
    "guessWord": "POLAR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PRICK",
    "guessWord": "RISKY",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "PRIDE",
    "guessWord": "RUPEE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PRIED",
    "guessWord": "RIGID",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "PRIME",
    "guessWord": "ERUPT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "PRIMO",
    "guessWord": "IRONY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "PRINT",
    "guessWord": "FIRST",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "PRIOR",
    "guessWord": "SPIRE",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "PRISM",
    "guessWord": "POSER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "PRIVY",
    "guessWord": "IRATE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "PRIZE",
    "guessWord": "POLAR",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PROBE",
    "guessWord": "PEARL",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "PRONE",
    "guessWord": "PINTO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "PRONG",
    "guessWord": "GNOME",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "PROOF",
    "guessWord": "TORSO",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "PROSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PROUD",
    "guessWord": "RAPID",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PROVE",
    "guessWord": "HEAVY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "PROWL",
    "guessWord": "SPAWN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "PROXY",
    "guessWord": "ROOST",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "PRUDE",
    "guessWord": "DROOP",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "PRUNE",
    "guessWord": "PECAN",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "PSALM",
    "guessWord": "ESSAY",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "PUBIC",
    "guessWord": "STRIP",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "PUDGY",
    "guessWord": "STUDY",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "PUFFY",
    "guessWord": "TULIP",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "PULPY",
    "guessWord": "LOUSY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "PULSE",
    "guessWord": "LOUSY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "PUNCH",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "PUPAL",
    "guessWord": "PIZZA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "PUPIL",
    "guessWord": "USURP",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "PUPPY",
    "guessWord": "UPSET",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "PUREE",
    "guessWord": "UNZIP",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "PURER",
    "guessWord": "SPEAR",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "PURGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "PURSE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "PUSHY",
    "guessWord": "QUASH",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "PUTTY",
    "guessWord": "OCTET",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "PYGMY",
    "guessWord": "GLYPH",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "QUACK",
    "guessWord": "SCUBA",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "QUAIL",
    "guessWord": "UMBRA",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "QUAKE",
    "guessWord": "EQUIP",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "QUALM",
    "guessWord": "AXIOM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "QUARK",
    "guessWord": "AZURE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "QUART",
    "guessWord": "ADULT",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "QUASH",
    "guessWord": "HUSKY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "QUASI",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "QUEEN",
    "guessWord": "EVENT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "QUEER",
    "guessWord": "PAYEE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "QUELL",
    "guessWord": "BOULE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "QUERY",
    "guessWord": "YEARN",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "QUEST",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "QUEUE",
    "guessWord": "BAYOU",
    "pattern": "⬛⬛⬛⬛🟨"
  },
  {
    "finalWord": "QUICK",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "QUIET",
    "guessWord": "TRUCE",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "QUILL",
    "guessWord": "ENNUI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "QUILT",
    "guessWord": "CUTIE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "QUIRK",
    "guessWord": "SHEIK",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "QUITE",
    "guessWord": "GUEST",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "QUOTA",
    "guessWord": "ULTRA",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "QUOTE",
    "guessWord": "DUVET",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "QUOTH",
    "guessWord": "CUTIE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "RABBI",
    "guessWord": "CIRCA",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "RABID",
    "guessWord": "AMBER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "RACER",
    "guessWord": "CAIRN",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "RADAR",
    "guessWord": "HYDRO",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "RADII",
    "guessWord": "ALIBI",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "RADIO",
    "guessWord": "RUMBA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "RAINY",
    "guessWord": "ACRID",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "RAISE",
    "guessWord": "RUMBA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "RAJAH",
    "guessWord": "RUMBA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "RALLY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RALPH",
    "guessWord": "LEAPT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "RAMEN",
    "guessWord": "MACRO",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "RANCH",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "RANDY",
    "guessWord": "ANODE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "RANGE",
    "guessWord": "FORGO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "RAPID",
    "guessWord": "PLIER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "RARER",
    "guessWord": "ZEBRA",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "RASPY",
    "guessWord": "POSER",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "RATIO",
    "guessWord": "REACT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "RATTY",
    "guessWord": "ATTIC",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "RAVEN",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "RAYON",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "RAZOR",
    "guessWord": "DOZEN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "REACH",
    "guessWord": "ROCKY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "REACT",
    "guessWord": "TWICE",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "READY",
    "guessWord": "ERODE",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "REALM",
    "guessWord": "AXIOM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "REARM",
    "guessWord": "RURAL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "REBAR",
    "guessWord": "ALGAE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "REBEL",
    "guessWord": "IMBUE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "REBUS",
    "guessWord": "CHESS",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "REBUT",
    "guessWord": "ARGUE",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "RECAP",
    "guessWord": "CHIRP",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "RECUR",
    "guessWord": "MEDIC",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "RECUT",
    "guessWord": "NICER",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "REEDY",
    "guessWord": "EXERT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "REFER",
    "guessWord": "ELFIN",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "REFIT",
    "guessWord": "JIFFY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "REGAL",
    "guessWord": "VAGUE",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "REHAB",
    "guessWord": "SCRUB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "REIGN",
    "guessWord": "PIGGY",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "RELAX",
    "guessWord": "ANNEX",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "RELAY",
    "guessWord": "LOYAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "RELIC",
    "guessWord": "FILET",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "REMIT",
    "guessWord": "TUMOR",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "RENAL",
    "guessWord": "ECLAT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "RENEW",
    "guessWord": "ROWDY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "REPAY",
    "guessWord": "COPSE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "REPEL",
    "guessWord": "RASPY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "REPLY",
    "guessWord": "ALPHA",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RERUN",
    "guessWord": "GENRE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "RESET",
    "guessWord": "ARSON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RESIN",
    "guessWord": "TENOR",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "RETCH",
    "guessWord": "RHINO",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "RETRO",
    "guessWord": "RURAL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "RETRY",
    "guessWord": "RARER",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "REUSE",
    "guessWord": "SUGAR",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "REVEL",
    "guessWord": "VIRAL",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "REVUE",
    "guessWord": "DUVET",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "RHINO",
    "guessWord": "HIPPO",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "RHYME",
    "guessWord": "GLYPH",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "RIDER",
    "guessWord": "THEIR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "RIDGE",
    "guessWord": "ROGER",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "RIFLE",
    "guessWord": "LOFTY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "RIGHT",
    "guessWord": "RHINO",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "RIGID",
    "guessWord": "RABBI",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "RIGOR",
    "guessWord": "REIGN",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "RINSE",
    "guessWord": "RESET",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "RIPEN",
    "guessWord": "PAGAN",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "RIPER",
    "guessWord": "FIERY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "RISEN",
    "guessWord": "SEDAN",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "RISER",
    "guessWord": "FIBRE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "RISKY",
    "guessWord": "SIREN",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "RIVAL",
    "guessWord": "IDLER",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "RIVER",
    "guessWord": "IRATE",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "RIVET",
    "guessWord": "ENVOY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ROACH",
    "guessWord": "CLOTH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "ROAST",
    "guessWord": "RETRO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "ROBIN",
    "guessWord": "IMBUE",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ROBOT",
    "guessWord": "URBAN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "ROCKY",
    "guessWord": "RHYME",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "RODEO",
    "guessWord": "VERSO",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "ROGER",
    "guessWord": "GOURD",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ROGUE",
    "guessWord": "EIGHT",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "ROOMY",
    "guessWord": "MOURN",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ROOST",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ROTOR",
    "guessWord": "ARTSY",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "ROUGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "ROUGH",
    "guessWord": "RUMOR",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "ROUND",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "ROUSE",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "ROUTE",
    "guessWord": "RIVET",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "ROVER",
    "guessWord": "OPERA",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "ROWDY",
    "guessWord": "CREDO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "ROWER",
    "guessWord": "RURAL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "ROYAL",
    "guessWord": "ABYSS",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "RUDDY",
    "guessWord": "HYDRO",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "RUDER",
    "guessWord": "DONOR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "RUGBY",
    "guessWord": "ORGAN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "RULER",
    "guessWord": "LABOR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "RUMBA",
    "guessWord": "REHAB",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "RUMOR",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "RUPEE",
    "guessWord": "REEDY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "RURAL",
    "guessWord": "LILAC",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "RUSTY",
    "guessWord": "STONY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SADLY",
    "guessWord": "FALSE",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SAFER",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SAINT",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SALAD",
    "guessWord": "SLIDE",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SALLY",
    "guessWord": "FLAIL",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SALON",
    "guessWord": "LAPSE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SALSA",
    "guessWord": "PLAZA",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "SALTY",
    "guessWord": "ASSAY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SALVE",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SALVO",
    "guessWord": "TORSO",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SANDY",
    "guessWord": "GONAD",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SANER",
    "guessWord": "CLEAR",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SAPPY",
    "guessWord": "EPOXY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SASSY",
    "guessWord": "ASSET",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SATIN",
    "guessWord": "VITAL",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "SATYR",
    "guessWord": "RAISE",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SAUCE",
    "guessWord": "CIRCA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SAUCY",
    "guessWord": "QUACK",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SAUNA",
    "guessWord": "HUMAN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SAUTE",
    "guessWord": "AUNTY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SAVOR",
    "guessWord": "OPERA",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SAVOY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "SAVVY",
    "guessWord": "ASSAY",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SCALD",
    "guessWord": "ECLAT",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SCALE",
    "guessWord": "OCTET",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCALP",
    "guessWord": "OCTAL",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SCALY",
    "guessWord": "OCEAN",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCAMP",
    "guessWord": "BASIC",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SCANT",
    "guessWord": "ACORN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SCARE",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SCARF",
    "guessWord": "ACUTE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SCARY",
    "guessWord": "MICRO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SCENE",
    "guessWord": "ACORN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SCENT",
    "guessWord": "CLEAN",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SCION",
    "guessWord": "ACRID",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCOFF",
    "guessWord": "MOTIF",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SCOLD",
    "guessWord": "ACTOR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCONE",
    "guessWord": "ACTOR",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCOOP",
    "guessWord": "TORSO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SCOPE",
    "guessWord": "OCTET",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCORE",
    "guessWord": "ACRID",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SCORN",
    "guessWord": "ACRID",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SCOUR",
    "guessWord": "SALVO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "SCOUT",
    "guessWord": "CHAOS",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SCOWL",
    "guessWord": "SONIC",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SCRAM",
    "guessWord": "SIGMA",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SCRAP",
    "guessWord": "BICEP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "SCREE",
    "guessWord": "OCEAN",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SCREW",
    "guessWord": "MACAW",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "SCRUB",
    "guessWord": "LYRIC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SCRUM",
    "guessWord": "ACORN",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SCUBA",
    "guessWord": "CRUMB",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SEDAN",
    "guessWord": "NUDGE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SEEDY",
    "guessWord": "YIELD",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SEGUE",
    "guessWord": "GECKO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SEIZE",
    "guessWord": "ZESTY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SEMEN",
    "guessWord": "MEANT",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SENSE",
    "guessWord": "ENNUI",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SEPIA",
    "guessWord": "IMPEL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SERIF",
    "guessWord": "SINEW",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SERUM",
    "guessWord": "PRISM",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SERVE",
    "guessWord": "TORUS",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SETUP",
    "guessWord": "SOUTH",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SEVEN",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SEVER",
    "guessWord": "PAYEE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SEWER",
    "guessWord": "ASKEW",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SHACK",
    "guessWord": "MARSH",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SHADE",
    "guessWord": "HOWDY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SHADY",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SHAFT",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SHAKE",
    "guessWord": "HUNKY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SHAKY",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SHALE",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SHALL",
    "guessWord": "WELSH",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SHALT",
    "guessWord": "THETA",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SHAME",
    "guessWord": "MOCHA",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SHANK",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SHAPE",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SHARD",
    "guessWord": "DEBAR",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SHARE",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SHARK",
    "guessWord": "ROAST",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SHARP",
    "guessWord": "MORPH",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SHAVE",
    "guessWord": "LARVA",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "SHAWL",
    "guessWord": "USUAL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SHEAR",
    "guessWord": "ALGAE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHEEN",
    "guessWord": "NIECE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SHEEP",
    "guessWord": "DEPTH",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SHEER",
    "guessWord": "PAYEE",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHEET",
    "guessWord": "HASTY",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "SHEIK",
    "guessWord": "FLASK",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SHELF",
    "guessWord": "LEECH",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SHELL",
    "guessWord": "LEACH",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHIED",
    "guessWord": "APHID",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SHIFT",
    "guessWord": "SATIN",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SHINE",
    "guessWord": "FIEND",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SHINY",
    "guessWord": "GNASH",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SHIRE",
    "guessWord": "SERUM",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SHIRK",
    "guessWord": "SIXTH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHIRT",
    "guessWord": "MYRRH",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHOAL",
    "guessWord": "VIOLA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SHOCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SHONE",
    "guessWord": "HONOR",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "SHOOK",
    "guessWord": "SOUTH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SHOOT",
    "guessWord": "TABOO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHORE",
    "guessWord": "CHAIR",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SHORN",
    "guessWord": "INTRO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SHORT",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SHOUT",
    "guessWord": "RHINO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SHOVE",
    "guessWord": "BRAVO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SHOWN",
    "guessWord": "WELSH",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SHOWY",
    "guessWord": "AWOKE",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SHREW",
    "guessWord": "BELOW",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SHRUB",
    "guessWord": "PLUMB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "SHRUG",
    "guessWord": "MARSH",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SHUCK",
    "guessWord": "DISCO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SHUNT",
    "guessWord": "SETUP",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SHUSH",
    "guessWord": "CHAOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SHYLY",
    "guessWord": "AISLE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SIEGE",
    "guessWord": "GEEKY",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SIEVE",
    "guessWord": "PRIVY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SIGHT",
    "guessWord": "VISTA",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SIGMA",
    "guessWord": "OMEGA",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SILKY",
    "guessWord": "LIKEN",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SILLY",
    "guessWord": "SLAIN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SINCE",
    "guessWord": "CIDER",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "SINEW",
    "guessWord": "BELOW",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SINGE",
    "guessWord": "UNTIE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SIREN",
    "guessWord": "RAYON",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SISSY",
    "guessWord": "BASIS",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "SIXTH",
    "guessWord": "MAXIM",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "SIXTY",
    "guessWord": "ISSUE",
    "pattern": "🟨🟨⬛⬛⬛"
  },
  {
    "finalWord": "SKATE",
    "guessWord": "EKING",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SKIER",
    "guessWord": "ROUSE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SKIFF",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "SKILL",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "SKIMP",
    "guessWord": "PRICK",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SKIRT",
    "guessWord": "RAISE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SKULK",
    "guessWord": "LAUGH",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SKULL",
    "guessWord": "FLASK",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SKUNK",
    "guessWord": "KAYAK",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SLACK",
    "guessWord": "ULCER",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SLAIN",
    "guessWord": "TITAN",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SLANG",
    "guessWord": "ALGAE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SLANT",
    "guessWord": "ECLAT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SLASH",
    "guessWord": "STEAL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SLATE",
    "guessWord": "PULSE",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SLAVE",
    "guessWord": "LARVA",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SLEEK",
    "guessWord": "KNELT",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SLEEP",
    "guessWord": "EQUIP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SLEET",
    "guessWord": "SALTY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SLEPT",
    "guessWord": "LEANT",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SLICE",
    "guessWord": "SCOWL",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SLICK",
    "guessWord": "LOCUS",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "SLIDE",
    "guessWord": "HEIST",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "SLIME",
    "guessWord": "FILMY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SLIMY",
    "guessWord": "PALSY",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SLING",
    "guessWord": "ALGAE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SLINK",
    "guessWord": "LOGIN",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SLOOP",
    "guessWord": "POLYP",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "SLOPE",
    "guessWord": "HIPPO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SLOSH",
    "guessWord": "LOOPY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "SLOTH",
    "guessWord": "LATCH",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "SLUMP",
    "guessWord": "ALPHA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SLUNG",
    "guessWord": "USURP",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SLUNK",
    "guessWord": "USING",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SLURP",
    "guessWord": "SCOUR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SLUSH",
    "guessWord": "GHOUL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SLYLY",
    "guessWord": "LLAMA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SMACK",
    "guessWord": "BASIC",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SMALL",
    "guessWord": "GLEAM",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SMART",
    "guessWord": "VISTA",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SMASH",
    "guessWord": "SEMEN",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "SMEAR",
    "guessWord": "IMBUE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SMELL",
    "guessWord": "AMUSE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SMELT",
    "guessWord": "GLEAM",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "SMILE",
    "guessWord": "QUALM",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SMIRK",
    "guessWord": "SIREN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SMITE",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SMITH",
    "guessWord": "VISTA",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SMOCK",
    "guessWord": "GECKO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SMOKE",
    "guessWord": "OMEGA",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SMOKY",
    "guessWord": "BOSOM",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "SMOTE",
    "guessWord": "AMEND",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SNACK",
    "guessWord": "PECAN",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SNAIL",
    "guessWord": "LEARN",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SNAKE",
    "guessWord": "AISLE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "SNAKY",
    "guessWord": "ENEMA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SNARE",
    "guessWord": "INCUR",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SNARL",
    "guessWord": "GENRE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SNEAK",
    "guessWord": "NASAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SNEER",
    "guessWord": "VERSO",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "SNIDE",
    "guessWord": "WINDY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "SNIFF",
    "guessWord": "MOTIF",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SNIPE",
    "guessWord": "BASIN",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "SNOOP",
    "guessWord": "INTRO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SNORE",
    "guessWord": "INCUR",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SNORT",
    "guessWord": "MOURN",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SNOUT",
    "guessWord": "ATOLL",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SNOWY",
    "guessWord": "ONION",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SNUCK",
    "guessWord": "CUMIN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "SNUFF",
    "guessWord": "SUING",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SOAPY",
    "guessWord": "ADEPT",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SOBER",
    "guessWord": "ELBOW",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SOGGY",
    "guessWord": "SYRUP",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SOLAR",
    "guessWord": "CARAT",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "SOLID",
    "guessWord": "DROIT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SOLVE",
    "guessWord": "SPIEL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SONAR",
    "guessWord": "NASAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SONIC",
    "guessWord": "PIANO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SOOTH",
    "guessWord": "POSIT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "SOOTY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨⬛🟨⬛"
  },
  {
    "finalWord": "SORRY",
    "guessWord": "ARTSY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SOUND",
    "guessWord": "FRAUD",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SOUTH",
    "guessWord": "PESTO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SOWER",
    "guessWord": "THREW",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SPACE",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPADE",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPANK",
    "guessWord": "OPERA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPARE",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SPARK",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPASM",
    "guessWord": "SMEAR",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "SPAWN",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPEAK",
    "guessWord": "RECAP",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SPEAR",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SPECK",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "SPEED",
    "guessWord": "PIECE",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SPELL",
    "guessWord": "REPEL",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "SPELT",
    "guessWord": "OPINE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPEND",
    "guessWord": "BUSED",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SPENT",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPERM",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "SPICE",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPICY",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPIED",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPIEL",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPIKE",
    "guessWord": "OPERA",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPIKY",
    "guessWord": "SEPIA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SPILL",
    "guessWord": "FLAIL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SPILT",
    "guessWord": "UNLIT",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "SPINE",
    "guessWord": "APRON",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPINY",
    "guessWord": "APRON",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPIRE",
    "guessWord": "INERT",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SPITE",
    "guessWord": "APART",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPLAT",
    "guessWord": "OPERA",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPLIT",
    "guessWord": "APTLY",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SPOIL",
    "guessWord": "OPERA",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SPOKE",
    "guessWord": "POSIT",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "SPOOF",
    "guessWord": "MOTIF",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SPOOK",
    "guessWord": "PHOTO",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SPOOL",
    "guessWord": "UPSET",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPOON",
    "guessWord": "POOCH",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "SPORE",
    "guessWord": "APNEA",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SPORT",
    "guessWord": "UPPER",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPOUT",
    "guessWord": "OPTIC",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SPRAY",
    "guessWord": "ROYAL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "SPREE",
    "guessWord": "SEDAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "SPRIG",
    "guessWord": "TORUS",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SPUNK",
    "guessWord": "USING",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "SPURN",
    "guessWord": "UPPER",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SPURT",
    "guessWord": "OPIUM",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SQUAD",
    "guessWord": "QUOTA",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "SQUAT",
    "guessWord": "JUNTA",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SQUIB",
    "guessWord": "CLIMB",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "STACK",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "STAFF",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STAGE",
    "guessWord": "OUTGO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "STAID",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STAIN",
    "guessWord": "UTILE",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "STAIR",
    "guessWord": "SIREN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "STAKE",
    "guessWord": "TACKY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "STALE",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩⬛⬛⬛"
  },
  {
    "finalWord": "STALK",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STALL",
    "guessWord": "ADULT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STAMP",
    "guessWord": "WAIST",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "STAND",
    "guessWord": "GONAD",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "STANK",
    "guessWord": "AGENT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STARE",
    "guessWord": "ENTRY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "STARK",
    "guessWord": "SATIN",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "START",
    "guessWord": "TERRA",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STASH",
    "guessWord": "SETUP",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "STATE",
    "guessWord": "OTHER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STAVE",
    "guessWord": "LARVA",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "STEAD",
    "guessWord": "BUSED",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "STEAK",
    "guessWord": "CAULK",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "STEAL",
    "guessWord": "THESE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "STEAM",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩⬛⬛⬛"
  },
  {
    "finalWord": "STEED",
    "guessWord": "ETHIC",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "STEEL",
    "guessWord": "ATONE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STEEP",
    "guessWord": "SEPIA",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "STEER",
    "guessWord": "ETHIC",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "STEIN",
    "guessWord": "ATONE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "STERN",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "STICK",
    "guessWord": "KIOSK",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "STIFF",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STILL",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STILT",
    "guessWord": "TRITE",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "STING",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STINK",
    "guessWord": "GIANT",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "STINT",
    "guessWord": "ETHIC",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STOCK",
    "guessWord": "ACORN",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "STOIC",
    "guessWord": "ITCHY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "STOKE",
    "guessWord": "UTTER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STOLE",
    "guessWord": "HOTLY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "STOMP",
    "guessWord": "TULIP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "STONE",
    "guessWord": "UTTER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STONY",
    "guessWord": "TIPSY",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "STOOD",
    "guessWord": "ETUDE",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STOOL",
    "guessWord": "UTILE",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STOOP",
    "guessWord": "GUSTO",
    "pattern": "⬛⬛🟨🟨🟨"
  },
  {
    "finalWord": "STORE",
    "guessWord": "ETHIC",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "STORK",
    "guessWord": "OVERT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "STORM",
    "guessWord": "TOTEM",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "STORY",
    "guessWord": "SAVOR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "STOUT",
    "guessWord": "FETUS",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "STOVE",
    "guessWord": "UTTER",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "STRAP",
    "guessWord": "CHIRP",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "STRAW",
    "guessWord": "ALTAR",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "STRAY",
    "guessWord": "TAROT",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "STRIP",
    "guessWord": "BLIMP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "STRUT",
    "guessWord": "UTILE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "STUCK",
    "guessWord": "ITCHY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "STUDY",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STUFF",
    "guessWord": "THIEF",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "STUMP",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STUNG",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "STUNK",
    "guessWord": "ETHOS",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "STUNT",
    "guessWord": "UTILE",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "STYLE",
    "guessWord": "SATYR",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SUAVE",
    "guessWord": "SCUBA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "SUGAR",
    "guessWord": "DOGMA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "SUING",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SUITE",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "SULKY",
    "guessWord": "LOCUS",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "SULLY",
    "guessWord": "FLAIL",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "SUMAC",
    "guessWord": "COMMA",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "SUNNY",
    "guessWord": "ONSET",
    "pattern": "⬛🟨🟨⬛⬛"
  },
  {
    "finalWord": "SUPER",
    "guessWord": "CREEP",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SURER",
    "guessWord": "REBAR",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SURGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SURLY",
    "guessWord": "MYRRH",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SUSHI",
    "guessWord": "SIXTH",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "SWAMI",
    "guessWord": "TWIST",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "SWAMP",
    "guessWord": "USURP",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "SWARM",
    "guessWord": "ROAST",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "SWASH",
    "guessWord": "WATCH",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "SWATH",
    "guessWord": "THETA",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "SWEAR",
    "guessWord": "TWANG",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "SWEAT",
    "guessWord": "TWANG",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "SWEEP",
    "guessWord": "RUPEE",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "SWEET",
    "guessWord": "AWASH",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "SWELL",
    "guessWord": "SOWER",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "SWEPT",
    "guessWord": "OPERA",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "SWIFT",
    "guessWord": "TAFFY",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "SWILL",
    "guessWord": "QUASI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "SWINE",
    "guessWord": "UNTIE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "SWING",
    "guessWord": "AGAIN",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "SWIRL",
    "guessWord": "STAIR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "SWISH",
    "guessWord": "HUMUS",
    "pattern": "🟨⬛⬛⬛🟨"
  },
  {
    "finalWord": "SWOON",
    "guessWord": "DOWNY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "SWOOP",
    "guessWord": "WHELP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "SWORD",
    "guessWord": "OWNER",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "SWORE",
    "guessWord": "OWING",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "SWORN",
    "guessWord": "BASIN",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "SWUNG",
    "guessWord": "DEBUG",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "SYNOD",
    "guessWord": "HYMEN",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "SYRUP",
    "guessWord": "LUPUS",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "TABBY",
    "guessWord": "CYBER",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "TABLE",
    "guessWord": "ABBOT",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "TABOO",
    "guessWord": "ORBIT",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "TACIT",
    "guessWord": "INCUR",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TACKY",
    "guessWord": "STAKE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "TAFFY",
    "guessWord": "STRAY",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "TAINT",
    "guessWord": "HYENA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TAKEN",
    "guessWord": "NATAL",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "TAKER",
    "guessWord": "STAIR",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "TALLY",
    "guessWord": "NYLON",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "TALON",
    "guessWord": "NASTY",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "TAMER",
    "guessWord": "THYME",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TANGO",
    "guessWord": "IGLOO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TANGY",
    "guessWord": "AGAIN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "TAPER",
    "guessWord": "THETA",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "TAPIR",
    "guessWord": "DEPOT",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TARDY",
    "guessWord": "ACRID",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "TAROT",
    "guessWord": "MACRO",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TASTE",
    "guessWord": "USAGE",
    "pattern": "⬛🟨🟨⬛🟩"
  },
  {
    "finalWord": "TASTY",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TATTY",
    "guessWord": "TYING",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "TAUNT",
    "guessWord": "STAIN",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "TAWNY",
    "guessWord": "TWEAK",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TEACH",
    "guessWord": "RECUT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "TEARY",
    "guessWord": "ERASE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "TEASE",
    "guessWord": "TASTY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "TEDDY",
    "guessWord": "TRIED",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TEETH",
    "guessWord": "TITLE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "TEMPO",
    "guessWord": "CREPE",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "TENET",
    "guessWord": "NERVE",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "TENOR",
    "guessWord": "EXTOL",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TENSE",
    "guessWord": "SEDAN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "TENTH",
    "guessWord": "ENACT",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "TEPEE",
    "guessWord": "EMPTY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "TEPID",
    "guessWord": "PLEAD",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "TERRA",
    "guessWord": "EGRET",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "TERSE",
    "guessWord": "THEIR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "TESTY",
    "guessWord": "ITCHY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "THANK",
    "guessWord": "AHEAD",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "THEFT",
    "guessWord": "RETCH",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "THEIR",
    "guessWord": "TWIRL",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "THEME",
    "guessWord": "TOTEM",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "THERE",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "THESE",
    "guessWord": "TENET",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "THETA",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "THICK",
    "guessWord": "KITTY",
    "pattern": "🟨🟨🟨⬛⬛"
  },
  {
    "finalWord": "THIEF",
    "guessWord": "SHEIK",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "THIGH",
    "guessWord": "OUTGO",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "THING",
    "guessWord": "GHOUL",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "THINK",
    "guessWord": "NOTCH",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "THIRD",
    "guessWord": "WORLD",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "THONG",
    "guessWord": "GNOME",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "THORN",
    "guessWord": "TAROT",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "THOSE",
    "guessWord": "SOOTY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "THREE",
    "guessWord": "TWEAK",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "THREW",
    "guessWord": "TAWNY",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "THROB",
    "guessWord": "TUBER",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "THROW",
    "guessWord": "RENEW",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "THRUM",
    "guessWord": "RHINO",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "THUMB",
    "guessWord": "DUTCH",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "THUMP",
    "guessWord": "UNZIP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "THYME",
    "guessWord": "MAYOR",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TIARA",
    "guessWord": "THEIR",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TIBIA",
    "guessWord": "BIRTH",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "TIDAL",
    "guessWord": "VODKA",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TIGER",
    "guessWord": "STAIR",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "TIGHT",
    "guessWord": "ITCHY",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "TILDE",
    "guessWord": "IRATE",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "TIMER",
    "guessWord": "IMPEL",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "TIMID",
    "guessWord": "MOUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TIPSY",
    "guessWord": "HYPER",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "TITAN",
    "guessWord": "NINTH",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "TITHE",
    "guessWord": "TRIED",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "TITLE",
    "guessWord": "PILOT",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "TOAST",
    "guessWord": "VERSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TODAY",
    "guessWord": "LOATH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "TODDY",
    "guessWord": "OXIDE",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "TOKEN",
    "guessWord": "MONTH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "TONAL",
    "guessWord": "LOGIN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "TONGA",
    "guessWord": "CARGO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "TONIC",
    "guessWord": "SUMAC",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "TOOTH",
    "guessWord": "DITTO",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "TOPAZ",
    "guessWord": "TROPE",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "TOPIC",
    "guessWord": "TEMPO",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TORCH",
    "guessWord": "SLOSH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "TORSO",
    "guessWord": "GHOST",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "TORUS",
    "guessWord": "SETUP",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TOTAL",
    "guessWord": "CAROL",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "TOTEM",
    "guessWord": "OPIUM",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TOUCH",
    "guessWord": "SLOSH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "TOUGH",
    "guessWord": "DONUT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TOWEL",
    "guessWord": "TENOR",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TOWER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TOXIC",
    "guessWord": "HAVOC",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "TOXIN",
    "guessWord": "TANGO",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "TRACE",
    "guessWord": "RANCH",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "TRACK",
    "guessWord": "GREAT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TRACT",
    "guessWord": "FLAIR",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TRADE",
    "guessWord": "TAKEN",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TRAIL",
    "guessWord": "THIRD",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "TRAIN",
    "guessWord": "ENACT",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "TRAIT",
    "guessWord": "NADIR",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "TRAMP",
    "guessWord": "TAKER",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "TRASH",
    "guessWord": "ROUGH",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TRAWL",
    "guessWord": "GREAT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TREAD",
    "guessWord": "RADAR",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TREAT",
    "guessWord": "STEER",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "TREND",
    "guessWord": "TEARY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "TRIAD",
    "guessWord": "TEARY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "TRIAL",
    "guessWord": "ARTSY",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "TRIBE",
    "guessWord": "DOUBT",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "TRICE",
    "guessWord": "CRUEL",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "TRICK",
    "guessWord": "ARTSY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TRIED",
    "guessWord": "ROUND",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TRIPE",
    "guessWord": "LEAPT",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "TRITE",
    "guessWord": "WEIRD",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "TROLL",
    "guessWord": "ARTSY",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "TROOP",
    "guessWord": "PARTY",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "TROPE",
    "guessWord": "HARPY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "TROUT",
    "guessWord": "ROOMY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "TROVE",
    "guessWord": "ORGAN",
    "pattern": "🟨🟩⬛⬛⬛"
  },
  {
    "finalWord": "TRUCE",
    "guessWord": "THEIR",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "TRUCK",
    "guessWord": "REACT",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "TRUER",
    "guessWord": "ROTOR",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "TRULY",
    "guessWord": "TWIRL",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TRUMP",
    "guessWord": "SCRAP",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "TRUNK",
    "guessWord": "URBAN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "TRUSS",
    "guessWord": "CHAOS",
    "pattern": "⬛⬛⬛⬛🟩"
  },
  {
    "finalWord": "TRUST",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "TRUTH",
    "guessWord": "RATTY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "TRYST",
    "guessWord": "TEARY",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "TUBAL",
    "guessWord": "QUART",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "TUBER",
    "guessWord": "KEBAB",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "TULIP",
    "guessWord": "USURP",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "TULLE",
    "guessWord": "ALLOT",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "TUMOR",
    "guessWord": "TOTEM",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "TUNIC",
    "guessWord": "LILAC",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "TURBO",
    "guessWord": "BERET",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "TUTOR",
    "guessWord": "MOTTO",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "TWANG",
    "guessWord": "SWEAT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "TWEAK",
    "guessWord": "SWATH",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "TWEED",
    "guessWord": "CADET",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "TWEET",
    "guessWord": "PIETY",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "TWICE",
    "guessWord": "DEITY",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "TWINE",
    "guessWord": "SWATH",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "TWIRL",
    "guessWord": "SWATH",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "TWIST",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "TWIXT",
    "guessWord": "SWAMI",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "TYING",
    "guessWord": "LYRIC",
    "pattern": "⬛🟩⬛🟨⬛"
  },
  {
    "finalWord": "UDDER",
    "guessWord": "CLUED",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "ULCER",
    "guessWord": "URINE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "ULTRA",
    "guessWord": "URINE",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "UMBRA",
    "guessWord": "USUAL",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "UNCLE",
    "guessWord": "EXCEL",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "UNCUT",
    "guessWord": "CHANT",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "UNDER",
    "guessWord": "RUDDY",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "UNDID",
    "guessWord": "URBAN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "UNDUE",
    "guessWord": "DATUM",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "UNFED",
    "guessWord": "DRONE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "UNFIT",
    "guessWord": "OFTEN",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "UNIFY",
    "guessWord": "URBAN",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "UNION",
    "guessWord": "INNER",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "UNITE",
    "guessWord": "ULTRA",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "UNITY",
    "guessWord": "YOUTH",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "UNLIT",
    "guessWord": "INCUR",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "UNMET",
    "guessWord": "TUBER",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "UNSET",
    "guessWord": "NASTY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "UNTIE",
    "guessWord": "NUTTY",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "UNTIL",
    "guessWord": "ULCER",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "UNWED",
    "guessWord": "USING",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "UNZIP",
    "guessWord": "PANIC",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "UPPER",
    "guessWord": "URINE",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "UPSET",
    "guessWord": "UNITY",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "URBAN",
    "guessWord": "USAGE",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "URINE",
    "guessWord": "ERUPT",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "USAGE",
    "guessWord": "TONGA",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "USHER",
    "guessWord": "ASIDE",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "USING",
    "guessWord": "SCION",
    "pattern": "🟨⬛🟩⬛🟨"
  },
  {
    "finalWord": "USUAL",
    "guessWord": "ULTRA",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "USURP",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "UTILE",
    "guessWord": "STOOL",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "UTTER",
    "guessWord": "URBAN",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "VAGUE",
    "guessWord": "SHRUG",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "VALET",
    "guessWord": "VICAR",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "VALID",
    "guessWord": "ELFIN",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "VALOR",
    "guessWord": "VEGAN",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "VALUE",
    "guessWord": "EASEL",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "VALVE",
    "guessWord": "VIVID",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "VAPID",
    "guessWord": "MEDIA",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "VAPOR",
    "guessWord": "PUPAL",
    "pattern": "⬛⬛🟩🟨⬛"
  },
  {
    "finalWord": "VAULT",
    "guessWord": "VOTER",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "VAUNT",
    "guessWord": "AVIAN",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "VEGAN",
    "guessWord": "VINYL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "VENOM",
    "guessWord": "FORUM",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "VENUE",
    "guessWord": "VIXEN",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "VERGE",
    "guessWord": "VIGIL",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "VERSE",
    "guessWord": "USHER",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "VERSO",
    "guessWord": "PRIMO",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "VERVE",
    "guessWord": "SAVVY",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "VICAR",
    "guessWord": "RABBI",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "VIDEO",
    "guessWord": "CREDO",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "VIGIL",
    "guessWord": "VOILA",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "VIGOR",
    "guessWord": "GONER",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "VILLA",
    "guessWord": "BASIL",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "VINYL",
    "guessWord": "LYRIC",
    "pattern": "🟨🟨⬛🟨⬛"
  },
  {
    "finalWord": "VIOLA",
    "guessWord": "VYING",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "VIPER",
    "guessWord": "EQUIP",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "VIRAL",
    "guessWord": "VAPOR",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "VIRUS",
    "guessWord": "BASIS",
    "pattern": "⬛⬛⬛🟨🟩"
  },
  {
    "finalWord": "VISIT",
    "guessWord": "ETHOS",
    "pattern": "⬛🟨⬛⬛🟨"
  },
  {
    "finalWord": "VISOR",
    "guessWord": "BRAVO",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "VISTA",
    "guessWord": "HABIT",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "VITAL",
    "guessWord": "VODKA",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "VIVID",
    "guessWord": "DUVET",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "VIXEN",
    "guessWord": "VOILA",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "VOCAL",
    "guessWord": "CROAK",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "VODKA",
    "guessWord": "GECKO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "VOGUE",
    "guessWord": "VENOM",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "VOICE",
    "guessWord": "SIEVE",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "VOILA",
    "guessWord": "VERSO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "VOMIT",
    "guessWord": "VERSO",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "VOTER",
    "guessWord": "VISTA",
    "pattern": "🟩⬛⬛🟨⬛"
  },
  {
    "finalWord": "VOUCH",
    "guessWord": "DISCO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "VOWEL",
    "guessWord": "VAGUE",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "VYING",
    "guessWord": "CYNIC",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "WACKY",
    "guessWord": "ICILY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "WAFER",
    "guessWord": "FEMUR",
    "pattern": "🟨🟨⬛⬛🟩"
  },
  {
    "finalWord": "WAGER",
    "guessWord": "ANGRY",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "WAGON",
    "guessWord": "BANJO",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "WAIST",
    "guessWord": "QUASI",
    "pattern": "⬛⬛🟨🟩🟨"
  },
  {
    "finalWord": "WAIVE",
    "guessWord": "CURVY",
    "pattern": "⬛⬛⬛🟩⬛"
  },
  {
    "finalWord": "WALTZ",
    "guessWord": "APTLY",
    "pattern": "🟨⬛🟨🟨⬛"
  },
  {
    "finalWord": "WARTY",
    "guessWord": "AWAIT",
    "pattern": "🟨🟨⬛⬛🟨"
  },
  {
    "finalWord": "WASTE",
    "guessWord": "WIGHT",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "WATCH",
    "guessWord": "MACHO",
    "pattern": "⬛🟩🟨🟨⬛"
  },
  {
    "finalWord": "WATER",
    "guessWord": "ULTRA",
    "pattern": "⬛⬛🟩🟨🟨"
  },
  {
    "finalWord": "WAVER",
    "guessWord": "MOVIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WAXEN",
    "guessWord": "PIXIE",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WEARY",
    "guessWord": "ROWDY",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "WEAVE",
    "guessWord": "ASKEW",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "WEDGE",
    "guessWord": "ELEGY",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "WEEDY",
    "guessWord": "ODDLY",
    "pattern": "⬛🟨⬛⬛🟩"
  },
  {
    "finalWord": "WEIGH",
    "guessWord": "OMEGA",
    "pattern": "⬛⬛🟨🟩⬛"
  },
  {
    "finalWord": "WEIRD",
    "guessWord": "WORDY",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "WELCH",
    "guessWord": "FRESH",
    "pattern": "⬛⬛🟨⬛🟩"
  },
  {
    "finalWord": "WELSH",
    "guessWord": "ISLET",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "WENCH",
    "guessWord": "WHINY",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "WHACK",
    "guessWord": "TWEAK",
    "pattern": "⬛🟨⬛🟨🟩"
  },
  {
    "finalWord": "WHALE",
    "guessWord": "WREAK",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "WHARF",
    "guessWord": "WREAK",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "WHEAT",
    "guessWord": "STRAW",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "WHEEL",
    "guessWord": "NEWLY",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "WHELP",
    "guessWord": "WALTZ",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "WHERE",
    "guessWord": "THROW",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "WHICH",
    "guessWord": "ILIAC",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WHIFF",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟨🟨"
  },
  {
    "finalWord": "WHILE",
    "guessWord": "HALVE",
    "pattern": "🟨⬛🟨⬛🟩"
  },
  {
    "finalWord": "WHINE",
    "guessWord": "FIEND",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WHINY",
    "guessWord": "SWISH",
    "pattern": "⬛🟨🟩⬛🟨"
  },
  {
    "finalWord": "WHIRL",
    "guessWord": "WILLY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "WHISK",
    "guessWord": "WIGHT",
    "pattern": "🟩🟨⬛🟨⬛"
  },
  {
    "finalWord": "WHITE",
    "guessWord": "PIETY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WHOLE",
    "guessWord": "CELLO",
    "pattern": "⬛🟨⬛🟩🟨"
  },
  {
    "finalWord": "WHOOP",
    "guessWord": "PROWL",
    "pattern": "🟨⬛🟩🟨⬛"
  },
  {
    "finalWord": "WHOSE",
    "guessWord": "RHINO",
    "pattern": "⬛🟩⬛⬛🟨"
  },
  {
    "finalWord": "WIDEN",
    "guessWord": "DRONE",
    "pattern": "🟨⬛⬛🟨🟨"
  },
  {
    "finalWord": "WIDER",
    "guessWord": "RUDDY",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "WIDOW",
    "guessWord": "DIODE",
    "pattern": "🟨🟩🟨⬛⬛"
  },
  {
    "finalWord": "WIDTH",
    "guessWord": "CACTI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WIELD",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WIGHT",
    "guessWord": "SUSHI",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WILLY",
    "guessWord": "WHEEL",
    "pattern": "🟩⬛⬛⬛🟨"
  },
  {
    "finalWord": "WIMPY",
    "guessWord": "SWEPT",
    "pattern": "⬛🟨⬛🟩⬛"
  },
  {
    "finalWord": "WINCE",
    "guessWord": "FUNGI",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WINCH",
    "guessWord": "WRING",
    "pattern": "🟩⬛🟨🟨⬛"
  },
  {
    "finalWord": "WINDY",
    "guessWord": "SNIDE",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WISER",
    "guessWord": "STAIR",
    "pattern": "🟨⬛⬛🟨🟩"
  },
  {
    "finalWord": "WISPY",
    "guessWord": "TWIST",
    "pattern": "⬛🟨🟨🟨⬛"
  },
  {
    "finalWord": "WITCH",
    "guessWord": "WHEAT",
    "pattern": "🟩🟨⬛⬛🟨"
  },
  {
    "finalWord": "WITTY",
    "guessWord": "TRITE",
    "pattern": "🟨⬛🟨🟩⬛"
  },
  {
    "finalWord": "WOKEN",
    "guessWord": "BORNE",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "WOMAN",
    "guessWord": "TONGA",
    "pattern": "⬛🟩🟨⬛🟨"
  },
  {
    "finalWord": "WOMEN",
    "guessWord": "UNWED",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WOODY",
    "guessWord": "SYNOD",
    "pattern": "⬛🟨⬛🟨🟨"
  },
  {
    "finalWord": "WOOER",
    "guessWord": "OCCUR",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WOOLY",
    "guessWord": "LAYER",
    "pattern": "🟨⬛🟨⬛⬛"
  },
  {
    "finalWord": "WOOZY",
    "guessWord": "OZONE",
    "pattern": "🟨🟨🟩⬛⬛"
  },
  {
    "finalWord": "WORDY",
    "guessWord": "WEIRD",
    "pattern": "🟩⬛⬛🟨🟨"
  },
  {
    "finalWord": "WORLD",
    "guessWord": "RADIO",
    "pattern": "🟨⬛🟨⬛🟨"
  },
  {
    "finalWord": "WORRY",
    "guessWord": "RETRO",
    "pattern": "🟨⬛⬛🟩🟨"
  },
  {
    "finalWord": "WORSE",
    "guessWord": "EXIST",
    "pattern": "🟨⬛⬛🟩⬛"
  },
  {
    "finalWord": "WORST",
    "guessWord": "LASSO",
    "pattern": "⬛⬛⬛🟩🟨"
  },
  {
    "finalWord": "WORTH",
    "guessWord": "COURT",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "WOULD",
    "guessWord": "AUDIO",
    "pattern": "⬛🟨🟨⬛🟨"
  },
  {
    "finalWord": "WOUND",
    "guessWord": "DOZEN",
    "pattern": "🟨🟩⬛⬛🟨"
  },
  {
    "finalWord": "WOVEN",
    "guessWord": "NAVAL",
    "pattern": "🟨⬛🟩⬛⬛"
  },
  {
    "finalWord": "WRACK",
    "guessWord": "WARTY",
    "pattern": "🟩🟨🟨⬛⬛"
  },
  {
    "finalWord": "WRATH",
    "guessWord": "PARTY",
    "pattern": "⬛🟨🟨🟩⬛"
  },
  {
    "finalWord": "WREAK",
    "guessWord": "ABACK",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "WRECK",
    "guessWord": "WORSE",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "WREST",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "WRING",
    "guessWord": "SPRIG",
    "pattern": "⬛⬛🟨🟨🟩"
  },
  {
    "finalWord": "WRIST",
    "guessWord": "ARSON",
    "pattern": "⬛🟩🟨⬛⬛"
  },
  {
    "finalWord": "WRITE",
    "guessWord": "SWIRL",
    "pattern": "⬛🟨🟩🟨⬛"
  },
  {
    "finalWord": "WRONG",
    "guessWord": "WOULD",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "WROTE",
    "guessWord": "WHEAT",
    "pattern": "🟩⬛🟨⬛🟨"
  },
  {
    "finalWord": "WRUNG",
    "guessWord": "BLUER",
    "pattern": "⬛⬛🟩⬛🟨"
  },
  {
    "finalWord": "WRYLY",
    "guessWord": "GLYPH",
    "pattern": "⬛🟨🟩⬛⬛"
  },
  {
    "finalWord": "YACHT",
    "guessWord": "YEARN",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "YEARN",
    "guessWord": "YACHT",
    "pattern": "🟩🟨⬛⬛⬛"
  },
  {
    "finalWord": "YEAST",
    "guessWord": "YIELD",
    "pattern": "🟩⬛🟨⬛⬛"
  },
  {
    "finalWord": "YIELD",
    "guessWord": "EMBED",
    "pattern": "🟨⬛⬛⬛🟩"
  },
  {
    "finalWord": "YOUNG",
    "guessWord": "DODGY",
    "pattern": "⬛🟩⬛🟨🟨"
  },
  {
    "finalWord": "YOUTH",
    "guessWord": "TORUS",
    "pattern": "🟨🟩⬛🟨⬛"
  },
  {
    "finalWord": "ZEBRA",
    "guessWord": "ABORT",
    "pattern": "🟨🟨⬛🟩⬛"
  },
  {
    "finalWord": "ZESTY",
    "guessWord": "HYENA",
    "pattern": "⬛🟨🟨⬛⬛"
  },
  {
    "finalWord": "ZONAL",
    "guessWord": "ZEBRA",
    "pattern": "🟩⬛⬛⬛🟨"
  }
];

module.exports = { PUZZLES_JSON };

