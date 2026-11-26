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
- Configuration bounds and speed/Overdrive cap consistency
- Custom player-image setting, configured path, and loaded-image state
- Daily Seed initialization state and active deterministic RNG seed
- Mutual exclusion of legacy and expansion boss encounters
- Restoration of the saved skin after an isolated test ends

**REFRESH / RE-RUN CHECKS** rebuilds the diagnostic snapshot. **COPY DIAGNOSTIC REPORT** creates a structured JSON snapshot with player position, current entities, hazards, boss state, biome, skin, ability cooldowns, synergies, and sandbox status. It attempts to copy the report to the clipboard; when clipboard access is unavailable, the report is shown in a selectable text area. **CLOSE PANEL** hides the panel.

## Isolated test scenarios

All scenarios are started from the title screen or Game Over screen.

| Scenario | What it stages |
|---|---|
| FREE TEST RUN | A standard run in sandbox mode |
| ENEMY SHOWCASE | Rift Lantern, Mirror Wraith, Grave Mantis, and Tempest Herald |
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

The **COMBAT MECHANICS TEST** sandbox stages a short, protected training sequence without changing persistent profile data. The HUD guides the player through **SPACE → J → ↓ → Z**. A sandbox-only Last Stand safety window remains active throughout the training run, so the player can explore the controls without the scene ending from a missed input. The test boss timer and automatic volleys are held; a single training projectile approaches the player for the parry exercise.

### FLOW meter and FLOW BURST
FLOW is capped at 100. It is charged by regular rings (+5), bonus rings (+10), near misses (+14), flight kills (+6), Shadow Dash obstacle breaks (+8), Dive Slam results (+12 plus +9 per hit), and successful Perfect Parries (+27). Press **Z** at 100 to activate a 4.5-second burst: score awards receive a 1.25× multiplier, horizontal movement receives a 1.28× multiplier, and one Shadow Dash charge is restored (up to the normal three-charge cap). FLOW does not recharge while the burst is active.

### DIVE SLAM
While airborne, not in Bloody Flight, and at least 78 canvas pixels above the ground, press **↓** to begin a fast vertical dive. Landing creates a short shockwave. It can destroy nearby spikes, double spikes, blocks, rocks, active Collapse hazards, and grounded heavy/stomp enemies. Successful hits award score and FLOW. The move has a 2.35-second cooldown; an empty slam still produces a small landing reward and visual impact. The landing shockwave can also crush grounded heavy/stomp enemies.

### PERFECT PARRY and RIPOSTE
While airborne, **J** opens a 0.42-second parry window and starts a 10-second cooldown. J only opens the window; it does not grant a free counterattack, score, or enemy kill. If an incoming boss projectile enters the 118-pixel interception radius during that window, it is destroyed for +240 score and +27 FLOW. The player rebounds upward slightly and sends a forward Echo Wave riposte. The wave can hit special enemies and boss cores while their weakness window is open. If no projectile is intercepted, the attempt is recorded as a miss and the remaining cooldown is reduced to 5.5 seconds. The HUD distinguishes **PARRY NOW**, **PERFECT PARRY**, and **PARRY MISSED**.

### RIFT SENTINEL
The **Rift Sentinel** joins the enemy pool at 145,000 score. Its cyan guard is a two-step defense: a powered collision, Echo Wave riposte, or Dive Slam first breaks the guard and exposes the Sentinel for 1.75 seconds. A separate follow-up hit during that window defeats it and unlocks **SENTINEL BROKEN**. A 0.72-second contact lock prevents one continuous powered overlap from registering as both the guard break and the finishing hit. A direct powered-contact guard break also staggers the Sentinel just ahead of the player for 1.05 seconds, with the HUD showing the remaining exposure time. Finishing it through body contact requires a newly activated ability after the guard break; simply holding Flight or one continuous Dash cannot count twice. The diagnostic report exposes the attack serial, guard lock, and stagger state. Its shield state is shown as **GUARDED** or **EXPOSED**. Use the protected, records-disabled **RIFT SENTINEL TEST** scenario to inspect it without risking a normal run.

The copyable diagnostic report adds Perfect Parry attempts, successes, misses, cooldown, and Rift Sentinel active/exposed counts to combatMechanics. It also includes the normalized gameplay configuration and whether the optional player image has loaded. Test Lab checks FLOW bounds, Dive Slam timer/impact state, Perfect Parry accounting and window bounds, combat showcase initialization, the Sentinel sandbox, configuration ranges, custom-player fallback readiness, and Daily Seed initialization. These source checks do not replace interactive browser timing and feel tests.


