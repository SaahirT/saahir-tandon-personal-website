import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useState, type ComponentType } from "react";

import headshotAsset from "@/assets/saahir-tandon-headshot.jpeg.asset.json";
import chirpLogo from "@/assets/chirp-ai-logo.jpeg.asset.json";
import handshakeLogo from "@/assets/handshake-ai-logo.jpeg.asset.json";
import chirpMainMenu from "@/assets/chirp-main-menu.jpeg.asset.json";
import chirpPoiMenu from "@/assets/chirp-poi-menu.jpeg.asset.json";
import campusDataImage from "@/assets/project-campus-data.jpg";
import researchAssistantImage from "@/assets/project-research-assistant.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionId = "about" | "courses" | "experience" | "portfolio";
type CourseCategory = "All" | "Computer Science" | "Data Science" | "Economics";

const navigation: { id: SectionId; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { id: "about", label: "About", icon: UserRound },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "portfolio", label: "Portfolio", icon: Layers3 },
];

const courses = [
  { code: "01:198:111", name: "Introduction to Computer Science", categories: ["Computer Science"], description: "Introduces programming and algorithmic problem-solving using Java, including object-oriented programming, recursion, searching, sorting, debugging, and introductory data structures." },
  { code: "01:198:112", name: "Data Structures", categories: ["Computer Science"], description: "Uses Java to study linked lists, stacks, queues, trees, graphs, hashing, searching, sorting, and the runtime tradeoffs of different data structures and algorithms." },
  { code: "01:198:211", name: "Computer Architecture", categories: ["Computer Science"], description: "Explores how computer hardware and software interact through C and assembly language, covering processors, memory, caches, digital logic, data representation, and computer arithmetic." },
  { code: "01:198:344", name: "Design and Analysis of Computer Algorithms", categories: ["Computer Science"], description: "Covers algorithm design and complexity analysis through techniques such as greedy algorithms, dynamic programming, divide-and-conquer, graph algorithms, reductions, and NP-completeness." },
  { code: "01:198:205", name: "Introduction to Discrete Structures I", categories: ["Computer Science"], description: "Develops the mathematical foundations of computer science through logic, sets, functions, relations, induction, recursive definitions, and mathematical proofs." },
  { code: "01:198:206", name: "Introduction to Discrete Structures II", categories: ["Computer Science"], description: "Covers combinatorics, recurrence relations, discrete probability, random variables, probability distributions, and graph theory including trees, paths, and connectivity." },
  { code: "01:640:250", name: "Introductory Linear Algebra", categories: ["Computer Science"], description: "Covers vectors, matrices, Gaussian elimination, linear transformations, vector spaces, basis and dimension, determinants, eigenvalues, eigenvectors, diagonalization, and orthogonality." },
  { code: "01:730:329", name: "Minds, Machines, and Persons", categories: ["Computer Science"], description: "Explores philosophy of mind and artificial intelligence through topics including consciousness, mental representation, computational cognition, machine intelligence, mind uploading, and the ethics of superintelligent AI." },
  { code: "01:198:214", name: "Systems Programming", categories: ["Computer Science"], description: "Uses C and Unix to study memory management, system calls, I/O, caching, multithreading, shell scripting, debugging, profiling, testing, and performance optimization." },
  { code: "01:198:336", name: "Principles of Information and Data Management", categories: ["Computer Science"], description: "Covers relational databases, structured and semi-structured data, querying, XML, conceptual modeling, schema design, transactions, security, reliability, optimization, and information integration." },
  { code: "01:640:151", name: "Calculus I", categories: ["Computer Science"], description: "Covers limits, derivatives, differential calculus, optimization, the Mean Value Theorem, and an introduction to integration for single-variable functions." },
  { code: "01:640:152", name: "Calculus II", categories: ["Computer Science"], description: "Extends calculus through integration techniques and applications, infinite and power series, parametric curves, polar coordinates, and complex numbers." },
  { code: "01:198:142", name: "Data 101", categories: ["Data Science"], description: "Introduces data literacy, statistics, probability, data analysis, and visualization using the R programming language to analyze real-world datasets." },
  { code: "01:960:291", name: "Statistical Inference for Data Science", categories: ["Data Science"], description: "Introduces probability and statistical inference for data science, including regression, resampling, confidence intervals, hypothesis testing, and probability distributions." },
  { code: "01:198:210", name: "Data Management for Data Science", categories: ["Computer Science", "Data Science"], description: "Uses Python, Jupyter, and data libraries to acquire, clean, curate, visualize, and manage real-world datasets, including working with databases and structured data." },
  { code: "01:198:439", name: "Introduction to Data Science", categories: ["Computer Science", "Data Science"], description: "Uses Python, Pandas, NumPy, Matplotlib/Seaborn, and TensorFlow to explore data preprocessing, visualization, regression, classification, clustering, machine learning, recommender systems, deep learning, and LLMs." },
  { code: "04:547:225", name: "Data in Context", categories: ["Data Science"], description: "Examines data science through its social context, focusing on the ethical, legal, social, and political implications of data collection, algorithms, and data-driven decision making." },
  { code: "01:220:103", name: "Introduction to Macroeconomics", categories: ["Economics"], description: "Introduces national income, employment, inflation, unemployment, monetary and fiscal policy, banking, international trade, and economic growth." },
  { code: "01:220:102", name: "Introduction to Microeconomics", categories: ["Economics"], description: "Introduces supply and demand, market pricing, resource allocation, competition, monopoly, government intervention, externalities, and economic efficiency." },
  { code: "01:220:321", name: "Intermediate Macroeconomic Analysis", categories: ["Economics"], description: "Studies modern and classical macroeconomic models of national income, economic growth, stabilization, unemployment, and inflation." },
  { code: "01:220:320", name: "Intermediate Microeconomics Analysis", categories: ["Economics"], description: "Uses mathematical models to analyze consumer and firm decision-making, supply and demand, competitive and monopolistic markets, general equilibrium, and welfare economics." },
  { code: "01:220:322", name: "Econometrics", categories: ["Economics"], description: "Applies statistical methods to economic data, focusing on ordinary least squares regression, hypothesis testing, prediction, time-series methods, and econometric modeling using statistical software." },
] as const;

