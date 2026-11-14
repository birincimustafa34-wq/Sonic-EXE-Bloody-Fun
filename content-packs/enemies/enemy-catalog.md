# Enemy Creation Project — First Pack

This catalog records the first three original enemies added after the initial Testing Laboratory milestone.

## Rift Lantern

- **ID:** `riftLantern`
- **Unlock:** 38,000 score
- **Points:** 410
- **Dimensions:** 62 × 78
- **Movement archetype:** `orbit`
- **Behavior:** Drifts vertically along an orbital curve. As it approaches the player, its vertical path is gently pulled toward the player's lane.
- **Visual identity:** A suspended dark lantern framed by a warm golden diamond, with a small spectral flame and trailing filament.
- **Gameplay role:** An early advanced enemy that makes the player pay attention to both horizontal spacing and vertical timing.

## Mirror Wraith

- **ID:** `mirrorWraith`
- **Unlock:** 72,000 score
- **Points:** 610
- **Dimensions:** 82 × 68
- **Movement archetype:** `blink`
- **Behavior:** Uses the existing blink timing to shift vertically in brief, difficult-to-predict moments.
- **Visual identity:** A fractured mirror-like body with a cold cyan outline, a bright central fracture, and crimson eyes.
- **Gameplay role:** Disrupts predictable jump and flight timing without introducing a new collision rule.

## Grave Mantis

- **ID:** `graveMantis`
- **Unlock:** 108,000 score
- **Points:** 780
- **Dimensions:** 104 × 88
- **Movement archetype:** `dash`
- **Behavior:** Accelerates toward the player's vertical lane as it closes in.
- **Visual identity:** A dark insectoid torso, long angular scythes, pale green edge-lighting, and red eyes.
- **Gameplay role:** A high-pressure late-run pursuer that forces quick lane changes or a carefully timed defensive ability.

## Integration notes

- All three enemies are part of the shared `EXPANSION_ENEMIES` data list and therefore appear in the Entity Codex's unlock catalogue.
- `orbit` is a new movement archetype; `blink` and `dash` reuse existing movement logic.
- The Testing Laboratory checks ID uniqueness and confirms that all declared movement archetypes have update logic.
- These enemies award points and count toward the existing special-enemy defeat systems when defeated.
- Their source-level syntax and integration checks passed. Interactive gameplay balance and collision behavior still require browser testing.
