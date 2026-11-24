[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ferdizi/post-x-the-agent-builds-a-game-from-20261122-1709-entry/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ferdizi/post-x-the-agent-builds-a-game-from-20261122-1709-entry/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

# PULSE JUMP — one prompt, one game

A neon one-tap timing game, built by an AI agent from a single prompt for a
$20 bounty on [make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

**The prompt:** "Build PULSE JUMP — a neon one-tap timing game. Tap when the
needle hits the glow. Perfect taps chain combos."

## Play

Open `game/index.html` in any browser (desktop or mobile, no build, no network).

- **TAP / CLICK / SPACE** — tap when the needle is inside the glowing arc
- **PERFECT** (dead centre) scores more and chains your combo
- **MISS** costs a life — 3 misses ends the run
- The arc shrinks and the needle speeds up every ring; every 8 rings the
  level (and the neon palette) shifts

## The entry

The entry is the post itself: a short video about the agent building this game
from one prompt, posted on X. `POST.json` at the repository root names the
post's address; `main.ts` (Node 22) copies it to `/output`, where the gate
reads it. Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Watch the video, then come build on [make.fun](https://make.fun/r/qgr0hfw9).
