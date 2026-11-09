# KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED
## Premium Corporate Website — Frontend Application

Official corporate website for **KINGSPHERE INFRA-TECH-TRADE (OPC) PRIVATE LIMITED**, located in Parbhani, Maharashtra, India.

---

### Brand Positioning & Tagline
- **Tagline**: `BUILDING STRATEGIC PARTNERSHIPS • ENABLING INNOVATION • CREATING OPPORTUNITIES`
- **Design Theme**: Luxury Black & Royal Gold (`#05080B`, `#0B1015`, `#101820`, `#D6AD55`, `#F4D98E`, `#96702E`)
- **Visuals**: Dark industrial imagery, interactive 3D Globe, GSAP scroll reveals, bespoke SVG logo insignia.

---

### Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Animations**: GSAP 3 + ScrollTrigger, Framer Motion
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form, Zod, `@hookform/resolvers`
- **Architecture**: 100% Frontend Only (Zero database, No Prisma)

---

### Website Routes (Exactly 8 Main Content Pages)

| Page # | Route | Purpose & Scope |
|---|---|---|
| **01** | `/` | **Home**: Full-screen cinematic hero with 3D Globe, About preview, 11 sectors grid, 6-step workflow, Global connectivity, Vision & Mission preview, Core values, Strategic partner profiles, and Final CTA. |
| **02** | `/about` | **About Us**: Editorial corporate profile, Who We Are, Company Overview, Business Focus, Ethos & Philosophy, Strengths, and Global Outlook. |
| **03** | `/business-sectors` | **Business Sectors**: Comprehensive directory of all 11 sectors with interactive category filtering, expandable capability modals, and partnership CTAs. |
| **04** | `/our-approach` | **Our Approach**: Systematic 6-step lifecycle (`01 Identify Opportunities`, `02 Strategy`, `03 Partnership`, `04 Investment`, `05 Execution`, `06 Growth`) with animated horizontal/vertical stepper. |
| **05** | `/projects-capabilities` | **Projects & Capabilities**: Operational execution showcase across civil infrastructure, PEB real estate, manufacturing tooling, mineral extraction, captive solar, digital IoT, and procurement. |
| **06** | `/partnerships` | **Strategic Partnerships**: 9 partner categories, joint venture / SPV frameworks, and full-featured validated alliance submission form. |
| **07** | `/vision-mission` | **Vision & Mission**: Corporate vision charter, mission statement, six core values (Trust, Capability, Innovation, Partnership, Sustainability, Execution), and sustainability outlook. |
| **08** | `/contact` | **Contact Us**: Official corporate desk details, Parbhani location map embed, validated business inquiry form, and direct email fallback. |

---

### Project Architecture

```
frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Global HTML shell, fonts, JSON-LD Schema
│   │   ├── globals.css               # Luxury gold scrollbars, custom styles
│   │   ├── page.tsx                  # PAGE 01: Home
│   │   ├── about/page.tsx            # PAGE 02: About Us
│   │   ├── business-sectors/page.tsx # PAGE 03: Business Sectors (All 11 Sectors)
│   │   ├── our-approach/page.tsx     # PAGE 04: Our Approach (6-step timeline)
│   │   ├── projects-capabilities/    # PAGE 05: Projects & Capabilities
│   │   ├── partnerships/page.tsx     # PAGE 06: Strategic Partnerships
│   │   ├── vision-mission/page.tsx   # PAGE 07: Vision & Mission
│   │   ├── contact/page.tsx          # PAGE 08: Contact Us
│   │   ├── not-found.tsx             # Branded 404 handler
│   │   ├── sitemap.ts                # Dynamic XML sitemap generator
│   │   └── robots.ts                 # Dynamic robots.txt
│   ├── components/
│   │   ├── layout/                   # Navbar (with 11-sector Mega Menu) & Footer
│   │   ├── ui/                       # Button, SectionHeading, GlassCard, Logo
│   │   ├── three/                    # Globe3D & Three.js Canvas
│   │   ├── animations/               # GsapReveal & GoldParticles
│   │   ├── sectors/                  # SectorCard & SectorDetailModal
│   │   ├── sections/                 # ApproachTimeline
│   │   └── forms/                    # PartnershipForm & ContactForm
│   ├── config/                       # Centralized company, sector, value data
│   │   ├── company.ts
│   │   ├── navigation.ts
│   │   ├── sectors.ts                # All 11 sector definitions
│   │   ├── values.ts                 # 6 Core values
│   │   ├── business-approach.ts      # 6 Lifecycle steps
│   │   ├── partnerships.ts           # 9 Partner profiles
│   │   └── capabilities.ts           # Capability domains
│   └── lib/                          # Utility functions (cn helper)
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

### Local Development Instructions

All commands must be run from inside the `frontend` folder:

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Production Build & Verification

```bash
cd frontend

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

### Contact Form & Environment Configuration

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configurable variables:
- `NEXT_PUBLIC_SITE_URL`: Base domain URL (default: `https://kingsphere.in`).
- `NEXT_PUBLIC_COMPANY_NAME`: Official company entity string.
- `NEXT_PUBLIC_CONTACT_EMAIL`: Recipient email (default: `contact@kingsphere.in`).

*Form Handling*:
Both the **Contact Form** and the **Partnership Form** include client-side schema validation (Zod), realistic asynchronous submission feedback, and an automated mail client (`mailto:`) fallback that directly constructs pre-filled emails to the official desks.

---

### Replacing Assets & Logos
- **Corporate Insignia**: Replace or adjust `src/components/ui/Logo.tsx` or place vector SVGs in `public/logo/`.
- **Imagery**: All sector and capability images are centralized in `src/config/sectors.ts` and `src/config/capabilities.ts`. Replace URLs with local assets in `public/images/` whenever desired.

