# AGENTS.md

# =========================================================
# PROJECT
# =========================================================

Project Name:
Website Program Studi Teknik Informatika
Universitas Muhammadiyah Jember

Project Type:
Modern academic landing page and student information portal.

Primary Users:
1. Mahasiswa aktif
2. Calon mahasiswa

Main Product Goal:

Membantu pengguna mendapatkan gambaran yang jelas mengenai perjalanan
kuliah di Program Studi Teknik Informatika Universitas Muhammadiyah Jember
dari Semester 1 sampai Semester 8.

Main Product Value:

Website bukan sekadar profil program studi.

Fitur utama adalah Academic Journey yang membantu mahasiswa memahami:

- apa yang dipelajari,
- kompetensi yang dibangun,
- milestone akademik,
- kegiatan pendukung,
- PKL,
- Tugas Akhir,
- dan perjalanan sampai lulus.

# =========================================================
# TECHNOLOGY
# =========================================================

Use:

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React

Deployment:

- GitHub
- Vercel

Data:

- local JavaScript files
- local JSON if needed
- no backend
- no database
- no authentication

Do not add dependencies unless they are clearly needed.

# =========================================================
# LANGUAGE
# =========================================================

Primary language:
Bahasa Indonesia.

English terms are allowed only when they improve clarity or visual quality.

Examples:

- Academic Journey
- Explore
- Student Journey
- Milestone

Main explanatory content must remain in Bahasa Indonesia.

# =========================================================
# ACADEMIC RULES
# =========================================================

Graduation requirement:

- minimum 144 SKS,
- pass all mandatory Program Studi courses,
- pass all mandatory University courses.

PKL:

- 3 SKS,
- starts from Semester 6.

Final Project:

- Tugas Akhir: 4 SKS,
- guidance may start from Semester 6,
- stages:
  1. Proposal
  2. Seminar Kemajuan
  3. Sidang

Do not invent academic rules.

If information is unavailable:
use placeholder or TODO.

# =========================================================
# DATA SOURCE RULES
# =========================================================

Curriculum source of truth:

src/data/curriculum.js

Lecturer source of truth:

src/data/lecturers.js

Academic Journey:

src/data/academicJourney.js

PKL:

src/data/internship.js

Final Project:

src/data/finalProject.js

Never hardcode academic data inside UI components.

Never duplicate the same official data in multiple files.

# =========================================================
# CURRICULUM RULES
# =========================================================

Curriculum covers Semester 1 through Semester 8.

Every course should contain at least:

- code
- name
- credits
- category

Temporary categorization rule:

MJU.TIK.P.xxx = pilihan

Other courses = wajib unless official information says otherwise.

Important:

Semester 6 and 7 contain elective courses.

Do not interpret the total listed SKS of those semesters as mandatory
student workload.

Do not modify:

- course code
- course name
- SKS

unless explicitly instructed.

# =========================================================
# LECTURER DATA RULES
# =========================================================

Lecturer fields:

- id
- name
- degree
- nidn
- academicRank
- expertise
- courses
- photo
- sinta
- googleScholar
- orcid

If data is unavailable:

- empty string
- empty array
- clear placeholder

Never invent:

- NIDN
- academic rank
- expertise
- courses taught
- SINTA link
- Scholar link
- ORCID
- photograph

# =========================================================
# DESIGN DIRECTION
# =========================================================

Design personality:

- modern
- fresh
- simple
- academic professional
- technology-oriented
- clean
- spacious

Visual concept:

Academic Institution
+
Modern Technology Product

Primary visual direction:

- white dominant background
- UM Jember blue accent
- neutral dark text
- light neutral borders
- subtle shadow
- generous whitespace
- rounded cards
- simple Lucide icons

Avoid:

- old administrative dashboard look
- excessive gradient
- excessive animation
- too many colors
- crowded cards
- giant walls of text

# =========================================================
# TYPOGRAPHY
# =========================================================

Preferred fonts:

1. Plus Jakarta Sans
2. Inter

Typography hierarchy must clearly distinguish:

- hero title
- section heading
- card title
- body
- metadata

# =========================================================
# RESPONSIVE RULES
# =========================================================