const experiences = [
  {
    role: "AI Evaluation Specialist",
    company: "Handshake AI Fellowship",
    dates: "Sep 2026 — Present",
    location: "San Francisco, CA · Remote",
    logo: handshakeLogo.url,
    points: ["Contributed to an enterprise AI model alignment initiative aimed at evaluating and benchmarking next-generation Large Language Models (LLMs).", "Designed, executed, and audited complex evaluation tasks across varied formats to benchmark model reasoning accuracy, structural consistency, and format compliance.", "Delivered structured error analysis and fine-tuning feedback to construct precise ground-truth evaluation datasets for downstream Supervised Fine-Tuning (SFT) pipelines."],
  },
  {
    role: "AI Data Annotation Fellow",
    company: "Handshake AI Fellowship",
    dates: "Aug 2026 — Sep 2026",
    location: "San Francisco, CA · Remote",
    logo: handshakeLogo.url,
    points: ["Contributed to an enterprise AI data initiative aimed at training next-generation Automatic Speech Recognition (ASR) models.", "Transcribed, verified, and annotated high-volume video and audio datasets to construct precise ground-truth training data.", "Delivered standardized, precise text-audio ground-truth to ensure high-quality dataset deliverables for downstream training pipelines."],
  },
  {
    role: "Full Stack Software Engineer Intern",
    company: "Chirp AI",
    dates: "Dec 2025 — Mar 2026",
    location: "San Francisco, CA · Remote",
    logo: chirpLogo.url,
    points: ["Built core cross-platform features and backend architecture for an iOS application focused on family-friendly activity searches.", "Developed interactive map APIs and custom filtering logic in React Native (Expo) while architecting a relational Supabase (PostgreSQL) backend with secure OAuth pipelines.", "Shipped production-ready UI screens and CRUD endpoints, enabling location filtering and secure user session management."],
    screenshots: [
      { src: chirpMainMenu.url, alt: "Chirp AI map-based main menu showing nearby family-friendly places", label: "Main menu" },
      { src: chirpPoiMenu.url, alt: "Chirp AI place details menu with reviews and recommendations", label: "Place details" },
    ],
  },
];

const projects = [
  { name: "Campus Insights", description: "A data platform that helps university teams understand enrollment, resources, and student outcomes.", tech: ["React", "TypeScript", "PostgreSQL"], image: campusDataImage, live: true },
  { name: "Research Copilot", description: "An AI-assisted workspace for organizing papers, extracting findings, and building structured research notes.", tech: ["Python", "FastAPI", "LLM APIs"], image: researchAssistantImage, live: true },
  { name: "Economic Signals API", description: "A documented backend service that aggregates public indicators into analysis-ready time series.", tech: ["Node.js", "REST", "Redis"], image: undefined, live: false },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saahir Tandon — Student & Software Developer" },
      { name: "description", content: "Portfolio of Saahir Tandon, a computer science student at Rutgers University–New Brunswick building thoughtful software across AI, data, and the web." },
      { property: "og:title", content: "Saahir Tandon — Student & Software Developer" },
      { property: "og:description", content: "Selected coursework, experience, and software projects across AI, data, and the web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioSite,
});

