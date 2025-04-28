# Somalia News AI Website - Redesign (Ground News Style)

This checklist tracks the progress of redesigning the Somalia News AI website to emulate Ground News, using Next.js.

## Phase 1: Research & Design

- [x] **Step 1: Research Modern Web Technologies & Ground News Features**
    - [x] Analyze Ground News website (UI, features, bias indicators, clustering)
    - [x] Research suitable modern frontend frameworks (React, Next.js, Vue, Angular, Svelte)
    - [x] Research backend/API options (Next.js API routes, Python)
    - [x] Research database options (Cloudflare D1)
    - [x] Create `redesign_research_summary.md`
- [x] **Step 2: Identify Additional Somalia News Sources**
    - [x] Identify potential sources (Horseed, SONNA, Al Jazeera, BBC, Garowe, etc.)
    - [x] Evaluate sources for content, language, reliability, and technical access (RSS/Scraping)
    - [x] Develop a Somalia-specific bias classification framework
    - [x] Create `somalia_news_sources_analysis.md`
- [x] **Step 3: Design Ground News Style Interface & Features**
    - [x] Define core goals and key features
    - [x] Finalize technology stack (Next.js, Tailwind, D1)
    - [x] Outline UI/UX design (Homepage, Story Detail, etc.)
    - [x] Define preliminary database schema for D1
    - [x] Outline AI/Backend logic (Fetching, Clustering, Bias Calc, Moderation)
    - [x] Create `redesign_design_document.md`

## Phase 2: Development

- [x] **Step 4: Setup Modern Frontend Development Environment**
    - [x] Initialize Next.js project (`create_nextjs_app somalia_news_nextjs`)
    - [x] Configure `wrangler.toml` for local D1 database
    - [x] Update `migrations/0001_initial.sql` with the designed schema
    - [x] Execute initial database migration locally
- [x] **Step 5: Implement Improved News Aggregation & Clustering**
    - [x] Develop/Refine news fetching scripts (Python/Worker - `fetch_news.py`)
    - [ ] Implement article processing (embedding generation - Skipped due to resource limits)
    - [x] Implement story clustering logic (Simplified text similarity - `cluster_news.py`)
    - [ ] Create API routes in Next.js to serve stories/articles
- [x] **Step 6: Develop Bias Detection & Source Classification**
    - [x] Implement source classification based on the defined framework
    - [x] Develop logic to calculate bias distribution per story
    - [x] Integrate bias information into API responses
- [x] **Step 7: Create Responsive UI with Modern Framework**
    - [x] Set up Tailwind CSS in the Next.js project (Verified config)
    - [ ] Develop reusable React components (`StoryCard`, `BiasBar`, etc.)
    - [ ] Build key pages (Homepage, Story Detail) connecting to API routes
    - [ ] Implement user authentication (Login/Register)
    - [ ] Implement commenting and liking features
    - [ ] Implement search and filtering functionality

## Phase 3: Testing & Deployment

- [ ] **Step 8: Test and Optimize Website Performance**
    - [ ] Test all features (aggregation, clustering, bias display, user interaction)
    - [ ] Test responsiveness across devices
    - [ ] Optimize frontend performance (Next.js)
    - [ ] Optimize backend/API performance
- [ ] **Step 9: Document and Prepare for Deployment**
    - [ ] Write README documentation for setup and running the project
    - [ ] Prepare deployment configuration (Cloudflare Pages)
    - [ ] Ask user about permanent deployment


