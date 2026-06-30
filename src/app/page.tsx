"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield,
  Terminal,
  Code2,
  Lock,
  Globe,
  Cpu,
  Network,
  Bug,
  KeyRound,
  Wifi,
  Smartphone,
  BookOpen,
  Wrench,
  ShoppingCart,
  Skull,
  Eye,
  FileCode2,
  User,
  Server,
  MonitorSmartphone,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Send,
  ArrowRight,
  Zap,
  Crosshair,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ─────────── Animated Section Wrapper ─────────── */
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─────────── Matrix Rain Background ─────────── */
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 13, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff8822";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}

/* ─────────── Navigation ─────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#tools", label: "Tools" },
    { href: "#courses", label: "Courses" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow-lg shadow-neon-glow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon/20 group-hover:border-neon/60 transition-all">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-neon" />
            </div>
            <span className="font-mono text-sm md:text-base font-bold text-neon tracking-wider">
              RAYHAN<span className="text-dark-text">.DEV</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-mono text-dark-muted hover:text-neon transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="outline"
              className="border-neon/40 text-neon hover:bg-neon/10 hover:text-neon font-mono text-sm"
            >
              <a href="#contact">
                <Send className="w-4 h-4 mr-2" />
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neon hover:bg-neon/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-bg/95 backdrop-blur-md border-b border-dark-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-mono text-dark-muted hover:text-neon hover:bg-neon/5 rounded-lg transition-all"
                >
                  <span className="text-neon mr-2">&gt;</span>
                  {l.label}
                </a>
              ))}
              <Separator className="my-3 bg-dark-border" />
              <Button
                asChild
                className="w-full bg-neon text-dark-bg hover:bg-neon-dim font-mono text-sm"
              >
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  <Send className="w-4 h-4 mr-2" />
                  Hire Me
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ─────────── Hero Section ─────────── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,136,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Terminal-style badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-neon/20 bg-neon/5"
        >
          <span className="w-2 h-2 rounded-full bg-neon animate-glow-pulse" />
          <span className="font-mono text-xs md:text-sm text-neon tracking-wider">
            SYSTEM ONLINE — READY TO SECURE
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight"
        >
          <span className="text-dark-text">Sheikh </span>
          <span className="neon-text">Rayhan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-mono text-dark-muted mb-3"
        >
          Cyber Security Expert & Python Developer
        </motion.p>

        {/* Typing effect line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-mono text-xs md:text-sm text-neon/60 mb-8 md:mb-12"
        >
          <span className="text-neon">$</span> security_audit --mode=advanced --target=you
          <span className="inline-block w-2 h-4 bg-neon ml-1 animate-pulse" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-neon text-dark-bg hover:bg-neon-dim font-mono text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-lg shadow-neon/20 hover:shadow-neon/40 transition-all"
          >
            <a href="#services">
              <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              View Services
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-dark-border text-dark-text hover:border-neon/50 hover:text-neon font-mono text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-lg transition-all"
          >
            <a href="#about">
              <Terminal className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              About Me
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "450+", label: "Projects" },
            { value: "60+", label: "Tools Built" },
            { value: "3000+", label: "Students" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-4xl font-bold neon-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-mono text-dark-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12 md:mt-16"
        >
          <a href="#about" className="inline-flex flex-col items-center text-dark-muted hover:text-neon transition-colors">
            <span className="font-mono text-xs mb-2">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── About Section ─────────── */
