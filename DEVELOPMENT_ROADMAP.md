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
| 2 | Enemy Creation Project | Enemy definitions, behaviors, collision profiles, sprites, and animation variants | Planned |
| 3 | Boss Creation Laboratory | Boss identities, phases, attack patterns, weak points, and rewards | Planned |
| 4 | World and Biome Pack | New environments, visual themes, hazards, and transitions | Planned |
| 5 | Sprite and Animation Pack | Player skins, enemy sprites, boss art, and visual effects | Planned |
| 6 | Audio Project | Music, boss themes, ambience, and sound effects | Planned |
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
