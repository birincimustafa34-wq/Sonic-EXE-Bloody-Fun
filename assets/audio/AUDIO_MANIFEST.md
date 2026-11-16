# Bloody Flight Audio Manifest

This directory contains the game's optional music and sound assets.

## Existing audio paths

- `background.mp3` — default background music
- `jump.wav` — jump sound
- `ring.wav` — ring pickup sound
- `emerald.wav` — Chaos Emerald pickup sound
- `shield.wav` — shield activation sound
- `hit.wav` — player damage sound

The game retains built-in Web Audio fallbacks for its core sound effects.

## Optional biome music

Place files in this directory and set the matching fields in `config.js`:

| Config key | Suggested file path | Region |
|---|---|---|
| `biomeMusic.glassWastes` | `assets/audio/glass-wastes.mp3` | The Glass Wastes |
| `biomeMusic.staticCathedral` | `assets/audio/static-cathedral.mp3` | The Static Cathedral |
| `biomeMusic.eclipseAbyss` | `assets/audio/eclipse-abyss.mp3` | The Eclipse Abyss |

Example:

```js
biomeMusic: {
  glassWastes: "assets/audio/glass-wastes.mp3",
  staticCathedral: "assets/audio/static-cathedral.mp3",
  eclipseAbyss: "assets/audio/eclipse-abyss.mp3"
},
```

Leave any entry empty to use the default background music for that region.

## Optional custom sound effects

| Config key | Suggested file path | Trigger |
|---|---|---|
| `sounds.biomeGlass` | `assets/audio/biome-glass.wav` | Enter The Glass Wastes |
| `sounds.biomeCathedral` | `assets/audio/biome-cathedral.wav` | Enter The Static Cathedral |
| `sounds.biomeEclipse` | `assets/audio/biome-eclipse.wav` | Enter The Eclipse Abyss |
| `sounds.bossChoir` | `assets/audio/boss-static-choir.wav` | THE STATIC CHOIR entrance |
| `sounds.bossJudge` | `assets/audio/boss-red-judge.wav` | THE RED JUDGE entrance |
| `sounds.bossArchitect` | `assets/audio/boss-pale-architect.wav` | THE PALE ARCHITECT entrance |

Empty paths use the built-in synthesized sound cues. Custom audio files are optional; no new external audio files are required for the current implementation.

## Audio behavior notes

- Music switching occurs on biome entry and returns to the configured default track when no custom region track is configured.
- Music playback remains subject to the browser's normal user-interaction audio restrictions.
- The in-game M key still mutes playback and sound effects.
- The temporary SOUND LOST horror event suppresses music and SFX as before.
- Keep source audio files reasonably short and compressed for browser performance.

## Default asset availability and fallback behavior

The repository does not bundle the optional MP3/WAV files listed above. The default `config.js` therefore leaves the music and core custom SFX paths empty, avoiding repeated 404 requests on a fresh clone or GitHub Pages deployment. The built-in Web Audio synthesizer remains the default source for jump, ring, emerald, shield, hit, and other cues. Add your own files and set the corresponding config paths to enable custom playback.

Custom SFX use a small reusable voice pool (up to four simultaneous voices per cue). If a configured custom file fails to load or a browser rejects playback, the game falls back to the synthesized cue. AudioContext resume is awaited before synthesized notes are scheduled; gameplay input and pause recovery both request audio resume.

The **SOUND LOST** horror event is a background-music blackout only. Jump, ring, and other gameplay feedback sounds remain active. The browser can suspend Web Audio while a tab is hidden or loses focus; the game pauses safely on focus loss and resumes audio after the player returns and resumes the run.
