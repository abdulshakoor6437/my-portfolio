# Portfolio Project Specifications & Design System Manual

A comprehensive overview of the **Abdul Shakoor Creative Freelance Developer & AI Automation Studio** web platform, detailing its technical architecture, design system, interactive features, color palette specifications, and deployment instructions.

---

## 🎨 Color Theme & Design System

The portfolio utilizes a **Neo-Editorial Deep Purple & Scalloped Cloud Design System** with high-contrast vibrant accents, hard offset shadows, and playful hand-crafted SVG doodles.

### 1. Color Palette Tokens

| Token Name | Hex / Value | Usage & Context |
| :--- | :--- | :--- |
| **`--bg-purple-deep`** | `#1F1338` | Primary dark purple canvas background |
| **`--bg-purple-dark`** | `#170D2B` | Deep backdrop container fills & footers |
| **`--bg-purple-card`** | `#281947` | Browser project cards & dark panel surfaces |
| **`--bg-purple-elevated`** | `#321E56` | Elevated modal dialogs & active state tabs |
| **`--bg-purple-border`** | `#442B72` | Subtle borders between dark components |
| **`--purple-grid-line`** | `rgba(184, 167, 234, 0.08)` | Background vertical canvas grid lines |
| **`--cloud-white`** | `#FFFDF9` | Scalloped cloud main panel background |
| **`--cloud-offwhite`** | `#FAF6EE` | Secondary cloud cards & off-white sections |
| **`--cloud-warm`** | `#F4ECE1` | Warm off-white section dividers |
| **`--cloud-border`** | `#1F1338` | Thick solid borders on cloud panels |
| **`--accent-coral`** | `#FF553E` | Primary CTAs, active highlights, browser dots |
| **`--accent-coral-hover`**| `#E03E28` | Hover state for primary coral buttons |
| **`--accent-peach`** | `#FFA07A` | Planet doodles, secondary badge fills |
| **`--accent-mint`** | `#4ECCA3` | Status indicators, success badges, mint pulses |
| **`--accent-lavender`** | `#B8A7EA` | Dotted cloud trails, SVG line artwork |
| **`--accent-cobalt`** | `#4361EE` | Technical tags & API method badges |
| **`--accent-gold`** | `#FFD166` | Floating star doodles & sparkle icons |
| **`--text-purple-dark`** | `#1F1338` | Primary text on off-white cloud panels |
| **`--text-purple-muted`**| `#554870` | Secondary description text on light panels |
| **`--text-light`** | `#FFFFFF` | Primary text on dark purple canvas |
| **`--text-light-lavender`**| `#D8CFF2` | Body text on deep purple canvas |
| **`--text-muted-lavender`**| `#A594CE` | Subtitles & metadata on dark canvas |

---

### 2. Neo-Editorial Drop Shadows & Borders

| Token Name | Spec | Description |
| :--- | :--- | :--- |
| **`--shadow-hard-sm`** | `4px 4px 0px 0px #1F1338` | Small hard offset drop shadow for pills & buttons |
| **`--shadow-hard-md`** | `6px 6px 0px 0px #1F1338` | Medium hard offset drop shadow for standard cards |
| **`--shadow-hard-lg`** | `8px 8px 0px 0px #1F1338` | Large hard offset drop shadow for cloud panels |
| **`--shadow-hard-xl`** | `12px 12px 0px 0px #1F1338` | Extra-large hard drop shadow for hero panel |
| **`--border-thick`** | `2.5px solid #1F1338` | Signature outline border for cloud panels |

---

### 3. Typography Stack

- **Display & Headings**: `'Syne'`, sans-serif (Weights: 700, 800) — Expressive display font used for major section titles and hero headlines.
- **Body Text**: `'Plus Jakarta Sans'`, sans-serif (Weights: 400, 500, 600, 700, 800) — Modern, clean sans-serif for readable copy and card descriptions.
- **Monospace & Code**: `'JetBrains Mono'`, monospace (Weights: 500, 600, 700) — Used for code snippets, API endpoints, address bars, and technical metrics.

---

## 🏗️ Project Architecture & Layout Sections

### 1. Sticky Header (`site-header`)
- **Monogram Logo**: Browser-style badge containing `AS` monogram with colored window control dots.
- **Desktop Navigation**: Links to Work (`01`), Services (`02`), Process (`03`), Studio (`04`), and Contact (`05`).
- **Availability Status Pill**: Live mint pulsing indicator showing `theater and creative works`.
- **Responsive Drawer**: Full-screen slide-down menu for mobile viewports.

