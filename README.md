# Abdul Shakoor — Creative Web Developer & AI Automation Studio

A vibrant, hand-crafted creative-developer portfolio website built for **Abdul Shakoor** (Full-Stack Developer & AI Automation Engineer).

> 📖 **Full Project & Color System Documentation**: For a complete deep-dive into the color theme, design tokens, typography, architectural breakdown, and interactive features, see [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md).

---

## 🌟 Key Highlights & Design System

- **Deep Purple Canvas with Vertical Grid Lines**: Dominant rich purple background (`#1F1338`, `#281947`) with fine vertical grid lines running throughout the page.
- **Warm Off-White Scalloped Cloud Panels**: Organic scalloped content panels (`#FFFDF9`, `#FAF6EE`) with dark-purple borders and playful offset hard drop shadows (`6px 6px 0px #1F1338`).
- **Stylized Browser Windows**: Features browser-window cards with 3 colored dots (coral, peach, mint), address bars, and mock endpoints.
- **Lively Accent Palette**: Coral (`#FF553E`), Peach (`#FFA07A`), Mint (`#4ECCA3`), Lavender (`#B8A7EA`), Cobalt (`#4361EE`), and Gold (`#FFD166`).
- **Original Hand-Crafted SVG Doodles**: Stars, planets with rings, floating clouds, API ladders, neural cubes, data sync pipes, and mobile frames.
- **Motion Choreography**:
  - Staggered scroll-reveal transitions on cards and sections.
  - Subtle scroll parallax on background decorative objects.
  - Continuous gentle floating animations (`float-gentle`, `float-slow`, `float-reverse`).
  - Angled (`-1.5deg`) infinite scrolling skills marquee with pause on hover/focus.
  - Full `prefers-reduced-motion` accessibility support.
- **Selected Work**: 4 real production case studies presented in browser-window frames with bespoke CSS/SVG vector artwork and deep-dive architectural inspection modals.
- **Services & Studio**: Staggered irregular scalloped panels with external line illustrations and a 3-role Engineering Studio profile.
- **Theatrical Conversion Contact**: Centered scalloped cloud contact panel on colorful geometric backdrops with direct channels, one-click copy buttons, toast alerts, and form validation.

---

## 🎨 Color Palette Quick Reference

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| **`--bg-purple-deep`** | `#1F1338` | Primary dark purple canvas |
| **`--cloud-white`** | `#FFFDF9` | Scalloped cloud panel background |
| **`--accent-coral`** | `#FF553E` | Primary CTAs & window dots |
| **`--accent-peach`** | `#FFA07A` | Planet doodles & secondary badges |
| **`--accent-mint`** | `#4ECCA3` | Live indicators & mint badges |
| **`--accent-lavender`** | `#B8A7EA` | Dotted cloud trails & line art |
| **`--accent-gold`** | `#FFD166` | Floating stars & sparkles |

---

## 🚀 Live Preview / Local Development

Built with modern HTML5, Vanilla CSS3, and ES6 JavaScript.

### Running with Local Node Server:

1. **Install Dependencies** (if needed):
   ```bash
   npm install
   ```

2. **Environment Variables Setup**:
   Create a `.env` file in the root directory with your email configuration:
   ```env
   PORT=3000
   SMTP_USER=a.shakoor9744@gmail.com
   SMTP_PASS=your_gmail_app_password
   TO_EMAIL=khanshakoor6437@gmail.com
   ```
   *Note: For Gmail, `SMTP_PASS` should be a 16-character App Password generated from your Google Account security settings.*

3. **Start the Server**:
   ```bash
   node server.js
   ```
   Then visit `http://localhost:3000` in your web browser.

4. **Direct Inquiry Form**:
   Submissions from the Direct Inquiry form are handled server-side via `/contact` endpoint using `nodemailer`. Environment variables and `.env` files are blocked from static web access for security.

---

## 📬 Contact & Channels
- **Email**: [a.shakoor9744@gmail.com](mailto:a.shakoor9744@gmail.com)
- **Phone / WhatsApp**: [+92-322-9164283](tel:+923229164283)
- **GitHub**: [github.com/abdulshakoor6437](https://github.com/abdulshakoor6437)
- **Fiverr**: [fiverr.com/abdulshakoor733](https://fiverr.com/abdulshakoor733)
