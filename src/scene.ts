// The front page of Wednesday 18 November 2026, drawn from scratch.
// Layout: masthead with the date in large type, one main story with a
// drawn scene (the Shenzhen APEC summit), then eight panels covering
// the rest of the day's world news. All geometry, no images, no fonts.

import {
  Canvas,
  INK,
  PAPER,
  RED,
  BLUE,
  SKY,
  SEA,
  GOLD,
  GREEN,
  GREY,
  WHITE,
  BROWN,
  type Rgb,
} from "./raster.ts";

const SKIN: Rgb = [233, 196, 158];
const NAVY: Rgb = [30, 40, 70];
const TOWER: Rgb = [58, 74, 96];
const GROUND: Rgb = [44, 58, 76];
const VIRUS: Rgb = [198, 84, 84];
const PURPLE: Rgb = [110, 84, 150];
const DARK: Rgb = [52, 52, 60];

function outline(c: Canvas, x: number, y: number, w: number, h: number, col: Rgb, t: number): void {
  c.rect(x, y, w, t, col);
  c.rect(x, y + h - t, w, t, col);
  c.rect(x, y, t, h, col);
  c.rect(x + w - t, y, t, h, col);
}

// --- small flags, drawn as simple fields of colour -----------------------

function flagUS(c: Canvas, x: number, y: number): void {
  c.rect(x, y, 52, 36, WHITE);
  for (let i = 0; i < 7; i += 2) c.rect(x, y + i * 5.2, 52, 3, RED);
  c.rect(x, y, 24, 18, BLUE);
  for (let r = 0; r < 3; r++)
    for (let s = 0; s < 4; s++) c.rect(x + 3 + s * 5.5, y + 3 + r * 5.5, 2, 2, WHITE);
}

function flagChina(c: Canvas, x: number, y: number): void {
  c.rect(x, y, 52, 36, RED);
  c.circle(x + 10, y + 10, 5, GOLD);
  c.circle(x + 21, y + 5, 2, GOLD);
  c.circle(x + 24, y + 11, 2, GOLD);
  c.circle(x + 24, y + 18, 2, GOLD);
  c.circle(x + 21, y + 24, 2, GOLD);
}

function flagRussia(c: Canvas, x: number, y: number): void {
  c.rect(x, y, 52, 12, WHITE);
  c.rect(x, y + 12, 52, 12, BLUE);
  c.rect(x, y + 24, 52, 12, RED);
}

// --- the main scene: Shenzhen skyline, three leaders at a table ----------

function mainScene(c: Canvas, x: number, y: number, w: number, h: number): void {
  c.rect(x, y, w, h, SKY);
  c.circle(x + w - 84, y + 32, 20, GOLD); // sun
  // clouds
  c.circle(x + 150, y + 28, 13, WHITE);
  c.circle(x + 172, y + 24, 16, WHITE);
  c.circle(x + 196, y + 29, 12, WHITE);
  c.circle(x + 660, y + 20, 11, WHITE);
  c.circle(x + 680, y + 17, 14, WHITE);
  // skyline
  const base = y + h;
  c.rect(x + 16, base - 62, 54, 62, TOWER);
  c.rect(x + 82, base - 80, 44, 80, TOWER);
  c.rect(x + 138, base - 54, 60, 54, TOWER);
  c.rect(x + 700, base - 70, 52, 70, TOWER);
  c.rect(x + 764, base - 56, 58, 56, TOWER);
  c.rect(x + 834, base - 74, 46, 74, TOWER);
  // tapered tower, centre-left
  c.tri(x + 300, base, x + 346, base, x + 330, base - 104, TOWER);
  c.tri(x + 300, base, x + 330, base - 104, x + 316, base - 104, TOWER);
  c.line(x + 323, base - 104, x + 323, base - 118, TOWER, 3);
  c.rect(x + 560, base - 90, 40, 90, TOWER);
  c.rect(x + 612, base - 58, 56, 58, TOWER);
  // ground
  c.rect(x, base - 18, w, 18, GROUND);
  // flags on poles behind the table
  const poleTop = y + 22;
  const poleBot = y + 88;
  for (const px of [x + 396, x + 468, x + 540]) c.line(px, poleTop, px, poleBot, INK, 3);
  flagUS(c, x + 399, poleTop);
  flagChina(c, x + 471, poleTop);
  flagRussia(c, x + 543, poleTop);
  // three seated figures
  for (const cx of [x + 424, x + 496, x + 568]) {
    c.circle(cx, y + 100, 10, SKIN);
    c.rect(cx - 13, y + 110, 26, 26, NAVY);
  }
  // the table
  c.rect(x + 372, y + 112, 248, 9, BROWN);
  c.rect(x + 388, y + 121, 8, 11, BROWN);
  c.rect(x + 596, y + 121, 8, 11, BROWN);
  outline(c, x, y, w, h, INK, 2);
}

// --- panel icons (drawn in a 56px-tall strip) ----------------------------

