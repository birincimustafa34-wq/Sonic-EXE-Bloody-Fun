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
| 1 | Testing Laboratory | Read-only live diagnostics, engine self-checks, and isolated scenario sandbox | **Started** |
| 2 | Enemy Creation Project | Enemy definitions, behaviors, collision profiles, sprites, and animation variants | **Started** |
| 3 | Boss Creation Laboratory | Boss identities, phases, attack patterns, weak points, and rewards | **Started** |
| 4 | World and Biome Pack | New environments, visual themes, hazards, and transitions | **Started** |
| 5 | Sprite and Animation Pack | Player skins, enemy sprites, boss art, and visual effects | **Started** |
| 6 | Audio Project | Music, boss themes, ambience, and sound effects | **Started** |
| 7 | Abilities and Gameplay Expansion | New abilities, combinations, challenge modes, and balancing | **Started** |

## Phase 1 — Testing Laboratory

### Current implementation

The **TEST LAB** menu panel provides read-only live diagnostics for game state, player physics, horizontal bounds, entity collections, capacity limits, boss data, biome progression, enemy catalog integrity, skin unlocks, ability cooldowns, synergy state, menu bindings, and local-storage access.

The panel also displays current score, best score, run time, player position, active entity counts, boss state, and ability cooldowns. A copyable JSON diagnostic report exports the live run snapshot without including local save contents. It is accessible from the title, pause, and Game Over overlays.

### Isolated sandbox

From the title or Game Over screen, the lab can start isolated test runs:

- **FREE TEST RUN** — normal gameplay without persistent records.
- **ENEMY SHOWCASE** — spawns Rift Lantern, Mirror Wraith, and Grave Mantis together.
- **BOSS TEST** — starts THE STATIC CHOIR directly.
- **SYNERGY TEST** — starts at 60K with combo ability cooldowns ready.
- **HAZARD TEST** — stages a Laser Grid, Gravity Zone, and Spike Corridor.
- **GLASS WASTES / STATIC CATHEDRAL / ECLIPSE ABYSS** — starts a run at the corresponding biome score threshold.

The HUD labels sandbox sessions clearly. Sandbox saves are blocked, and the stored player profile is snapshotted and restored when the test run ends. Sandbox buttons are not offered while pausing a normal active run, avoiding accidental loss of run progress.

### Safety boundary

The diagnostic panel itself is read-only. Sandbox sessions may temporarily change gameplay state so scenarios can be tested, but they do not update the player's persistent score, achievements, unlocks, or archive. Source-level checks and JavaScript syntax validation pass; browser interaction and gameplay testing remain necessary.

### Next Testing Laboratory tasks

- Add a structured report export for bugs.
- Add broader collision and mobile-control scenario coverage.
- Consider a dedicated visual comparison mode for sprite and biome review.

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


### Randomized rainfall events added

Light rain remains an early-run weather event, with three randomized activation windows:

- 500–5,000
- 10,000–20,000
- 80,000–100,000

From 110K onward, crimson blood rain becomes the dominant weather in seven progressively recurring windows:

- 110K–125K
- 140K–155K
- 170K–185K
- 200K–215K
- 230K–245K
- 260K–275K
- 285K–300K

The schedule reaches 300K and leaves deliberate 10K or 15K quiet gaps from the 80K window onward. Every threshold is randomized once per run. Test Lab reports each schedule and validates that all ten windows remain separate. The dedicated **RAIN TEST** and **BLOOD RAIN TEST** presets preview both effects.

Passive score gained by moving forward is now multiplied by **1.12×** while remaining tied to actual movement speed. This adds 12% to distance-based scoring only; ring pickups, boss rewards, and other fixed awards remain unchanged.


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


## Phase 7 — Abilities and Gameplay Expansion

### First ability synergy pack integrated

Three two-ability combinations are now available. The component abilities must both activate successfully within 4.5 seconds; either order is accepted.

- **RIFT SYNCHRONY (Q + E):** Extends the active Time Fracture effect up to its cap and awards bonus score.
- **VOID REBOUND (B + F):** Extends Void Step protection and preserves a Chaos Rebound charge.
- **DECOY STORM (H + T):** Extends the Decoy Clone window, clears up to three nearby expansion projectiles, and awards bonus score.

The game announces successful combinations, records the first-synergy achievement, and saves total synergy counts in the player's archive. Keyboard and mobile POWER inputs use the same ability handler. The title menu includes a combination reminder, and the Testing Laboratory validates synergy state.

Detailed rules live in `content-packs/abilities/ability-synergies.md`.

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
