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

The weather system can start one rainfall event in each of four score windows. At the beginning of each run, a threshold is selected randomly from each range:

- 500–5,000
- 10,000–20,000
- 80,000–100,000
- 140,000–175,000

Each rain event lasts around 11–18 seconds. It uses 128 lightweight streak particles with varied lengths, speeds, opacity, and a slight diagonal wind drift. The rain fades in and out instead of switching abruptly. A very subtle cool sky wash and three low-contrast drifting cloud groups appear during the rain.

The visual layer is drawn between the biome background and the foreground world details. It does not affect collision, scoring, enemy movement, or player physics.

The Testing Laboratory reports the currently active rainfall timer and each event's randomized score threshold. Its **RAIN TEST** sandbox preset forces a short preview at 2,000 score without changing persistent records.



## Blood Rain Layer

Two additional randomized weather events can occur once per run:

- **90,000–120,000:** crimson blood rain
- **160,000–200,000:** a second blood-rain window

Each window receives its own randomized trigger threshold and lasts approximately 13–20 seconds. The effect recolors the falling streaks to vivid crimson with a pale-red highlight, adds a restrained dark-red sky wash, and shifts the drifting clouds toward deep maroon. Blood rain takes priority over a normal-rain trigger whose randomized threshold falls inside the same score window, preventing the two weather palettes from overlapping. Rain remains a visual-only effect and does not alter collisions, player physics, or scoring. A dedicated **BLOOD RAIN TEST** sandbox preset previews the layer at 100,000 score.