function iconMissile(c: Canvas, cx: number, cy: number): void {
  c.rect(cx - 56, cy + 12, 112, 16, SEA);
  c.tri(cx - 42, cy + 14, cx + 42, cy + 14, cx, cy - 12, GREEN); // island
  c.line(cx - 26, cy + 18, cx + 16, cy - 20, GREY, 5); // missile body
  c.tri(cx - 34, cy + 26, cx - 18, cy + 22, cx - 24, cy + 10, GOLD); // flame
  c.line(cx + 24, cy - 26, cx + 34, cy - 16, GOLD, 3); // burst
  c.line(cx + 34, cy - 26, cx + 24, cy - 16, GOLD, 3);
  c.line(cx + 29, cy - 31, cx + 29, cy - 11, GOLD, 3);
}

function iconBridge(c: Canvas, cx: number, cy: number): void {
  c.rect(cx - 56, cy + 14, 112, 14, SEA);
  c.rect(cx - 52, cy - 18, 6, 34, INK); // towers
  c.rect(cx + 46, cy - 18, 6, 34, INK);
  c.line(cx - 56, cy - 4, cx - 12, cy - 4, INK, 4); // deck, left
  c.line(cx + 12, cy + 2, cx + 56, cy + 2, INK, 4); // deck, right (dropped)
  c.line(cx - 49, cy - 18, cx - 12, cy - 4, INK, 2); // cables
  c.line(cx + 49, cy - 18, cx + 12, cy + 2, INK, 2);
  c.circle(cx, cy - 14, 7, GREY); // smoke
  c.circle(cx + 9, cy - 20, 5, GREY);
  c.circle(cx - 8, cy - 21, 5, GREY);
}

function iconVirus(c: Canvas, cx: number, cy: number): void {
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const x1 = cx + Math.cos(a) * 15;
    const y1 = cy + Math.sin(a) * 15;
    const x2 = cx + Math.cos(a) * 24;
    const y2 = cy + Math.sin(a) * 24;
    c.line(x1, y1, x2, y2, VIRUS, 3);
    c.circle(x2, y2, 4, VIRUS);
  }
  c.circle(cx, cy, 15, VIRUS);
  c.circle(cx - 5, cy - 4, 3, WHITE);
  c.circle(cx + 6, cy + 3, 3, WHITE);
  c.circle(cx + 1, cy - 8, 2, WHITE);
}

function iconParliament(c: Canvas, cx: number, cy: number): void {
  c.tri(cx - 48, cy - 6, cx + 48, cy - 6, cx, cy - 26, GOLD);
  for (const dx of [-36, -12, 12, 36]) c.rect(cx + dx - 3, cy - 4, 7, 22, INK);
  c.rect(cx - 48, cy + 18, 96, 6, INK);
  c.circle(cx, cy - 30, 3, GOLD);
}

function iconTrains(c: Canvas, cx: number, cy: number): void {
  c.rect(cx - 58, cy - 16, 42, 38, BLUE);
  c.rect(cx - 52, cy - 10, 30, 12, WHITE);
  c.rect(cx + 16, cy - 16, 42, 38, RED);
  c.rect(cx + 22, cy - 10, 30, 12, WHITE);
  c.line(cx - 4, cy - 22, cx + 4, cy - 6, GOLD, 4); // impact star
  c.line(cx + 4, cy - 22, cx - 4, cy - 6, GOLD, 4);
  c.line(cx, cy - 26, cx, cy - 2, GOLD, 4);
  c.rect(cx - 58, cy + 24, 116, 3, INK); // track
}

function iconPlane(c: Canvas, cx: number, cy: number): void {
  c.tri(cx - 40, cy - 14, cx + 28, cy + 8, cx - 28, cy + 12, DARK); // fuselage
  c.tri(cx - 6, cy + 2, cx + 12, cy + 20, cx - 18, cy + 16, DARK); // wing
  c.tri(cx - 40, cy - 14, cx - 30, cy - 24, cx - 24, cy - 10, DARK); // tail
  c.circle(cx - 48, cy - 20, 5, GREY); // smoke trail
  c.circle(cx - 58, cy - 26, 4, GREY);
  c.circle(cx + 2, cy - 24, 3, GREY);
  c.rect(cx - 60, cy + 24, 120, 3, BLUE); // snowy ground line
  c.circle(cx - 30, cy + 21, 2, BLUE);
  c.circle(cx + 22, cy + 21, 2, BLUE);
  c.circle(cx + 44, cy + 21, 2, BLUE);
}

function iconGlobe(c: Canvas, cx: number, cy: number): void {
  c.circle(cx, cy, 21, SEA);
  c.circle(cx - 8, cy - 7, 7, GREEN);
  c.circle(cx + 9, cy + 4, 6, GREEN);
  c.circle(cx - 2, cy + 12, 4, GREEN);
  c.tri(cx + 16, cy - 26, cx + 30, cy - 18, cx + 15, cy - 14, GREEN); // leaf
  c.line(cx + 30, cy - 28, cx + 38, cy - 22, GOLD, 3); // rays
  c.line(cx + 22, cy - 34, cx + 26, cy - 26, GOLD, 3);
}