function PortfolioSite() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const selectSection = (section: SectionId) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border bg-sidebar lg:flex lg:flex-col">
        <SidebarContent activeSection={activeSection} onSelect={selectSection} />
      </aside>

      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-5 backdrop-blur lg:hidden">
        <Brand />
        <Button variant="ghost" size="icon" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-30 border-b border-border bg-sidebar p-4 shadow-2xl lg:hidden">
          <nav className="grid gap-2" aria-label="Portfolio sections">
            {navigation.map((item) => <NavButton key={item.id} item={item} active={activeSection === item.id} onSelect={selectSection} />)}
          </nav>
        </div>
      )}

      <main className="relative min-h-screen overflow-hidden lg:ml-72">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/5 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-highlight/4 blur-[100px]" aria-hidden="true" />
        <div key={activeSection} className="section-enter relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      {activeSection === "about" && <AboutSection onViewWork={() => selectSection("portfolio")} />}
          {activeSection === "courses" && <CoursesSection />}
          {activeSection === "experience" && <ExperienceSection />}
          {activeSection === "portfolio" && <PortfolioSection />}
        </div>
      </main>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/10 text-sm font-bold text-primary">ST</div>
      <div><p className="font-display text-sm font-semibold text-foreground">Saahir Tandon</p><p className="text-xs text-muted-foreground">Student & Developer</p></div>
    </div>
  );
}

function SidebarContent({ activeSection, onSelect }: { activeSection: SectionId; onSelect: (section: SectionId) => void }) {
  return (
    <>
      <div className="border-b border-border p-7"><Brand /></div>
      <nav className="flex-1 space-y-2 p-5" aria-label="Portfolio sections">
        {navigation.map((item) => <NavButton key={item.id} item={item} active={activeSection === item.id} onSelect={onSelect} />)}
      </nav>
      <div className="border-t border-border p-6">
        <p className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />Available for opportunities</p>
        <p className="text-xs leading-relaxed text-muted-foreground">Central New Jersey • NYC / NJ / Philadelphia · Open to internships and collaborative projects.</p>
      </div>
    </>
  );
}

function NavButton({ item, active, onSelect }: { item: (typeof navigation)[number]; active: boolean; onSelect: (section: SectionId) => void }) {
  const Icon = item.icon;
  return (
    <Button variant="nav" data-active={active} onClick={() => onSelect(item.id)} className="w-full justify-start">
      <Icon className="size-4" /><span>{item.label}</span>
    </Button>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="mb-9 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-semibold uppercase text-primary">{eyebrow}</p>
      <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
    </header>
  );
}

