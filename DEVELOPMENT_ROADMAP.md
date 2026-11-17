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

## Ring System 2.0 — speed-aware formations

### Integrated refinement pass

The first Ring System 2.0 pass already introduced five formations and speed-aware timing. This refinement tightens the spacing model, makes the risk/reward route more legible, and fixes a bonus-ring scheduling edge case at high speed.

- **Speed model:** the configurable base engine cap is now aligned at 850 (the previous config value of 650 did not match the engine's actual hard-coded 850 cap). Overdrive retains its existing +38 speed, giving a default maximum of 888. Initial speed, mid-tier speed, base cap, and Overdrive cap are all represented in the ring showcase.
- **Regular groups:** five rings remain 42 world pixels apart. Group start intervals target approximately **1,280 world pixels** between groups, with ±35 pixels of controlled variation. The interval is derived from current world speed and bounded to 1.45–7.2 seconds; the lower bound preserves a clear gap after the final ring at the fastest default speed, while the upper bound covers temporary slow effects.
- **Formations:** **arc**, **stair-step**, **zigzag**, **risk-reward**, and **wave** remain in the rotation. Risk/reward now has two lower, safer outer rings and a three-ring elevated center line, making the 15-point versus 35-point choice more readable.
- **Bonus rings:** the 50K unlock, 70K early/late cadence split, separate 60-point reward, and no-combo behavior are preserved. Subsequent bonus delays target about 9,200 world pixels before 70K and 6,400 after 70K, scaled by current speed. A due bonus now waits for all regular/bonus rings to clear and reserves its travel lane before the next regular group is scheduled. This removes the previous fixed ringClock > 1.1 gate that could leave too little spawn window after a group cleared at high speed.
- **Unchanged pickup rules:** regular ring radius 12, bonus radius 14, pickup padding 25, five-ring groups, 42-pixel horizontal spacing, 15/35 regular rewards, 60-point bonus reward, x5 combo cap, configured combo window, ring sound, and existing collision path are retained.

### Test Lab and regression coverage

The isolated **RING SYSTEM 2.0 TEST** sandbox starts at 72,000 score and cycles through four speed tiers (default 360, 650, 850, and 888) every eight seconds. It rotates all five formations and preserves remaining world-space ring/bonus timers when changing speed, avoiding artificial burst spawns at tier boundaries. The existing sandbox snapshot/restore path continues to disable persistent records and unlock writes.

Source-level Test Lab checks now cover formation geometry, the risk/reward high/low split, pickup and scoring constants, nominal and randomized world-space group gaps, clearance beyond the final ring, early/late bonus world-distance cadence, bonus spawn gating, bonus transit reservation, and the active showcase tier. The diagnostic report exposes target gap, measured clearance, speed samples, bonus-distance samples, and sandbox tier.

### Remaining verification

JavaScript syntax and targeted source-level regression checks are required before each integration. Browser testing is still needed to judge formation readability against hazards, actual bonus frequency, combo feel, and performance at desktop and mobile sizes. Keyboard and touch controls were not changed by this pass.



## High-score pixel glitch tiers

The wide-screen colored pixel interference is now delayed until the late game and split into three exact density tiers: **200,000 score → 200 pixels**, **500,000 → 500 pixels**, and **1,000,000 → 1,000 pixels**. The existing maximum visual level is preserved as the final tier rather than increased.

Fragments are fully opaque, small, crisp rectangles, and distributed across a screen-wide stratified grid so they do not form dense clusters. The earlier low-level scanline and short tearing effects remain separate. Test Lab validates the score boundaries and reports the active pixel count and next tier. Its isolated **PIXEL GLITCH TEST** sandbox cycles through 200,000 / 200 pixels, 500,000 / 500 pixels, and 1,000,000 / 1,000 pixels every eight seconds, with records disabled.

Browser gameplay review is still required to confirm visual readability at the three thresholds on desktop and mobile.

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

## Audio reliability and rendering efficiency

The audio layer now waits for AudioContext resume before scheduling synthesized notes and coalesces concurrent resume requests. Custom audio uses a reusable voice pool instead of cloning a new audio element for every pickup; rejected or unavailable custom playback falls back to the built-in synthesized sound. Because the repository does not bundle the optional MP3/WAV files, default config paths are blank to avoid missing-asset network requests.

The **SOUND LOST** horror event remains a music-only interruption. Gameplay confirmations such as jump and ring pickup continue to play. When the browser loses focus or hides the tab, the run pauses and clears held controls; returning and resuming requests audio wake-up again.

Rendering work was reduced without changing canvas resolution, sprite output, effect thresholds, or gameplay rules: full-canvas snapshots for glitch tearing were replaced with narrow strip copies, high-score glitch pixel positions/shapes are cached per density tier instead of recalculated with multiple trigonometric calls every frame, and background trees are drawn in a single pass rather than allocating two filtered arrays per frame.

Test Lab now records audio resume/SFX fallback diagnostics and frame-time averages/peaks/slow-frame counts. These metrics are observational and do not automatically lower visual quality or alter gameplay. Source-level syntax and targeted checks should be accompanied by real browser play tests on desktop and mobile.

The Test Lab includes a dedicated **AUDIO TEST** sandbox that plays eight gameplay cues in sequence and displays the AudioContext state and SFX event count, allowing both audible confirmation and diagnostic inspection without waiting for random gameplay events.

## Combat Mechanics Pack — FLOW / DIVE SLAM / PERFECT PARRY

The combat layer now has three connected player-driven systems:

- **FLOW:** a 0–100 skill meter charged by pickups, near-misses, air kills, dash breaks, slam hits, and successful parries. **Z** activates a 4.5-second scoring/movement burst and restores one Shadow Dash charge.
- **DIVE SLAM:** pressing **↓** while sufficiently airborne begins a fast downward attack. Its landing shockwave clears nearby ground obstacles and Collapse hazards, and can crush heavy ground enemies. Cooldown: 2.35 seconds.
- **PERFECT PARRY / RIPOSTE:** **J** while airborne opens a 0.42-second timing window. Intercepting a nearby boss projectile awards score and FLOW, rebounds the player, and sends an Echo Wave forward to attack enemies or exposed boss cores.

Mobile controls include J and Z buttons. The **COMBAT MECHANICS TEST** sandbox offers a records-disabled training stage with a sandbox-long safety window, held boss volleys, staged ground targets, an approaching practice projectile, and on-screen counters for Flow bursts, parries, slams, and broken targets. Test Lab reports the three mechanics' counters and live cooldown/charge state. Source syntax and initial integration checks passed; interactive timing and balance still require hands-on desktop/mobile browser play.


## Combat Mechanics Polish — PERFECT PARRY and RIFT SENTINEL

The Perfect Parry input is now a timing commitment rather than an automatic counterattack. Pressing **J** while airborne opens a 0.42-second parry window and starts a 10-second cooldown. Only an incoming projectile caught inside the 118-pixel interception radius awards the +240 score / +27 FLOW reward and launches an Echo Wave riposte. A missed window is tracked separately and reduces the remaining cooldown to 5.5 seconds; it does not award score or destroy a nearby enemy. The HUD shows activation, success, and miss feedback, while diagnostics report attempts, successes, misses, and cooldown.

A new elite enemy, **Rift Sentinel**, becomes eligible at 145,000 score. Its cyan guard must be broken before a distinct follow-up hit can defeat it. A powered collision, Echo Wave riposte, or Dive Slam can expose it for 1.75 seconds. The initial powered contact has a 0.72-second contact lock and a 1.05-second forward stagger, holding the Sentinel just ahead of the player long enough to prepare a distinct follow-up attack. Finishing it with body contact requires a newly activated ability (tracked by an attack serial), so a single held flight or one continuous dash cannot count as both hits. The exposed state is visibly distinct and a successful defeat unlocks the **SENTINEL BROKEN** achievement. Test Lab includes a protected, records-disabled **RIFT SENTINEL TEST** scenario, plus checks for its guard state and Perfect Parry accounting.


## November 2026 — Tempest content and runtime refinement

### Enemy pack extension

**Tempest Herald** joins the enemy catalog at **170,000 score**. It hovers with a readable warning state, projects a short target line toward the player's current lane, then commits to a fast downward gust dive. The warning and lunge have distinct visual states, and the creature uses a dedicated animated Canvas silhouette rather than a reused generic placeholder. Its behavior remains inside the existing five-enemy capacity and shared collision/reward pipeline.

### Boss pack extension

**THE TEMPEST ARCHON** is added to the 300,000-score milestone as a 52-second, 18,000-reward encounter. It retains the established three-core weakness-window framework while using a unique storm volley: the safe lane shifts across each volley and diagonal drift becomes stronger in later phases. A dedicated Canvas boss model, lightning projectile renderer, entrance cue, Boss Gallery entry, reset flag, and isolated Test Lab scenario are integrated.

### Late-game weather extension

The new **ELECTRICAL STORM** schedule uses one randomized activation threshold in the **310,000–325,000** score band. Storm rain has its own wind, streak, cloud, and sky treatment. Each lightning strike displays a **1.02-second telegraph** before a **0.24-second active strike**; collision is limited to the shown vertical lane, allowing deliberate dodging or protection. The existing rain and blood-rain windows are preserved. With the later Cinderfall addition, Test Lab validates all 12 scheduled weather windows as disjoint.

### Runtime allocation refinement

Particle lifetime updates now compact the existing particle array in place rather than allocating a fresh filtered array on every update tick. Particle motion, lifetime rules, drawing, and density are unchanged. This is an allocation/garbage-collection refinement, not a reduction in visual quality.

### Verification scope

The updated inline game script passes a JavaScript parse check and source-level invariants cover the new enemy, boss, projectile style, storm schedule, telegraph timers, and isolated test controls. The Test Lab adds six checks for the Tempest enemy/boss, electrical-storm scheduling/telegraph state, and both isolated scenario launch states. These source checks are not a substitute for a full manual browser playthrough, especially for timing and collision feel.


## Late-game expansion — Rift Reprise, Cinder Regent and Cinderfall

### Defensive movement ability

**RIFT REPRISE** is bound to **Y**. A bounded rolling history samples the player's vertical position and velocity every 75 ms, retains at most 24 entries, and can restore a sample from approximately 0.68 seconds earlier. The ability provides 0.58 seconds of protection and has a 23-second cooldown. It is deliberately a vertical movement recall, not a global time rewind. The timer is included in the shared protection paths for legacy obstacles, boss projectiles, expansion enemies, hazards, and the Shadow pursuit. The HUD, keyboard hint, mobile ability cycle, cooldown panel, and diagnostic report expose its state.

### New late-game enemy

**Rift Lancer** joins the catalog at **195,000 score**. A dedicated Canvas silhouette makes its dark violet armour and extended lance readable. It tracks the player's current vertical lane, displays a **0.72-second LANCE LOCK** warning, then commits to a short **0.38-second** fast lunge. It uses the existing enemy capacity and collision/reward pipeline and has its own protected Test Lab showcase.

### New boss encounter

**THE CINDER REGENT** is introduced at **330,000 score** as a **56-second / 22,000-reward** boss. It reuses the established three-core weakness-window framework while adding a separate three-stage attack family. Its ember volleys widen from four to seven and then eight lanes; the safe gap rotates, diagonal drift alternates between volleys, and projectile speed rises with each phase. Its Canvas model, animated orbiting embers, shard projectile renderer, entrance cue, Boss Gallery record, achievement, progression flag, and isolated boss test are integrated.

### Cinderfall weather

**CINDERFALL** can start once per run at a randomized threshold in the **355,000–370,000** score band and lasts **18–22 seconds**. It uses 104 lightweight wind-borne ash motes, a warm smoky sky wash, and a small in-world weather label. It is ambient only: no collision, damage, lightning, or gameplay penalty is added. The weather scheduler preserves the existing events and the Test Lab validates all **12** disjoint score windows.

### Allocation guard and validation scope

Burst particles now respect an **1,800 active-particle ceiling**, preventing pathological growth in unusually dense effect chains while leaving existing particles and the established update/render path intact. Test Lab checks the budget and reports active/maximum counts alongside Reprise history/cooldown and the Cinderfall schedule. The new **RIFT LANCER TEST**, **CINDER REGENT BOSS**, and **CINDERFALL WEATHER** scenarios run with records disabled.

The inline script passes a JavaScript parse check and source-level invariants verify registration, timer bounds, protection wiring, disjoint weather windows, and isolated scenario setup. These checks do not prove real device frame rates or replace manual timing/collision playthroughs on desktop and touch devices.

### Combat readability and allocation-efficiency pass — November 2026

- **Cinder Regent:** added a 0.72-second pre-volley warning and a projected safe-rift corridor. The forecast follows the volley’s shared vertical drift and reaches the projectile/player collision edge rather than stopping at the player’s far side.
- **Projectile stability:** expansion shots now derive vertical position from a fixed spawn baseline, elapsed simulated age, velocity, and bounded oscillation. This removes cumulative per-frame sine displacement while retaining the existing projectile artwork and movement feel.
- **Rift Lancer:** increased the `LANCE LOCK` warning to 0.82 seconds, set the committed lunge to 0.44 seconds, and reduced the additional lunge impulse. A narrowly avoided lunge awards 145 score and 10 FLOW once per attack.
- **Frame-loop allocations:** pickup, ember, trail, and world-detail collections use in-place compaction instead of allocating replacement arrays each frame. No particle cap or visual-quality reduction was introduced by this pass.
- **Validation:** Test Lab now checks projectile finiteness/anchoring, safe-lane bounds, and Lancer timing. The inline script passed a syntax parse and source-level assertions. Manual desktop/mobile browser playtests and device profiling remain required before claiming measured FPS gains.