### 2. Hero Section (`hero-section`)
- **Scalloped Cloud Panel**: Central off-white scalloped panel with a top wave accent.
- **Eyebrow & Sparkle**: `✦ I’m Abdul Shakoor, a freelance Webflow web designer & developer bringing you the`.
- **Main Headline**: `Website of your digital dreams` with styled highlights.
- **Supporting Narrative**: Welcome messaging highlighting Awwwards-featured Webflow partnership.
- **Dual Action CTAs**: Primary `Get In Touch` button and secondary `See Portfolio` button.
- **Floating SVG Doodles**: Parallax-animated planet with rings, gold/mint stars, and cloud trails.
- **Capability Switcher**: 3 interactive tabs (`Full-Stack Web`, `✦ AI Automation`, `Mobile & Escrow`).

### 3. Angled Skills Marquee (`angled-marquee-wrapper`)
- Set at a `-1.5deg` diagonal rotation.
- Continuous infinite loop ticker displaying core competencies (`Web Platforms`, `AI Automation & LangChain`, `REST & GraphQL APIs`, `Cross-Platform Flutter`, `SECP Escrow Architecture`, `OpenAI API & Agentic Workflows`).
- Pauses smoothly on hover and keyboard focus.

### 4. Selected Work Case Studies (`projects-scalloped-section`)
- Off-white wave section dividers on top and bottom.
- Filterable project grid (`All Projects`, `Web & Admin`, `AI & Automation`, `Mobile & Escrow`).
- **4 Real Production Projects**:
  1. **PTB Tobacco Management System**: Administrative governance portal with multi-tier RBAC and immutable audit logging.
  2. **Zimma Solution Mobile App**: Pakistan’s first SECP-registered mobile escrow app built with Flutter and Cloud Firestore.
  3. **Intelligent Schedule Management Engine**: Autonomous agentic assistant using OpenAI API and LangChain constraint solvers.
  4. **SZABIST Admin v1.0**: Timetable coordination system with WhatsApp Business API webhooks.
- **Browser Window Visual Canvases**: Interactive vector mockups illustrating endpoints, phone screens, prompt bubbles, and roster logs.
- **Architectural Inspection Modal**: Full modal popup displaying technical specifications, audit ledgers, and tech stack pills.

### 5. Services & Capabilities (`services-purple-section`)
- Staggered irregular card layout on deep purple canvas.
- Original hand-crafted line art (API ladder, neural cube, mobile sync).
- Includes service checklists and direct inquiry auto-selector links.

### 6. Disciplined 4-Stage Workflow (`process-purple-section`)
- Playful step cards outlining the delivery lifecycle:
  1. **01 Discovery & Architecture**
  2. **02 Full-Stack & AI Engineering**
  3. **03 Security & Audit Compliance**
  4. **04 Deployment & Scaled Ops**

### 7. The Engineering Studio (`studio-section`)
- **3 Role Profiles**: Full-Stack Architect (`💻`), AI Automation Builder (`🧠`), Mobile & Cloud Developer (`📱`).
- **Verified Metrics Cloud**: Stat counter tracking 2+ Years Experience, 35% Data Accessibility Boost (GCISC), and 6+ Technical Projects Shipped.

### 8. Theatrical Contact Section (`theatrical-contact-section`)
- Geometric backdrop shapes in coral, mint, and lavender.
- Direct contact channels with one-click copy buttons (Email & WhatsApp/Phone).
- Verified external links to GitHub and Fiverr.
- Browser-styled contact form with automated mailto fallback dispatch.

---

## 🛠️ Interactive JavaScript Engine (`app.js`)

1. **Scroll-Reveal Engine**: Staggered in-view intersection observer (`.reveal-on-scroll`).
2. **Parallax Doodles**: RequestAnimationFrame scroll parallax on background SVG items.
3. **Capability Sandbox**: Tabbed state switcher for hero skills.
4. **Count-Up Stat Animation**: Cubic ease-out number counter triggered when entering viewport.
5. **Category Filter**: Filtering browser project cards by domain tag.
6. **Architectural Modals**: Dynamic injection of project details with focus trap and `Escape` key handler.
7. **Clipboard Toast Popup**: One-click copy for email and phone numbers with floating notification feedback.
8. **Contact Form Handler**: Validates inputs and generates pre-filled `mailto:` links.
9. **Accessibility Support**: Complete `prefers-reduced-motion` compliance across all animations.

---

## ⚡ Local Setup & Execution

### Prerequisites
- Node.js (v14+ recommended)

### Running Locally
```bash
node server.js
```
The server will launch locally at **`http://localhost:3000`**.

---

## 📬 Verified Reach Channels
- **Email**: [a.shakoor9744@gmail.com](mailto:a.shakoor9744@gmail.com)
- **Phone / WhatsApp**: [+92-322-9164283](tel:+923229164283)
- **GitHub**: [github.com/abdulshakoor6437](https://github.com/abdulshakoor6437)
- **Fiverr**: [fiverr.com/abdulshakoor733](https://fiverr.com/abdulshakoor733)