Use mobile-first design.

Priority:

1. Smartphone
2. Desktop/Laptop
3. Tablet

All pages must be responsive.

Verify:

- mobile navbar
- touch friendly buttons
- readable curriculum
- usable Academic Journey
- lecturer grid
- card spacing
- typography

# =========================================================
# ACCESSIBILITY
# =========================================================

Prefer semantic HTML.

Use:

- meaningful alt attributes
- button for actions
- anchor/link for navigation
- keyboard focus states
- sufficient contrast

Avoid clickable divs where button or link is more appropriate.

# =========================================================
# ROUTES
# =========================================================

Required routes:

/
 /perjalanan-studi
 /kurikulum
 /dosen
 /pkl
 /tugas-akhir
 /aktivitas
 /layanan
 /kontak

404 route:
required.

# =========================================================
# TARGET PROJECT STRUCTURE
# =========================================================

src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── home/
│   ├── journey/
│   ├── curriculum/
│   └── lecturers/
├── data/
│   ├── curriculum.js
│   ├── lecturers.js
│   ├── academicJourney.js
│   ├── internship.js
│   ├── finalProject.js
│   ├── activities.js
│   ├── services.js
│   └── contact.js
├── pages/
│   ├── HomePage.jsx
│   ├── AcademicJourneyPage.jsx
│   ├── CurriculumPage.jsx
│   ├── LecturersPage.jsx
│   ├── InternshipPage.jsx
│   ├── FinalProjectPage.jsx
│   ├── ActivitiesPage.jsx
│   ├── ServicesPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx
├── main.jsx
└── index.css

# =========================================================
# DEVELOPMENT WORKFLOW
# =========================================================

IMPORTANT:

Do not build the entire website in one task.

Work phase by phase.

Before each task:

1. Read AGENTS.md.
2. Inspect related files.
3. Understand existing implementation.
4. Make the smallest reasonable change.

After every implementation:

1. run:
   npm run lint

2. run:
   npm run build

3. fix all errors before finishing.

Do not create Git commits unless explicitly asked.

# =========================================================
# PHASE 1 — PROJECT FOUNDATION
# =========================================================

Goal:
Prepare stable React project foundation.

Checklist:

- [ ] React + Vite installed
- [ ] Tailwind configured
- [ ] React Router configured
- [ ] Lucide React installed
- [ ] AppLayout created
- [ ] routes created
- [ ] NotFoundPage created
- [ ] base folders created
- [ ] lint passes
- [ ] production build passes

Completion condition:

npm run lint
and
npm run build

both succeed.

Do not continue to Phase 2 if Phase 1 fails.

# =========================================================
# PHASE 2 — OFFICIAL DATA
# =========================================================

Goal:
Prepare all currently available official academic data.

Tasks:

## 2.1 Curriculum

File:

src/data/curriculum.js

Requirements:

- Semester 1–8
- course code
- course name
- credits
- category

Validate manually against the official source.

## 2.2 Lecturers

File:

src/data/lecturers.js

Use available official names.

Unknown fields must remain empty.

## 2.3 Graduation Metadata

Include:

- minimumCredits: 144
- mandatoryProgramCoursesRequired: true
- mandatoryUniversityCoursesRequired: true

Completion condition:

- data imports correctly
- no UI yet
- lint passes
- build passes

# =========================================================
# PHASE 3 — ACADEMIC JOURNEY DATA
# =========================================================

Goal:
Translate curriculum into an easy-to-understand student journey.

File:

src/data/academicJourney.js

Create entries for Semester 1 through Semester 8.

Each semester should support:

- semester
- title
- focus
- competencies
- recommendedActivities
- milestones
- nextPreparation

Guidelines:

Do not make unsupported academic claims.

Academic Journey may summarize and interpret curriculum,
but must not change official academic requirements.

Suggested narrative direction:

Semester 1:
Fondasi Informatika

Semester 2:
Penguatan Dasar Pemrograman

Semester 3:
Sistem dan Infrastruktur

Semester 4:
Pengembangan Perangkat Lunak

Semester 5:
Eksplorasi Teknologi

Semester 6:
Profesional dan Arah Keahlian

