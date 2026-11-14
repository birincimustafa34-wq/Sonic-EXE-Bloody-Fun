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