function AboutSection({ onViewWork }: { onViewWork: () => void }) {
  const interests = [
    { title: "Artificial Intelligence", why: "Placeholder — a moment from [course/class or childhood moment] where I first saw how intelligent software could change how people work and what that made me want to build." },
    { title: "Backend Development", why: "Placeholder — the experience of [a project or outage] that taught me the invisible work behind reliable systems is what keeps people's trust in a product." },
    { title: "Frontend Development", why: "Placeholder — watching [a person or group] struggle with an interface and realizing that thoughtful design is how software earns the patience it asks of people." },
    { title: "Data", why: "Placeholder — the day [an assignment or research moment] showed me that clean, honest data changes decisions faster than arguments do." },
    { title: "Emerging Technology", why: "Placeholder — why I keep exploring new tools even when they aren't required, and how [a specific moment] convinced me curiosity compounds." },
  ];
  return (
    <section>
      <div className="grid items-center gap-10 xl:grid-cols-[1fr_340px] xl:gap-16">
        <div>
          <p className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-primary"><span className="h-px w-8 bg-primary" />Hello, I’m</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl xl:text-7xl">Saahir Tandon<span className="text-highlight">.</span></h1>
          <p className="mt-3 font-mono text-sm text-muted-foreground">Pronounced saw-hair</p>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground/85">A Computer Science student at Rutgers University–New Brunswick turning curious questions into useful, well-crafted software.</p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">I started at Rutgers in September 2023 and am expected to graduate in May 2027 with a major in Computer Science and a minor in Data Science (Economics Track). I’m exploring the intersection of intelligent systems, dependable backend engineering, thoughtful interfaces, and data-informed products.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={onViewWork}>View my work <ArrowUpRight /></Button>
            <Button variant="outline" asChild><a href="https://www.linkedin.com/in/saahirtandon" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <Linkedin /></a></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs xl:max-w-none">
          <div className="absolute -inset-3 rounded-lg border border-primary/20" aria-hidden="true" />
          <img src={headshotAsset.url} alt="Portrait of Saahir Tandon" width={800} height={800} className="relative aspect-[4/5] w-full rounded-lg border border-border object-cover object-top" />
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase text-primary">My why</p>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Why I’m drawn to this work</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Placeholder — your personal story goes here. A short paragraph that sets up the five “why” cards below: the moment, person, or experience that got you interested in building software, and what keeps you here.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Connect</h2>
            <div className="mt-4 flex gap-2">
              <Button variant="iconOutline" size="icon" asChild><a href="https://github.com/SaahirT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github /></a></Button>
              <Button variant="iconOutline" size="icon" asChild><a href="https://www.linkedin.com/in/saahirtandon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin /></a></Button>
              <Button variant="iconOutline" size="icon" asChild><a href="#resume" aria-label="Resume (placeholder)" title="Resume (placeholder)"><Download /></a></Button>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {interests.map((interest, index) => (
            <article key={interest.title} className="portfolio-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-10 bg-primary/30" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold">{interest.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{interest.why}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  const categories: CourseCategory[] = ["All", "Computer Science", "Data Science", "Economics"];
  const [filter, setFilter] = useState<CourseCategory>("All");
  const visibleCourses = (filter === "All" ? [...courses] : courses.filter((course) => (course.categories as readonly string[]).includes(filter))).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <section>
      <SectionHeading eyebrow="Coursework" title="Courses & academic focus" description="Selected coursework that has shaped how I think about software, data, and the systems around them." />
      <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter courses">{categories.map((category) => <Button key={category} variant="filter" data-active={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div>
      <div className="grid gap-4 md:grid-cols-2">{visibleCourses.map((course) => (
        <article key={`${course.code}-${course.name}`} className="portfolio-card p-6">
          <div className="mb-5 font-mono text-sm font-semibold text-primary">{course.code}</div>
          <h2 className="font-display text-xl font-semibold">{course.name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{course.description}</p>
        </article>
      ))}</div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section>
      <SectionHeading eyebrow="Experience" title="Where I’ve contributed" description="Building software and contributing to AI evaluation and data initiatives." />
      <div className="relative space-y-0 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-px before:bg-border">{experiences.map((experience) => (
         <article key={experience.role} className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-5 border-b border-border py-8 first:pt-2">
           <img src={experience.logo} alt={`${experience.company} logo`} width={56} height={56} className="z-10 size-14 rounded-md border border-border object-cover" />
          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between"><div><h2 className="font-display text-xl font-semibold">{experience.role}</h2><p className="mt-1 text-sm font-medium text-primary">{experience.company}</p></div><div className="text-sm text-muted-foreground md:text-right"><p>{experience.dates}</p><p className="mt-1">{experience.location}</p></div></div>
            <ul className="mt-5 space-y-2">{experience.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{point}</li>)}</ul>
             {experience.screenshots && <div className="mt-6 grid grid-cols-2 gap-4 sm:max-w-sm" aria-label="Chirp AI app screenshots">{experience.screenshots.map((shot) => <a key={shot.label} href={shot.src} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Open ${shot.label} screenshot`}><img src={shot.src} alt={shot.alt} loading="lazy" className="aspect-[591/1280] w-full rounded-md border border-border bg-secondary object-contain transition-colors group-hover:border-primary/60" /><span className="mt-2 block text-xs text-muted-foreground group-hover:text-primary">{shot.label} <ArrowUpRight className="inline size-3" /></span></a>)}</div>}
          </div>
        </article>
      ))}</div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section>
      <SectionHeading eyebrow="Selected work" title="Projects built with purpose" description="A mix of product, data, and engineering work focused on solving real problems with clear, maintainable technology." />
      <div className="grid gap-5 md:grid-cols-2">{projects.map((project, index) => (
        <article key={project.name} className={cn("portfolio-card overflow-hidden", index === 0 && "md:col-span-2 md:grid md:grid-cols-[1.25fr_1fr]")}>
          {project.image && <img src={project.image} alt={`${project.name} interface preview`} width={1280} height={800} loading="lazy" className={cn("aspect-video w-full border-b border-border object-cover", index === 0 && "md:h-full md:border-b-0 md:border-r")} />}
          <div className="flex flex-col p-6">
            <div className="mb-5 flex items-center justify-between"><span className="font-mono text-xs text-primary">0{index + 1}</span><Code2 className="size-5 text-muted-foreground" /></div>
            <h2 className="font-display text-xl font-semibold">{project.name}</h2><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="font-mono text-xs text-primary/80">{item}</span>)}</div>
             <div className="mt-6 flex gap-2"><Button variant="outline" size="sm" asChild><a href="https://github.com/SaahirT" target="_blank" rel="noopener noreferrer"><Github />GitHub</a></Button>{project.live && <Button variant="secondary" size="sm" asChild><a href="#demo">Live demo <ArrowUpRight /></a></Button>}</div>
          </div>
        </article>
      ))}</div>
    </section>
  );
}