interface Panel {
  tag: string;
  color: Rgb;
  icon?: (c: Canvas, cx: number, cy: number) => void;
  headline: string[];
  detail: string[];
  list?: string[];
}

function drawPanel(c: Canvas, p: Panel, x: number, y: number, w: number, h: number): void {
  outline(c, x, y, w, h, INK, 2);
  c.rect(x, y, w, 24, p.color);
  c.text(p.tag, x + 10, y + 5, 2, WHITE);
  if (p.list) {
    c.textLines(p.list, x + 10, y + 36, 2, 18, INK);
    return;
  }
  if (p.icon) p.icon(c, x + Math.floor(w / 2), y + 58);
  const headY = y + 96;
  c.textLines(p.headline, x + 10, headY, 3, 26, INK);
  const detY = headY + (p.headline.length - 1) * 26 + 21 + 8;
  c.textLines(p.detail, x + 10, detY, 2, 18, DARK);
}

// --- the page --------------------------------------------------------------

export function renderFrontPage(): Canvas {
  const c = new Canvas(1024, 1024, PAPER);
  outline(c, 14, 14, 996, 996, INK, 3);
  outline(c, 22, 22, 980, 980, INK, 1);

  // Masthead
  c.textCentered("THE WORLD IN ONE PICTURE", 512, 36, 6, INK);
  c.rect(44, 90, 936, 3, INK);
  c.rect(44, 97, 936, 1, INK);
  c.textCentered("WEDNESDAY 18 NOVEMBER 2026", 512, 108, 6, RED);
  c.textCentered("THE DAY'S WORLD NEWS IN A SINGLE IMAGE - DRAWN ENTIRELY BY CODE", 512, 160, 2, DARK);
  c.rect(44, 186, 936, 2, INK);

  // Main story
  c.text("APEC SUMMIT OPENS IN SHENZHEN, CHINA", 44, 200, 3, RED);
  mainScene(c, 44, 230, 936, 132);
  c.textLines(
    ["TRUMP HEADS TO CHINA FOR", "HISTORIC THREE-WAY SUMMIT", "WITH XI AND PUTIN"],
    44,
    374,
    5,
    44,
    INK,
  );
  c.text("XI AND PUTIN HUDDLE FIRST - NUCLEAR ARMS, UKRAINE AND IRAN ON THE TABLE", 44, 508, 2, DARK);
  c.rect(44, 534, 936, 3, INK);

  // Secondary panels, two rows of four
  const panels: Panel[] = [
    {
      tag: "MIDDLE EAST",
      color: RED,
      icon: iconMissile,
      headline: ["US JETS HIT", "QESHM SITE", "IN IRAN"],
      detail: ["TANKERS BURN IN", "HORMUZ STRAIT"],
    },
    {
      tag: "UKRAINE WAR",
      color: BLUE,
      icon: iconBridge,
      headline: ["UKRAINE", "HITS CRIMEA", "BRIDGE"],
      detail: ["ZELENSKY: SPAN", "PARTLY DESTROYED"],
    },
    {
      tag: "HEALTH",
      color: GREEN,
      icon: iconVirus,
      headline: ["MEASLES", "ALL-CLEAR", "ENDS IN US"],
      detail: ["PAHO: OVER 5,400", "CASES THIS YEAR"],
    },
    {
      tag: "ISRAEL",
      color: PURPLE,
      icon: iconParliament,
      headline: ["EISENKOT TO", "FORM NEW", "GOVERNMENT"],
      detail: ["ALLY IS SPEAKER,", "A NETANYAHU BLOW"],
    },
    {
      tag: "EUROPE",
      color: BLUE,
      icon: iconTrains,
      headline: ["TRAINS", "COLLIDE", "NEAR PRAGUE"],
      detail: ["DOZENS INJURED", "IN MORNING CRASH"],
    },
    {
      tag: "RUSSIA",
      color: DARK,
      icon: iconPlane,
      headline: ["ARMY PLANE", "CRASHES IN", "SIBERIA"],
      detail: ["19 KILLED AS JET", "COMES DOWN"],
    },
    {
      tag: "ENVIRONMENT",
      color: GREEN,
      icon: iconGlobe,
      headline: ["FIVE WIN", "EARTHSHOT", "PRIZES"],
      detail: ["WILLIAM GIVES", "EACH $1.3M"],
    },
    {
      tag: "ALSO TODAY",
      color: INK,
      list: [
        "• ITALY APPROVES",
        "ANTISEMITISM LAW",
        "",
        "• BIDEN MEMOIR:",
        "PUTIN A TEENAGER,",
        "ZELENSKY MOODY",
        "",
        "• 4 NATIONS URGE",
        "GAZA AID ACCESS",
        "AMID FLOODS",
      ],
      headline: [],
      detail: [],
    },
  ];
  const xs = [44, 282, 520, 758];
  const ys = [548, 780];
  panels.forEach((p, i) => {
    drawPanel(c, p, xs[i % 4], ys[Math.floor(i / 4)], 222, 216);
  });

  return c;
}
