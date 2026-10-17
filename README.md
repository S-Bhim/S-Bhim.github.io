# Soumabha Bhim - Portfolio

A minimal, responsive portfolio for data analytics, statistics, and machine-learning internships and placements. Built with HTML, CSS, and JavaScript. No installation, paid services, API keys, or build command required.

## Preview on your laptop

Extract the ZIP, open the github-portfolio folder, and double-click index.html. Keep styles.css, script.js, and assets beside it.

## Add your photo

1. Choose a clear head-and-shoulders photo.
2. Save it in assets as profile.jpg, with this exact lowercase name. Do not rename a PNG extension to JPG; export it as JPEG, or update the image path in index.html to match the actual PNG name.
3. Refresh the page. Initials appear as a fallback until a photo is present.
4. To adjust the crop, edit object-position in the .portrait-frame img CSS rule.

## Publish for free with GitHub Pages (browser method)

These steps assume your GitHub username is S-Bhim, as listed in your CV.

1. Sign in at https://github.com and create a NEW repository named S-Bhim.github.io. Set it to Public. If this repository already exists, open it and review its contents before adding or replacing files.
2. Open the repository, choose Add file > Upload files, and upload the CONTENTS of github-portfolio: index.html, styles.css, script.js, assets, README.md, and .nojekyll if shown. Do not upload the ZIP or the enclosing github-portfolio folder. The home page must be at the repository root.
3. Commit the files to main.
4. Open Settings > Pages.
5. Under Build and deployment, choose Source: Deploy from a branch.
6. Choose branch main and folder / (root), then Save.
7. Check the Actions tab for a successful Pages deployment. Settings > Pages will display your published URL. It should be https://s-bhim.github.io/ for the account and repository above.
8. Open the site on both laptop and phone. Test the expandable project descriptions, photo, email link, LinkedIn, and GitHub links.

The URL above is your expected address after deployment, not confirmation that it is live now. If your username differs, use YOUR-USERNAME.github.io for the repository and URL.

Alternative: a repository named portfolio publishes at https://YOUR-USERNAME.github.io/portfolio/ with the same main / (root) settings. The included relative asset paths support both layouts.

## Update it later

Edit a file in the repository, click Commit changes, and GitHub Pages deploys the update. You can also edit locally and upload the updated files. Use Ctrl+F5 if a browser shows old content.

## What to customize

- index.html: biography, project descriptions, education, grades, email, and social links.
- styles.css: colors, spacing, typography, and portrait crop.
- script.js: mobile navigation.
- assets/profile.jpg: your photo.

To add a resume button, upload a public-facing CV as assets/resume.pdf and add this beside the View my projects link:

<a class="text-link" href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">View resume</a>

Only add the link once the PDF exists. Use a CV version with contact details you want publicly visible. The current package includes your email and professional profile links, without your phone number.

Project links currently lead to your GitHub profile. Replace or supplement them with exact repository links as you publish each project. Do not claim live dashboards or deployed models unless they are available.

## Troubleshooting

- 404: confirm the repository name, Public visibility, successful deployment, main / (root) settings, and lowercase index.html at root.
- Missing photo: ensure assets/profile.jpg exists in GitHub and the extension and capitalization match.
- Missing styles: styles.css and script.js must be alongside index.html, not inside an extra enclosing folder.
- No update: inspect Actions for build failures, wait for a successful deployment, and hard-refresh.

## Zero-cost setup

Use a GitHub Free account, a public repository, and the included github.io address. A custom domain is optional and usually costs money. This is a static portfolio; it does not need a server, database, paid template, or form service. Email contact uses the visitor's email app. GitHub Pages usage limits apply.

## Sources

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Content is based on the supplied CV. Interim CGPA and study dates should be updated as your academic record changes. Project graphics are conceptual illustrations, not measured outputs.

## October 17 portfolio update

Projects are the four distinct projects in main(1).pdf and CV_PHARMA.pdf, plus the separately requested customer-retention case study. All projects appear together without category filters. Updated email: soumabha03@gmail.com. The Send a message button opens Gmail compose; the email address also provides a standard mailto fallback. No message is sent automatically.



Upload index.html, styles.css, and script.js to replace the earlier versions on GitHub. Keep your existing assets/profile.jpg photo. If uploading the entire package, preserve any personal photo or resume already in your repository.

## Latest refinements

- Circular profile photo, using the existing assets/profile.jpg file.
- No individual project repository links; the general GitHub link remains.
- Econometric Modelling (IIT Roorkee, NPTEL), Jul-Sep 2026, 8 weeks, 90%, added from the supplied certificate. Its link opens https://nptel.ac.in/courses/110107153.
- Contact right column shows LinkedIn and GitHub links only. The left Send a message button still opens Gmail compose addressed to soumabha03@gmail.com.

## Latest refinements

- Circular profile photo, using the existing assets/profile.jpg file.
- No individual project repository links; the general GitHub link remains.
- Econometric Modelling (IIT Roorkee, NPTEL), Jul-Sep 2026, 8 weeks, 90%, added from the supplied certificate. Its link opens https://nptel.ac.in/courses/110107153.
- Contact right column shows LinkedIn and GitHub links only. The left Send a message button still opens Gmail compose addressed to soumabha03@gmail.com.

## Add your Google Drive certificate links

Open script.js. The certificateLinks object at the very top contains five empty values, one for each certificate. Paste each Google Drive sharing URL inside the matching quotes, for example:

dataAnalytics: "https://drive.google.com/file/d/YOUR-FILE-ID/view?usp=sharing",

In Google Drive: select the certificate > Share > General access > Anyone with the link > Viewer > Copy link. Test the link in a private/incognito browser window to confirm visitors can view it without requesting permission.

After adding your URLs, upload script.js to GitHub and commit the changes. The website automatically shows View certificate for each completed link. Until a valid HTTPS link is added, it shows Certificate link coming soon, with no broken or misleading link. Course and organizing-club links have been removed from the certification cards.
