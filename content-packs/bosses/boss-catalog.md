# Boss Creation Laboratory — First Pack

The first three original late-game boss designs extend the existing three-core weakness-window framework.

## THE STATIC CHOIR

- **ID / kind:** `staticChoir`
- **Milestone:** 185,000 score
- **Encounter duration:** 36 seconds
- **Reward:** 6,500 points
- **Visual identity:** Three rotating spectral faces orbit a central dark core, connected by a thin cyan ring.
- **Attack identity:** A staggered volley rhythm changes which lane is left open. The later stages accelerate the pattern.
- **Player response:** Read the changing safe lane, then use the existing weakness window to strike the three cores.
- **Design purpose:** Tests rhythm recognition rather than relying only on projectile speed.

## THE RED JUDGE

- **ID / kind:** `redJudge`
- **Milestone:** 215,000 score
- **Encounter duration:** 40 seconds
- **Reward:** 8,200 points
- **Visual identity:** A crimson crowned mask with a single moving red eye and sharp angular edges.
- **Attack identity:** Wider attack lanes and faster projectiles, with a shorter interval between volleys as the encounter escalates.
- **Player response:** Use horizontal repositioning early and save defensive abilities for the denser later stages.
- **Design purpose:** Applies direct pressure and tests quick lane changes.

## THE PALE ARCHITECT

- **ID / kind:** `paleArchitect`
- **Milestone:** 275,000 score
- **Encounter duration:** 48 seconds
- **Reward:** 15,000 points
- **Visual identity:** Rotating pale diamond and triangle frames surrounding a dark geometric core.
- **Attack identity:** Projectiles travel with diagonal vertical drift, creating moving patterns instead of purely horizontal lanes.
- **Player response:** Track both the projectile's current height and its drift direction; use the normal core weakness windows to attack.
- **Design purpose:** A post-250K endgame encounter that introduces a more spatial projectile pattern.

## Shared boss framework

- Three cores per encounter.
- Repeating weakness windows, with the current standard timing retained.
- Three escalation stages driven by the encounter timer.
- Existing boss health / timer, reward, projectiles, and victory flow remain in use.
- Each boss has a unique visual palette and custom drawing branch.
- New milestone flags reset with the run and are represented in the Boss Gallery and Entity Codex.

## Integration and testing notes

- The milestones are 185K, 215K, and 275K, placed between and after existing encounters.
- Existing boss milestones are processed in ascending order to avoid a later threshold taking priority over an earlier one when a run crosses multiple thresholds between updates.
- The Testing Laboratory checks that boss unlock milestones are unique and valid.
- JavaScript syntax and source-level integration checks passed. Full timing, readability, difficulty, and collision feel still require real browser gameplay testing.
