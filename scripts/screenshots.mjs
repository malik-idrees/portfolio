// Captures a full-page screenshot of every project in data/portfolio.js,
// saves them to public/projects/<slug>.jpg and lists them in data/screenshots.json.
//
// Usage (run on your own computer):
//   npm run screenshots              -> all projects
//   npm run screenshots -- loftbox   -> only the given slug(s)

import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataFile = join(root, "data", "portfolio.js");
const mapFile = join(root, "data", "screenshots.json");
const outDir = join(root, "public", "projects");
mkdirSync(outDir, { recursive: true });

// Pull { url, slug } pairs out of data/portfolio.js
const src = readFileSync(dataFile, "utf8");
const projects = [];
const re = /url:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(src))) projects.push({ url: m[1], slug: m[2] });

const only = process.argv.slice(2);
const todo = only.length ? projects.filter((p) => only.includes(p.slug)) : projects;

const map = JSON.parse(readFileSync(mapFile, "utf8") || "{}");
// Optional: set CHROME_PATH to use an existing Chrome/Chromium install
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const { url, slug } of todo) {
  process.stdout.write(`• ${slug.padEnd(30)} `);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    // Scroll through the page so lazy-loaded images and animations appear
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 150));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1500);
    const file = `${slug}.jpg`;
    await page.screenshot({ path: join(outDir, file), fullPage: true, type: "jpeg", quality: 80 });
    map[slug] = `/projects/${file}`;
    console.log("saved");
  } catch (err) {
    console.log(`failed (${err.message.split("\n")[0]})`);
  }
}

await browser.close();
writeFileSync(mapFile, JSON.stringify(map, null, 2) + "\n");
console.log(`\nDone. ${Object.keys(map).length} screenshots listed in data/screenshots.json`);
