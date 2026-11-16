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
- AudioContext state, resume attempts/success/failures, SFX fallback counts, custom-audio playback failures, and the last audio error
- Average/peak frame interval, number of frames over 20 ms, and measured frame count
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
| RING SYSTEM 2.0 TEST | Starts at 72,000 score; cycles through four speed tiers and five ring formations |
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

The live diagnostic report includes the rain-active flag, rain type, remaining duration, current fade blend, and every randomized score window. Normal gameplay triggers each configured weather event at a randomly selected score inside its range.


## Blood-rain preview

The **BLOOD RAIN TEST** sandbox starts at 100,000 score and previews the crimson weather layer for 16 seconds. Normal rain has three windows: 500–5,000, 10,000–20,000, and 80,000–100,000. Blood rain then becomes the dominant weather, with seven randomized windows: 110,000–125,000, 140,000–155,000, 170,000–185,000, 200,000–215,000, 230,000–245,000, 260,000–275,000, and 285,000–300,000. There are no overlaps; from the 80,000–100,000 normal-rain window onward, the quiet gaps are 10,000 or 15,000 score points. The Test Lab checks the full schedule and verifies the minimum late-game gap.

## Distance score pacing

The passive score earned from forward movement is multiplied by **1.12** (a 12% increase). Because the base award still scales with the current movement speed, faster play also yields a slightly higher distance score. Ring pickups, boss rewards, and other score awards retain their existing values; the boost is limited to passive travel scoring.


## Ring System 2.0 preview

The **RING SYSTEM 2.0 TEST** sandbox starts in an isolated 72,000-score context and cycles through four movement-speed tiers every eight seconds: **360** (initial), **650** (mid-tier), **850** (configured base cap), and **888** (default Overdrive cap). All five formations rotate during the run: **arc**, **stair-step**, **zigzag**, **risk-reward**, and **wave**. Remaining ring and bonus timers are converted to preserve their remaining world-space distance at each speed transition. The sandbox suppresses milestone boss starts and uses the existing save-isolation snapshot/restore path, so it does not retain records or unlocks.

### Regular ring groups

Normal groups contain five rings with **42-pixel horizontal spacing**. Regular ring radius remains 12, pickup padding remains 25, and the existing collision test is unchanged in behavior. The configured base speed cap is now 850 to match the engine's previous actual cap; Overdrive retains its +38 speed (888 by default).

Group start-to-start spacing targets **1,280 world pixels**, with randomized variation of ±35 world pixels. The interval is calculated from current speed and clamped to 1.45–7.2 seconds. At the four default test speeds, deterministic spacing is approximately:

| Speed | Group interval | World-space gap |
|---:|---:|---:|
| 360 | 3.56 s | 1,280 px |
| 650 | 1.97 s | 1,280 px |
| 850 | 1.51 s | 1,280 px |
| 888 | 1.45 s | 1,287 px |

The default group-clear distance is 1,198 pixels, so even the fastest tier retains a positive gap after the last ring leaves the screen. The 1.45-second lower bound prevents high-speed flooding; the 7.2-second upper bound keeps spacing predictable during temporary slow effects.

### Formation and reward readability

- **Arc:** smooth elevated curve
- **Stair-step:** ascending or descending steps
- **Zigzag:** alternating high/low path
- **Risk-reward:** two safer outer rings worth 15 points each, framing three elevated rings worth 35 points each
- **Wave:** shallow alternating wave

The five-ring group size, 42-pixel spacing, 15/35 regular ring values, 60-point bonus value, x5 combo cap, configured combo window, pickup sound, and bonus-ring no-combo behavior are preserved. Mobile controls are untouched.

### Bonus-ring scheduling

Bonus rings still unlock at **50,000 score** and retain the early/late cadence split at **70,000 score**. After the initial unlock warm-up, the early cadence targets about **9,200 world pixels** between bonuses and the late cadence targets about **6,400 world pixels**, converted to seconds using current speed with bounded delays and ±10% timing variation.

When a bonus timer expires, the scheduler waits until no regular or bonus ring is active, then reserves the bonus ring's travel lane before the next regular group may spawn. This replaces the previous fixed ringClock > 1.1 condition, which could miss the short post-group gap at high speed. The bonus remains a separate 60-point pickup and does not enter the regular ring combo.

### Test Lab checks and limitations

The diagnostic report includes the active formation, active regular/bonus ring counts, target gap, current clearance, speed-tier interval samples, early/late bonus world-distance samples, and showcase tier. Source-level checks cover all five formation geometries, the risk/reward value split, unchanged pickup/scoring constants, nominal and randomized spacing bounds, final-ring clearance, bonus cadence distances, bonus spawn gating, transit reservation, and sandbox tier validity.

The scenario is isolated by the existing test-mode save snapshot/restore behavior; best score, achievements, unlocks, archive statistics, and other persistent records are not retained. These checks do not replace browser gameplay testing. Desktop and mobile browser passes are still needed for visual readability around hazards, real-run bonus frequency, collection feel, and frame-time/performance.



