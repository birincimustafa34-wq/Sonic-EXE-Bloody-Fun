# Ability Synergy Pack — First Three Combinations

Each combination requires two component abilities to activate successfully within a 4.5-second window. Either activation order is accepted. A failed or cooling-down ability does not count as an activation.

## RIFT SYNCHRONY

- **Input pair:** Q + E (Phase Shift and Time Fracture)
- **Order:** Either order
- **Window:** 4.5 seconds
- **Effect:** Adds 1.4 seconds to the active Time Fracture duration, capped at 5.2 seconds
- **Reward:** 450 bonus score
- **Visual:** Cyan burst and on-screen synergy announcement
- **Intent:** Reward precise timing between mobility and time control

## VOID REBOUND

- **Input pair:** B + F (Chaos Rebound and Void Step)
- **Order:** Either order
- **Window:** 4.5 seconds
- **Effect:** Extends Void Step protection to at least 4.8 seconds and ensures one Chaos Rebound charge remains available
- **Reward:** 425 bonus score
- **Visual:** Violet burst and on-screen synergy announcement
- **Intent:** Create a short defensive recovery window without granting unlimited protection

## DECOY STORM

- **Input pair:** H + T (Decoy Clone and Chain Lightning)
- **Order:** Either order
- **Window:** 4.5 seconds
- **Effect:** Extends Decoy Clone to at least 5.6 seconds and clears up to three nearby expansion boss projectiles
- **Reward:** 475 bonus score
- **Visual:** Violet/cyan burst and on-screen synergy announcement
- **Intent:** Turn an offensive ability and a distraction tool into a timed projectile-control option

## Shared behavior

- Only successfully activated abilities are registered.
- Ability cooldowns remain in force.
- The synergy timer is 4.5 seconds from the first successful activation.
- A completed synergy clears the pending first ability so it cannot immediately chain into another unintended combo.
- Keyboard input and the mobile POWER-cycle control use the same routing function.
- Each successful combo increments the current run's synergy count.
- The first successful combo unlocks **ABILITY SYNCHRONY**.
- Total synergies are saved to the Archive at the end of a run.
- The Testing Laboratory validates the current run count and pending combo state.

## Regression notes

- Verify Q+E and E+Q.
- Verify B+F and F+B.
- Verify H+T and T+H.
- Verify no combo occurs when the first ability is cooling down or the time window expires.
- Verify grounded Air Counter (J) does not register as a successful ability.
- Verify mobile POWER and keyboard input produce the same result.
- JavaScript syntax and source-level checks passed; interaction timing and balance still require browser gameplay tests.
