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
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useState, type ComponentType } from "react";

import headshotAsset from "@/assets/saahir-tandon-headshot.jpeg.asset.json";
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
  { code: "CS 380", name: "Artificial Intelligence", category: "Computer Science", description: "Search, reasoning, machine learning fundamentals, and practical intelligent systems." },
  { code: "DS 310", name: "Applied Machine Learning", category: "Data Science", description: "Supervised learning, model evaluation, feature engineering, and responsible deployment." },
  { code: "CS 342", name: "Database Systems", category: "Computer Science", description: "Relational design, query optimization, transactions, and distributed data systems." },
  { code: "ECON 325", name: "Econometrics", category: "Economics", description: "Causal inference and regression methods for analyzing real-world economic data." },
  { code: "DS 260", name: "Data Visualization", category: "Data Science", description: "Visual analysis, storytelling, and interactive dashboards for complex datasets." },
  { code: "ECON 210", name: "Intermediate Microeconomics", category: "Economics", description: "Consumer behavior, market structure, incentives, and strategic decision-making." },
] as const;

const experiences = [
  {
    initials: "NT",
    role: "Software Engineering Intern",
    company: "Northstar Technologies",
    dates: "May 2026 — Aug 2026",
    location: "New York, NY · Hybrid",
    points: ["Built internal APIs and automated reporting workflows used by three product teams.", "Improved data processing reliability through typed validation and integration tests."],
  },
  {
    initials: "DL",
    role: "Undergraduate Research Assistant",
    company: "University Data Lab",
    dates: "Sep 2025 — Present",
    location: "Boston, MA",
    points: ["Developed Python pipelines for cleaning and analyzing public policy datasets.", "Presented research findings through interactive visualizations and concise technical reports."],
  },
  {
    initials: "TC",
    role: "Web Development Lead",
    company: "Technology Club",
    dates: "Jan 2025 — May 2026",
    location: "Boston, MA",
    points: ["Led a four-person team delivering event and member tools for the student community.", "Introduced reusable components and a lightweight review process for new contributors."],
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
          <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground/85">A Computer Science student at Rutgers University–New Brunswick turning curious questions into useful, well-crafted software.</p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">I started at Rutgers in September 2023 and am expected to graduate in May 2027 with a major in Computer Science and a minor in Data Science (Economics Track). I’m exploring the intersection of intelligent systems, dependable backend engineering, thoughtful interfaces, and data-informed products.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={onViewWork}>View my work <ArrowUpRight /></Button>
            <Button variant="outline" asChild><a href="mailto:alex@example.com">Get in touch <Mail /></a></Button>
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
              <Button variant="iconOutline" size="icon" asChild><a href="https://github.com" aria-label="GitHub"><Github /></a></Button>
              <Button variant="iconOutline" size="icon" asChild><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a></Button>
              <Button variant="iconOutline" size="icon" asChild><a href="#resume" aria-label="Resume"><Download /></a></Button>
              <Button variant="iconOutline" size="icon" asChild><a href="mailto:alex@example.com" aria-label="Email"><Mail /></a></Button>
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
  const visibleCourses = filter === "All" ? courses : courses.filter((course) => course.category === filter);
  return (
    <section>
      <SectionHeading eyebrow="Coursework" title="Courses & academic focus" description="Selected coursework that has shaped how I think about software, data, and the systems around them." />
      <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter courses">{categories.map((category) => <Button key={category} variant="filter" data-active={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div>
      <div className="grid gap-4 md:grid-cols-2">{visibleCourses.map((course) => (
        <article key={course.code} className="portfolio-card p-6">
          <div className="mb-5 flex items-start justify-between gap-4"><span className="font-mono text-sm font-semibold text-primary">{course.code}</span><span className="rounded-sm bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{course.category}</span></div>
          <h2 className="font-display text-xl font-semibold">{course.name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{course.description}</p>
        </article>
      ))}</div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section>
      <SectionHeading eyebrow="Experience" title="Where I’ve contributed" description="Practical experience building reliable tools, working with data, and collaborating with multidisciplinary teams." />
      <div className="relative space-y-0 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-px before:bg-border">{experiences.map((experience, index) => (
        <article key={experience.role} className="relative grid gap-5 border-b border-border py-8 first:pt-2 sm:grid-cols-[56px_1fr]">
          <div className="z-10 grid size-14 place-items-center rounded-md border border-primary/25 bg-secondary font-mono text-sm font-bold text-primary">{experience.initials}</div>
          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between"><div><h2 className="font-display text-xl font-semibold">{experience.role}</h2><p className="mt-1 text-sm font-medium text-primary">{experience.company}</p></div><div className="text-sm text-muted-foreground md:text-right"><p>{experience.dates}</p><p className="mt-1">{experience.location}</p></div></div>
            <ul className="mt-5 space-y-2">{experience.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{point}</li>)}</ul>
            {index === 0 && <span className="mt-4 inline-block text-xs font-medium text-highlight">Most recent</span>}
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
            <div className="mt-6 flex gap-2"><Button variant="outline" size="sm" asChild><a href="https://github.com"><Github />GitHub</a></Button>{project.live && <Button variant="secondary" size="sm" asChild><a href="#demo">Live demo <ArrowUpRight /></a></Button>}</div>
          </div>
        </article>
      ))}</div>
    </section>
  );
}