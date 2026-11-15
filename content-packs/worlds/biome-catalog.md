# World and Biome Pack — First Biome Layer

The first biome layer adds three score-driven visual regions to the existing corrupted forest world. These are additive background layers: they do not change collision geometry or difficulty.

## THE GLASS WASTES

- **Tier:** 1
- **Entry score:** 70,000
- **Palette:** Cold cyan, deep teal, dark blue-black
- **Landmarks:** Tall angular glass spires, fractured vertical highlights, and floating shard lights
- **Motion:** Slow parallax drift keeps the horizon alive without distracting from threats
- **Transition notice:** `NEW BIOME // THE GLASS WASTES`

## THE STATIC CATHEDRAL

- **Tier:** 2
- **Entry score:** 140,000
- **Palette:** Deep violet, black, pale lavender
- **Landmarks:** Monumental columns, pointed arch-like outlines, and vertical signal beams
- **Motion:** The columns move at varied low parallax speeds; signal lights pulse softly
- **Transition notice:** `NEW BIOME // THE STATIC CATHEDRAL`

## THE ECLIPSE ABYSS

- **Tier:** 3
- **Entry score:** 225,000
- **Palette:** Near-black, crimson, muted red, and dark plum
- **Landmarks:** Large dark eclipse, orbiting crimson ring, and floating shadow fragments
- **Motion:** The eclipse ring slowly rotates and pulses; fragments drift at different speeds
- **Transition notice:** `NEW BIOME // THE ECLIPSE ABYSS`

## Integration notes

- The active tier is computed from score and reset at the beginning of each run.
- Visual layers are drawn behind obstacles, enemies, pickups, and the player.
- Existing forest corruption, embers, world details, and hallucination effects are retained.
- No new collision or scoring behavior is attached to these biome layers.
- The Testing Laboratory includes a biome-tier consistency check.
- JavaScript syntax and source-level integration checks passed. Full browser visual review is still required for readability, overlap, and performance.


## Randomized Rainfall Layer

The weather system now starts light rain in three early score windows. At the beginning of each run, a threshold is selected randomly from each range:

- 500–5,000
- 10,000–20,000
- 80,000–100,000

Each rain event lasts around 11–18 seconds. It uses 128 lightweight streak particles with varied lengths, speeds, opacity, and a slight diagonal wind drift. The rain fades in and out instead of switching abruptly. A very subtle cool sky wash and three low-contrast drifting cloud groups appear during the rain.

The visual layer is drawn between the biome background and the foreground world details. It does not affect collision, scoring, enemy movement, or player physics.

The Testing Laboratory reports the currently active rainfall timer and each event's randomized score threshold. Its **RAIN TEST** sandbox preset forces a short preview at 2,000 score without changing persistent records.



## Blood Rain Layer

Blood rain now becomes increasingly frequent through seven separate randomized windows:

- **110,000–125,000**
- **140,000–155,000**
- **170,000–185,000**
- **200,000–215,000**
- **230,000–245,000**
- **260,000–275,000**
- **285,000–300,000**

The late-game schedule continues up to 300,000 score. Neighboring windows from the 80K region onward are separated by 10,000 or 15,000 points, leaving deliberate quiet intervals between storms. Every window has an independent randomized trigger threshold and lasts approximately 13–20 seconds. The vivid crimson streaks, pale-red highlights, restrained dark-red sky wash, and maroon clouds are retained. Blood rain remains visual-only and does not alter collisions, player physics, or scoring. A dedicated **BLOOD RAIN TEST** sandbox preset previews the layer at 100,000 score.


## Distance score pacing

Passive forward-travel scoring receives a **1.12× multiplier**. The underlying award still scales with movement speed, so higher-speed runs earn proportionally more distance points. Collectible ring values, boss rewards, and other fixed rewards are unchanged.
