# Lambda House logo pack

This pack translates the selected quiet wordmark into editable SVG geometry. It does not depend on a font file.

## Core colours

- Carbon: `#070707`
- Signal red: `#FF2A1A`
- Warm white: `#F5F2EA`
- Steel grey: `#A7ABB5`

## Files

- `lambda-house-wordmark-transparent.svg`: default website wordmark on a transparent background.
- `lambda-house-wordmark-warm.svg`: carbon wordmark on warm white.
- `lambda-house-wordmark-dark.svg`: reversed wordmark on carbon.
- `lambda-house-wordmark-monochrome.svg`: one-colour fallback for printing and constrained placements.
- `lambda-house-favicon.svg`: small lambda mark with a signal-red left stroke and carbon right stroke.
- `favicon.ico`: browser favicon fallback.
- `lambda-house-favicon-32.png`: standard small browser icon.
- `lambda-house-favicon-180.png`: Apple touch icon.
- `lambda-house-favicon-512.png`: high-resolution app and social icon source.
- `lambda-house-instagram-profile.svg`: warm-white Instagram profile source with circular-crop-safe spacing.
- `lambda-house-instagram-profile-1080.png`: upload-ready Instagram profile image.
- PNG exports mirror the SVG variants for tools that cannot use SVG.

## Usage rules

- Use the transparent SVG in the website header.
- Use the warm or dark version only when the background must be controlled by the asset itself.
- Keep the wordmark horizontal. Do not stack, stretch, outline, rotate, or add a location to it.
- Keep clear space around the wordmark equal to at least the height of its lowercase letters.
- Do not use the full wordmark below 120 px wide. Use the favicon mark for smaller placements.
- Location belongs in event copy and interface metadata, never inside the permanent logo.

## Website setup

The files above live at `public/brand/` and are the source of truth for the
marks. The website itself does not link to them.

**The wordmark is inlined**, not loaded as an image. `src/components/wordmark.tsx`
carries the same paths and the same `16 / 3` box, drawn with
`stroke="currentColor"` so it takes the colour of the text around it. That is
what lets one component serve both the warm-white header and any future light
background without shipping a second asset. Recolouring to warm white on carbon
is the sanctioned reversed treatment.

**The icons use Next.js file conventions**, not `<link>` tags. `src/app/icon.svg`,
`src/app/favicon.ico`, and `src/app/apple-icon.png` are picked up by the
framework and emitted with the right tags and cache-busting hashes
automatically. Adding manual `<link rel="icon">` tags would duplicate them.

If you do reference a mark as an image somewhere else, keep the rendered aspect
ratio at `16 / 3`: set either width or height in CSS and leave the other
automatic.

Anything in this pack changing means changing `wordmark.tsx` to match. The
geometry is currently identical in both places.
