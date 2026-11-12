/*
  SONIC.EXE: BLOODY FLIGHT — PROJECT SETTINGS
  You can edit the values below. Keep file names and paths in quotes.
  Use forward slashes in paths, for example: assets/images/player.png
*/
window.BLOODY_FLIGHT_CONFIG = {
  title: "SONIC.EXE",
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