function AboutSection() {
  return (
    <Section id="about" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Terminal Card */}
          <div className="order-2 md:order-1">
            <Card className="bg-dark-card border-dark-border neon-border rounded-xl overflow-hidden">
              <div className="bg-dark-surface px-4 py-3 flex items-center gap-2 border-b border-dark-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-xs text-dark-muted ml-2">
                  rayhan@kali:~
                </span>
              </div>
              <CardContent className="p-4 md:p-6 font-mono text-xs md:text-sm space-y-2">
                <p className="text-dark-muted">
                  <span className="text-neon">rayhan@kali</span>:<span className="text-blue-400">~</span>$ whoami
                </p>
                <p className="text-neon">sheikh-rayhan</p>
                <p className="text-dark-muted">
                  <span className="text-neon">rayhan@kali</span>:<span className="text-blue-400">~</span>$ cat skills.txt
                </p>
                <p className="text-dark-text">
                  Cyber Security | Python | Selenium | PenTesting | Linux | Tor
                </p>
                <p className="text-dark-muted">
                  <span className="text-neon">rayhan@kali</span>:<span className="text-blue-400">~</span>$ echo $STATUS
                </p>
                <p className="text-neon">ONLINE &amp; READY</p>
                <p className="text-dark-muted">
                  <span className="text-neon">rayhan@kali</span>:<span className="text-blue-400">~</span>$ <span className="inline-block w-2 h-4 bg-neon animate-pulse" />
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs">
              <User className="w-3 h-3 mr-1" />
              Introduction
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-dark-text">About </span>
              <span className="text-neon">Me</span>
            </h2>
            <p className="text-dark-text leading-relaxed text-sm md:text-base">
              Welcome! I am Sheikh Rayhan — a Cyber Security Expert, Python Developer, and Content Creator. In this era of limitless technological possibilities, I primarily work on browser automation (Selenium), advanced scripting, and security auditing.
            </p>
            <p className="text-dark-muted leading-relaxed text-sm md:text-base">
              I believe cybersecurity is not just a skill — it’s a mindset. Finding weaknesses in every system and securing them is my mission. I build tools, create courses, and help people navigate the cyber world with confidence and expertise.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "Kali Linux", "Termux", "Selenium", "Tor"].map(
                (tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-neon/20 text-neon/80 font-mono text-xs"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Skills Section ─────────── */
function SkillsSection() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Python Development",
      description: "Advanced Python scripting, automation tools, web scrapers, and custom package development with clean, efficient code.",
      level: 95,
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Selenium Automation",
      description: "Browser automation, web scraping, bot development, and testing automation using Selenium WebDriver with various browsers.",
      level: 92,
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cyber Security",
      description: "Vulnerability assessment, penetration testing, security auditing, and implementing defensive security measures.",
      level: 90,
    },
    {
      icon: <Network className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Network PenTesting",
      description: "Network enumeration, exploitation, packet analysis, and comprehensive network security testing with industry tools.",
      level: 88,
    },
    {
      icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Linux / Termux",
      description: "Advanced Linux administration, Termux-based mobile hacking, shell scripting, and system-level operations.",
      level: 93,
    },
    {
      icon: <Lock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Tor Hidden Services",
      description: "Anonymous hosting, privacy-preserving architectures, and secure communication channel deployment for maximum operational security.",
      level: 85,
    },
  ];

  return (
    <Section
      id="skills"
      className="relative py-16 md:py-24 px-4 sm:px-6 bg-dark-surface/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <Cpu className="w-3 h-3 mr-1" />
            Skills & Technologies
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">My </span>
            <span className="text-neon">Skills</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-2xl mx-auto">
            {/* Expertise across multiple domains of cybersecurity and development */}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-dark-card border-dark-border neon-border-hover rounded-xl p-5 md:p-6 h-full transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-mono text-sm md:text-base font-semibold text-dark-text group-hover:text-neon transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-dark-muted text-xs md:text-sm leading-relaxed">
                    {skill.description}
                  </p>
                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-dark-muted">Proficiency</span>
                      <span className="text-neon">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-bg rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-dim to-neon rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Projects Section ─────────── */
function ProjectsSection() {
  const projects = [
    {
      icon: <FileCode2 className="w-6 h-6" />,
      title: "Open Source Python Tools",
      status: "In Progress",
      description:
        "A custom Python package development with auto-suggestion features and simplified coding utilities. Built for developers who want faster, smarter workflows.",
      tags: ["Python", "Open Source", "CLI Tools"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Selenium Bot Framework",
      status: "Completed",
      description:
        "A modular browser automation framework for web scraping, account management, and testing. Supports multi-browser, proxy rotation, and CAPTCHA handling.",
      tags: ["Selenium", "Automation", "Bot"],
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Security Scanner Tool",
      status: "Completed",
      description:
        "Automated vulnerability scanner that checks for common web security issues including XSS, SQLi, CSRF, and more. Generates detailed audit reports.",
      tags: ["Security", "Scanner", "Python"],
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      title: "Password Strength Analyzer",
      status: "Completed",
      description:
        "Advanced password analysis tool with entropy calculation, pattern detection, and breach database checking. Supports bulk analysis for security audits.",
      tags: ["Security", "Crypto", "Tool"],
    },
  ];

  return (
    <Section id="projects" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <Server className="w-3 h-3 mr-1" />
            Ongoing Projects
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">My </span>
            <span className="text-neon">Projects</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-2xl mx-auto">
            {/* Building tools that make security and automation accessible to everyone */}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-dark-card border-dark-border neon-border-hover rounded-xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-neon">
                      {project.icon}
                    </div>
                    <Badge
                      className={`font-mono text-[10px] ${
                        project.status === "In Progress"
                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          : "bg-neon/10 text-neon border-neon/20"
                      }`}
                    >
                      {project.status === "In Progress" ? "⏳ " : "✓ "}
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="font-mono text-base md:text-lg font-semibold text-dark-text group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-muted text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-dark-border text-dark-muted font-mono text-[10px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Tools Section ─────────── */
function ToolsSection() {
  const tools = [
    { name: "Nmap", category: "Reconnaissance", desc: "Network discovery and security auditing" },
    { name: "Metasploit", category: "Exploitation", desc: "Penetration testing framework" },
    { name: "Burp Suite", category: "Web Security", desc: "Web vulnerability scanner and proxy" },
    { name: "Wireshark", category: "Analysis", desc: "Network protocol analyzer" },
    { name: "John the Ripper", category: "Password Cracking", desc: "Offline password cracking tool" },
    { name: "SQLMap", category: "Web Security", desc: "Automated SQL injection tool" },
    { name: "Aircrack-ng", category: "Wireless", desc: "WiFi security auditing suite" },
    { name: "Hydra", category: "Brute Force", desc: "Online password cracking tool" },
    { name: "Nikto", category: "Web Security", desc: "Web server vulnerability scanner" },
    { name: "Gobuster", category: "Reconnaissance", desc: "Directory/file brute forcer" },
    { name: "Hashcat", category: "Password Cracking", desc: "Advanced password recovery" },
    { name: "Kali Linux", category: "OS", desc: "Penetration testing distribution" },
  ];

  return (
    <Section
      id="tools"
      className="relative py-16 md:py-24 px-4 sm:px-6 bg-dark-surface/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <Wrench className="w-3 h-3 mr-1" />
            Tools
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">Security </span>
            <span className="text-neon">Tools</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-2xl mx-auto">
            {/* Tools I use and recommend for cybersecurity professionals */}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="bg-dark-card border-dark-border neon-border-hover rounded-lg p-3 md:p-4 text-center transition-all duration-300 hover:-translate-y-1 group cursor-default h-full">
                <CardContent className="p-0 space-y-2">
                  <h4 className="font-mono text-xs md:text-sm font-semibold text-neon">
                    {tool.name}
                  </h4>
                  <Badge
                    variant="outline"
                    className="border-dark-border text-dark-muted font-mono text-[9px] md:text-[10px]"
                  >
                    {tool.category}
                  </Badge>
                  <p className="text-dark-muted text-[10px] md:text-xs leading-relaxed hidden sm:block">
                    {tool.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Courses Section ─────────── */
function CoursesSection() {
  const courses = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cyber Security Fundamentals",
      price: "Contact for Price",
      level: "Beginner to Advanced",
      lessons: 45,
      description:
        "Complete cybersecurity course covering networking basics, vulnerability assessment, penetration testing, and defense strategies. Learn from real-world case studies.",
      features: [
        "Network Security Basics",
        "Vulnerability Assessment",
        "Penetration Testing Lab",
        "Defense Strategies",
        "Certificate of Completion",
      ],
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Python for Hackers",
      price: "Contact for Price",
      level: "Intermediate",
      lessons: 60,
      description:
        "Master Python programming for cybersecurity. Build custom tools, automate attacks, create scanners, and develop your own security utilities from scratch.",
      features: [
        "Python Scripting Mastery",
        "Custom Tool Development",
        "Web Scraping & Automation",
        "Network Programming",
        "Real-World Projects",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Termux Hacking Masterclass",
      price: "Contact for Price",
      level: "All Levels",
      lessons: 35,
      description:
        "Learn ethical hacking using just your Android phone with Termux. From basic setup to advanced penetration testing — all on mobile.",
      features: [
        "Termux Setup & Config",
        "Kali on Termux",
        "Mobile PenTesting",
        "WiFi Hacking (Ethical)",
        "Social Engineering Tools",
      ],
    },
  ];

  return (
    <Section id="courses" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <BookOpen className="w-3 h-3 mr-1" />
            Courses
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">My </span>
            <span className="text-neon">Courses</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-2xl mx-auto">
            {/* Learn cybersecurity from scratch with hands-on practical courses */}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="bg-dark-card border-dark-border rounded-xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 group relative">
                {/* Top glow line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-neon to-transparent" />
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors">
                      {course.icon}
                    </div>
                    <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-[10px]">
                      {course.lessons} Lessons
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-mono text-sm md:text-base font-bold text-dark-text group-hover:text-neon transition-colors mb-1">
                      {course.title}
                    </h3>
                    <span className="font-mono text-[10px] md:text-xs text-dark-muted">
                      {course.level}
                    </span>
                  </div>

                  <p className="text-dark-muted text-xs leading-relaxed">
                    {course.description}
                  </p>

                  <ul className="space-y-1.5">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-dark-text"
                      >
                        <span className="w-1 h-1 rounded-full bg-neon flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Separator className="bg-dark-border" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neon font-semibold">
                      {course.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-neon/10 text-neon border border-neon/20 hover:bg-neon/20 hover:text-neon font-mono text-xs rounded-lg"
                      asChild
                    >
                      <a href="#contact">
                        Enroll
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Hacking Methods / Services Section ─────────── */
function ServicesSection() {
  const services = [
    {
      icon: <Crosshair className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Penetration Testing",
      description:
        "Comprehensive penetration testing services for web applications, networks, and mobile apps. Identifying vulnerabilities before malicious hackers do.",
      price: "Custom Quote",
    },
    {
      icon: <Bug className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Vulnerability Assessment",
      description:
        "Systematic identification, quantification, and prioritization of security vulnerabilities in your systems and applications.",
      price: "Custom Quote",
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Security Auditing",
      description:
        "Thorough security audit of your infrastructure, code, and processes. Detailed reporting with actionable remediation steps.",
      price: "Custom Quote",
    },
    {
      icon: <Code2 className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Custom Tool Development",
      description:
        "Bespoke Python tools for automation, security testing, web scraping, and any specific security need your organization requires.",
      price: "Custom Quote",
    },
    {
      icon: <Wifi className="w-6 h-6 md:w-7 md:h-7" />,
      title: "WiFi Security Testing",
      description:
        "Professional wireless network security assessment including WPA/WPA2 cracking tests, rogue AP detection, and encryption analysis.",
      price: "Custom Quote",
    },
    {
      icon: <Lock className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Hacking Method Tutorials",
      description:
        "Exclusive, in-depth hacking method tutorials and guides for educational purposes. Learn real-world attack techniques used by professionals.",
      price: "Contact for Price",
    },
  ];

  return (
    <Section
      id="services"
      className="relative py-16 md:py-24 px-4 sm:px-6 bg-dark-surface/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <Skull className="w-3 h-3 mr-1" />
            Services & Methods
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">Services & </span>
            <span className="text-neon">Hacking Methods</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-2xl mx-auto">
            {/* Professional services and educational hacking method resources */}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-dark-card border-dark-border neon-border-hover rounded-xl p-5 md:p-6 h-full transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-mono text-sm md:text-base font-semibold text-dark-text group-hover:text-neon transition-colors">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[10px] md:text-xs text-neon/60">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-dark-muted text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-dark-border text-dark-muted hover:border-neon/40 hover:text-neon font-mono text-xs rounded-lg transition-all"
                    asChild
                  >
                    <a href="#contact">
                      Get Started <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Products Section ─────────── */
function ProductsSection() {
  const products = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Custom Python Tools",
      description: "Pre-built and custom Python tools for automation, security testing, and productivity enhancement.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "E-Books & Guides",
      description: "Comprehensive e-books covering Python hacking, cybersecurity fundamentals, and advanced exploitation techniques.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Premium Scripts",
      description: "Ready-to-use premium scripts for penetration testing, reconnaissance, and vulnerability assessment.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Tool Bundles",
      description: "Curated bundles of security tools, scripts, and resources at discounted package prices for professionals.",
    },
  ];

  return (
    <Section id="products" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <ShoppingCart className="w-3 h-3 mr-1" />
            Products
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">Other </span>
            <span className="text-neon">Products</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-2xl mx-auto">
            {/* Premium tools, guides, and resources for security professionals */}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-dark-card border-dark-border neon-border-hover rounded-xl p-5 md:p-6 h-full text-center transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors">
                    {product.icon}
                  </div>
                  <h3 className="font-mono text-sm font-semibold text-dark-text group-hover:text-neon transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-dark-muted text-xs leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    size="sm"
                    className="bg-neon/10 text-neon border border-neon/20 hover:bg-neon/20 font-mono text-xs rounded-lg"
                    asChild
                  >
                    <a href="#contact">
                      Learn More <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}



/* ─────────── Contact Section ─────────── */
function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative py-16 md:py-24 px-4 sm:px-6 bg-dark-surface/50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <Badge className="bg-neon/10 text-neon border-neon/20 font-mono text-xs mb-4">
            <Send className="w-3 h-3 mr-1" />
            Contact
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-dark-text">Get In </span>
            <span className="text-neon">Touch</span>
          </h2>
          <p className="font-mono text-dark-muted text-xs md:text-sm mt-3 max-w-lg mx-auto">
            For inquiries, collaborations, or any security-related needs — reach out directly via Telegram.
          </p>
        </div>

        <Card className="bg-dark-card border-dark-border neon-border rounded-xl overflow-hidden">
          <CardContent className="p-6 md:p-10 flex flex-col items-center text-center space-y-5">
            <div className="w-20 h-20 rounded-2xl bg-[#0088cc]/10 border border-[#0088cc]/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#0088cc]" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-mono font-bold text-dark-text">
                Telegram
              </h3>
              <p className="text-dark-muted text-sm md:text-base">
                The fastest way to reach me
              </p>
            </div>
            <a
              href="https://t.me/SheikhRayhan404"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="bg-[#0088cc] hover:bg-[#006fa1] text-white font-mono text-sm md:text-base px-8 md:px-10 py-5 md:py-6 rounded-lg shadow-lg shadow-[#0088cc]/20 hover:shadow-[#0088cc]/40 transition-all"
              >
                @SheikhRayhan404
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="font-mono text-[10px] md:text-xs text-dark-muted mt-2">
              Click the button above to open Telegram directly
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

/* ─────────── Footer ─────────── */
function Footer() {
  return (
    <footer className="relative border-t border-dark-border bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-neon" />
              </div>
              <span className="font-mono text-sm font-bold text-neon">
                RAYHAN.DEV
              </span>
            </div>
            <p className="text-dark-muted text-xs leading-relaxed">
              Cyber Security Expert & Python Developer. Building a safer digital world through education, tools, and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-neon uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About Me" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#tools", label: "Tools" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block font-mono text-xs text-dark-muted hover:text-neon transition-colors"
                >
                  <span className="text-neon/40 mr-1">&gt;</span> {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-neon uppercase tracking-wider">
              Services
            </h4>
            <div className="space-y-2">
              {[
                "Penetration Testing",
                "Security Auditing",
                "Tool Development",
                "Courses",
              ].map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="block font-mono text-xs text-dark-muted hover:text-neon transition-colors"
                >
                  <span className="text-neon/40 mr-1">&gt;</span> {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-neon uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="https://t.me/SheikhRayhan404"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-dark-muted hover:text-neon transition-colors flex items-center gap-2"
              >
                <Send className="w-3 h-3 text-neon/50" />
                Telegram: @SheikhRayhan404
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-dark-border mb-6 md:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-[10px] md:text-xs text-dark-muted">
            &copy; 2026 Sheikh Rayhan. All rights reserved.
          </p>
          <p className="font-mono text-[10px] md:text-xs text-dark-muted">
            <span className="text-neon/40">&lt;/&gt;</span> Secured with{" "}
            <span className="text-neon">passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── Main Page ─────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg relative">
      <MatrixRain />
      <div className="relative z-10 flex-1">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ToolsSection />
        <CoursesSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}