## High-score pixel glitch layers

The previous early full-screen pixel flood and the two dense pixel clusters have been replaced by three score-gated tiers:

| Score threshold | Opaque fragments |
|---:|---:|
| 200,000 | 200 |
| 500,000 | 500 |
| 1,000,000 | 1,000 |

Each fragment uses full opacity (source-over, alpha 1) and a small, crisp, varied rectangular shape. Positions are distributed through a screen-wide grid with evenly spaced cells, preventing visual clustering. The maximum tier retains the existing intended top-level intensity; it is not increased. The separate lower-score horizontal tearing and scanline effects remain in place.

The Test Lab now checks all tier boundaries (including the scores immediately before each threshold) and includes the current pixel count, next unlock tier, and tier catalog in its copyable diagnostic report. The isolated **PIXEL GLITCH TEST** sandbox cycles through all three tiers every eight seconds (200K / 200, 500K / 500, and 1M / 1,000), suppresses normal spawns for a cleaner preview, and keeps records disabled. The source-level distribution check verified exactly 200, 500, and 1,000 unique grid positions, with every screen row populated at each tier. A real browser readability pass on desktop and mobile is still required.


## Audio reliability and frame-time diagnostics

The default repository does not include the optional MP3/WAV files. Their config paths are blank by default, so the game uses its built-in Web Audio sound effects without requesting missing media files. When custom files are configured, the game reuses a small voice pool and falls back to synthesized cues if a custom asset cannot play.

AudioContext resume is asynchronous and shared across simultaneous requests. Synthesized notes are only scheduled after the context reaches the running state. Gameplay input and returning from a pause both request resume. Losing browser focus or hiding the tab pauses the run and clears held controls, preventing the game from advancing while the audio context is suspended.

The randomized **SOUND LOST** event intentionally interrupts background music, but no longer suppresses jump/ring/gameplay SFX. The HUD explicitly labels it as a music-only interruption.

The diagnostic report now contains audio context state, resume counters, custom SFX and synth fallback counts, playback failures, and the last audio error. Frame-time telemetry includes an exponential average, peak frame interval, number of frames above 20 ms, and sample count. These values are observational; they do not alter frame pacing, graphics quality, or game physics.

### AUDIO TEST sandbox

The isolated **AUDIO TEST** scenario runs a clean, obstacle-free preview and plays eight synthesized/custom cues in sequence: jump, ring, emerald, shield, shield break, rush, smash, and hit. Each cue is spaced 1.15 seconds apart. The HUD shows the last cue, total SFX event count, AudioContext state, and time to the next cue. The copyable diagnostic report also records the active cue and number of cues played. It uses the same sandbox save snapshot/restore behavior as other test scenarios.

## Combat Mechanics Pack — FLOW, DIVE SLAM, PERFECT PARRY

The **COMBAT MECHANICS TEST** sandbox stages a short, protected training sequence without changing persistent profile data. The HUD guides the player through **SPACE → J → ↓ → Z**. An eight-second Last Stand safety window prevents the training scene from ending immediately while the controls are being explored. The test boss timer and automatic volleys are held; a single training projectile approaches the player for the parry exercise.

### FLOW meter and FLOW BURST
FLOW is capped at 100. It is charged by regular rings (+5), bonus rings (+10), near misses (+14), flight kills (+6), Shadow Dash obstacle breaks (+8), Dive Slam results (+12 plus +9 per hit), and successful Perfect Parries (+27). Press **Z** at 100 to activate a 4.5-second burst: score awards receive a 1.25× multiplier, horizontal movement receives a 1.28× multiplier, and one Shadow Dash charge is restored (up to the normal three-charge cap). FLOW does not recharge while the burst is active.

### DIVE SLAM
While airborne, not in Bloody Flight, and at least 78 canvas pixels above the ground, press **↓** to begin a fast vertical dive. Landing creates a short shockwave. It can destroy nearby spikes, double spikes, blocks, rocks, active Collapse hazards, and grounded heavy/stomp enemies. Successful hits award score and FLOW. The move has a 2.35-second cooldown; an empty slam still produces a small landing reward and visual impact.

### PERFECT PARRY and RIPOSTE
While airborne, **J** opens a 0.42-second parry window (the existing Air Counter cooldown is retained). If an incoming boss projectile enters the 118-pixel parry radius during this window, it is destroyed for +240 score and +27 FLOW. The player rebounds upward slightly and sends a forward Echo Wave riposte. The wave uses the existing Echo Wave collision path, so it can hit special enemies and boss cores while their weakness window is open.

The copyable diagnostic report adds combatMechanics.flow, combatMechanics.diveSlam, and combatMechanics.perfectParry snapshots. Test Lab checks FLOW bounds, Dive Slam timer/impact state, Parry window bounds, and Combat showcase initialization. These source checks do not replace interactive browser timing and feel tests.
