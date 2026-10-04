# Nathan Birhane - Professional Engineering Portfolio

A modern, responsive, high-performance personal portfolio website built for **Nathan Birhane**, a Material Engineer specializing in **Construction Materials Quality Control, Concrete Technology, Batching Plant Operations, and Construction Site Supervision**.

Inspired by contemporary architectural engineering studios and consultancies, the portfolio features an editorial design language with clean white backgrounds, deep charcoal typography, restrained burnt orange accents, realistic engineering project imagery, and zero artificial neon effects.

---

## 🏗️ Design & Aesthetic Direction

- **Editorial Engineering Palette:**
  - Main background: Warm white / light gray (`#F8F9FB`)
  - Primary text: Deep charcoal (`#17212B`)
  - Secondary text: Muted gray (`#667085`)
  - Accent: Restrained burnt orange (`#E87524`)
  - Cards: Pure white (`#FFFFFF`) with subtle light-gray borders (`#EAECF0`)
  - Dark elements: Used selectively for the minimal footer and primary buttons.
- **Typography:** Contemporary geometric typography pairing **Plus Jakarta Sans** / **Inter** for headings and body, with **JetBrains Mono** reserved strictly for small technical labels, standards codes, and dates.
- **Natural Shadows & Borders:** Clean, subtle borders and soft shadows with no glowing neon outlines or gradients.
- **Realistic Visuals:** High-precision architectural and laboratory SVG illustrations for concrete compression testing, slump cone tests, batching plant operations, and multi-story building projects.
- **Resilient Portrait Frame:** Clean neutral placeholder with professional initials monogram (`NB`), maintaining correct aspect ratios and preventing broken image errors.
- **Zero-Build Architecture:** Runs directly in any web browser without requiring Node.js, npm, or build tools.

---

## 📑 Portfolio Structure (11 Dedicated Sections)

1. **Home / Hero:** Balanced two-column layout on desktop (stacked on mobile) with headline, main title (*Material Engineer*), subtitle (*Construction Materials Quality Control | Concrete Technology | Quality Assurance*), location (*Ethiopia*), clear actions (*View My Projects*, *Download CV*, *Contact Me*), and a refined portrait frame.
2. **About Me:** Professional summary, core engineering competencies (*Materials Laboratory Testing*, *Concrete QC & Batching*, *Site Supervision*, *Compliance & Reporting*), and applied ASTM testing standards.
3. **Work Experience:** Clean chronological stem timeline covering:
   - **Bole Airport Headquarters** (*Material Engineer* — Aviation infrastructure materials QA/QC with editable dates and start date confirmation badge).
   - **Kapadushia Real Estate** (*Site Engineer & Material Engineer* — Fulwaha 2B+G+15 Building Project).
   - **National Premix Construction PLC** (*Laboratory Technician, Material Engineer & Site Coordinator* — Concrete Batching Plant).
4. **Education:** Bachelor of Science (B.Sc.) in COTM at **Adigrat University**, with editable graduation year and core academic modules.
5. **Projects:** Modern responsive grid with filter buttons (*High-Rise Building*, *Ready-Mix Concrete*, *Infrastructure & Aviation*) and an interactive modal view detailing technical duties, structural scope, and testing methods.
6. **Technical Skills:** Cleanly grouped into:
   - *Materials Testing*
   - *Concrete Technology*
   - *Quality Control*
   - *Site Engineering*
7. **Software Skills:** Dedicated separate section featuring **AutoCAD** and **Microsoft Office Suite** (Excel, Word, PowerPoint) with editable proficiency levels (no arbitrary percentages).
8. **Certifications & Training:** Professional hands-on procedures card and clean editable placeholders for accredited certifications.
9. **Achievements:** Verified career milestones in concrete consistency, multi-story structural quality supervision, and aviation materials inspection.
10. **Download CV:** Dedicated call-to-action banner with options to **Download CV File** or **View & Print Digital CV** (formatted for A4/Letter print).
11. **Contact:** Direct LinkedIn link, Ethiopia location, editable email and phone with **one-click copy buttons**, and a responsive contact form with email client integration.

