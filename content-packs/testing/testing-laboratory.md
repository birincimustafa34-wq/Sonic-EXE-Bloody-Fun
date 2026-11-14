# Testing Laboratory

The Testing Laboratory is a developer-facing tool for checking the live engine and trying isolated gameplay scenarios without affecting normal player progress.

## Opening the lab

Open the title screen or Game Over overlay and choose **TEST LAB**. The diagnostic panel can also be viewed from the pause overlay. Sandbox launch buttons appear only on the title and Game Over screens; they are intentionally hidden while a normal run is paused so that the current run cannot be discarded accidentally.

## Read-only diagnostics

The lab reports:
- Current game state, score, speed, and run duration
- Player position and movement bounds
- Active enemies, hazards, pickups, shots, and capacity limits
- Boss data and milestone catalog
- Biome tier consistency
- Enemy ID and movement archetype validity
- Skin unlock and persistence state
- Ability cooldowns and synergy state
- Canvas availability, menu event bindings, and local-storage accessibility

**REFRESH / RE-RUN CHECKS** rebuilds the diagnostic snapshot. **COPY DIAGNOSTIC REPORT** creates a structured JSON snapshot with player position, current entities, hazards, boss state, biome, skin, ability cooldowns, synergies, and sandbox status. It attempts to copy the report to the clipboard; when clipboard access is unavailable, the report is shown in a selectable text area. **CLOSE PANEL** hides the panel.

## Isolated test scenarios

All scenarios are started from the title screen or Game Over screen.

| Scenario | What it stages |
|---|---|
| FREE TEST RUN | A standard run in sandbox mode |
| ENEMY SHOWCASE | Rift Lantern, Mirror Wraith, and Grave Mantis |
| BOSS TEST | THE STATIC CHOIR at its late-game score context |
| SYNERGY TEST | Starts at 60,000 score with the relevant ability cooldowns ready for all three combinations |
| HAZARD TEST | Laser Grid, Gravity Zone, and Spike Corridor |
| GLASS WASTES | Starts at 80,000 score to review the first biome |
| STATIC CATHEDRAL | Starts at 160,000 score to review the second biome |
| ECLIPSE ABYSS | Starts at 230,000 score to review the third biome |

## Save isolation

- Sandbox sessions display **TEST SANDBOX // RECORDS DISABLED** on the game HUD.
- The diagnostic report contains runtime state only; it does not include the contents of the player's local save.
- Calls to the normal save helper are blocked while a sandbox is active.
- The current local player profile is snapshotted when the sandbox starts.
- At Game Over, the in-memory player profile is restored from that snapshot.
- Best score, achievements, unlocks, daily challenge completion, collected records, and archive statistics are not retained from sandbox runs.
- The standard Start button always launches a normal run.

## Important limitations

The lab currently performs source/runtime data checks; it is not a complete automated browser test framework. Scenario staging is deterministic, but later gameplay inside a sandbox can still involve the game's usual random systems. Real browser checks are still needed for timing, collision feel, mobile controls, visual readability, and performance.

## Suggested next additions

- Copyable diagnostic report with scenario ID and current score/time
- Targeted collision test presets for each enemy and hazard
- Touch-screen control checks
- Screenshot/visual comparison workflow for new sprites and biomes


## Weather preview

The **RAIN TEST** sandbox preset starts a short rain preview at 2,000 score. It is useful for reviewing streak angle, opacity, cloud movement, fade timing, and visual readability without waiting for a random score threshold.

The live diagnostic report includes the rain-active flag, remaining duration, current fade blend, and all four randomized score windows. Normal gameplay triggers these events once per run, at a randomly selected score inside each configured range.


## Blood-rain preview

The **BLOOD RAIN TEST** sandbox starts at 100,000 score and previews the crimson weather layer for 16 seconds. In normal play, one blood-rain event is scheduled at a random score between 90,000–120,000 and a second between 160,000–200,000. When a normal-rain trigger falls inside one of those blood-rain windows, the blood-rain event takes priority so the two visual treatments do not stack. The diagnostic report shows the current rain type and both sets of randomized thresholds.
