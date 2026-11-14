# Sprite and Animation Pack — Player Skin Set

The first implemented sprite milestone expands the player appearance system from four options to seven. These are appearance variations of the existing Sonic.EXE runner sprite, not separate character models.

## DEFAULT

- **Unlock:** Available from the start
- **Appearance:** Original character palette
- **Effect:** No additional aura

## BLOODSTAINED

- **Unlock:** Best score of at least 50,000
- **Appearance:** Saturated crimson shift
- **Effect:** Small animated red pixel sparks around the player

## VOID

- **Unlock:** Best score of at least 100,000
- **Appearance:** Dark monochrome, higher contrast
- **Effect:** Pulsing violet outline and small void sparks

## EMERALD

- **Unlock:** Complete the Emerald Witness secret ending
- **Appearance:** Green/turquoise palette shift
- **Effect:** Four small emerald-like fragments orbit the player

## PHANTOM

- **Unlock:** Best score of at least 150,000
- **Appearance:** Cold cyan palette shift
- **Effect:** Soft spectral afterimage and pale blue fragments

## OBSIDIAN

- **Unlock:** Best score of at least 200,000
- **Appearance:** Deep charcoal and high-contrast palette
- **Effect:** Animated violet fracture lines around the silhouette

## UNWRITTEN

- **Unlock:** Complete The Unwritten secret ending
- **Appearance:** Pale monochrome, brightened high-contrast palette
- **Effect:** White glitch fragments and short spectral line breaks

## Persistence and integration

- The selected skin is read from `EXPANSION_STORE.selectedSkin` at startup.
- Selecting a skin writes the new choice to the existing local save object.
- The Archive shows unlocked skin names dynamically.
- Locked skins are skipped while cycling.
- The Testing Laboratory checks the selected skin against its actual unlock condition.
- Skin effects are drawn as lightweight canvas effects around the existing player sprite.
- These are still palette and effect variants rather than completely separate hand-drawn sprite sheets. A future art pass can replace them with dedicated animation frames.
- JavaScript syntax and source-level checks passed. Visual polish and mobile performance still need browser review.
