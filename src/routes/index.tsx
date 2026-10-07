import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";

const headshotAsset = { url: "/images/saahir-tandon-headshot-2026.jpg" };
const chirpLogo = { url: "/images/chirp-ai-logo.jpeg" };
const handshakeLogo = { url: "/images/handshake-ai-logo.jpeg" };
const chirpMainMenu = { url: "/images/chirp-main-menu.jpeg" };
const chirpPoiMenu = { url: "/images/chirp-poi-menu.jpeg" };
const studentPerformanceImage = { url: "/images/student-performance-analysis.jpeg" };
const playerPerformanceImage = { url: "/images/player-performance-intro.jpeg" };
const aboutSectionShot = { url: "/images/about_section.png" };
const courseworkSectionShot = { url: "/images/coursework_section.png" };
const experienceSectionShot = { url: "/images/experience_section.png" };
const projectsSectionShot = { url: "/images/projects_section.png" };
import { Button } from "@/components/ui/button";

type SectionId = "about" | "courses" | "experience" | "portfolio";
type CourseCategory = "All" | "Computer Science" | "Data Science" | "Economics";

const navigation: { id: SectionId; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { id: "about", label: "About", icon: UserRound },
  { id: "courses", label: "Coursework", icon: BookOpen },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "portfolio", label: "Projects", icon: Layers3 },
];

