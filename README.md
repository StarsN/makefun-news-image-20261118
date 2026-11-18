# news-image-20261118 — One Image, One Day

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/StarsN/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/StarsN/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

[make.fun bounty: Sum up 18 November's world news in one image](https://make.fun/bounty/news-image-20261118)

A newspaper front page for **Wednesday 18 November 2026**, drawn from scratch
by a small Node program — no libraries, no network, no fonts, no images.
Every pixel is computed at run time from a hand-written 5×7 bitmap font and
plain geometry, so the output is fully deterministic.

## The image

- **Top story:** the APEC summit opens in Shenzhen — Trump heads to China,
  Xi and Putin huddle first, and on Thursday the three leaders hold their
  first-ever trilateral summit, with nuclear arms control, Ukraine and
  Iran on the table.
- **Also in the picture:** US jets strike an IRGC missile site on Iran's
  Qeshm Island as tankers burn in the Strait of Hormuz (Iranian drones had
  targeted a US radar in Bahrain), Ukraine hits the Crimean bridge again
  (Zelensky: a span partly destroyed), the US loses its measles-free status
  (PAHO: over 5,400 cases this year), Israel's president asks Eisenkot to
  form a government, two trains collide near Prague, a Russian army plane
  crashes in Siberia killing 19, and Prince William hands five Earthshot
  winners $1.3M each — plus Italy's new antisemitism law, Biden's memoir,
  and four nations urging Gaza aid access amid floods.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `out/entry.png` — 1024×1024, deterministic (run it twice, the bytes
are identical). With no `MAKEFUN_OUTPUT_DIR` set it writes to `/output` when
that directory exists, else `./out`.

## How it works

- `main.ts` — entry point: renders the page and writes the PNG.
- `src/scene.ts` — the front page itself: masthead, summit scene, panels.
- `src/raster.ts` — a tiny software rasteriser and the 5×7 bitmap font.
- `src/png.ts` — a minimal PNG encoder (zlib + hand-rolled CRC-32).

Standard library only; nothing is installed and nothing is fetched.
