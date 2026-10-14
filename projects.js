/**
 * Abdul Shakoor Portfolio — Centralized Project Repository & Dynamic Renderer
 * Single Source of Truth for all Project Cards, Filters, and Architectural Modals.
 */

const PROJECTS_DATA = [
  {
    "id": "job-application-assistant",
    "number": "01",
    "title": "Job Application Assistant",
    "featured": true,
    "category": [
      "ai",
      "web"
    ],
    "categoryBadge": "Autonomous AI & Web",
    "addressBar": "job-assistant.internal/matcher-pipeline",
    "shortDescription": "A multi-user job-hunting assistant that parses your CV, finds and ranks real job listings, tailors your CV per job, and autofills applications, while the user always submits manually.",
    "tags": [
      "TypeScript",
      "Express",
      "Next.js",
      "MySQL",
      "Redis",
      "Chrome Extension (MV3)",
      "LLM Embeddings"
    ],
    "githubUrl": null,
    "isPrivate": true,
    "demoUrl": null,
    "status": "Fully built and verified for personal use",
    "canvasType": "job-assistant",
    "modalBadge": "Featured • Autonomous AI Platform",
    "modalTitle": "Job Application Assistant",
    "modalSubtitle": "Multi-User Intelligent Job Discovery, Semantic Matcher & MV3 Extension Autofill",
    "modalDesc": "A multi-user job-hunting assistant that parses your CV, finds and ranks real job listings, tailors your CV per job, and autofills applications, while the user always submits manually.",
    "architecture": [
      "CV parsing: multi-provider LLM pipeline turns a CV into a structured profile, with strict rules against inventing information.",
      "Job sourcing: JSearch (RapidAPI), SerpApi (Google Jobs) and Remotive, deduplicated across providers, cached to control API costs, refreshed automatically in the background for logged-in users.",
      "Smart matching: semantic embeddings and cosine-similarity ranking, plus an LLM-generated explanation of why each job fits. Jobs requiring mandatory video/selfie/facial-recognition screening are flagged and hidden by default.",
      "CV tailoring: reorders and re-emphasizes real experience per role, never fabricating. Every output is validated against the source CV to catch hallucinations.",
      "Dashboard: CV management, ranked matches, tailored CV review and export (PDF/DOCX), application status tracking, notifications, usage limits.",
      "Chrome extension: autofills Greenhouse, Lever and Ashby applications from the tailored CV. It never auto-submits.",
      "Background worker: runs job searches only while the user is active; stops on logout or idle."
    ],
    "designPrinciples": [
      "Human always submits",
      "Never fabricate",
      "Strict multi-tenant isolation",
      "Cost-conscious by design (caching, quota tracking, mocked tests)",
      "No LinkedIn/Indeed automation, to avoid ToS and account-ban risk"
    ],
    "stack": [
      "TypeScript",
      "Express",
      "Next.js",
      "MySQL",
      "Redis",
      "Chrome Extension (MV3)",
      "LLM Embeddings",
      "Cosine Similarity",
      "RapidAPI / SerpApi"
    ]
  },
  {
    "id": "ptb",
    "number": "02",
    "title": "PTB Tobacco Management System",
    "featured": true,
    "category": [
      "web"
    ],
    "categoryBadge": "ENTERPRISE",
    "addressBar": "ptb-internal.gov/compliance-rbac",
    "shortDescription": "A regulatory compliance portal built for strict administrative governance, featuring multi-tier role-based access control (RBAC), immutable audit logging, and automated quota validation for multi-stakeholder operations.",
    "tags": [
      "React.js",
      "Node.js / Express",
      "MongoDB",
      "JWT Auth",
      "RBAC"
    ],
    "githubUrl": null,
    "isPrivate": true,
    "demoUrl": null,
    "canvasType": "ptb",
    "modalBadge": "ENTERPRISE • Compliance & Audit System",
    "modalTitle": "PTB Tobacco Management System",
    "modalSubtitle": "Multi-Tier Role Governance, Cryptographic Tokens & Regulatory Audit Trails",
    "modalDesc": "An enterprise-grade administrative compliance portal built to enforce regulatory quota tracking, license verification, and multi-tier role governance with zero tamper risk.",
    "architecture": [
      "Multi-tier role-based access control (Super Admin, Inspector T2, Auditor, Licensee) using cryptographic JWT payloads.",
      "Immutable audit logging capturing user ID, timestamp, IP address, and state delta on every record mutation.",
      "Express.js middleware layer validating token signatures and role entitlements prior to reaching controller handlers.",
      "Optimized MongoDB aggregate pipelines delivering fast regulatory compliance summaries across 10,000+ quota allocations."
    ],
    "designPrinciples": [
      "Zero tamper risk across administrative mutations",
      "Cryptographic JWT payload role verification at middleware boundary",
      "Immutable audit ledgers with timestamp and IP origin logging",
      "High-throughput aggregation pipelines for regulatory compliance reporting"
    ],
    "stack": [
      "React.js",
      "Node.js / Express",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Role-Based Access Control (RBAC)"
    ]
  },
  {
    "id": "zimma",
    "number": "03",
    "title": "Zimma Solution Mobile App",
    "featured": true,
    "category": [
      "mobile"
    ],
    "categoryBadge": "MOBILE & ESCROW",
    "addressBar": "zimma-escrow.app/secp-tracker",
    "shortDescription": "Pakistan's first SECP-registered escrow application. A cross-platform task coordination and milestone management platform engineered with background push alerts, offline SQLite/Hive caching, and secure Cloud Firestore sync.",
    "tags": [
      "Flutter",
      "Firebase Auth",
      "Cloud Firestore",
      "FCM Push",
      "Offline Sync"
    ],
    "githubUrl": null,
    "isPrivate": true,
    "demoUrl": null,
    "canvasType": "zimma",
    "modalBadge": "Pakistan's 1st SECP-Registered Escrow App",
    "modalTitle": "Zimma Solution Mobile App",
    "modalSubtitle": "Cross-Platform Escrow Milestones, Push Alerts & Offline SQLite Cache",
    "modalDesc": "Cross-platform task coordination and milestone management platform engineered with background push notifications and secure offline storage for SECP-compliant financial escrow security.",
    "architecture": [
      "Flutter single-codebase architecture delivering high frame-rate cross-platform interfaces across iOS and Android.",
      "Firebase Auth multi-provider integration safeguarding client and contractor accounts.",
      "Cloud Firestore real-time listener trees synchronizing task milestones, payment verifications, and escrow states.",
      "Firebase Cloud Messaging (FCM) background push notifications keeping all parties updated on escrow lock and release cycles.",
      "Local SQLite/Hive cache layer ensuring seamless offline task coordination with automatic synchronization on network reconnect."
    ],
    "designPrinciples": [
      "SECP-compliant escrow fund security and milestone verification",
      "Offline-first synchronization with resilient conflict resolution",
      "Real-time Firestore listener trees for instant milestone updates",
      "Cross-platform 60fps native experience on iOS and Android"
    ],
    "stack": [
      "Flutter",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Cloud Messaging (FCM)",
      "SECP Escrow Engine",
      "Offline Cache"
    ]
  },
  {
    "id": "ai-assistant-pro",
    "number": "04",
    "title": "AI Assistant Pro",
    "featured": true,
    "category": [
      "ai",
      "web"
    ],
    "categoryBadge": "Conversational AI & Memory",
    "addressBar": "ai-assistant.internal/streaming-memory",
    "shortDescription": "A full-featured conversational AI platform powered by Anthropic Claude and FastAPI, featuring long-term memory extraction, streaming SSE responses, and user session management.",
    "tags": [
      "FastAPI",
      "React",
      "Anthropic Claude",
      "Long-Term Memory",
      "JWT Auth",
      "SQLite",
      "Streaming SSE"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/AI-Assistant-Pro-",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "ai-assistant",
    "modalBadge": "Featured • Conversational AI & Memory Engine",
    "modalTitle": "AI Assistant Pro",
    "modalSubtitle": "Stateful Assistant with Memory Extraction & Server-Sent Events Streaming",
    "modalDesc": "An end-to-end conversational AI platform offering a responsive ChatGPT-like interface and user session management, powered by Anthropic Claude and equipped with long-term memory.",
    "architecture": [
      "Streaming chat interface using Server-Sent Events (SSE) delivering token-by-token responses with real-time markdown formatting.",
      "Long-term memory subsystem that automatically extracts and stores user preferences and background facts across conversations.",
      "Multi-conversation management with full CRUD operations for session history, titles, and thread archival.",
      "FastAPI modular backend with decoupled routers for authentication, streaming chat, and conversation persistence.",
      "Stateless JWT authentication and bcrypt password hashing ensuring secure multi-user credential isolation."
    ],
    "designPrinciples": [
      "Low-latency streaming responses via SSE",
      "Deterministic user memory recall without prompt bloat",
      "Secure user isolation through JWT verification",
      "Clean separation of frontend UI state and chat streams"
    ],
    "stack": [
      "FastAPI",
      "React",
      "Anthropic Claude API",
      "Python 3.11",
      "SQLite",
      "JWT Auth",
      "Server-Sent Events (SSE)",
      "Uvicorn"
    ]
  },
  {
    "id": "documind-rag",
    "number": "05",
    "title": "DocuMind — Real-Time PDF Q&A with RAG",
    "featured": true,
    "category": [
      "ai"
    ],
    "categoryBadge": "Generative AI & Vector Search",
    "addressBar": "documind.rag.ai/chroma-retriever",
    "shortDescription": "A real-time Retrieval-Augmented Generation (RAG) assistant for PDFs that vectorizes chunks into ChromaDB and streams grounded answers with page-level source citations.",
    "tags": [
      "Python",
      "FastAPI",
      "ChromaDB",
      "sentence-transformers",
      "PyMuPDF",
      "Streaming SSE",
      "RAG Engine"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/DocuMind-Real-Time-PDF-Q-A-with-RAG",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "documind",
    "modalBadge": "Featured • Retrieval-Augmented Generation Platform",
    "modalTitle": "DocuMind — Real-Time PDF Q&A with RAG",
    "modalSubtitle": "Document Intelligence Pipeline with Vector Search & Citation Grounding",
    "modalDesc": "A high-performance document intelligence system where users upload arbitrary PDF documents and receive real-time, streamed answers strictly grounded in document content.",
    "architecture": [
      "PyMuPDF (fitz) text and metadata extraction with sentence-boundary chunking to preserve semantic continuity.",
      "Vector embeddings generated via sentence-transformers and indexed in ChromaDB for fast nearest-neighbor retrieval.",
      "Top-K cosine similarity semantic retrieval supplying context chunks to the LLM prompt.",
      "Real-time Server-Sent Events (SSE) streaming grounded tokens to a responsive React UI.",
      "Zero-hallucination citation engine appending exact page numbers and verbatim excerpts to each response."
    ],
    "designPrinciples": [
      "Strict factual grounding in uploaded documents",
      "Transparent page-level citations for every claim",
      "Sub-second vector similarity retrieval via ChromaDB",
      "Streamed token delivery for immediate user feedback"
    ],
    "stack": [
      "FastAPI",
      "ChromaDB",
      "sentence-transformers",
      "PyMuPDF (fitz)",
      "Python 3.11",
      "Server-Sent Events",
      "React"
    ]
  },
  {
    "id": "schedule-management-system",
    "number": "06",
    "title": "University Schedule Management & WhatsApp Alert System",
    "featured": true,
    "category": [
      "web",
      "ai"
    ],
    "categoryBadge": "Full-Stack Web & Automation",
    "addressBar": "university-schedule.edu/timetable-dispatch",
    "shortDescription": "A full-stack university timetable scheduling platform and automated WhatsApp notification system featuring clash detection, room re-routing, and a jittered queue for reliable message dispatch.",
    "tags": [
      "Node.js / Express",
      "MongoDB",
      "WhatsApp API",
      "Webhooks",
      "Clash Logic",
      "Faculty Roster",
      "Room Clash Re-routing"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/Schedule-management-system-",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "schedule-system",
    "modalBadge": "Featured • University Administrative Platform & WhatsApp Dispatch",
    "modalTitle": "University Schedule Management & WhatsApp Alert System",
    "modalSubtitle": "Departmental Timetable Matrix, Room Clash Detection & Automated WhatsApp Broadcasts",
    "modalDesc": "Departmental scheduling and faculty coordination system engineered for university faculty, managing lecture timetables, room allocation logic, clash detection, and automated WhatsApp notification dispatches.",
    "architecture": [
      "Node.js & Express RESTful API managing faculty courses, classroom capacity constraints, and time slot reservations.",
      "WhatsApp Business API webhook integration broadcasting immediate timetable modifications and emergency schedule alerts.",
      "Indexed MongoDB schemas and query paths for instantaneous room clash detection and automated conflict re-routing.",
      "Multi-process architecture isolating synchronous HTTP handlers from resource-heavy browser automation queues.",
      "Jittered BullMQ queue introducing randomized 1-3s delays between WhatsApp alerts to ensure delivery compliance.",
      "Stateless JWT authentication and role-based middleware safeguarding admin, staff, and student viewer permission tiers."
    ],
    "designPrinciples": [
      "Zero scheduling clashes across simultaneous department rooms",
      "Rate-limited BullMQ workers protecting WhatsApp Business API quotas",
      "Multi-tier RBAC security across faculty and student portals",
      "Resilient session persistence across server reboots"
    ],
    "stack": [
      "Node.js / Express",
      "MongoDB",
      "WhatsApp Business API",
      "Webhooks",
      "BullMQ",
      "Clash Logic",
      "React (Vite)",
      "JWT Auth"
    ]
  },
  {
    "id": "schedule-ai",
    "number": "07",
    "title": "Intelligent Schedule Management Engine",
    "featured": false,
    "category": [
      "ai",
      "web"
    ],
    "categoryBadge": "AGENTIC AI",
    "addressBar": "agent.scheduler.ai/pipeline-exec",
    "shortDescription": "Autonomous agentic assistant that parses natural language requests into conflict-resolved, time-blocked calendar entries with multi-constraint validation and timezone normalization.",
    "tags": [
      "Next.js",
      "OpenAI API",
      "LangChain",
      "Constraint Solvers",
      "TypeScript"
    ],
    "githubUrl": null,
    "isPrivate": true,
    "demoUrl": null,
    "canvasType": "schedule-ai",
    "modalBadge": "AGENTIC AI • Calendar Optimization Engine",
    "modalTitle": "Intelligent Schedule Management Engine",
    "modalSubtitle": "Autonomous NLP Parsing, Multi-Constraint Solver & Conflict-Free Calendar Allocation",
    "modalDesc": "Autonomous agentic assistant that parses unstructured conversational natural language into conflict-resolved, time-blocked calendar entries with multi-constraint validation.",
    "architecture": [
      "Next.js full-stack framework with React Server Components and fast serverless API endpoints.",
      "OpenAI API integration for semantic entity recognition, temporal expression parsing, and priority classification.",
      "LangChain orchestration with prompt validation chains, JSON schema enforcement, and deterministic fallback handling.",
      "Deterministic conflict-resolution engine that maps existing busy times and identifies optimal non-overlapping slots.",
      "Automated calendar event creation with custom notification triggers."
    ],
    "designPrinciples": [
      "Deterministic conflict-resolution guarantee for overlapping slots",
      "Semantic prompt validation with structured JSON schema constraints",
      "Zero double-booking through atomic calendar validation",
      "Timezone-normalized schedule allocation"
    ],
    "stack": [
      "Next.js",
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "Constraint Resolution Algorithms",
      "TypeScript/JavaScript"
    ]
  },
  {
    "id": "classroom-whatsapp-agent",
    "number": "08",
    "title": "Classroom-to-WhatsApp Homework Agent",
    "featured": false,
    "category": [
      "ai"
    ],
    "categoryBadge": "AI Automation & Webhooks",
    "addressBar": "classroom-agent.bot/webhook-dispatch",
    "shortDescription": "An autonomous workflow agent that monitors Google Classroom for pending coursework, solves assignments via Gemini API, generates formatted Word documents, and delivers them via WhatsApp.",
    "tags": [
      "Python",
      "Google Gemini API",
      "Google Classroom API",
      "WhatsApp Web Automation",
      "python-docx",
      "OAuth2"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/classroom-whatsapp-Agent",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "classroom-agent",
    "modalBadge": "Autonomous AI Pipeline & Multi-API Bridge",
    "modalTitle": "Classroom-to-WhatsApp Homework Agent",
    "modalSubtitle": "Google Classroom Polling, Gemini Multimodal Solving & WhatsApp Document Dispatch",
    "modalDesc": "A personal automation pipeline that continuously synchronizes coursework from Google Classroom, synthesizes academic solutions with Gemini LLMs, and formats documents for direct mobile delivery.",
    "architecture": [
      "Google Classroom API integration using OAuth2 tokens to poll unsubmitted coursework and fetch attachment files.",
      "Google Gemini API pipeline executing prompt analysis, code execution, and multi-step reasoning on assignment criteria.",
      "Automated document formatting engine using python-docx to generate structured academic .docx files.",
      "WhatsApp Web dispatch bridge sending completed documents and status notifications directly to target devices.",
      "Local state persistence tracking processed coursework IDs to prevent redundant execution cycles."
    ],
    "designPrinciples": [
      "Autonomous event-driven polling and synchronization",
      "Structured typography and document standards via python-docx",
      "Safe local state tracking preventing duplicate deliveries",
      "Multi-API orchestration bridging Google Cloud and messaging endpoints"
    ],
    "stack": [
      "Python 3.11",
      "Google Gemini API",
      "Google Classroom API",
      "WhatsApp Automation",
      "python-docx",
      "OAuth2.0"
    ]
  },
  {
    "id": "electrofix",
    "number": "09",
    "title": "ElectroFix — Electrical Services Platform",
    "featured": false,
    "category": [
      "web"
    ],
    "categoryBadge": "Next.js & Admin Operations",
    "addressBar": "electrofix.service.app/booking-portal",
    "shortDescription": "A modern full-stack web application for certified electrical contractor services, featuring online booking, complaint management, customer reviews, and a secure admin dashboard.",
    "tags": [
      "Next.js 14",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Server Actions",
      "Admin Dashboard"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/ElectroFix",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "electrofix",
    "modalBadge": "Full-Stack Next.js 14 Platform",
    "modalTitle": "ElectroFix — Electrical Services Platform",
    "modalSubtitle": "Self-Service Client Booking, Ticket Resolution & Administrative Operations",
    "modalDesc": "A full-stack web application providing commercial and residential clients with streamlined service reservations, emergency support dispatching, and a protected management panel.",
    "architecture": [
      "Next.js App Router with React Server Components providing fast server-side rendering and search engine optimization.",
      "Interactive booking system with real-time time-slot reservations, service tier filtering, and urgent job flags.",
      "Protected administrative operations portal for technicians to review appointment calendars, manage customer records, and resolve support tickets.",
      "Customer feedback pipeline featuring verified client testimonial submission with administrative moderation.",
      "Responsive mobile-first layout styled with Tailwind CSS and modern typography tokens."
    ],
    "designPrinciples": [
      "Mobile-first responsive UX for on-the-go service booking",
      "Strict administrative route protection for company personnel",
      "Server-side rendering for optimal performance and SEO",
      "Real-time ticket state management and status tracking"
    ],
    "stack": [
      "Next.js 14",
      "TypeScript",
      "React 18",
      "Tailwind CSS",
      "Server Actions",
      "Admin Dashboard UI"
    ]
  },
  {
    "id": "crime-record-management",
    "number": "10",
    "title": "Crime Record Management System",
    "featured": false,
    "category": [
      "web"
    ],
    "categoryBadge": "Enterprise Web & Law Enforcement",
    "addressBar": "police-records.gov/case-ledger",
    "shortDescription": "A full-stack law enforcement management system for police departments to log FIRs, track criminal profiles, coordinate officer rosters, and monitor judicial case lifecycles.",
    "tags": [
      "React 19",
      "Vite",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "MySQL / SQLite",
      "Pydantic"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/Crime-Record-Management",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "crime-records",
    "modalBadge": "Law Enforcement Governance Portal",
    "modalTitle": "Crime Record Management System",
    "modalSubtitle": "FIR Tracking, Criminal Database & Judicial Court Records",
    "modalDesc": "A full-stack web application designed for law enforcement agencies to manage, track, and analyze crime records, investigation files, officer assignments, and criminal profiles.",
    "architecture": [
      "Interactive operational dashboard visualizing live statistics on active investigations, solved cases, and officer deployments.",
      "Comprehensive case management tracking investigative statuses across Open, Under Investigation, Solved, and Closed.",
      "Centralized criminal database storing biometric metadata, age, aliases, and custody statuses (Arrested, Wanted, Released).",
      "FastAPI REST backend with SQLAlchemy ORM, Pydantic validation schemas, and automated Swagger OpenAPI documentation.",
      "Dual-database configuration supporting SQLite for local development and MySQL for multi-station deployment."
    ],
    "designPrinciples": [
      "Immutable case history and audit tracking",
      "Structured schema validation on all judicial and criminal entries",
      "Fast relational queries across cases, officers, and suspects",
      "Clean decoupled client-server architecture with Vite and FastAPI"
    ],
    "stack": [
      "React 19",
      "Vite",
      "FastAPI",
      "Python 3.11",
      "SQLAlchemy",
      "MySQL / SQLite",
      "Pydantic",
      "Lucide React"
    ]
  },
  {
    "id": "apply-wise",
    "number": "11",
    "title": "ApplyWise — Job Application Pipeline",
    "featured": false,
    "category": [
      "web"
    ],
    "categoryBadge": "Full-Stack Web & Productivity",
    "addressBar": "applywise.app/kanban-pipeline",
    "shortDescription": "A visual job application pipeline tracker built with PHP and Laravel that transforms job searches into an organized Kanban board from Applied to Offer.",
    "tags": [
      "PHP",
      "Laravel",
      "Blade",
      "MySQL",
      "Kanban Board",
      "Tailwind CSS"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/apply-wise",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "apply-wise",
    "modalBadge": "Productivity & Career Pipeline Application",
    "modalTitle": "ApplyWise — Job Application Pipeline",
    "modalSubtitle": "Visual Application Pipeline, Interview Timers & Stage Tracking",
    "modalDesc": "A full-featured career tracker that streamlines high-volume job applications through an organized visual workflow, preventing missed follow-ups and interview deadlines.",
    "architecture": [
      "Visual Kanban board tracking application progressions across Applied, Screening, Interview, and Offer columns.",
      "Deadline and reminder notification system ensuring candidates follow up with recruiters on time.",
      "Application dossier storage cataloging recruiter contacts, company notes, salary brackets, and interview questions.",
      "Laravel MVC architecture with Eloquent ORM modeling relationship entities between companies, applications, and logs.",
      "Responsive Blade templates styled with Tailwind CSS for rapid navigation across devices."
    ],
    "designPrinciples": [
      "Zero friction application logging and status updates",
      "Clear visual stage progression reducing job hunt fatigue",
      "Secure user credential hashing and data tenancy",
      "Lightweight responsive interfaces optimized for speed"
    ],
    "stack": [
      "PHP 8.2",
      "Laravel",
      "Blade",
      "MySQL",
      "Eloquent ORM",
      "Tailwind CSS",
      "Vite"
    ]
  },
  {
    "id": "spam-detector",
    "number": "12",
    "title": "Veritas AI — SMS Spam Detection Platform",
    "featured": false,
    "category": [
      "ai",
      "web"
    ],
    "categoryBadge": "Machine Learning & NLP Dashboard",
    "addressBar": "veritas.ai/spam-classifier",
    "shortDescription": "An NLP machine learning web platform achieving 97.12% accuracy with a Multinomial Naive Bayes classifier, Flask REST API, and interactive preprocessing breakdown dashboard.",
    "tags": [
      "Python",
      "Flask",
      "Scikit-learn",
      "Multinomial Naive Bayes",
      "TF-IDF",
      "Chart.js",
      "NLP"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/spam-detector",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "spam-detector",
    "modalBadge": "Machine Learning & Natural Language Processing Platform",
    "modalTitle": "Veritas AI — SMS Spam Detection Platform",
    "modalSubtitle": "Multinomial Naive Bayes Classifier, TF-IDF Feature Extraction & REST API",
    "modalDesc": "A machine learning web application that classifies incoming text messages into Spam or Ham (Safe) with 97.12% accuracy, backed by a Flask API and an educational NLP pipeline inspector.",
    "architecture": [
      "Text preprocessing pipeline executing lowercasing, punctuation stripping, regex tokenization, and stopword filtering.",
      "TF-IDF vectorizer converting raw text into high-dimensional feature matrices across 8,342 vocabulary terms.",
      "Multinomial Naive Bayes classifier trained on the UCI SMS Spam Collection dataset with ~99% spam precision.",
      "Flask REST API endpoint POST /predict returning classification labels, confidence scores, and token weight breakdowns.",
      "Interactive web dashboard with Chart.js analytics, prediction history logs, and real-time inference latency monitors."
    ],
    "designPrinciples": [
      "Explainable machine learning with visible token-weight contributions",
      "Sub-15ms inference latency via serialized Pickle pipelines",
      "High precision on spam to avoid false positives on legitimate messages",
      "Intuitive interactive visualization of multi-step NLP transformations"
    ],
    "stack": [
      "Python 3.11",
      "Flask",
      "Scikit-learn",
      "NumPy",
      "Multinomial Naive Bayes",
      "TF-IDF",
      "Chart.js",
      "HTML5/CSS3"
    ]
  },
  {
    "id": "regression-app",
    "number": "13",
    "title": "RegressIQ Studio — Predictive ML Application",
    "featured": false,
    "category": [
      "ai",
      "web"
    ],
    "categoryBadge": "Machine Learning & Data Science",
    "addressBar": "regressiq.studio/dual-pipelines",
    "shortDescription": "An enterprise machine learning web application featuring dual linear regression pipelines for healthcare insurance charge estimation and California housing valuation.",
    "tags": [
      "Python",
      "Flask",
      "Gradio",
      "Scikit-learn",
      "Linear Regression",
      "Glassmorphic UI",
      "Data Science"
    ],
    "githubUrl": "https://github.com/abdulshakoor6437/Regression_App",
    "isPrivate": false,
    "demoUrl": null,
    "canvasType": "regression-app",
    "modalBadge": "Enterprise Machine Learning & Predictive Analytics",
    "modalTitle": "RegressIQ Studio — Predictive ML Application",
    "modalSubtitle": "Dual scikit-learn Pipelines, Real-Time Sliders & Flask/Gradio Interfaces",
    "modalDesc": "A full-stack machine learning web application providing real-time predictions for healthcare insurance costs and California census property values, complete with scenario profiling and EDA charts.",
    "architecture": [
      "Automated scikit-learn preprocessing pipelines using ColumnTransformer, SimpleImputer, StandardScaler, and OneHotEncoder.",
      "Healthcare Insurance Charges predictor modeling demographic and lifestyle factors with an R² evaluation score of 0.7836.",
      "California Housing Valuation engine computing block-level median home values from geographical coordinates and census metrics.",
      "Dual serving architecture featuring both a glassmorphism Flask web interface and an interactive Gradio Blocks dashboard.",
      "RESTful endpoints for predictions and dynamic metrics alongside static correlation heatmap visualizations."
    ],
    "designPrinciples": [
      "Immediate slider-driven inference feedback without full page reloads",
      "Pre-configured scenario profiles enabling instant one-click testing",
      "Standardized machine learning pipelines preventing data leakage",
      "Dual interface accessibility via both modern web UI and Gradio"
    ],
    "stack": [
      "Python 3.11",
      "Flask",
      "Gradio",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Joblib",
      "Chart.js"
    ]
  }
];

/**
 * Generates custom, neo-editorial vector mockup HTML for each project card's visual canvas.
 */
function getCanvasMockupHtml(project) {
  switch (project.canvasType) {
    case 'job-assistant':
      return `
        <div class="visual-inner-mockup mockup-job-assistant">
          <div class="mockup-header-strip">
            <span class="m-strip-tag green">● Active Matcher Pipeline</span>
            <span class="m-strip-meta">JSearch + SerpApi + Remotive</span>
          </div>
          <div class="mockup-job-grid">
            <div class="m-job-step">
              <span class="m-step-num">01</span>
              <div class="m-step-text">
                <strong>Source CV Extraction</strong>
                <span>Strict Fact Parser (No Hallucinations)</span>
              </div>
            </div>
            <div class="m-job-arrow">➔</div>
            <div class="m-job-step active-step">
              <span class="m-step-num">02</span>
              <div class="m-step-text">
                <strong>Semantic Embeddings</strong>
                <span>Cosine Similarity Ranking (98.4%)</span>
              </div>
            </div>
          </div>
          <div class="m-job-footer">
            <div class="m-extension-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/></svg>
              <span>Chrome MV3 Extension Autofill (Greenhouse, Lever, Ashby)</span>
            </div>
            <span class="m-rule-pill">🔒 Human Always Submits</span>
          </div>
        </div>
      `;

    case 'ptb':
      return `
        <div class="visual-inner-mockup">
          <div class="mockup-sidebar">
            <div class="m-nav-item active">Audit Ledger</div>
            <div class="m-nav-item">Quotas</div>
            <div class="m-nav-item">Licensees</div>
            <div class="m-nav-item">RBAC Tokens</div>
          </div>
          <div class="mockup-main">
            <div class="m-pill-row">
              <span class="m-status-pill blue">JWT Auth: Multi-Tier RBAC</span>
              <span class="m-status-pill green">Audit: Immutable Sync</span>
            </div>
            <div class="m-table-rows">
              <div class="m-row"><span class="m-tag admin">SUPER_ADMIN</span> Quota Reallocated • Verified</div>
              <div class="m-row"><span class="m-tag inspector">INSPECTOR_T2</span> Field Compliance Logged</div>
              <div class="m-row"><span class="m-tag auditor">AUDITOR</span> Cryptographic Delta Stored</div>
            </div>
          </div>
        </div>
      `;

    case 'zimma':
      return `
        <div class="visual-phone-frame">
          <div class="v-notch"></div>
          <div class="v-phone-body">
            <div class="v-phone-brand">
              <span>ZIMMA ESCROW</span>
              <span class="v-secp-badge">SECP REGISTERED</span>
            </div>
            <div class="v-escrow-card">
              <div class="v-escrow-status">
                <span class="pulse-indicator mint-pulse sm"></span>
                <span>Funds Secured in Escrow</span>
              </div>
              <div class="v-escrow-amount" style="font-size: 1.05rem; letter-spacing: 0.05em;">Milestone Vault Active</div>
              <div class="v-escrow-bar">
                <div class="v-escrow-fill" style="width: 75%;"></div>
              </div>
              <div class="v-escrow-sub">3 of 4 Milestones Approved</div>
            </div>
            <div class="v-fcm-alert"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg> FCM Push Sync: Milestone Approved</div>
          </div>
        </div>
      `;

    case 'ai-assistant':
      return `
        <div class="visual-ai-diagram">
          <div class="v-prompt-bubble">
            <span class="v-quote-glyph"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
            <span>"Recall our conversation history and tech preferences..."</span>
          </div>
          <div class="v-pipeline-flow">
            <div class="v-flow-node">
              <span class="v-node-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
              <span class="v-node-text">Claude 3.5 SSE</span>
            </div>
            <span class="v-flow-arrow">➔</span>
            <div class="v-flow-node active-node">
              <span class="v-node-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 1 0 10 10"/></svg></span>
              <span class="v-node-text">Memory Recall</span>
            </div>
            <span class="v-flow-arrow">➔</span>
            <div class="v-flow-node">
              <span class="v-node-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="18" height="18" x="3" y="4" rx="2"/></svg></span>
              <span class="v-node-text">User Session</span>
            </div>
          </div>
          <div class="v-result-badge"><svg class="mini-chk-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ECCA3" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Streaming SSE Active • User Facts Injected</div>
        </div>
      `;

    case 'documind':
      return `
        <div class="visual-inner-mockup mockup-documind">
          <div class="mockup-sidebar">
            <div class="m-nav-item active">PDF Chunks</div>
            <div class="m-nav-item">ChromaDB</div>
            <div class="m-nav-item">Embeddings</div>
            <div class="m-nav-item">Citations</div>
          </div>
          <div class="mockup-main">
            <div class="m-pill-row">
              <span class="m-status-pill blue">Vector Store: ChromaDB</span>
              <span class="m-status-pill green">Top-K Similarity</span>
            </div>
            <div class="m-table-rows">
              <div class="m-row"><span class="m-tag admin">PAGE 14</span> "Revenue up 34.8% YoY" • Grounded</div>
              <div class="m-row"><span class="m-tag inspector">CHUNK 03</span> Sentence-Aware Window Bound</div>
              <div class="m-row"><span class="m-tag auditor">CITATION</span> Zero-Hallucination Verified</div>
            </div>
          </div>
        </div>
      `;

    case 'schedule-system':
      return `
        <div class="visual-szabist-grid">
          <div class="v-szabist-box">
            <span class="v-box-head">FACULTY ROSTER</span>
            <div class="v-roster-item">CS-301 • Hall A (09:00 - 10:30)</div>
            <div class="v-roster-item">SE-402 • Lab 3 (11:00 - 12:30)</div>
          </div>
          <div class="v-szabist-box">
            <span class="v-box-head">WHATSAPP DISPATCH</span>
            <div class="v-alert-pill green"><svg class="mini-chk-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#36B38C" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> 142 Faculty Alerts Sent</div>
            <div class="v-alert-pill amber"><svg class="mini-chk-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Room Clash Re-routed</div>
          </div>
        </div>
      `;

    case 'schedule-ai':
      return `
        <div class="visual-ai-diagram">
          <div class="v-prompt-bubble">
            <span class="v-quote-glyph"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
            <span>&quot;Book 45m sprint review tomorrow after 10am...&quot;</span>
          </div>
          <div class="v-pipeline-flow">
            <div class="v-flow-node">
              <span class="v-node-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg></span>
              <span class="v-node-text">LangChain Parser</span>
            </div>
            <span class="v-flow-arrow">➔</span>
            <div class="v-flow-node">
              <span class="v-node-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
              <span class="v-node-text">Constraint Engine</span>
            </div>
            <span class="v-flow-arrow">➔</span>
            <div class="v-flow-node active-node">
              <span class="v-node-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="18" height="18" x="3" y="4" rx="2"/></svg></span>
              <span class="v-node-text">10:30 AM Slot</span>
            </div>
          </div>
          <div class="v-result-badge"><svg class="mini-chk-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ECCA3" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Conflict-Free Slot Synchronized to Calendar</div>
        </div>
      `;

    case 'classroom-agent':
      return `
        <div class="visual-szabist-grid">
          <div class="v-szabist-box">
            <span class="v-box-head">GOOGLE CLASSROOM</span>
            <div class="v-roster-item">CS-401 • Assignment Detected</div>
            <div class="v-roster-item">Gemini API Multimodal Solver</div>
          </div>
          <div class="v-szabist-box">
            <span class="v-box-head">WHATSAPP DISPATCH</span>
            <div class="v-alert-pill green"><svg class="mini-chk-svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#36B38C" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Word Document .docx Sent</div>
            <div class="v-alert-pill amber">Background Poller Running</div>
          </div>
        </div>
      `;

    case 'electrofix':
      return `
        <div class="visual-inner-mockup mockup-electrofix">
          <div class="mockup-sidebar">
            <div class="m-nav-item active">Bookings</div>
            <div class="m-nav-item">Services</div>
            <div class="m-nav-item">Reviews</div>
            <div class="m-nav-item">Admin</div>
          </div>
          <div class="mockup-main">
            <div class="m-pill-row">
              <span class="m-status-pill green">Next.js 14 App Router</span>
              <span class="m-status-pill blue">Verified Electrician</span>
            </div>
            <div class="m-table-rows">
              <div class="m-row"><span class="m-tag admin">URGENT</span> Commercial Power Grid Audit</div>
              <div class="m-row"><span class="m-tag inspector">COMPLETED</span> Wiring &amp; Circuit Breaker Fix</div>
              <div class="m-row"><span class="m-tag auditor">REVIEW</span> ★★★★★ 5.0 (Client Testimonial)</div>
            </div>
          </div>
        </div>
      `;

    case 'crime-records':
      return `
        <div class="visual-inner-mockup mockup-crime">
          <div class="mockup-sidebar">
            <div class="m-nav-item active">FIR Ledger</div>
            <div class="m-nav-item">Officers</div>
            <div class="m-nav-item">Criminals</div>
            <div class="m-nav-item">Court Logs</div>
          </div>
          <div class="mockup-main">
            <div class="m-pill-row">
              <span class="m-status-pill blue">FastAPI + SQLAlchemy</span>
              <span class="m-status-pill green">MySQL / SQLite</span>
            </div>
            <div class="m-table-rows">
              <div class="m-row"><span class="m-tag admin">FIR #2026-084</span> Case Under Investigation</div>
              <div class="m-row"><span class="m-tag inspector">OFFICER</span> Insp. Tariq • Sector West Assigned</div>
              <div class="m-row"><span class="m-tag auditor">COURT</span> Hearing Scheduled • Verdict Pending</div>
            </div>
          </div>
        </div>
      `;

    case 'apply-wise':
      return `
        <div class="visual-inner-mockup mockup-applywise">
          <div class="mockup-header-strip">
            <span class="m-strip-tag blue">● Visual Kanban Pipeline</span>
            <span class="m-strip-meta">PHP Laravel + Blade</span>
          </div>
          <div class="mockup-kanban-row">
            <div class="kanban-col">
              <span class="k-title">Applied (4)</span>
              <div class="k-card">Stripe Senior SE</div>
            </div>
            <div class="kanban-col">
              <span class="k-title">Interview (2)</span>
              <div class="k-card active">Meta Lead AI</div>
            </div>
            <div class="kanban-col">
              <span class="k-title">Offer (1)</span>
              <div class="k-card win">Remote Staff SE</div>
            </div>
          </div>
          <div class="m-job-footer">
            <span class="m-rule-pill">🔔 Follow-up Reminder Due Today</span>
          </div>
        </div>
      `;

    case 'spam-detector':
      return `
        <div class="visual-inner-mockup mockup-spam">
          <div class="mockup-header-strip">
            <span class="m-strip-tag green">● Multinomial Naive Bayes</span>
            <span class="m-strip-meta">97.12% Accuracy • Flask API</span>
          </div>
          <div class="mockup-main" style="padding: 0.6rem;">
            <div class="m-row" style="background:#FFF1F2; color:#9F1239; font-weight:700; margin-bottom:0.4rem;">
              <span>🚨 Classification: SPAM (97.12% Confidence)</span>
            </div>
            <div class="m-table-rows">
              <div class="m-row"><span class="m-tag admin">TF-IDF</span> "urgent" (0.48) • "prize" (0.42)</div>
              <div class="m-row"><span class="m-tag inspector">NLP</span> Lowercased • Stopwords Cleaned</div>
            </div>
          </div>
        </div>
      `;

    case 'regression-app':
      return `
        <div class="visual-inner-mockup mockup-regressiq">
          <div class="mockup-header-strip">
            <span class="m-strip-tag blue">● Scikit-Learn Dual Pipelines</span>
            <span class="m-strip-meta">Flask + Gradio Interfaces</span>
          </div>
          <div class="mockup-main" style="padding: 0.6rem;">
            <div class="m-pill-row">
              <span class="m-status-pill green">Insurance R²: 0.7836</span>
              <span class="m-status-pill blue">CA Housing Valuator</span>
            </div>
            <div class="m-table-rows">
              <div class="m-row"><span class="m-tag admin">HEALTH</span> Est. Charges: $4,180/yr (Low Risk)</div>
              <div class="m-row"><span class="m-tag inspector">HOUSING</span> Median Block Value: $512,000</div>
            </div>
          </div>
        </div>
      `;

    default:
      return `
        <div class="visual-inner-mockup">
          <div class="mockup-main">
            <div class="m-pill-row">
              <span class="m-status-pill green">Verified Production Build</span>
            </div>
          </div>
        </div>
      `;
  }
}

/**
 * Builds the complete HTML string for a browser project card.
 */
function createProjectCardHtml(project) {
  const categoryClasses = project.category.join(' ');
  const featuredAttr = project.featured ? 'true' : 'false';

  // Category badge
  const categoryBadgeHtml = project.featured
    ? `<span class="browser-cat-badge badge-featured">★ Featured • ${escapeHtml(project.categoryBadge)}</span>`
    : `<span class="browser-cat-badge">${escapeHtml(project.categoryBadge)}</span>`;

  // Tech stack pills
  const tagsHtml = project.tags
    .map(tag => `<span class="p-tech-pill">${escapeHtml(tag)}</span>`)
    .join('');

  // Action row buttons: Inspect Architecture + GitHub/Private + Live Demo
  let actionButtonsHtml = `
    <button class="btn btn-outline-light btn-sm open-modal-btn" data-project="${escapeHtml(project.id)}" aria-label="Inspect ${escapeHtml(project.title)} architecture">
      <span>Inspect Architecture &amp; Features</span>
      <span class="arrow-glyph"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
    </button>
  `;

  if (project.isPrivate || !project.githubUrl) {
    actionButtonsHtml += `
      <span class="btn-private" title="Private project repository (Verified Build)">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span>Private Repo</span>
      </span>
    `;
  } else {
    actionButtonsHtml += `
      <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-github" title="View ${escapeHtml(project.title)} on GitHub">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>GitHub</span>
      </a>
    `;
  }

  if (project.demoUrl) {
    actionButtonsHtml += `
      <a href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-demo" title="Open Live Demo">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        <span>Live Demo</span>
      </a>
    `;
  }

  // Visual Mockup / Canvas
  const canvasMockupHtml = getCanvasMockupHtml(project);

  return `
    <article class="browser-project-card reveal-on-scroll" data-category="${escapeHtml(categoryClasses)}" data-featured="${featuredAttr}" id="card-${escapeHtml(project.id)}">
      <!-- Stylized Browser Window Top Bar -->
      <div class="browser-window-header">
        <div class="browser-dots" aria-hidden="true">
          <span class="b-dot coral"></span>
          <span class="b-dot peach"></span>
          <span class="b-dot mint"></span>
        </div>
        <div class="browser-address-bar">
          <span class="address-lock"><svg class="address-lock-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          <span class="address-url">${escapeHtml(project.addressBar)}</span>
        </div>
        ${categoryBadgeHtml}
      </div>

      <!-- Illustrated Visual Canvas -->
      <div class="browser-visual-canvas canvas-${escapeHtml(project.id)}">
        ${canvasMockupHtml}
      </div>

      <!-- Dark-Purple Information Card -->
      <div class="browser-project-info">
        <div class="project-header-meta">
          <span class="p-number">${escapeHtml(project.number)}</span>
          <h3 class="p-title">${escapeHtml(project.title)}</h3>
        </div>
        <p class="p-description">
          ${escapeHtml(project.shortDescription)}
        </p>
        <div class="p-tags-row">
          ${tagsHtml}
        </div>
        <div class="p-action-row">
          ${actionButtonsHtml}
        </div>
      </div>
    </article>
  `;
}

/**
 * Escapes unsafe HTML characters.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/**
 * Renders all project cards into the browser projects container.
 */
function renderProjectsToGrid(containerSelector = '.browser-projects-grid') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const html = PROJECTS_DATA.map(createProjectCardHtml).join('');
  const emptyStateHtml = '<div class="projects-empty-state" id="projectsEmptyState" style="display: none;">No projects in this category yet.</div>';
  container.innerHTML = html + emptyStateHtml;

  // Update dynamic filter counts from PROJECTS_DATA at load time
  updateFilterCounts();
}

/**
 * Calculates and updates pill counts for each filter category dynamically at load time.
 */
function updateFilterCounts() {
  const totalCount = PROJECTS_DATA.length;
  const featuredCount = PROJECTS_DATA.filter(p => p.featured).length;
  const webCount = PROJECTS_DATA.filter(p => p.category.includes('web')).length;
  const aiCount = PROJECTS_DATA.filter(p => p.category.includes('ai')).length;
  const mobileCount = PROJECTS_DATA.filter(p => p.category.includes('mobile')).length;

  const countAll = document.getElementById('filterCountAll');
  const countFeatured = document.getElementById('filterCountFeatured');
  const countWeb = document.getElementById('filterCountWeb');
  const countAi = document.getElementById('filterCountAi');
  const countMobile = document.getElementById('filterCountMobile');

  if (countAll) countAll.textContent = totalCount;
  if (countFeatured) countFeatured.textContent = featuredCount;
  if (countWeb) countWeb.textContent = webCount;
  if (countAi) countAi.textContent = aiCount;
  if (countMobile) countMobile.textContent = mobileCount;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA, createProjectCardHtml, renderProjectsToGrid, updateFilterCounts };
}

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.createProjectCardHtml = createProjectCardHtml;
  window.renderProjectsToGrid = renderProjectsToGrid;
  window.updateFilterCounts = updateFilterCounts;
}
