import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = await readFile(join(root, "index.html"), "utf8");
const script = await readFile(join(root, "script.js"), "utf8");
const styles = await readFile(join(root, "styles.css"), "utf8");

assert.match(html, /id="peptide-library"/, "renders a peptide library section");
assert.match(html, /id="library-card-grid"/, "renders a library card grid");
assert.match(html, /id="library-drawer"/, "renders a peptide detail drawer");
assert.doesNotMatch(html, /id="bond-lab"/, "removes the old bond lab section");
assert.doesNotMatch(html, /id="curriculum"/, "removes the old learning path section");

assert.match(script, /const peptideLibrary\s*=/, "defines dedicated peptide library data");
assert.match(script, /const libraryCategories\s*=/, "defines library categories");

const categoryIds = ["metabolic", "recovery", "skin", "longevity", "research"];
for (const id of categoryIds) {
  assert.match(script, new RegExp(`id: "${id}"`), `includes ${id} library category`);
}

const requiredEntries = [
  "Insulin",
  "GLP-1",
  "BPC-157 research discussions",
  "GHK-Cu / copper tripeptide-1",
  "Epitalon",
  "RUO labeling",
];

for (const entry of requiredEntries) {
  assert.match(script, new RegExp(entry.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `includes ${entry}`);
}

assert.match(styles, /--fixed-header-clearance:/, "defines a shared fixed header clearance");
assert.match(styles, /\.library-drawer\s*{[^}]*top:\s*var\(--fixed-header-clearance\)/s, "offsets the library drawer below the fixed header");
assert.match(styles, /\.library-drawer-backdrop\s*{[^}]*inset:\s*var\(--fixed-header-clearance\)\s+0\s+0/s, "keeps the drawer backdrop below the fixed header");
assert.match(styles, /\.peptide-library\.reveal(?:\.is-visible)?\s*{[^}]*transform:\s*none/s, "prevents reveal transforms from re-parenting the fixed library drawer");

assert.match(script, /const researchUseHotspots\s*=/, "defines Research Use room hotspots");
assert.match(script, /research:\s*{[\s\S]*interaction:\s*"hotspots"/, "enables hotspot interaction for Research Use");
assert.match(script, /research:\s*{[\s\S]*embeddedCopy:\s*true/, "uses clean hotspot scene for Research Use instead of permanent overlay panels");

const requiredResearchHotspots = [
  "research-peptide-definition",
  "scientific-workflow",
  "analysis-observation",
  "handling-preparation",
  "samples-variables",
  "sourcing-storage",
  "quality-documentation",
  "identity-verification",
];

for (const hotspotId of requiredResearchHotspots) {
  assert.match(script, new RegExp(`id: "${hotspotId}"`), `includes ${hotspotId} Research Use hotspot`);
}

assert.match(script, /What \\"Research Peptide\\" Means/, "includes the Research Peptide definition panel");
assert.match(script, /Quality Documentation/, "includes the quality documentation trust panel");
assert.match(styles, /data-room-theme="research"[\s\S]*--hotspot-accent:\s*#49bfd3/i, "applies cyan Research Use hotspot theme");
