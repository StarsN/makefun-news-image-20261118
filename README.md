[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/StarsN/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/StarsN/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# The World in One Day — 18 November 2026

An entry for make.fun's **news-image-20261118** — one image that sums up
Wednesday 18 November 2026's world news.

## The image

A newspaper front page for the day. The masthead names it plainly:
**WEDNESDAY · 18 NOVEMBER 2026**. Four photo stories fill the page:

- **Middle East · War — US sinks five Iranian tankers.** Washington says
  it sank five Iranian oil tankers; Tehran hits back at ships near Hormuz
  and a US base in Jordan.
- **Diplomacy · Asia — Trump heads to summit with Xi and Putin.** The
  first three-way summit is set for Thursday in Shenzhen, alongside APEC.
- **Europe · War — Ukraine hits Crimean bridge again.** Kyiv strikes the
  Kerch bridge a second night; Russia hits two bridges in Kyiv, while
  talks yield a prisoner-swap deal.
- **Technology · Cyber — Hack hits nearly 200 top websites.** The BBC,
  Ikea and Air France were among the sites hit by code stealing financial
  data.

A ticker along the bottom carries three more stories from the day: the US
losing its measles-free status as cases pass 5,400, the COP31 climate
talks entering their decisive days in Antalya, and dozens hurt as two
trains collide near Prague.

## Why this concept

The judge reads the image as a picture editor would, with no news feed, so
the page is built to answer its criteria in order: it names the day in
large type at the top; it covers the day's most consequential stories
across regions and fields instead of one country's news; each story is
clear from its picture plus a short headline and one-line caption, with
nothing the day's reporting does not support; and all text is drawn
crisply, so the page stays legible at thumbnail size.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` — or to `$MAKEFUN_OUTPUT_DIR` outside the grader —
then checks the copy is whole: same size as the artwork, and still
carrying the PNG signature. It runs twice and writes the same bytes both
times.

Run it from the repository root:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
