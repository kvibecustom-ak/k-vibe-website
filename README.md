# K-Vibe Website

A simple static catalog website for a custom DTF T-shirt printing business, organized into Men's, Women's, and TFI Collection.

## Files
- `index.html` — website content
- `styles.css` — website design
- `script.js` — menu, filters, order buttons, copy-email interaction

## Add your real T-shirt images

1. Create an `images` folder.
2. Add your images, for example:
   - `images/design-1.jpg`
   - `images/design-2.jpg`
3. In `index.html`, replace a placeholder such as:

```html
<div class="design-image placeholder dark">
  <span>ADD YOUR<br>DESIGN IMAGE</span>
</div>
```

with:

```html
<img class="design-image" src="images/design-1.jpg" alt="K-Vibe design">
```

For best results, use square or nearly-square product images.

## Free GitHub Pages hosting

1. Sign in to GitHub.
2. Click **New repository**.
3. Name it something like `k-vibe-website`.
4. Keep it **Public**.
5. Create the repository.
6. Upload `index.html`, `styles.css`, `script.js` and your `images` folder.
7. Commit the files.
8. Open **Settings → Pages**.
9. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
10. Click **Save**.

GitHub will publish your site at a URL similar to:

`https://YOUR-GITHUB-USERNAME.github.io/k-vibe-website/`

## Custom domain later

You can later buy a domain such as `kvibecustom.com` and connect it to GitHub Pages.

## Editing products

Duplicate any `.design-card` block in `index.html`, change:
- category
- image
- product/design name
- `data-design` value

No database is required.