## Tempest enemy and boss scenarios

The **ENEMY SHOWCASE** now includes **Tempest Herald**, alongside Rift Lantern, Mirror Wraith, and Grave Mantis. The Herald unlocks at 170,000 score. Its **GUST CHARGE** warning draws a target line toward the player's current vertical lane; after the warning expires it performs a short downward lunge. Review that the warning remains visible before the lunge and that its collision uses the normal enemy hit/protection path.

The **TEMPEST ARCHON BOSS TEST** starts an isolated 300,000-score context and launches **THE TEMPEST ARCHON** directly. It is a 52-second encounter with the normal three-core weakness windows and a unique projectile pattern. Early volleys use a narrow diagonal spread; later phases widen the vertical lanes and increase horizontal speed. Each bolt now uses a limited correction toward the player's predicted lane instead of the former extreme alternating vertical fan drift, so a grounded player can be reached without making every bolt fan away. Check that the gaps rotate between volleys, that the projectile bolts remain legible, and that Echo Wave can still interact with exposed cores.

During normal score progression, an expansion boss now waits until any legacy boss encounter has ended; the two boss systems are not allowed to run concurrently. The diagnostic panel checks this invariant. Skin changes made during an isolated test are also reverted to the saved profile when that test ends. Challenge-mode selection is locked while a run is paused or active; change modes on the title or Game Over screen so a run cannot silently switch rules halfway through.

## Electrical storm preview

The **ELECTRICAL STORM TEST** starts a 19-second isolated preview of the new storm weather. Normal progression can trigger the event once per run at a randomized threshold in the **310,000–325,000** score band. Storm rain uses a stronger crosswind and a cooler, darker palette. Each lightning strike shows a vertical lane warning for **1.02 seconds**, followed by an active strike lasting **0.24 seconds**. A player outside the warned lane avoids the strike; existing shield/phase/dash/flight protection paths are respected.

The diagnostic report now includes the storm score window, current warning/active timers, total strikes, and unprotected strike hits. New live checks validate the single storm schedule entry, warning/duration bounds, and the absence of overlaps across all 11 normal-rain, blood-rain, and storm windows. Six new Test Lab rows cover Tempest Herald behavior registration, Tempest Archon milestone registration, electrical-storm schedule integrity, lightning telegraph timing, and safe staging of both isolated scenarios. The storm preview suppresses score-driven bosses and ordinary spawns so the weather can be reviewed without the normal late-game threat stack. Source-level checks should not be reported as a complete browser collision test; desktop and touch-device playthroughs remain necessary.

## Particle update allocation

Particle updates now use stable in-place compaction: expired particles are removed without constructing a new filtered array every frame. The same particle objects, motion integration, lifetime cutoff, render order, and visual density are retained. Check frame-time telemetry during particle-heavy moments to evaluate garbage-collection stability; no claim of a fixed FPS gain is made without device-specific profiling.


## Rift Reprise, Rift Lancer and Cinder Regent

**RIFT REPRISE** records vertical position and velocity every 75 ms, retains no more than 24 samples, and targets a point 0.68 seconds in the past. The Test Lab checks finite sample values, bounded history length, cooldown range, and includes the current history/cooldown in the report. Verify that the ability only recalls the player's vertical movement and that its 0.58-second protection is recognized by legacy obstacles, boss shots, enemies, hazards, and the Shadow pursuit. Its cooldown is 23 seconds and the input is **Y**.

**RIFT LANCER TEST** stages the new 195K elite in isolation. The Lancer should track the player's vertical lane, display the **LANCE LOCK** warning for 0.82 seconds, and then lunge for 0.44 seconds. A narrowly avoided strike can award 145 score and 10 FLOW once per attack. Its custom silhouette and attack state are included in live diagnostics. It shares the existing maximum enemy count, reward, and collision pipeline.

**CINDER REGENT BOSS** starts the new 330K, 56-second encounter directly. Its three-core vulnerability system remains active. Verify the expanding 4/7/8-lane cinder volleys, alternating diagonal drift, shifting safe gap, dedicated ember-shard drawing, and defeat achievement. The encounter is staged with normal spawns suppressed and Test Lab records disabled.

