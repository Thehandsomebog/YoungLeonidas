import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const index = await readFile(join(root, "index.html"), "utf8");
const blog = await readFile(join(root, "blog.html"), "utf8");
const script = await readFile(join(root, "site.js"), "utf8");
const styles = await readFile(join(root, "site.css"), "utf8");
const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
const feed = await readFile(join(root, "feed.xml"), "utf8");

assert.match(index, /Pet Peptide Atlas/, "uses the pet-focused brand");
assert.match(index, /id="atlas"/, "renders the interactive health atlas");
assert.match(index, /id="library"/, "renders the peptide library");
assert.match(index, /id="story"/, "renders the Leonidas founder story");
assert.match(index, /assets\/leonidas-story\.jpg/, "uses the Leonidas story portrait");
assert.match(index, /personal experience, not evidence of a treatment/, "frames the founder story responsibly");
assert.match(index, /id="concerns"/, "renders concern-led entry points");
assert.match(index, /data-atlas-target="mobility"/, "connects concerns to atlas states");
assert.match(index, /id="future"/, "explains the education-first commerce roadmap");
assert.match(index, /id="faq-title"/, "answers core trust questions");
assert.match(index, /"@type": "FAQPage"/, "publishes FAQ search metadata");
assert.match(index, /species-button/, "renders the dog and cat selector");
assert.match(index, /Veterinary context is not an optional footnote/, "renders the editorial safety standard");
assert.doesNotMatch(index, /Interactive Peptide Atlas/, "removes the retired human-focused title");

assert.match(blog, /data-blog-filter="all"/, "renders journal filters");
assert.match(blog, /4 launch articles/, "publishes the initial journal collection");
assert.match(blog, /application\/rss\+xml/, "advertises the RSS feed");
assert.match(script, /const atlasContent\s*=/, "defines health atlas content");
assert.match(script, /data-atlas-target/, "connects health concerns to atlas content");
assert.match(script, /dataset\.blogCategory/, "supports journal filtering");
assert.match(styles, /\.article-layout/, "includes long-form article layout styles");
assert.match(styles, /@media \(max-width: 620px\)/, "includes a mobile breakpoint");

const articleNames = (await readdir(join(root, "articles"))).filter((name) => name.endsWith(".html"));
assert.equal(articleNames.length, 4, "publishes four launch articles");

for (const name of articleNames) {
  const article = await readFile(join(root, "articles", name), "utf8");
  assert.match(article, /rel="canonical"/, `${name} has a canonical URL`);
  assert.match(article, /"@type":"BlogPosting"|"@type": "BlogPosting"/, `${name} has BlogPosting schema`);
  assert.match(article, /Veterinary safety note/, `${name} includes a veterinary safety note`);
  assert.match(article, /References/, `${name} includes references`);
  assert.match(sitemap, new RegExp(name.replace(".", "\\.")), `${name} appears in the sitemap`);
  assert.match(feed, new RegExp(name.replace(".", "\\.")), `${name} appears in the RSS feed`);
  const relatedArticleLinks = new Set(
    [...article.matchAll(/href="\.\/([^"#]+\.html)"/g)]
      .map((match) => match[1])
      .filter((href) => href !== name),
  );
  assert.ok(relatedArticleLinks.size >= 2, `${name} links to at least two related articles`);
}

for (const utilityPage of ["privacy.html", "terms.html"]) {
  const utilitySource = await readFile(join(root, utilityPage), "utf8");
  assert.match(utilitySource, /name="robots" content="noindex,follow"/, `${utilityPage} is excluded from search results`);
  assert.doesNotMatch(sitemap, new RegExp(utilityPage.replace(".", "\\.")), `${utilityPage} is excluded from the sitemap`);
}

const htmlFiles = [
  "index.html",
  "blog.html",
  "privacy.html",
  "terms.html",
  "404.html",
  ...articleNames.map((name) => join("articles", name)),
];

for (const relativeFile of htmlFiles) {
  const filePath = join(root, relativeFile);
  const source = await readFile(filePath, "utf8");
  const hrefs = [...source.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    const resolved = normalize(join(dirname(filePath), href.split("?")[0]));
    await access(resolved).catch(() => {
      assert.fail(`${relativeFile} links to missing local file: ${href}`);
    });
  }
}

console.log(`Verified pet atlas, journal, ${articleNames.length} articles, local links, sitemap, and RSS feed.`);
