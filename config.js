/*
  SONIC.EXE: BLOODY FLIGHT — PROJECT SETTINGS
  You can edit the values below. Keep file names and paths in quotes.
  Use forward slashes in paths, for example: assets/images/player.png
*/
window.BLOODY_FLIGHT_CONFIG = {
  title: "SONIC.EXE",
  usePlayerImage: false,
  subtitle: "BLOODY FLIGHT EDITION",
  startMessage: "The blood moon is rising. The forest is watching.",
  initialSpeed: 360,
  // Base engine cap; temporary Overdrive adds up to 38 speed (888 total by default).
  maxSpeed: 850,
  speedRamp: 8.5,
  gravity: 1750,
  jumpPower: 650,
  doubleJumpPower: 565,
  flightDuration: 10,
  shieldDuration: 9,
  ringComboWindow: 3.35,
  groundHeight: 92,
  music: {
    path: "",
    volume: 0.45,
    loop: true
  },
  // Optional region-specific tracks. Leave empty to keep the default music.
  biomeMusic: {
    glassWastes: "",
    staticCathedral: "",
    eclipseAbyss: ""
  },
  images: {
    background: "assets/images/background.png",
    player: "assets/images/player.png",
    ring: "assets/images/ring.png",
    emerald: "assets/images/emerald.png",
    shield: "assets/images/shield.png",
    spike: "assets/images/spike.png",
    block: "assets/images/block.png",
    bat: "assets/images/bat.png",
    rock: "assets/images/rock.png"
  },
  sounds: {
    jump: "",
    ring: "",
    emerald: "",
    shield: "",
    hit: "",
    // Optional custom files. Empty paths use the built-in synthesized cues.
    biomeGlass: "",
    biomeCathedral: "",
    biomeEclipse: "",
    bossChoir: "",
    bossJudge: "",
    bossArchitect: ""
  },
  colors: {
    ringOuter: "#760008",
    ringInner: "#bd0718",
    accent: "#b41136",
    ground: "#190713",
    groundLine: "#9d1230"
  }
};