## Cinderfall weather

The **CINDERFALL WEATHER** scenario starts a 20-second preview of the new randomized **355K–370K** weather event. It draws 104 small amber ash motes with a warm smoky sky treatment. Cinderfall is explicitly ambient-only: it creates no collision, damage, or score changes. The Test Lab checks its score-window registration, confirms the new window remains separated from the existing schedules, and verifies the isolated preview flag.

## Particle burst budget

Particle updates continue to compact the existing array in place. New burst emission is additionally bounded by **1,800 active particles**. The budget never deletes particles that are already alive; at an extreme saturation point it simply prevents further cosmetic burst allocations until active particles expire. Test Lab reports active count, maximum count, and whether the live collection remains inside the budget. Profile on real target hardware before attributing a specific FPS improvement.

These are source-level integration checks and isolated-preview state checks. They are not a substitute for manually validating attack timing, difficulty, readability, and touch controls in a real browser session.

## Cinder Regent trajectory and safe-lane checks

Magnet Core also processes each pickup collection in place rather than building a temporary `concat()` array on every frame.

The Cinder Regent now pauses before each cinder volley for a **0.72-second telegraph**. The warning displays a projected safe corridor from the firing side toward the projectile/player collision edge. Its prediction accounts for the volley’s shared vertical drift and bounded oscillation. The report exposes the active warning, projected lane Y, live cinder-arc count, and trajectory validity.

The projectile-stability check confirms that each live cinder arc has finite position, baseline, age, vertical velocity, and phase data. The warning check validates the gap index and keeps the safe-lane target within the playable vertical bounds.

## Rift Lancer evasion and timing checks

`LANCE LOCK` now lasts **0.82 seconds** before the **0.44-second** lunge. The extra lunge impulse is reduced so the base enemy travel speed does not stack with an excessively strong second burst. A player who narrowly clears the Lancer vertically while its hitbox crosses the player receives **145 score and 10 FLOW**, at most once per lunge. The on-screen combat toast reads `RIFT EVADE`. Test Lab checks finite warning/lunge timers and the per-attack reward guard.

These additions are source-level and live-state invariants. They do not replace manual boss/entity playthroughs, mobile control checks, or frame-time profiling on target hardware.


## Void Aurora weather

The **VOID AURORA TEST** starts a protected 22-second preview of the new **390K–410K** score-band event. Four drifting translucent ribbons in mint, teal, cyan, and violet sweep across the upper sky, with a small deterministic star shimmer. The event creates no rain drops, gameplay particles, collisions, damage, score changes, or player movement effects. The Test Lab validates the schedule registration and isolated preview state, while the diagnostic report includes the randomized trigger window and completion flag.

## Mobile ability selection and activation

The mobile special-power controls now have separate **SELECT** and **CAST** actions. Tapping SELECT only changes the selected ability; it does not activate anything. CAST uses the selected ability. A separate **RIFT REPRISE Y** shortcut bypasses the selector. This removes the previous behavior where a single tap both activated a power and immediately advanced to the next one.

## Weather and late-game sandbox isolation

The weather previews mark already-passed score windows as completed so an older rain/storm event cannot start immediately after the chosen preview. The high-score Lancer, Cinder Regent, Cinderfall, and Void Aurora scenarios also suppress the legacy boss milestones before the first simulation tick. Ambient event clocks and bonus pickup clocks are held during the isolated weather previews.


## Tempest Archon boss test — damage-enabled practice

The **TEMPEST ARCHON BOSS TEST** is a lethal combat practice scenario, not a protected showcase. It explicitly clears Last Stand, player invulnerability, shields, landing grace, Phase Shift, Echo Dash, Rift Reprise, Glitch Shield, Void Step, rebound charges, and Shadow Dash before starting the boss. A direct hit from an electric volley must trigger the normal hit/game-over path. The shared boss initializer now seeds its upper-right render coordinates before the first frame, avoiding a one-frame undefined-position draw. The HUD states that lightning contact is lethal during this test.

The live Test Lab checks that the Tempest scenario has no automatic protection, that the boss render coordinates are finite and in the arena, and that the boss/spawn isolation remains active. Ambient score events, weather windows, gravity shifts, star/blood-moon events, choices, and bonus pickup clocks are held during this scenario so unrelated events cannot obscure the boss pattern. This separates a genuine collision test from a visual-only preview.