const courses = [
  { code: "01:198:111", name: "Introduction to Computer Science", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-111-introduction-to-computer-science", description: "Introduces programming and algorithmic problem-solving using Java, including object-oriented programming, recursion, searching, sorting, debugging, and introductory data structures." },
  { code: "01:198:210", name: "Data Structures", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures", description: "Uses Java to study linked lists, stacks, queues, trees, graphs, hashing, searching, sorting, and the runtime tradeoffs of different data structures and algorithms." },
  { code: "01:198:211", name: "Computer Architecture", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture", description: "Explores how computer hardware and software interact through C, assembly, and Unix, covering processors, memory, caches, digital logic, data representation, and computer arithmetic." },
  { code: "01:198:344", name: "Design and Analysis of Computer Algorithms", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-344-design-and-analysis-of-computer-algorithms", description: "Covers algorithm design and complexity analysis through techniques such as greedy algorithms, dynamic programming, divide-and-conquer, graph algorithms, reductions, and NP-completeness." },
  { code: "01:198:205", name: "Introduction to Discrete Structures I", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-205-introduction-to-discrete-structures-i", description: "Develops the mathematical foundations of computer science through logic, sets, functions, relations, induction, recursive definitions, and mathematical proofs." },
  { code: "01:198:206", name: "Introduction to Discrete Structures II", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-206-introduction-to-discrete-structures-ii", description: "Covers combinatorics, recurrence relations, discrete probability, random variables, probability distributions, and graph theory including trees, paths, and connectivity." },
  { code: "01:640:250", name: "Introductory Linear Algebra", categories: ["Computer Science"], url: "https://math.rutgers.edu/academics/undergraduate/course-descriptions/948-01-640-250-introductory-linear-algebra", description: "Covers vectors, matrices, Gaussian elimination, linear transformations, vector spaces, basis and dimension, determinants, eigenvalues, eigenvectors, diagonalization, and orthogonality." },
  { code: "01:730:329", name: "Minds, Machines, and Persons", categories: ["Computer Science"], url: "https://philosophy.rutgers.edu/undergraduate-course-descriptions/undergraduate-course-description/1273-01-730-329-minds-machines-and-persons", description: "Explores philosophy of mind and artificial intelligence through topics including consciousness, mental representation, computational cognition, machine intelligence, mind uploading, and the ethics of superintelligent AI." },
  { code: "01:198:214", name: "Systems Programming", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-214-systems-programming", description: "Uses C and Unix to study memory management, system calls, I/O, caching, multithreading, shell scripting, debugging, profiling, testing, and performance optimization." },
  { code: "01:198:336", name: "Principles of Information and Data Management", categories: ["Computer Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management", description: "Covers relational databases, SQL querying, structured and semi-structured data, XML, conceptual modeling, schema design, transactions, security, reliability, optimization, and information integration." },
  { code: "01:640:151", name: "Calculus I", categories: ["Computer Science"], url: "https://www.math.rutgers.edu/academics/undergraduate/course-descriptions/941-01-640-151-calculus-i-for-the-mathematical-and-physical-sciences", description: "Covers limits, derivatives, differential calculus, optimization, the Mean Value Theorem, and an introduction to integration for single-variable functions." },
  { code: "01:640:152", name: "Calculus II", categories: ["Computer Science"], url: "https://math.rutgers.edu/academics/undergraduate/course-descriptions/942-01-640-152-calculus-ii-for-the-mathematical-and-physical-sciences", description: "Extends calculus through integration techniques and applications, infinite and power series, parametric curves, polar coordinates, and complex numbers." },
  { code: "01:198:142", name: "Data 101", categories: ["Data Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-142-data-101-data-literacy", description: "Introduces data literacy, statistics, probability, data analysis, and visualization using the R programming language to analyze real-world datasets." },
  { code: "01:960:291", name: "Statistical Inference for Data Science", categories: ["Data Science"], url: "https://statistics.rutgers.edu/course-descriptions/course-synopses/611-01-960-291-statistical-inference-for-data-science-3", description: "Introduces probability and statistical inference for data science using R, including regression, resampling, confidence intervals, hypothesis testing, and probability distributions." },
  { code: "01:198:210", name: "Data Management for Data Science", categories: ["Computer Science", "Data Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-210-data-management-for-data-science", description: "Uses Python, Jupyter, and SQLite to acquire, clean, curate, visualize, and manage real-world datasets, including working with databases and structured data." },
  { code: "01:198:439", name: "Introduction to Data Science", categories: ["Computer Science", "Data Science"], url: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-439-introduction-to-data-science", description: "Uses Python, Pandas, NumPy, Matplotlib/Seaborn, and TensorFlow to explore data preprocessing, visualization, regression, classification, clustering, machine learning, recommender systems, deep learning, and LLMs." },
  { code: "04:189:220", name: "Data in Context", categories: ["Data Science"], url: "https://ds.sas.rutgers.edu/course-details/04-189-220-data-in-context", description: "Examines data science through its social context, focusing on the ethical, legal, social, and political implications of data collection, algorithms, and data-driven decision making." },
  { code: "01:220:103", name: "Introduction to Macroeconomics", categories: ["Economics"], url: "https://economics.rutgers.edu/academics/undergraduate/course-descriptions/course-details/219-introductory-courses/789-01-220-103-introduction-to-macroeconomics-3", description: "Introduces national income, employment, inflation, unemployment, monetary and fiscal policy, banking, international trade, and economic growth." },
  { code: "01:220:102", name: "Introduction to Microeconomics", categories: ["Economics"], url: "https://economics.rutgers.edu/academics/undergraduate/course-descriptions/course-details/219-introductory-courses/788-01-220-102-introduction-to-microeconomics-3", description: "Introduces supply and demand, market pricing, resource allocation, competition, monopoly, government intervention, externalities, and economic efficiency." },
  { code: "01:220:321", name: "Intermediate Macroeconomic Analysis", categories: ["Economics"], url: "https://economics.rutgers.edu/academics/undergraduate/course-descriptions/course-details/220-core-courses-for-economics-major/792-01-220-321-intermediate-macroeconomic-analysis-3", description: "Studies modern and classical macroeconomic models of national income, economic growth, stabilization, unemployment, and inflation." },
  { code: "01:220:320", name: "Intermediate Microeconomic Analysis", categories: ["Economics"], url: "https://economics.rutgers.edu/academics/undergraduate/course-descriptions/course-details/220-core-courses-for-economics-major/791-01-220-320-intermediate-microeconomic-analysis-3", description: "Uses mathematical models to analyze consumer and firm decision-making, supply and demand, competitive and monopolistic markets, general equilibrium, and welfare economics." },
  { code: "01:220:322", name: "Econometrics", categories: ["Economics"], url: "https://economics.rutgers.edu/academics/undergraduate/course-descriptions/course-details/220-core-courses-for-economics-major/793-01-220-322-econometrics-3", description: "Applies statistical methods to economic data, focusing on ordinary least squares regression, hypothesis testing, prediction, time-series methods, and econometric modeling using statistical software." },
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
  { name: "Predictive Analytics for Student Performance", date: "Sep 2025 — Dec 2025", description: "Built a data-driven predictive analytics project to analyze student academic performance and forecast final grades. Collected, cleaned, and processed academic datasets using Python, Pandas, NumPy, and SQL, and trained multiple regression models to identify patterns associated with student outcomes. The analysis aimed to help educational institutions proactively identify students who may need academic support.", tech: ["Python", "Pandas", "NumPy", "SQL", "Regression"], repo: "https://github.com/SaahirT/student-performance-analytics", live: false, images: [{ src: studentPerformanceImage.url, alt: "Histogram and box plot showing the distribution of student final grades" }] },
  { name: "Predictive Modeling for Player Performance", date: "Sep 2023 — Dec 2023", description: "Developed and evaluated machine learning models to analyze gameplay data and predict player mental state and performance outcomes. Built and compared Naive Bayes and decision tree models using R, applying train/test splits and cross-validation to assess predictive effectiveness. Evaluated model performance using confusion matrices and accuracy metrics, concluding that mental state was a weak predictor of in-game performance.", tech: ["R", "Naive Bayes", "Decision Trees", "Cross-Validation"], repo: "https://github.com/SaahirT/player-performance-analytics", live: false, images: [{ src: playerPerformanceImage.url, alt: "Presentation title slide asking whether mental state impacts Fortnite performance" }] },
  { name: "Personal Portfolio Website", date: "", description: "Personal website showcasing my experience, coursework, projects, and personality, with a design inspired by Ghoul Trooper from Fortnite.", tech: ["React", "TypeScript", "Tailwind CSS", "Vite"], repo: "https://github.com/SaahirT/saahir-tandon-personal-website", live: false, images: [
    { src: aboutSectionShot.url, alt: "About section of the portfolio website with Saahir's profile and why story" },
    { src: courseworkSectionShot.url, alt: "Coursework section of the portfolio website with filterable course cards" },
    { src: experienceSectionShot.url, alt: "Experience section of the portfolio website with roles and timelines" },
    { src: projectsSectionShot.url, alt: "Projects section of the portfolio website with project cards" },
  ] },
] as const;

const techPattern = /\b(C\+\+|Java|Python|Jupyter|Pandas|NumPy|Matplotlib\/Seaborn|Matplotlib|Seaborn|TensorFlow|SQLite|SQL|Unix|assembly|C|R)(?![a-zA-Z])/g;

function TechText({ text }: { text: string }) {
  return <>{text.split(techPattern).map((part, index) => (index % 2 === 1 ? <span key={index} className="text-highlight">{part}</span> : part))}</>;
}

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeSection]);

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
        <p className="text-xs leading-relaxed text-muted-foreground">Greater New York Metropolitan Area · Open to Internships, Co-ops, and Jobs.</p>
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
  return (
    <section>
      <div className="grid items-center gap-10 xl:grid-cols-[1fr_340px] xl:gap-16">
        <div>
          <p className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-primary"><span className="h-px w-8 bg-primary" />Hello, I’m</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl xl:text-7xl">Saahir Tandon<span className="text-highlight">.</span></h1>
          <p className="mt-3 font-mono text-sm text-muted-foreground">Pronounced “saw-hair”</p>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground/85">Computer Science student focused on AI, software engineering, and data-driven products.</p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">I’m a student at Rutgers University–New Brunswick (Sep 2023 – Dec 2027), pursuing a Bachelor of Science (BS) in Computer Science with a double-minor in Data Science and Economics while maintaining a 3.6 GPA. My main focus is on Applied AI, Backend Engineering, and Full-Stack Development—building clean APIs, database systems, and practical software applications.</p>
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
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase text-primary">My why</p>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">What draws me to this work</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="iconOutline" size="icon" asChild><a href="https://github.com/SaahirT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github /></a></Button>
            <Button variant="iconOutline" size="icon" asChild><a href="https://www.linkedin.com/in/saahirtandon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin /></a></Button>
          </div>
        </div>

        <div className="mt-10 max-w-4xl space-y-14">
          <article className="border-l-2 border-highlight/70 pl-5 sm:pl-8">
            <h3 className="font-display text-2xl font-semibold">My “WHY” for AI &amp; Machine Learning:</h3>
            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>Growing up, my dream was always to make gaming content on YouTube. Unfortunately, my childhood was during a time when parents were pretty pessimistic about technology usage, and nobody around me viewed content creation as a real path—so I had zero support. I used to pick up loose change off the ground in NYC to save up for basic equipment, sneak onto my dad’s laptop late at night to record, and edit video clips on school computers whenever I could squeeze in time.</p>
              <p>Against all odds, that hustle actually worked—I managed to build an audience and saw real success with my channels. But no matter how hard I worked, I hit a massive wall: I lacked the high-end hardware and expensive software needed to push my content to the next level. I had the drive, but the technical barriers held me back from reaching my full potential.</p>
              <p>That experience is the core reason I fell in love with AI. Tech shouldn't only belong to people who can afford thousands of dollars in gear or spend years mastering overwhelming software. AI is the ultimate equalizer—it opens doors for anyone who has a great idea and the drive to pursue it, regardless of their background or resources.</p>
              <p>Today, that vision directly shapes my work. At Handshake AI, I help train and audit automatic speech recognition (ASR) models to convert video and audio into accurate text. Think about a deaf creator trying to edit a video of themselves: without being able to hear the audio cues, the process is nearly impossible. An AI tool that precisely transcribes and time-codes clips completely levels the playing field for them. Whether it's making content creation accessible to disabled creators or building tools that automate hours of tedious timeline assembly, my goal with AI is simple: break down technical walls so anyone with a spark can just create.</p>
            </div>
          </article>

          <article className="border-l-2 border-primary/70 pl-5 sm:pl-8">
            <h3 className="font-display text-2xl font-semibold">My “WHY” for Full-Stack Software Engineering:</h3>
            <section className="mt-7">
              <h4 className="font-display text-lg font-semibold text-primary">Backend (The Engine):</h4>
              <div className="mt-4 space-y-5 text-base leading-8 text-muted-foreground">
                <p>Whenever a major game dropped—like Pokémon Scarlet &amp; Violet or Zelda: Tears of the Kingdom—release week was my ultimate crunch time as a creator. I wasn't just playing for fun; I was live streaming the journey, taking notes on stream, and frantically editing guides to be among the first creators on YouTube to cover new features. My setup was a full mission control center: streaming and recording my gameplay on one screen, watching fellow creators like SmallAnt or AustinJohnPlays test strategies on a second, and tracking community datamines on a third to keep my audience informed.</p>
                <p>It was a massive, collective effort where creators and builders worked together to break a game wide open. As streamers and video creators, we were testing mechanics live and building content for millions of viewers, relying directly on dataminers who dug into the raw files to pull out the hidden backbone—exact spawn rates, damage formulas, and secret item coordinates.</p>
                <p>Seeing how those hidden files powered the entire community's content was my lightbulb moment: the frontend graphics are just the surface, but the real depth, logic, and magic live in the code behind the scenes. That realization is what drew me to backend engineering. I love building the underlying infrastructure—the database schemas, API pipelines, and server architectures—that quietly power complex systems and make data-rich experiences possible.</p>
              </div>
            </section>
            <section className="mt-9 border-t border-border pt-8">
              <h4 className="font-display text-lg font-semibold text-primary">Frontend (The Experience):</h4>
              <div className="mt-4 space-y-5 text-base leading-8 text-muted-foreground">
                <p>There’s nothing quite like opening a piece of software for the first time, seeing a wall of a hundred confusing buttons, and feeling instantly overwhelmed (looking at you, After Effects). Early on, when I was just starting to make content and trying to edit my first video clips, software like that felt less like a creative tool and more like a puzzle I couldn't solve. I spent hours clicking through hidden menus, messing around with clunky timelines, and wondering why doing something simple had to feel so hard.</p>
                <p>Having fought with confusing software for years as a beginner, I care deeply about building frontends that feel smooth, simple, and natural from the second you open them. A powerful backend engine doesn't mean much if the driver gets lost trying to figure out where the steering wheel is. My goal on the frontend is to take complex backend data and turn it into clean, intuitive interfaces that anyone can jump into and use without needing a manual.</p>
              </div>
            </section>
          </article>
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
      <SectionHeading eyebrow="Coursework" title="Coursework & academic focus" description="Selected coursework that has shaped how I think about software, data, and the systems around them." />
      <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter courses">{categories.map((category) => <Button key={category} variant="filter" data-active={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div>
      <div className="grid gap-4 md:grid-cols-2">{visibleCourses.map((course) => (
        <a key={`${course.code}-${course.name}`} href={course.url} target="_blank" rel="noopener noreferrer" className="portfolio-card block p-6">
          <div className="mb-5 flex items-center justify-between font-mono text-sm font-semibold text-primary">{course.code}<ArrowUpRight className="size-4 text-muted-foreground" /></div>
          <h2 className="font-display text-xl font-semibold">{course.name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground"><TechText text={course.description} /></p>
        </a>
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
      <div className="grid gap-5 md:grid-cols-2">{projects.map((project) => (
        <article key={project.name} className="portfolio-card overflow-hidden">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-6 py-4">
            <span className="min-w-0 font-mono text-xs text-highlight">0{projects.indexOf(project) + 1}</span>
            <div className="flex shrink-0 items-center gap-3">
              <Code2 className="size-5 shrink-0 text-muted-foreground" />
              <Button variant="outline" asChild className="shrink-0 text-primary hover:border-highlight hover:text-highlight">
                <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}><Github />GitHub<ArrowUpRight /></a>
              </Button>
            </div>
          </div>
          {project.images.length === 1 ? (
            <a href={project.images[0].src} target="_blank" rel="noopener noreferrer" aria-label={`Open visual for ${project.name}`} className="block overflow-hidden border-b border-border bg-secondary">
              <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" className="aspect-[16/10] w-full object-contain transition-transform duration-300 hover:scale-[1.015]" />
            </a>
          ) : (
            <div className="grid grid-cols-2 gap-px border-b border-border bg-border">
              {project.images.map((shot) => (
                <a key={shot.src} href={shot.src} target="_blank" rel="noopener noreferrer" aria-label={`Open screenshot of ${project.name}`} className="block overflow-hidden bg-secondary">
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.015]" />
                </a>
              ))}
            </div>
          )}
          <div className="flex flex-col p-6">
            <h2 className="font-display text-xl font-semibold">{project.name}</h2>{project.date && <p className="mt-1 font-mono text-xs text-muted-foreground">{project.date}</p>}<p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="font-mono text-xs text-primary/80">{item}</span>)}</div>
            {project.live && <div className="mt-6"><Button variant="secondary" size="sm" asChild><a href="#demo" aria-label={`${project.name} live demo (placeholder)`}>Live demo <ArrowUpRight /></a></Button></div>}
          </div>
        </article>
      ))}</div>
    </section>
  );
}