---

## 🚀 How to Run & View the Website

### Option 1: Direct Browser Launch (Simplest)
Simply double-click `index.html` or open it in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).

In PowerShell, you can run:
```powershell
Start-Process "index.html"
```

### Option 2: Using VS Code Live Server
If you use Visual Studio Code:
1. Open the `c:\My portfolio` folder in VS Code.
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize Your Portfolio

All website content is centralized in a single configuration file:
👉 **`js/data.js`**

Open `js/data.js` in any text editor (VS Code, Notepad, etc.) to update:

### 1. Update Contact Information
```javascript
personal: {
  fullName: "Nathan Birhane",
  email: "your.real.email@example.com", // Replace placeholder
  phone: "+251 9XX XXX XXX",           // Replace placeholder
  location: "Ethiopia",
  linkedIn: "https://www.linkedin.com/in/nathan-birhane29/",
  ...
}
```

### 2. Update Education Graduation Year & Degree
```javascript
education: [
  {
    degree: "Bachelor of Science (B.Sc.) in COTM",
    institution: "Adigrat University",
    graduationYear: "Graduation Year: 2023", // Set your actual graduation year
    ...
  }
]
```

### 3. Update Bole Airport Experience & Official Company Name
```javascript
{
  id: "exp-bole",
  organization: "Official Company Name Here", // Update when confirmed
  period: "February 2025 – Present",          // Confirm start date
  positions: ["Material Engineer"],
  ...
}
```

### 4. Add Your Personal Photo
1. Place your headshot photo (JPEG or PNG) inside `assets/images/` (e.g. `assets/images/nathan-portrait.jpg`).
2. In `js/data.js`, set:
   ```javascript
   profilePhoto: "assets/images/nathan-portrait.jpg",
   ```

### 5. Add Your Official PDF Resume
1. Export your resume as a PDF file named: `Nathan_Birhane_CV.pdf`.
2. Save it in the folder: `assets/docs/Nathan_Birhane_CV.pdf`.
3. The "Download CV" buttons on the website will automatically deliver your official PDF!

---

## 🌐 How to Deploy Your Website Online (Free)

### Method 1: GitHub Pages (Recommended)
1. Initialize git and commit your files:
   ```powershell
   git init
   git add .
   git commit -m "Redesign Nathan Birhane Engineering Portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com) named `portfolio` or `nathanbirhane.github.io`.
3. Push your repository:
   ```powershell
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages > Source** and select `main` branch / `root` folder. Your portfolio will be live in 1-2 minutes!

### Method 2: Netlify (Drag & Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `My portfolio` folder onto the web page.
3. Your site is instantly live with a free custom URL and HTTPS!

### Method 3: Vercel
1. Install Vercel CLI or link your GitHub repository on [vercel.com](https://vercel.com).
2. Click **Deploy** — zero configuration required.

---

## 📁 Project File Structure

```
c:\My portfolio\
├── index.html                    # Master semantic HTML5 document
├── README.md                     # Documentation & editing guide
├── css\
│   └── styles.css                # Minimalist editorial CSS & print styles
├── js\
│   ├── data.js                   # Centralized configuration (EDIT ALL DATA HERE)
│   └── app.js                    # Interactive engine (modals, filters, form)
└── assets\
    ├── docs\
    │   └── Nathan_Birhane_CV.txt # Template CV & resume placement instructions
    └── images\
        ├── avatar-placeholder.svg# Clean editorial portrait & initials avatar
        ├── fulwaha-project.svg   # 2B+G+15 Building project illustration
        ├── batching-plant.svg    # Ready-mix batching plant illustration
        ├── airport-project.svg   # Bole Airport Headquarters illustration
        └── concrete-test.svg     # Concrete compression & slump test diagram
```
