# RAVE Thumbnail Portfolio

## Important
The included demo thumbnails are placeholders. Replace them with your own JPG/PNG/WebP files when ready.

## 1. Install Node.js
Install the current LTS version of Node.js from the official Node.js website.

## 2. Open this folder
Open `rave-thumbnail-portfolio` in VS Code.

## 3. Install dependencies
Open the VS Code terminal and run:

```bash
npm install
```

## 4. Start the website
Run:

```bash
npm run dev
```

Open the localhost address shown by Vite.

## 5. Add your thumbnails
Put your images in:

`public/thumbnails/`

Use these names for the included starter data:

- thumbnail-01.jpg
- thumbnail-02.jpg
- thumbnail-03.jpg
- thumbnail-04.jpg
- thumbnail-05.jpg
- thumbnail-06.jpg

You can use PNG/WebP too, but update the filename in `src/main.jsx`.

## 6. Change your details
Open `src/main.jsx`.

At the top, replace:

- `YOUR_INVITE`
- `YOUR_CHANNEL`
- `YOUR_HANDLE`
- `YOUR_EMAIL@example.com`
- `YOUR_DISCORD_USERNAME`

You can also edit the `WORK` array to change thumbnail titles/categories.

## 7. Build for deployment

```bash
npm run build
```

The production files will be in the `dist` folder.

## Deploy
The easiest options are Vercel or Netlify. Import the project/repository, use:

Build command: `npm run build`

Output directory: `dist`

## Recommended next upgrades
- Add real client/project pages.
- Add a services + pricing section.
- Add testimonials.
- Add a contact form.
- Connect a custom domain.


## Contact form setup (important)

The website uses Formspree so inquiries can be sent to your email without building a backend.

1. Create a free account at https://formspree.io/
2. Create a new form.
3. Set the destination email to `collabxrave@gmail.com`.
4. Copy your Formspree endpoint. It will look like:
   `https://formspree.io/f/xxxxxxxx`
5. Open `src/main.jsx`.
6. Replace:
   `https://formspree.io/f/YOUR_FORMSPREE_FORM_ID`
   with your real Formspree endpoint.
7. Restart `npm run dev` if necessary.

The inquiry form collects name, email, Discord/social, project type, and project details.
