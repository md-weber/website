# Release Strategy — flutter-explained.dev

_Last updated: 2026-04-22_

This document tracks everything between "where the site is today" and "ready
to share publicly". Items are grouped by impact and ordered by the
recommended execution order.

Legend: `[ ]` open · `[~]` in progress · `[x]` done

---

## Phase 1 — Blockers (do before any public link is shared)

### 1.1 Future-dated `ldash` post is invisible
- [x] Decide the publish date for `content/posts/ldash/index.md`
  (set to `2026-04-22` to match public share).
- [x] `buildFuture = false` in `hugo.toml` — post now publishes.

### 1.2 `content/ttf.md` is published without front matter
- [x] **Resolved:** file removed from the repo (was draft-only / no front matter).

### 1.3 Strip leftover PaperMod theme + overrides
- [x] Move `layouts/shortcodes/audio.html` into the ManaQuest theme so the
  `personal_dev_story` post keeps working.
- [x] Delete dead PaperMod-style overrides:
  - `layouts/partials/consent.html`
  - `layouts/partials/extend_footer.html`
  - `data/consent.yaml`
- [x] Remove the PaperMod submodule:
  ```sh
  git submodule deinit -f themes/PaperMod
  git rm -rf themes/PaperMod
  rm .gitmodules
  ```
- [x] Clean up the placeholder values in `hugo.toml`:
  - `keywords` and `images` set to real site values; swap to `assets/og-default.png` in Phase 2.1 when added
  - `apple_touch_icon` / `safari_pinned_tab` removed until real assets (Phase 2.2)

### 1.4 Stop committing build artifacts
- [x] Add to `.gitignore`: `public/`, `resources/`, `.hugo_build.lock`, `.DS_Store`
- [x] Untrack with `git rm -r --cached` (and DS_Store) — see git history
- [x] Two-step commit: `.gitignore` first, then untrack
- [ ] (Optional) gitignore `.cursor/`.

---

## Phase 2 — Strongly recommended (high impact, low effort)

### 2.1 SEO + social meta tags
Currently `themes/ManaQuest/layouts/partials/head.html` only emits title,
description, canonical, CSS, and favicon. Add to `head.html`:

- [ ] Open Graph tags:
  - `og:title`, `og:description`, `og:type`, `og:url`, `og:image`,
    `og:site_name`, `article:published_time`, `article:author`,
    `article:tag`.
- [ ] Twitter Card tags:
  - `twitter:card = summary_large_image`, `twitter:title`,
    `twitter:description`, `twitter:image`.
- [ ] `<link rel="alternate" type="application/rss+xml" href=".../index.xml">`.
- [ ] `<link rel="alternate" type="application/json" href=".../index.json">`
  (optional — used by your search).
- [ ] JSON-LD `BlogPosting` schema in `single.html` (author, datePublished,
  headline, image, description).
- [ ] Default sharing image at `assets/og-default.png` (1200x630), wired to
  `params.images` in `hugo.toml`.

### 2.2 Favicon set
- [ ] Replace placeholder values in `[params.assets]`:
  - `favicon` → already set
  - `apple_touch_icon` → real `/apple-touch-icon.png` (180x180)
  - `safari_pinned_tab` → real SVG mask icon (or drop the line)
- [ ] Optionally add a `theme-color` meta and a `manifest.webmanifest`.

### 2.3 Lazy-load the personal-story MP3 (13 MB)
`content/posts/personal_dev_story/personal_story_blog.mp3` ships on every
visit to that post.

- [ ] Switch the `audio` shortcode to `preload="none"` so it only fetches
  on play.
- [ ] (Optional) host the MP3 on Firebase Storage / R2 / S3 instead of git
  to keep the repo light.

### 2.4 Backfill missing post images
Older posts (the 2019–2022 Flutter ones) have no `image` in front matter,
so the home grid + `/posts/` list show empty cards.

- [ ] Add a per-post `image` (page-bundle resource), or
- [ ] Add a tasteful fallback in the list templates (subtle gradient card
  or generated thumbnail).

### 2.5 Replace external Contentful CDN images
`content/posts/a-terminal-real-time-application-with-dart-sockets.md`
loads images from `images.ctfassets.net`. If that account ever lapses,
the post breaks.

- [ ] Migrate to a page bundle (`content/posts/a-terminal-real-time-application-with-dart-sockets/index.md` + local images).

---

## Phase 3 — Polish (post-launch)

### 3.1 Move home-page character sheet to config
The "Character Sheet" block is hardcoded in
`themes/ManaQuest/layouts/index.html:13-69`. Updating "Now Playing"
shouldn't require a theme edit.

- [ ] Define `[params.characterSheet]` (or `[[params.characterSheet.stats]]`)
  in `hugo.toml` and consume it from `index.html`.

### 3.2 Replace emoji icons with inline SVG
`⚔️ 📺 👨‍👧‍👦 🐺 🗡️ 🎮` render very differently across Windows/Linux/macOS.

- [ ] Swap for inline SVGs (or a simple icon font). Bonus: themable colour.

### 3.3 404 page upgrade
- [ ] Add quick links (latest 3 posts, `/posts/`, `/tags/`) so visitors
  bouncing on a stale URL have somewhere to go.

### 3.4 Code-block highlighting consistency
- [ ] `pygmentsUseClasses = true` in `hugo.toml:10` is currently overridden
  by the inline-style output of
  `themes/ManaQuest/layouts/_default/_markup/render-codeblock.html`.
  Either drop the unused setting or align the render hook with the
  classes-based theme.

### 3.5 Robots / sitemap polish
- [ ] Confirm `searchHidden` pages are excluded from sitemap if desired.
- [ ] Consider adding a `<meta name="robots" content="noindex">` on
  `/search/` (utility page).

### 3.6 Bitcoin Tracker subsection
- [ ] Audit `content/bitcoin-tracker/privacy-policy.md` separately if the
  app uses Firebase Analytics, Crashlytics, ads, or any SDK that
  collects identifiers.

### 3.7 Imprint nice-to-have
- [ ] Add a phone number (recommended by BGH I ZR 228/03 — not strictly
  required since you provide an email).
- [ ] Distinguish `info@` vs `privacy@` so visitors know which to use.

---

## Phase 4 — Already done (changelog)

- [x] Click-to-load YouTube embed (`themes/ManaQuest/layouts/shortcodes/youtube.html`,
  `themes/ManaQuest/static/js/youtube-embed.js`).
- [x] Smoothed YouTube placeholder hover animation, optical play-button
  centering, `prefers-reduced-motion` support.
- [x] Privacy policy rewritten:
  - Real hosting disclosure (Firebase Hosting / Hetzner DNS).
  - YouTube reframed as click-to-load consent (Art. 6(1)(a) GDPR).
  - Removed claims about non-existent newsletter, contact form,
    interactive features, Google Search Console.
  - Added supervisory authority (LfDI BW).
- [x] Removed empty `[params.analytics.google]` block from `hugo.toml`.
- [x] Added `referrer` and `robots` meta tags to `head.html`.

---

## Suggested release checklist (the night before)

1. `hugo server -D` locally — click through every nav item and the new
   posts.
2. Run Lighthouse on `/`, `/posts/`, one article. Target ≥ 95 on all four
   axes.
3. Validate one OG preview at <https://www.opengraph.xyz/> after deploying
   to a Firebase preview channel.
4. Confirm `https://flutter-explained.dev/sitemap.xml` and
   `https://flutter-explained.dev/index.xml` are reachable.
5. Submit sitemap to Google Search Console **only** if you decide to set
   it up later (not currently planned).
6. Announce on Nostr / YouTube / wherever you usually post.