Semester 7:
Pendalaman dan Penyelesaian Studi

Semester 8:
Tugas Akhir dan Kelulusan

These are UI narratives, not official course classifications.

# =========================================================
# PHASE 4 — PKL AND FINAL PROJECT DATA
# =========================================================

## PKL

File:
src/data/internship.js

Known data:

- 3 SKS
- starts Semester 6

Do not invent:

- registration requirements
- workflow
- forms
- coordinator
- dates

Use TODO placeholders for unavailable official information.

## Final Project

File:
src/data/finalProject.js

Known data:

- Tugas Akhir 4 SKS
- guidance can start Semester 6

Stages:

- Proposal
- Seminar Kemajuan
- Sidang

Do not invent administrative requirements.

# =========================================================
# PHASE 5 — DESIGN SYSTEM
# =========================================================

Goal:
Create consistent visual foundation before building pages.

Tasks:

- [ ] define primary blue
- [ ] define neutral colors
- [ ] define container width
- [ ] define typography scale
- [ ] define buttons
- [ ] define cards
- [ ] define badges
- [ ] define section spacing
- [ ] define focus styles

Create reusable components if useful:

- Container
- SectionHeader
- Button
- Badge
- Card
- PageHeader

Do not overengineer.

Completion condition:

Design tokens and common patterns are consistent.

# =========================================================
# PHASE 6 — GLOBAL LAYOUT
# =========================================================

Build:

## Navbar

Contains:

- Beranda
- Perjalanan Studi
- Kurikulum
- Dosen
- PKL
- Tugas Akhir
- Aktivitas
- Layanan

Contact may appear in CTA/footer.

Requirements:

- desktop navigation
- mobile navigation
- active state
- accessible
- clean design

## Footer

Include available official contact information.

Unknown social links:
do not invent.

# =========================================================
# PHASE 7 — HOME PAGE
# =========================================================

Build HomePage in this order:

1. Hero
2. Academic Journey preview
3. Graduation Target
4. Explore Program
5. Curriculum Preview
6. PKL & Tugas Akhir Preview
7. Student Activities
8. Lecturer Preview
9. Contact/Footer

Do not overload homepage.

Home must communicate the product value within a few seconds.

# =========================================================
# PHASE 8 — HERO
# =========================================================

Goal:
Make first screen clear and attractive.

Hero must answer:

1. Website ini untuk siapa?
2. Apa yang dapat pengguna temukan?
3. Apa manfaat utamanya?

Include:

Program Studi Teknik Informatika
Universitas Muhammadiyah Jember

Primary CTA:

Jelajahi Perjalanan Studi

Secondary CTA:

Lihat Kurikulum

Optional:
campus building photograph.

Do not use random internet photos.

# =========================================================
# PHASE 9 — ACADEMIC JOURNEY UI
# =========================================================

This is the highest priority feature.

Requirements:

- display Semester 1–8
- visually communicate progression
- semester can be selected
- selected semester shows details
- responsive
- simple to understand
- not overloaded

Possible UI:

desktop:
horizontal or alternating timeline

mobile:
vertical timeline

Semester details can include:

- title
- focus
- courses summary
- competencies
- recommended activities
- milestones
- next preparation

Important:

Curriculum and Journey have different purposes.

Curriculum = official course structure.

Journey = student-friendly explanation.

Do not merge them into one large table.

# =========================================================
# PHASE 10 — GRADUATION TARGET
# =========================================================

Create a compact section showing:

Minimum:
144 SKS

Requirements:

- pass mandatory Prodi courses
- pass mandatory University courses
- PKL 3 SKS
- Tugas Akhir 4 SKS

Use simple icons/cards.

Do not imply that completing exactly 144 SKS alone guarantees graduation.

# =========================================================
# PHASE 11 — CURRICULUM PAGE
# =========================================================

Requirements:

- Semester 1–8
- semester selector
- code
- course name
- SKS
- category
- semester totals

For Semester 6 and 7:

clearly distinguish elective courses.

Do not visually suggest that every listed elective must be taken.

Mobile:

avoid unreadable wide tables.

Use cards or responsive table strategy.

# =========================================================
# PHASE 12 — LECTURERS PAGE
# =========================================================

