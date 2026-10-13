# alienPaco // personal node

A dependency-free, image-free static cyberpunk HUD landing page for `alienpaco.anarch.lol`.

## Contents

- `index.html` — page content / links
- `styles.css` — responsive styling and animations
- `script.js` — visitor-local clock and purely decorative signal bars
- `CNAME` — GitHub Pages custom domain
- `.nojekyll` — skip GitHub's Jekyll processing

Everything works without a build step, dependencies, cookies, analytics, or external assets.

## Preview locally

From the extracted directory:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 . You can also open `index.html` directly.

## Create a new GitHub repository

1. On GitHub, create a **public** repository, e.g. `alienpaco-site` (don't initialize with a README; one is included).
2. From this directory:

```bash
git init
git add .
git commit -m "Initial alienPaco landing page"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/alienpaco-site.git
git push -u origin main
```

Replace `YOUR_USERNAME` and repo name as needed. If using HTTPS instead of SSH, use `https://github.com/YOUR_USERNAME/alienpaco-site.git`.

## Enable GitHub Pages

1. Repository → **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, then Save.
4. Under **Custom domain**, enter `alienpaco.anarch.lol`, and Save.
5. Wait for DNS/HTTPS validation, then turn on **Enforce HTTPS** when available.

The included `CNAME` file already declares the domain. GitHub may update it when you set the custom domain in Pages settings.

## Configure DNS

Wherever DNS for `anarch.lol` is managed, add:

| Type | Host/name | Target/value |
| --- | --- | --- |
| CNAME | `alienpaco` | `YOUR_USERNAME.github.io` |

Use your **GitHub account's** Pages host, *not* the repository URL and *not* `anarch.lol`. Remove conflicting `alienpaco` A/AAAA/CNAME records first. DNS changes can take time to propagate.

**Important:** Leave the existing apex (`anarch.lol`) DNS records alone. This only configures the `alienpaco` subdomain, so your professional site remains where it is.

## Customize

- Replace the GitHub URLs (currently `https://github.com/pavelrogala`) if appropriate.
- Edit copy and sections directly in `index.html`.
- Adjust colors in `styles.css` under `:root` (`--bright` defaults to `#81a2be`).
- `script.js` intentionally shows only decorative bars, not live RF telemetry or made-up metrics.
- Audio area is informational, not a fake working media player.

## Updating the site

```bash
git add .
git commit -m "Update landing page"
git push
```

GitHub Pages will publish the updated files after its deployment finishes.
