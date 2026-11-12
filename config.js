/*
  SONIC.EXE: BLOODY FLIGHT — PROJECT SETTINGS
  You can edit the values below. Keep file names and paths in quotes.
  Use forward slashes in paths, for example: assets/images/player.png
*/
window.BLOODY_FLIGHT_CONFIG = {
  title: "SONIC.EXE",
  usePlayerImage: true,
  subtitle: "BLOODY FLIGHT EDITION",
  startMessage: "The blood moon is rising. The forest is watching.",
  initialSpeed: 360,
  maxSpeed: 650,
  speedRamp: 8.5,
  gravity: 1750,
  jumpPower: 650,
  doubleJumpPower: 565,
  flightDuration: 10,
  shieldDuration: 9,
  ringComboWindow: 2.35,
  groundHeight: 92,
  music: {
    path: "assets/audio/background.mp3",
    volume: 0.45,
    loop: true
  },
  images: {
    background: "assets/images/background.png",
    player: "data:image/png;base64,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",
    ring: "assets/images/ring.png",
    emerald: "assets/images/emerald.png",
    shield: "assets/images/shield.png",
    spike: "assets/images/spike.png",
    block: "assets/images/block.png",
    bat: "assets/images/bat.png",
    rock: "assets/images/rock.png"
  },
  sounds: {
    jump: "assets/audio/jump.wav",
    ring: "assets/audio/ring.wav",
    emerald: "assets/audio/emerald.wav",
    shield: "assets/audio/shield.wav",
    hit: "assets/audio/hit.wav"
  },
  colors: {
    ringOuter: "#760008",
    ringInner: "#bd0718",
    accent: "#b41136",
    ground: "#190713",
    groundLine: "#9d1230"
  }
};
