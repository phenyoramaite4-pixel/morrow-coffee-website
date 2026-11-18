# Morrow Coffee Roasters - website

A static, six-page business website (Home, About, Our Menu, How We Brew, Who We Serve, Visit). No build step and no animation.

## Files
- `index.html` - all pages (switched by the address hash: #home, #about, #menu, #brew, #serve, #visit)
- `css/style.css` - styles (colours are CSS variables at the top; dark mode included)
- `js/main.js` - page switching, photo slots, booking form confirmation
- `images/` - put real photos here (see images/README.txt)

## Run locally
Open `index.html` in a browser, or run `npx serve .` in this folder.

## Host it
Upload this folder to any static host: Netlify (drag and drop the folder), GitHub Pages, Vercel, or your hosting's web root (public_html).

## Before going live
- Replace the placeholder name, address, phone, email, prices and opening hours in `index.html`.
- Remove the "Website demo for client presentation" footer line and the "Prices shown are examples" notes.
- Add real photos to `images/`.
- The booking form (Visit page) only shows an on-page confirmation. Connect it to the cafe's email or a form service (for example Formspree or Netlify Forms) by changing the submit handler at the bottom of `js/main.js`.
- Fonts (Playfair Display, DM Sans) load from Google Fonts, so an internet connection is needed to see them.