Build using lecturers.js.

Initial card can show:

- photo placeholder
- name
- degree
- NIDN if available
- expertise if available

If fields are empty:
do not render empty labels.

Example:

Do NOT display:

NIDN: -

Better:
hide the field.

Later features may include:

- search
- expertise filter
- lecturer detail

Do not implement unnecessary features early.

# =========================================================
# PHASE 13 — PKL PAGE
# =========================================================

Known headline information:

Praktik Kerja Lapangan
3 SKS
Semester 6

Structure:

- introduction
- key information
- workflow placeholder
- guide placeholder
- required documents placeholder
- FAQ placeholder

Only display official details that are available.

# =========================================================
# PHASE 14 — FINAL PROJECT PAGE
# =========================================================

Display:

Tugas Akhir
4 SKS

Guidance:
may begin Semester 6.

Journey:

Proposal
→ Seminar Kemajuan
→ Sidang

Do not add unsupported academic stages.

# =========================================================
# PHASE 15 — ACTIVITIES
# =========================================================

Purpose:

Show that student development extends beyond courses.

Possible categories:

- organisasi mahasiswa
- lomba
- PKM
- PPK Ormawa
- seminar
- sertifikasi
- penelitian
- pengabdian masyarakat
- technology communities

Use generic categories until official activity data is available.

Do not create fake events.

# =========================================================
# PHASE 16 — SERVICES
# =========================================================

Service categories:

- PKL
- Tugas Akhir
- Panduan
- Formulir
- SOP
- Akademik

Links not available yet:

use disabled or coming-soon presentation.

Never create fake links.

# =========================================================
# PHASE 17 — CONTACT
# =========================================================

Display only known official information.

May include:

- address
- email
- WhatsApp
- Instagram
- YouTube
- TikTok
- Maps

Unknown fields:
do not invent.

# =========================================================
# PHASE 18 — RESPONSIVE REVIEW
# =========================================================

Test at minimum:

375px
768px
1024px
1440px

Review:

- overflow
- navbar
- typography
- timeline
- curriculum
- cards
- buttons
- spacing

Fix all obvious layout problems.

# =========================================================
# PHASE 19 — ACCESSIBILITY REVIEW
# =========================================================

Check:

- semantic headings
- alt text
- keyboard navigation
- focus states
- button/link semantics
- contrast
- form labels if any

# =========================================================
# PHASE 20 — QUALITY REVIEW
# =========================================================

Before declaring website complete:

Run:

npm run lint
npm run build

Review for:

- dead imports
- duplicate components
- unused dependencies
- hardcoded official data
- fake data
- inconsistent spacing
- inconsistent colors
- console errors

# =========================================================
# PHASE 21 — GIT REVIEW
# =========================================================

Before commit:

Review:

git status
git diff

Recommended commit style:

feat: add academic journey
feat: add curriculum page
feat: add lecturers page
fix: improve mobile navigation
refactor: extract journey card

Never commit secrets.

# =========================================================
# PHASE 22 — VERCEL DEPLOYMENT
# =========================================================

Deployment flow:

Local project
→ GitHub
→ Vercel

Before deployment:

npm run build

Ensure:

- build succeeds
- routes work
- page refresh works
- assets load correctly
- no console errors

# =========================================================
# STOP CONDITIONS
# =========================================================

Stop and ask for clarification if:

- academic data is ambiguous
- official requirement is missing
- lecturer data requires guessing
- requested URL is unknown
- branding color is uncertain and materially affects design
- course categorization cannot be safely determined

Do not guess.

# =========================================================
# DEFINITION OF DONE
# =========================================================

A task is complete only when:

1. requested feature works,
2. code follows AGENTS.md,
3. responsive behavior is reasonable,
4. no unsupported official data was invented,
5. npm run lint passes,
6. npm run build passes.

# =========================================================
# FINAL PRODUCT PRINCIPLE
# =========================================================

Every design and development decision should support this goal:

"Mahasiswa dan calon mahasiswa memperoleh gambaran yang jelas tentang
perjalanan kuliah di Program Studi Teknik Informatika
Universitas Muhammadiyah Jember dari Semester 1 sampai lulus."
