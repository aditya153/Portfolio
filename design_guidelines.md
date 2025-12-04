# Portfolio Website Design Guidelines for Aditya Nirgude

## Design Approach
**Reference-Based Modern Portfolio** - Drawing inspiration from Linear's clean typography, Stripe's content density, and the existing glassmorphic aesthetic from your admin dashboard. This creates a cohesive visual identity that bridges your technical work with a polished personal brand.

## Core Design Principles
1. **Technical Sophistication** - Reflect software engineering precision through structured layouts and clear hierarchy
2. **Progressive Disclosure** - Layer information depth, allowing visitors to dive deeper into projects
3. **Authentic Personality** - Balance professional polish with approachable, human elements

---

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' - Clean, modern sans-serif for body text and UI elements
- Display: 'Space Grotesk' - Technical yet stylish for headings and emphasis
- Mono: 'JetBrains Mono' - For code snippets and technical tags

**Hierarchy**:
- Hero Headline: text-6xl md:text-7xl font-bold (Space Grotesk)
- Section Headers: text-4xl md:text-5xl font-bold (Space Grotesk)
- Subsection Titles: text-2xl md:text-3xl font-semibold (Inter)
- Body Text: text-base md:text-lg (Inter)
- Captions/Meta: text-sm (Inter)
- Technical Tags: text-xs uppercase tracking-wider (JetBrains Mono)

---

## Layout System

**Tailwind Spacing Primitives**: Use consistent spacing units of **4, 6, 8, 12, 16, 20, 24** (p-4, gap-6, mb-8, py-12, etc.)

**Container Strategy**:
- Max-width container: max-w-7xl mx-auto px-6 md:px-8
- Full-bleed sections: w-full with inner max-w-7xl
- Content sections: max-w-6xl for optimal reading

**Grid Systems**:
- Project cards: grid-cols-1 md:grid-cols-2 gap-8
- Skills matrix: grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4
- Timeline: Single column with side decorative elements

---

## Component Library

### 1. Hero Section (Full Viewport)
**Layout**: Full-height (min-h-screen) with centered content
**Structure**:
- Professional headshot (circular, 200x200px) with subtle glow effect
- Name in large display type
- Three-line role carousel: "Software Developer" → "AI/ML Engineer" → "Full-Stack Developer" (rotating every 3s)
- Two-sentence introduction highlighting Master's at RPTU and AI automation expertise
- CTA buttons: "View Projects" (primary) + "Download CV" (secondary) - both with backdrop-blur
- Scroll indicator at bottom

**No hero background image** - Use gradient mesh or particle background effect instead for technical aesthetic

### 2. Experience Timeline (Interactive)
**Layout**: Vertical timeline with left-aligned dates, right-aligned content cards
**Structure**:
- Vertical line connecting all experiences
- Each experience as expandable glassmorphic card
- Collapsed state: Company, role, dates, tech stack tags
- Expanded state: Full responsibilities list (bullet points), key achievements with metrics
- Two Registers (Dec 2022 - Feb 2024): 5 key points about microservices, Spring Boot, MongoDB optimization
- Quant Masters (Aug 2022 - Nov 2022): 4 key points about ML, ETL, Power BI

### 3. Featured Projects Section
**Layout**: Two-column grid for primary projects, single column for secondary

**Project 1: German Public Administration Automation** (Featured Large Card)
- Screenshot/diagram of the system architecture from documentation
- Title + "Currently Active Student Project"
- Tech stack badges: React.js, Node.js, CrewAI, Docker, PostgreSQL
- Three-column feature highlights: "AI-Driven Workflow", "HITL Quality Assurance", "End-to-End Automation"
- "View Architecture" button linking to GitHub
- Brief description: 2-3 sentences about automating German bureaucracy with multi-agent AI

**Project 2: Literature Review Multi-Agent System** (Featured Medium Card)
- Diagram representation or code visualization
- Tech stack: Microsoft Autogen, Dify.ai, Python, LLMs
- Key feature: "Generates 500+ word reviews from research papers"
- GitHub link

**Additional Projects**: Smaller cards in 3-column grid for other GitHub repos

### 4. Skills Matrix
**Layout**: Tag cloud with categorized groupings
**Categories**:
- AI/ML: Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), Agentic AI
- Backend: Java, Spring Boot, Node.js, FastAPI
- Frontend: React.js, TypeScript
- Data: PostgreSQL, MongoDB, Power BI (DAX), ETL
- DevOps: Docker, CI/CD, AWS, GitLab
- Tools: Git, Microsoft Office

Each skill as pill-shaped tag with proficiency indicator (3-level: Expert/Proficient/Familiar via subtle size variation)

### 5. Education Section
**Layout**: Two side-by-side cards
- Left: RPTU Kaiserslautern (2024-2027) - Focus: Software Engineering, Intelligent Systems
- Right: Sinhgad Academy (2018-2022) - Focus: Programming, Data Analysis
- Include university logos if available, otherwise stylized icons

### 6. Publication Spotlight
**Layout**: Single featured card with academic paper styling
- Title: "Software as a Service for QR-Code Attack Detection and Prevention"
- Journal: IRJET
- Co-authors listed
- Abstract excerpt (2-3 sentences)
- "Read Full Paper" button → PDF link
- Citation format display

### 7. Contact Section
**Layout**: Centered content with three-column contact methods
- Email: adityanirgude22@gmail.com (with copy button)
- LinkedIn: linkedin.com/in/aditya-nirgude (with icon link)
- GitHub: github.com/aditya153 (with icon link)
- Location: Kaiserslautern, Germany
- "Currently seeking Werkstudent positions in Business Intelligence & Data Engineering" callout
- Download CV button (German version)

### 8. Footer
**Layout**: Full-width with three sections
- Left: "© 2025 Aditya Nirgude"
- Center: Language toggle (EN/DE) for CV download
- Right: Quick links to LinkedIn, GitHub, Email

---

## Images & Visual Assets

**Images Required**:
1. **Professional headshot** - Hero section, circular crop, 400x400px minimum
2. **System architecture diagram** - Use the infographic from documentation for automation project
3. **University logos** (RPTU, Sinhgad) - For education cards if available
4. **Project screenshots** - For each featured project, showing UI or architecture

**Icons**: Use **Heroicons** (outline style) via CDN for:
- Technology stack indicators
- Contact methods
- Navigation elements
- External link indicators

**Fallback**: If project images unavailable, use geometric abstract representations with tech stack colors

---

## Responsive Behavior

**Breakpoints**:
- Mobile (< 768px): Single column layouts, stacked sections, simplified timeline
- Tablet (768px - 1024px): Two-column grids, condensed spacing
- Desktop (> 1024px): Full multi-column layouts, expanded cards

**Priority**: Mobile-first approach with progressive enhancement

---

## Interaction Patterns

**Micro-interactions**:
- Project cards: Gentle lift on hover (transform translateY(-4px))
- Skill tags: Subtle scale on hover (scale-105)
- Timeline expansion: Smooth height transition
- CTA buttons: No hover state needed (blur background handles context)

**Animations**: Minimal and purposeful
- Hero role carousel: Fade transition
- Scroll-triggered fade-ins for section headers
- No parallax effects

**Performance**: Lazy load project images below fold

---

This portfolio balances technical credibility with visual sophistication, positioning you as a modern full-stack developer with AI/ML expertise ready for German tech market opportunities.