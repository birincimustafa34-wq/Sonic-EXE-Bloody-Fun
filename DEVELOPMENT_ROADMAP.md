# Bloody Flight Development Pack

A modular development roadmap for **Sonic.EXE — Bloody Flight**.

## Development principles

- Build each subsystem as a distinct, testable module before integrating it into the main game.
- Keep normal runs fair: development controls must not silently alter score, unlocks, achievements, or saved records.
- Preserve the existing runner, horizontal movement, flight, Ghost Runner, bosses, abilities, mobile controls, and score pipeline.
- Give every new enemy, boss, ability, collectible, and hazard a stable ID, clear unlock condition, documented behavior, and test notes.
- Run JavaScript syntax checks and targeted source-level regression checks before each code commit.
- Treat source checks as preliminary validation; verify interactive gameplay in a browser before calling a feature gameplay-tested.

## Project roadmap

| Phase | Project | Scope | Status |
|---|---|---|---|
| 1 | Testing Laboratory | Read-only live diagnostics, engine self-checks, and later an isolated sandbox for controlled test cases | **Started** |
| 2 | Enemy Creation Project | Enemy definitions, behaviors, collision profiles, sprites, and animation variants | **Started** |
| 3 | Boss Creation Laboratory | Boss identities, phases, attack patterns, weak points, and rewards | **Started** |
| 4 | World and Biome Pack | New environments, visual themes, hazards, and transitions | **Started** |
| 5 | Sprite and Animation Pack | Player skins, enemy sprites, boss art, and visual effects | **Started** |
| 6 | Audio Project | Music, boss themes, ambience, and sound effects | **Started** |
| 7 | Abilities and Gameplay Expansion | New abilities, combinations, challenge modes, and balancing | Planned |

## Phase 1 — Testing Laboratory

### Current implementation

The **TEST LAB** menu panel provides a read-only snapshot of the current run and checks:

1. Game state validity
2. Finite score and speed
3. Player physics values
4. Horizontal movement bounds
5. Expansion entity collections
6. Enemy capacity
7. Hazard capacity
8. Boss data integrity
9. Selected skin validity
10. Ability cooldown values
11. Canvas renderer availability
12. Menu interaction bindings
13. Local storage read access

The panel also displays run metrics, active entity counts, boss status, and ability cooldowns. It is accessible from the title, pause, and game-over overlays.

### Safety boundary

The current panel does not spawn entities, modify score, grant abilities, change difficulty, or write player records. Its checks are runtime diagnostics, not a substitute for hands-on browser gameplay testing.

### Next Testing Laboratory tasks

- Add an isolated test session that cannot update normal records or achievements.
- Add controlled enemy, hazard, pickup, and boss spawning inside that isolated session.
- Add scenario presets for movement, collision, flight, boss weakness windows, and mobile controls.
- Add a compact diagnostic report that can be copied for bug investigations.


## Phase 2 — Enemy Creation Project

### First enemy pack integrated

Three new enemies have been added to the main game:

- **Rift Lantern** — unlocks at 38,000 score; follows a drifting orbital path and uses a glowing lantern silhouette.
- **Mirror Wraith** — unlocks at 72,000 score; uses the existing blink movement archetype and a fractured reflective body.
- **Grave Mantis** — unlocks at 108,000 score; uses aggressive dash movement with a scythe-like pixel-art silhouette.

All three have unique IDs, score rewards, colors, dimensions, and Codex entries through the shared enemy catalog. The Testing Laboratory also checks that enemy IDs are unique and that every declared movement archetype is supported.

The detailed first-pack design notes live in `content-packs/enemies/enemy-catalog.md`.


## Phase 3 — Boss Creation Laboratory

### First boss pack integrated

Three late-game bosses have been added:

- **THE STATIC CHOIR** — 185,000 score; 36-second encounter; 6,500 reward. Uses a rotating trio visual and a staggered volley rhythm.
- **THE RED JUDGE** — 215,000 score; 40-second encounter; 8,200 reward. Uses wider attack lanes, faster crimson projectiles, and a shorter attack cadence.
- **THE PALE ARCHITECT** — 275,000 score; 48-second encounter; 15,000 reward. Uses pale geometric artwork and projectiles with diagonal drift.

All three use the established three-core weakness-window framework. Their milestone flags reset between runs, and they are included in the Boss Gallery and Entity Codex. Existing boss milestones were sorted chronologically to make threshold progression deterministic.

Detailed design notes live in `content-packs/bosses/boss-catalog.md`.


## Phase 4 — World and Biome Pack

### First biome layer integrated

Three score-driven visual regions now transition into the run:

- **THE GLASS WASTES** — 70,000 score; cyan haze, glass-spire silhouettes, and drifting shard lights.
- **THE STATIC CATHEDRAL** — 140,000 score; dark monumental columns, pale arches, and vertical signal lights.
- **THE ECLIPSE ABYSS** — 225,000 score; a dark eclipse, crimson orbital rings, and drifting shadow fragments.

The layers are drawn behind gameplay objects. They do not change collision geometry, enemy timing, scoring, or player physics. Short transition titles announce entry into each biome. The Testing Laboratory checks that the active biome tier matches the current score.

Detailed visual notes live in `content-packs/worlds/biome-catalog.md`.


## Phase 5 — Sprite and Animation Pack

### Player skin system expanded

The player now has seven selectable looks:

- **DEFAULT** — standard appearance.
- **BLOODSTAINED** — unlocks at 50K; crimson tint and blood-red pixel sparks.
- **VOID** — unlocks at 100K; dark monochrome tint and violet aura.
- **EMERALD** — unlocks through the Emerald Witness secret ending; green tint and orbiting emerald fragments.
- **PHANTOM** — unlocks at 150K; cold cyan tint and spectral afterimage.
- **OBSIDIAN** — unlocks at 200K; dark high-contrast tint and violet fracture lines.
- **UNWRITTEN** — unlocks through The Unwritten secret ending; pale monochrome tint and white glitch fragments.

The selected skin is saved in the existing local save object and restored on page load. The Archive lists every currently unlocked skin. The Testing Laboratory checks that the selected skin is genuinely unlocked.

Detailed skin notes live in `content-packs/sprites/player-skins.md`.


## Phase 6 — Audio Project

### First audio layer integrated

The game now has synthesized transition cues for the three new biomes and distinct entrance cues for the three new bosses. The audio configuration also supports optional custom music tracks per biome and optional custom sound files for those cues.

When optional files are not supplied, the built-in Web Audio tone sequences are used. Existing background music and original sound mappings remain intact.

The audio file layout and configuration keys are documented in `assets/audio/AUDIO_MANIFEST.md`.

## Regression checklist

Before integrating future modules, re-check:

- Keyboard and touch controls, including left/right movement
- Jump, double jump, slide, flight, and Shadow Dash
- Score awarding and combo behavior
- Ghost Runner appearance window (20K–30K)
- Boss milestone progression and BOSS RUSH behavior
- Temporary ability timers and protection windows
- Skin unlock conditions and player rendering
- Daily challenge, archive, and local save behavior
- Mobile layout and menu access
