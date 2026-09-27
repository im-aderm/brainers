import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainers Labs — Custom Software, AI & Cloud Engineering in Nigeria",
  description: "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across all 36 states of Nigeria.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Brainers Labs — Custom Software, AI & Cloud Engineering in Nigeria",
    description: "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across all 36 states of Nigeria.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-home.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
    }],
    siteName: "Brainers Labs",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainers Labs — Custom Software, AI & Cloud Engineering in Nigeria",
    description: "Brainers Labs designs, builds, and scales custom software, AI systems, and cloud infrastructure for startups, enterprises, and public sector organizations across all 36 states of Nigeria.",
    images: ["https://brainerslabs.com/assets/images/og/og-home.jpg"],
  },
  alternates: {
    canonical: "https://brainerslabs.com/",
  },
};

export default function Home() {
  return (
    <>
      
    <div dangerouslySetInnerHTML={{ __html: `<style>{\`@import url("/css/home.css");\`}</style>

    <>
  <a href="index.html#main" class="skip-nav">Skip to content</a>
  <div class="nav-backdrop"></div>
    <nav>
                    <a href="/" class="nav-logo" style="width: auto; height: 32px;">
      <!-- Desktop Logos -->
      <img src="assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="desktop-logo logo-dark-bg" style="height: 100%;">
      <img src="assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="desktop-logo logo-light-bg" style="height: 100%;">
      <!-- Mobile Logos -->
      <img src="assets/images/logos/brainers/mobile-logo-dark-bg.png" alt="Brainers Labs" class="mobile-logo logo-dark-bg" style="height: 100%;">
      <img src="assets/images/logos/brainers/mobile-logo-light-bg.png" alt="Brainers Labs" class="mobile-logo logo-light-bg" style="height: 100%;">
    </a>
    <div class="nav-links">
      <div class="nav-item">
        <a href="/company/about-us">About Us</a>
      </div>
      <div class="nav-item">
        <a href="/company/services">Services</a>
      </div>
      <div class="nav-item">
        <a style="cursor:default;">Products <i class="ph ph-caret-down" style="font-size:12px;margin-left:5px;opacity:.5;"></i></a>
        <div class="mega-menu mega-menu-cols">
          <a href="https://breno.brainerslabs.com" class="mega-module">
            <div class="mega-module__content">
              <strong>Breno AI</strong>
              <span>An intelligence company brain and operating system for real-time reasoning and decision automation.</span>
              <span class="mega-module__link">Learn more  &rarr;</span>
            </div>
            <div class="mega-module__gradient mega-module__gradient--pink"></div>
            <i class="ph ph-brain mega-module__icon" style="position:absolute;bottom:-10%;right:-10%;font-size:170px;color:#1F1C1B;pointer-events:none;z-index:0;"></i>
          </a>
          <a href="#" class="mega-module">
            <div class="mega-module__content">
              <strong>Momenta</strong>
              <span>Event memory infrastructure &mdash; capture, index, and replay institutional knowledge with full context.</span>
              <span class="mega-module__link">Learn more  &rarr;</span>
            </div>
            <div class="mega-module__gradient mega-module__gradient--pink"></div>
            <i class="ph ph-clock-counter-clockwise mega-module__icon" style="position:absolute;bottom:-10%;right:-10%;font-size:170px;color:#1F1C1B;pointer-events:none;z-index:0;"></i>
          </a>
          <a href="#" class="mega-module">
            <div class="mega-module__content">
              <strong>iHel</strong>
              <span>Smart hospital management &mdash; emergency triage, bed occupancy, and patient care coordination.</span>
              <span class="mega-module__link">Learn more  &rarr;</span>
            </div>
            <div class="mega-module__gradient mega-module__gradient--pink"></div>
            <i class="ph ph-heartbeat mega-module__icon" style="position:absolute;bottom:-10%;right:-10%;font-size:170px;color:#1F1C1B;pointer-events:none;z-index:0;"></i>
          </a>
          <a href="#" class="mega-module">
            <div class="mega-module__content">
              <strong>iSchool</strong>
              <span>Smart school management &mdash; biometric attendance, academic tracking, and parent-teacher connection.</span>
              <span class="mega-module__link">Learn more  &rarr;</span>
            </div>
            <div class="mega-module__gradient mega-module__gradient--pink"></div>
            <i class="ph ph-graduation-cap mega-module__icon" style="position:absolute;bottom:-10%;right:-10%;font-size:170px;color:#1F1C1B;pointer-events:none;z-index:0;"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-cta">
      <button class="btn-outline" type="button" aria-disabled="true" title="Coming soon">Sign In</button>
      <a href="/contact" class="btn-fill">Contact Us</a>
    </div>
    <button class="hamburger" aria-label="Menu" onclick="var n=this.closest('nav'),m=document.querySelector('.mobile-menu'),b=document.body,opening=!m.classList.contains('open');if(opening){b.dataset.scrollY=window.scrollY;m.classList.add('open');n.classList.add('menu-open');b.classList.add('menu-open');b.style.top='-'+b.dataset.scrollY+'px';}else{m.classList.remove('open');n.classList.remove('menu-open');b.classList.remove('menu-open');b.style.top='';window.scrollTo(0,parseInt(b.dataset.scrollY||'0'));}">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <script>document.addEventListener('click',function(e){document.querySelectorAll('.lang-switcher.open').forEach(function(s){if(!s.contains(e.target))s.classList.remove('open');});});</script>
  <div class="mobile-menu">
    <a href="/company/about-us">About Us</a>
    <a href="/company/services">Services</a>
    <div class="mobile-dropdown">
      <button class="mobile-dropdown-toggle" onclick="this.parentElement.classList.toggle('open')">Products</button>
      <div class="mobile-dropdown-content">
        <a href="https://breno.brainerslabs.com">Breno AI<span>An intelligence company brain and operating system.</span></a>
        <a href="#">Momenta<span>Event memory infrastructure for institutional knowledge.</span></a>
        <a href="#">iHel<span>Smart hospital management system.</span></a>
        <a href="#">iSch<span>Intelligent school management with integrated LMS.</span></a>
      </div>
    </div>
    <div class="menu-ctas">
      <a href="/contact" class="btn-fill">Contact Us</a>
      <div class="menu-ctas__row">
        <button class="btn-outline" type="button" aria-disabled="true" title="Coming soon">Sign In</button>
      </div>
    </div>
  </div>
<main id="main">
    <link rel="stylesheet" href="assets/css/home.css">


<!-- i18n strings for home.js (translated per language) -->
<script>
window.__homeI18n = {
  "modules": [
    {
      "title": "Custom Software Development",
      "desc": "We design, build, and deploy tailored software solutions engineered to optimize operations, automate workflows, and accelerate growth.",
      "color": "#F32A73"
    },
    {
      "title": "Software Consulting",
      "desc": "Empower your roadmap with strategic advisory on cloud architecture, system design, tech stack selection, and engineering best practices.",
      "color": "#02A270"
    },
    {
      "title": "Intelligence System",
      "desc": "Integrate AI into your workflows — custom model pipelines, intelligent agents, document processing, and decision automation at scale.",
      "color": "#FDBF00"
    },
    {
      "title": "UI/UX Design",
      "desc": "Craft beautiful, intuitive, and conversion-optimized user interfaces and experiences tailored to your audience and brand.",
      "color": "#2563EB"
    }
  ],
  "phases": [
    {
      "title": "Web Development",
      "desc": "High-performance websites and rich frontend applications optimized for SEO, speed, accessibility, and high conversions."
    },
    {
      "title": "Mobile App Development",
      "desc": "Cross-platform and native mobile applications designed with immersive UI and offline capabilities."
    },
    {
      "title": "Cloud & DevOps",
      "desc": "Automated deployments, secure cloud infrastructure hosting, Dockerization, and seamless CI/CD delivery pipelines."
    },
    {
      "title": "Business Automation",
      "desc": "Streamline repetitive office tasks, sync databases, send automated email alerts, and connect tools with custom scripts."
    }
  ],
  "pctLabel": "% Less"
};
</script>


<div id="home2">

  <!-- ═══════════════════════════════════════════════
     1. HERO
     ═══════════════════════════════════════════════ -->
  <div class="hero-v2__bg">
    <div class="hero-v2__bg-gradient"><img src="assets/images/gradient-save.svg" alt=""></div>
    <div id="hero-iso" style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;overflow:hidden;"></div>
  </div>
  <section class="hero-v2">
    <span class="hero-v2__eyebrow">Brainers Labs</span>
    <h1>
      <span class="hero-line">Technology that</span>
      <span class="hero-rotator" data-lines="|Builds the Future.,|Accelerates Growth.,|Solves Complex Problems.,|Brings Ideas to Life." data-colors="#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF"></span>
    </h1>
    <!-- INLINE: timing-critical — must fire as h1 is parsed for entrance animation -->
    <script>requestAnimationFrame(function(){document.querySelector('.hero-v2 h1').classList.add('hero-title--revealed');})</script>
    <p class="hero-v2__desc" style="max-width: 640px; font-size: var(--step-1); color: rgba(255,255,255,0.7); line-height: 1.6; margin: -20px auto 40px; opacity: 0; animation: heroFadeUp 2s cubic-bezier(0,0,.2,1) forwards; animation-delay: .7s;">
      We partner with startups, businesses, enterprises, and public sector organizations to design, build, automate, and scale software that solves real business challenges.
    </p>
    <div class="hero-v2__ctas">
      <span class="btn-glow"><a href="/contact" class="btn-primary btn-primary--white">Start your project</a></span>
      <span class="btn-glow"><a href="#" class="btn-primary btn-primary--dark">Explore Products</a></span>
    </div>

  </section>

  <!-- ═══════════════════════════════════════════════
     1b. HERO SCREENSHOT
     ═══════════════════════════════════════════════ -->
  <div class="hero-screenshot"></div>

  <!-- ═══════════════════════════════════════════════
     2. LOGO STRIP
     ═══════════════════════════════════════════════ -->
  <section class="logo-strip">
    <div class="logo-strip__stats">Trusted by</div>
    <div class="logo-strip__logos">
      <div class="logo-strip__track">
        <!-- Set 1 -->
        <img src="assets/trusted-by/archyclouds.webp" alt="Archy Clouds">
        <img src="assets/trusted-by/awas.webp" alt="Atlantic Ways">
        <img src="assets/trusted-by/basaer.webp" alt="Basaer">
        
        <!-- Set 2 -->
        <img src="assets/trusted-by/archyclouds.webp" alt="Archy Clouds">
        <img src="assets/trusted-by/awas.webp" alt="Atlantic Ways">
        <img src="assets/trusted-by/basaer.webp" alt="Basaer">

        <!-- Set 3 -->
        <img src="assets/trusted-by/archyclouds.webp" alt="Archy Clouds">
        <img src="assets/trusted-by/awas.webp" alt="Atlantic Ways">
        <img src="assets/trusted-by/basaer.webp" alt="Basaer">

        <!-- Set 4 -->
        <img src="assets/trusted-by/archyclouds.webp" alt="Archy Clouds">
        <img src="assets/trusted-by/awas.webp" alt="Atlantic Ways">
        <img src="assets/trusted-by/basaer.webp" alt="Basaer">

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════
     3. ABOUT US
     ═══════════════════════════════════════════════ -->
  <section class="eco-section">
    <style>
      .about-details {
        display: flex;
        flex-direction: column;
        gap: 24px;
        font-size: 18px;
        color: rgba(31, 28, 27, 0.85);
        line-height: 1.6;
        max-width: 600px;
      }
      .about-details p {
        margin: 0;
      }
      .about-quote {
        margin-top: 24px;
        border-left: 3px solid var(--c-azul);
        padding-left: 20px;
        font-style: italic;
      }
      .about-quote__line1 {
        font-size: 20px;
        color: var(--c-negro);
        font-weight: 500;
      }
      .about-quote__line2 {
        font-size: 24px;
        color: var(--c-azul);
        font-weight: 600;
        margin-top: 4px !important;
      }
      @media (max-width: 1024px) {
        .about-details {
          font-size: 16px;
        }
        .about-quote__line1 { font-size: 18px; }
        .about-quote__line2 { font-size: 20px; }
      }
    </style>
    <div class="eco-section__header">
      <div class="eco-section__eyebrow">
        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
        <span>ABOUT</span>
      </div>
      <h2>Building the Future Through Technology</h2>
    </div>
    <div class="eco-section__body">
      <!-- Blue geometric shapes -->
      <div class="eco-shapes">
        <div id="eco-iso" style="position:absolute;inset:0;width:100%;height:100%;"></div>
        <span class="eco-logo-glow">
          <svg class="eco-shapes__logo" width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="eco-logo__circle-outer" cx="68.5" cy="68.5" r="68.5" fill="black" fill-opacity="0.5"/>
          <circle class="eco-logo__circle-inner" cx="68.5002" cy="68.4987" r="45.6667" fill="black" fill-opacity="0.6"/>
          <g class="eco-logo__mark">
           <image href="assets/images/logos/brainers/mobile-logo-light-bg.png" x="36.5" y="36.5" width="64" height="64"/>
          </g>
        </svg>
        </span>
      </div>
      <!-- About Us Content Details -->
      <div class="about-details">
        <p>We believe software should create opportunities, simplify complexity, and empower organizations to achieve more.</p>
        <p>As a trusted technology partner, we work alongside businesses, startups, enterprises, and governments to deliver innovative digital solutions that solve today's challenges while preparing for tomorrow's opportunities.</p>
        <p>Our multidisciplinary team combines engineering excellence, strategic thinking, and deep industry knowledge to create software that makes a lasting impact.</p>
        <div class="about-quote">
          <p class="about-quote__line1">Because technology isn't just about systems.</p>
          <p class="about-quote__line2">It's about people, progress, and possibilities.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- Lenis — smooth scroll for discrete mouse wheels -->
  <!-- INLINE: Lenis CDN — must load before smooth-scroll init below -->
  <script src="assets/js/lenis.min.js"></script>
  <!-- INLINE: Lenis init — needs immediate execution for early smooth scroll -->
  <script>
  (function() {
    var lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    var rafId = null;
    function raf(time) { lenis.raf(time); if (lenis.isScrolling) { rafId = requestAnimationFrame(raf); } else { rafId = null; } }
    function startRaf() { if (!rafId) rafId = requestAnimationFrame(raf); }
    lenis.on("scroll", startRaf);
    window.addEventListener("wheel", startRaf, { passive: true });
    window.addEventListener("touchmove", startRaf, { passive: true });
  })();
  </script>

  <!-- ═══════════════════════════════════════════════
     4. WHY BRAINERS LABS — Stacked Cards
     ═══════════════════════════════════════════════ -->
  <section class="why-cards">
    <h2 style="max-width:860px;margin-left:auto;margin-right:auto;text-align:center">Technology services to scale.</h2>
    <div class="why-cards__list">
      <div class="why-cards__sticky">
      <!-- Card 1 — Todo-en-uno -->
      <div class="why-card">
        <div class="why-card__text">
          <span class="why-card__eyebrow">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)"><polygon points="0,0 10,6 0,12"/></svg>
            OUR SERVICES
          </span>
          <h3 class="why-card__title">Design, Build, Scale.</h3>
          <p class="why-card__desc">From custom applications and strategic consulting to intelligent AI automation and beautiful UI/UX design.</p>
          
        </div>
        <div class="why-card__image">
          <div class="why-card__visual">
            <svg class="flower-svg" width="320" height="320" viewBox="-5 -6 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g class="flower-petals" style="transform-origin:155px 154px;">
                <!-- Right petal = Operaciones (1) -->
                <path data-petal="1" d="M308.603 172.04C316.684 130.074 289.215 89.5032 247.25 81.422C205.285 73.3407 164.714 100.809 156.632 142.775C148.551 184.74 176.02 225.311 217.985 233.392C259.951 241.473 300.521 214.005 308.603 172.04Z" fill="url(#fl-g0)" style="cursor:pointer;"/>
                <path data-petal="1" d="M308.603 172.04C316.684 130.074 289.215 89.5032 247.25 81.422C205.285 73.3407 164.714 100.809 156.632 142.775C148.551 184.74 176.02 225.311 217.985 233.392C259.951 241.473 300.521 214.005 308.603 172.04Z" fill="url(#fl-g1)" style="cursor:pointer;"/>
                <!-- Bottom petal = Ventas (0) -->
                <path data-petal="0" d="M156.5 154C199.308 154 234 188.703 234 231.5C234 274.297 199.297 309 156.5 309C113.703 309 79 274.297 79 231.5C79 188.692 113.703 154 156.5 154Z" fill="url(#fl-g2)" style="cursor:pointer;"/>
                <!-- Left petal = Recursos Humanos (3) -->
                <path data-petal="3" d="M0 157.5C0 114.692 34.7026 80 77.5 80C120.297 80 155 114.703 155 157.5C155 200.297 120.297 235 77.5 235C34.7026 235.011 0 200.308 0 157.5Z" fill="url(#fl-g3)" style="cursor:pointer;"/>
                <path data-petal="3" d="M0 157.5C0 114.692 34.7026 80 77.5 80C120.297 80 155 114.703 155 157.5C155 200.297 120.297 235 77.5 235C34.7026 235.011 0 200.308 0 157.5Z" fill="url(#fl-g4)" style="cursor:pointer;"/>
                <!-- Top petal = Servicio al Cliente (2) -->
                <path data-petal="2" d="M154.5 154C111.692 154 77 119.524 77 77.0053C77 34.4763 111.703 0 154.5 0C197.308 0 232 34.4764 232 76.9947C232 119.524 197.297 153.989 154.5 153.989V154Z" fill="url(#fl-g5)" style="cursor:pointer;"/>
                <path data-petal="2" d="M154.5 154C111.692 154 77 119.524 77 77.0053C77 34.4763 111.703 0 154.5 0C197.308 0 232 34.4764 232 76.9947C232 119.524 197.297 153.989 154.5 153.989V154Z" fill="url(#fl-g6)" style="cursor:pointer;"/>
              </g>
              <!-- Center logo (does not rotate) -->
              <g class="flower-center">
                <circle cx="155" cy="151" r="48" fill="black"/>
                <image href="assets/images/logos/brainers/mobile-logo-light-bg.png" x="123" y="119" width="64" height="64"/>
              </g>
              <defs>
                <linearGradient id="fl-g0" x1="155.226" y1="157.407" x2="309.999" y2="157.407" gradientUnits="userSpaceOnUse"><stop stop-color="#39B54A"/><stop offset="1" stop-color="#CAF0A0"/></linearGradient>
                <linearGradient id="fl-g1" x1="308.592" y1="172.038" x2="156.632" y2="142.775" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="0.8" stop-color="#72C7E9"/><stop offset="1" stop-color="#7FD9E7"/></linearGradient>
                <linearGradient id="fl-g2" x1="156.489" y1="154" x2="156.489" y2="309.011" gradientUnits="userSpaceOnUse"><stop stop-color="#D4145A"/><stop offset="1" stop-color="#F2976A"/></linearGradient>
                <linearGradient id="fl-g3" x1="0" y1="157.5" x2="155.011" y2="157.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FDBD00"/><stop offset="1" stop-color="#FF7878"/></linearGradient>
                <linearGradient id="fl-g4" x1="62.8434" y1="81.3881" x2="92.1552" y2="233.602" gradientUnits="userSpaceOnUse"><stop stop-color="#39B54A"/><stop offset="1" stop-color="#CAF0A0"/></linearGradient>
                <linearGradient id="fl-g5" x1="154.5" y1="153.989" x2="154.5" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="0.8" stop-color="#72C7E9"/><stop offset="1" stop-color="#7FD9E7"/></linearGradient>
                <linearGradient id="fl-g6" x1="77" y1="77" x2="232.011" y2="77" gradientUnits="userSpaceOnUse"><stop stop-color="#FDBD00"/><stop offset="1" stop-color="#FF7878"/></linearGradient>
              </defs>
            </svg>
            <div class="why-card__caption">
              <h4 class="flower-caption__title">Custom Software Development</h4>
              <p class="flower-caption__desc">We design, build, and deploy tailored software solutions engineered to optimize operations, automate workflows, and accelerate growth.</p>
            </div>
            <div class="flower-dots">
              <span class="flower-dot active" data-dot="0"></span>
              <span class="flower-dot" data-dot="1"></span>
              <span class="flower-dot" data-dot="2"></span>
              <span class="flower-dot" data-dot="3"></span>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 2 — ASK AI -->
      <div class="why-card">
        <div class="why-card__text">
          <span class="why-card__eyebrow">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)"><polygon points="0,0 10,6 0,12"/></svg>
            Intelligence System
          </span>
          <h3 class="why-card__title">Ask your database. Get insights.</h3>
          <p class="why-card__desc">An intelligence system built into our solutions. Query metrics, generate reports, automate actions, and get actionable insights — all in natural language.</p>
          
        </div>
        <div class="why-card__image">
          <div class="ask-field" id="ask-field">
            <div class="ask-field__bar">
              <div class="ask-field__inner">
                <i class="ph ph-sparkle ask-field__icon"></i>
                <span class="ask-field__text">Ask Breno...</span>
                <span class="ask-field__cursor"></span>
              </div>
              <div class="ask-field__border"></div>
            </div>
            <div class="ask-suggestions">
              <div class="ask-suggestions__item">
                <i class="ph ph-sparkle ask-suggestions__icon"></i>
                <span class="ask-suggestions__text">How many proposals were sent this month?</span>
              </div>
              <div class="ask-suggestions__item">
                <i class="ph ph-sparkle ask-suggestions__icon"></i>
                <span class="ask-suggestions__text">Summarize the pipeline by executive</span>
              </div>
              <div class="ask-suggestions__item">
                <i class="ph ph-sparkle ask-suggestions__icon"></i>
                <span class="ask-suggestions__text">Which clients haven't been contacted this week?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 3 — Acompañamiento -->
      <div class="why-card">
        <div class="why-card__text">
          <span class="why-card__eyebrow">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)"><polygon points="0,0 10,6 0,12"/></svg>
            Capabilities
          </span>
          <h3 class="why-card__title">Diverse capabilities to power your digital journey.</h3>
          <p class="why-card__desc">From high-performance web products to custom background automations — we develop across all domains.</p>
        </div>
        <div class="why-card__image">
          <div class="impl-timeline" id="impl-timeline">
            <div class="impl-timeline__viewport">
              <div class="impl-timeline__grid"></div>
              <div class="impl-timeline__strip" id="impl-strip">
                <!-- 0 Web -->
                <div class="impl-card" data-phase="0" style="--impl-accent:#02A270;--impl-gradient:linear-gradient(135deg,#39B54A,#CAF0A0)">
                  <span class="impl-card__badge">01</span>
                  <div class="impl-card__circle">
                    <i class="ph ph-globe impl-card__icon"></i>
                  </div>
                  <span class="impl-card__label">Web Dev</span>
                </div>
                <div class="impl-connector"><div class="impl-connector__line"></div></div>
                <!-- 1 Mobile -->
                <div class="impl-card" data-phase="1" style="--impl-accent:#FDBF00;--impl-gradient:linear-gradient(135deg,#4285F4,#7FD9E7)">
                  <span class="impl-card__badge">02</span>
                  <div class="impl-card__circle">
                    <i class="ph ph-device-mobile impl-card__icon"></i>
                  </div>
                  <span class="impl-card__label">Mobile App</span>
                </div>
                <div class="impl-connector"><div class="impl-connector__line"></div></div>
                <!-- 2 Cloud -->
                <div class="impl-card" data-phase="2" style="--impl-accent:#2563EB;--impl-gradient:linear-gradient(135deg,#D4145A,#F2976A)">
                  <span class="impl-card__badge">03</span>
                  <div class="impl-card__circle">
                    <i class="ph ph-cloud impl-card__icon"></i>
                  </div>
                  <span class="impl-card__label">Cloud &amp; DevOps</span>
                </div>
                <div class="impl-connector"><div class="impl-connector__line"></div></div>
                <!-- 3 Business Automation -->
                <div class="impl-card" data-phase="3" style="--impl-accent:#F32A73;--impl-gradient:linear-gradient(135deg,#FDBD00,#FF7878)">
                  <span class="impl-card__badge">04</span>
                  <div class="impl-card__circle">
                    <i class="ph ph-cpu impl-card__icon"></i>
                  </div>
                  <span class="impl-card__label">Automation</span>
                </div>
              </div>
            </div>
            <!-- Caption -->
            <div class="impl-caption" id="impl-caption">
              <h4 class="impl-caption__title">Web Development</h4>
              <p class="impl-caption__desc">High-performance websites and rich frontend applications optimized for SEO, speed, accessibility, and high conversions.</p>
            </div>
            <!-- Dots -->
            <div class="impl-dots" id="impl-dots">
              <span class="impl-dot active" data-dot="0"></span>
              <span class="impl-dot" data-dot="1"></span>
              <span class="impl-dot" data-dot="2"></span>
              <span class="impl-dot" data-dot="3"></span>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 4 — Technical Training -->
      <div class="why-card">
        <div class="why-card__text">
          <span class="why-card__eyebrow">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)"><polygon points="0,0 10,6 0,12"/></svg>
            Technical Training
          </span>
          <h3 class="why-card__title">Empowering the next generation of builders.</h3>
          <p class="why-card__desc">We train industry professionals, university students, and recent graduates in cutting-edge technologies.</p>
        </div>
        <div class="why-card__image">
          <div class="price-chart" id="price-chart">
            <h4 class="price-chart__title"></h4>
            <div class="price-chart__rows">
              <div class="price-chart__row price-chart__row--us active" data-price="94" data-name="Success Rate">
                <span class="price-chart__label">Success Rate</span>
                <div class="price-chart__bar-wrap">
                  <div class="price-chart__bar" style="--bar-w:94%; --bar-color:linear-gradient(90deg,#585858,#1F1C1B);">
                    <span class="price-chart__price">94%</span>
                  </div>
                </div>
              </div>
              <div class="price-chart__row" data-price="850" data-name="Trainees by Invitation">
                <span class="price-chart__label">Trainees by Invitation</span>
                <div class="price-chart__bar-wrap">
                  <div class="price-chart__bar" style="--bar-w:Typical; --bar-color:linear-gradient(90deg,#CAF0A0,#39B54A);">
                    <span class="price-chart__price">850+</span>
                  </div>
                </div>
              </div>
              <div class="price-chart__row" data-price="550" data-name="Graduates">
                <span class="price-chart__label">Graduates</span>
                <div class="price-chart__bar-wrap">
                  <div class="price-chart__bar" style="--bar-w:50%; --bar-color:linear-gradient(90deg,#F2976A,#D4145A);">
                    <span class="price-chart__price">550+</span>
                  </div>
                </div>
              </div>
              <div class="price-chart__row" data-price="45" data-name="Corporate Partners">
                <span class="price-chart__label">Corporate Partners</span>
                <div class="price-chart__bar-wrap">
                  <div class="price-chart__bar" style="--bar-w:25%; --bar-color:linear-gradient(90deg,#7FD9E7,#4285F4);">
                    <span class="price-chart__price">45+</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="price-chart__savings">
              <p class="price-chart__savings-label">Impact Metric: <span id="chart-competitor-name">Success Rate</span></p>
              <p class="price-chart__savings-value"><span id="chart-savings-num">94</span><span id="chart-savings-pct">% Success Rate</span></p>
            </div>
          </div>
        </div>
      </div>
      </div><!-- .why-cards__sticky -->
    </div><!-- .why-cards__list -->
  </section>

  <!-- Why-cards stacking scroll JS -->

  <!-- Flower rotation + caption cycling -->

  <!-- Ask AI field: three-phase entrance (circle → pill → suggestions) -->

  <!-- Price chart: entrance + interactive selection -->

  <!-- Implementation timeline: pan + auto-play + click -->

  <!-- ═══════════════════════════════════════════════
     3. CORE PRODUCTS
     ═══════════════════════════════════════════════ -->
  <section class="suite-section">
    <span class="h2-eyebrow"><svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)" style="margin-right:2px;vertical-align:middle;"><polygon points="0,0 10,6 0,12"/></svg> Core Products</span>
    <h2>Our Products</h2>
    <div class="suite-cards">

      <!-- SVG S-paths behind cards -->
      <svg class="suite-s-paths" viewBox="0 0 740 2000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <path id="suitePath1" d="m 106,45h 375c 114,0 226,128 226,235v 236c 0,136 -122,222 -224,221l -182,-2c -89,1 -141,42 -142,158l -2,204c -1,117 37,173 134,173h 186c 110,-3 230,111 230,220v 242c 0,113 -125,225 -248,225H 105" />
          <path id="suitePath2" d="m 33,85h 444c 96,0 190,107 190,201v 224c 0,116 -98,188 -190,187l -192,-2c -92,0 -166,75 -166,168v 278c 0,94 74,169 166,169h 194c 92,0 188,94 188,188v 228c 0,94 -104,191 -214,191H 105" />
          <path id="suitePath3" d="m 155,127h 308c 94,0 162,86 162,177v 178c 0,109 -50,174 -166,173L 277,653C 158,653 77,762 77,849v 302c 0,118 107,196 180,197l 204,4c 92,0 164,67 164,160v 200c 0,91 -89,163 -188,163H 105" />
          <linearGradient id="suiteGradient" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stop-color="#C8C2B5" stop-opacity="0" />
            <stop offset="15%" stop-color="#C8C2B5" stop-opacity="0.7" />
            <stop offset="35%" stop-color="#D4CFC4" stop-opacity="1" />
            <stop offset="50%" stop-color="#E0DBD0" stop-opacity="0.5" />
            <stop offset="65%" stop-color="#C8C2B5" stop-opacity="0.9" />
            <stop offset="85%" stop-color="#D4CFC4" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#C8C2B5" stop-opacity="0" />
          </linearGradient>
        </defs>
        <use href="#suitePath1" />
        <use href="#suitePath2" />
        <use href="#suitePath3" />
      </svg>

      <!-- Card 1: Breno AI -->
      <div class="suite-card-wrap">
      <div class="suite-card">
        <div class="suite-card__icon">
          <i class="ph ph-brain"></i>
        </div>
        <h3 class="suite-card__title">Breno AI <span style="display:inline-block;background:#5B3AF5;color:#fff;font-size:11px;font-weight:600;padding:4px 8px;border-radius:4px;margin-left:8px;letter-spacing:-0.33px;">PRIVATE BETA</span></h3>
        <p>An intelligence company brain and operating system. Process dynamic data models, execute real-time reasoning workflows, and monitor active sync nodes.</p>
        <div style="margin-top:8px;margin-bottom:16px;">
          <a href="https://breno.brainerslabs.com" style="color:var(--c-azul);font-size:14px;font-weight:500;text-decoration:none;display:inline-flex;align-items:center;gap:4px;">
            Explore Breno AI <i class="ph ph-arrow-right" style="font-size:14px;"></i>
          </a>
        </div>
        <div class="suite-card__visual">
        <div class="suite-card__iso">
          <div class="ticket-stack" data-scroll-feed>
           <div class="ticket-track">
            <!-- Ticket: Knowledge Sync -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Knowledge Sync</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Model: Llama 3.1 70B</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#ECFDF5;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#02A270;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#02A270;margin:0;white-space:nowrap;">Active</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Operating State:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#1f1c1b;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">A</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Decision Engine v2</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">High</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Accuracy</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Load:</p>
                      <p style="font-size:11px;font-weight:600;color:#02A270;margin:0;">Stable</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-cpu" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">Fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Ticket: Reasoning Task -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Reasoning Task</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Pipeline: Strategic Planner</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#EFF4FF;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#2563EB;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#2563EB;margin:0;white-space:nowrap;">Processing</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Operating State:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#1f1c1b;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">A</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Inference Core</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">Responsive</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Latency</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Load:</p>
                      <p style="font-size:11px;font-weight:600;color:#FDBF00;margin:0;">Moderate</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-cpu" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">72%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Ticket: Data Model Sync (clone for loop) -->
            <div class="ticket-card" aria-hidden="true">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Knowledge Sync</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Model: Llama 3.1 70B</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#ECFDF5;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#02A270;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#02A270;margin:0;white-space:nowrap;">Active</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Operating State:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#1f1c1b;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">A</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Decision Engine v2</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <!-- Connector 1 -->
      <div class="suite-connector">
        <div class="suite-connector__dot"></div>
        <svg class="suite-connector__line" width="6" height="80" viewBox="0 0 6 80" fill="none">
          <line x1="3" y1="0" x2="3" y2="80" stroke="#FFFFFF" stroke-width="6"/>
          <line x1="3" y1="0" x2="3" y2="80" stroke="#C8C2B5" stroke-width="2" stroke-dasharray="6 6" class="marching-line"/>
        </svg>
        <div class="suite-connector__dot"></div>
      </div>

      <!-- Card 2: Momenta -->
      <div class="suite-card-wrap">
      <div class="suite-card">
        <div class="suite-card__icon">
          <i class="ph ph-calendar-dots"></i>
        </div>
        <h3 class="suite-card__title">Momenta</h3>
        <p>An event memory infrastructure. Capture, index, and replay institutional events — from micro-interactions to milestone milestones — with full temporal context.</p>
        <div style="margin-top:8px;margin-bottom:16px;">
          <a href="javascript:void(0)" style="color:var(--c-azul);font-size:14px;font-weight:500;text-decoration:none;display:inline-flex;align-items:center;gap:4px;">
            Explore Momenta <i class="ph ph-arrow-right" style="font-size:14px;"></i>
          </a>
        </div>
        <div class="suite-card__visual">
        <div class="suite-card__iso">
          <div class="ticket-stack" data-scroll-feed>
           <div class="ticket-track">
            <!-- Event 1 -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Event #4821</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Annual Tech Summit 2025</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#ECFDF5;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#02A270;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#02A270;margin:0;white-space:nowrap;">Recorded</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Topic Stream:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#2563EB;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">M</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">AI in Enterprise</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">1,240</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Attendees</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Replay:</p>
                      <p style="font-size:11px;font-weight:600;color:#02A270;margin:0;">Ready</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-play-circle" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">48h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Event 2 -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Event #4822</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Product Launch Event</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#EFF4FF;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#2563EB;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#2563EB;margin:0;white-space:nowrap;">Scheduled</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Topic Stream:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#2563EB;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">M</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Product & Innovation</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">350</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Registered</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Replay:</p>
                      <p style="font-size:11px;font-weight:600;color:#FDBF00;margin:0;">Pending</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-clock" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">2d</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Clone for loop -->
            <div class="ticket-card" aria-hidden="true">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Event #4821</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Annual Tech Summit 2025</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#ECFDF5;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#02A270;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#02A270;margin:0;white-space:nowrap;">Recorded</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;"></div>
            </div>
           </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <!-- Connector 2 -->
      <div class="suite-connector">
        <div class="suite-connector__dot"></div>
        <svg class="suite-connector__line" width="6" height="80" viewBox="0 0 6 80" fill="none">
          <line x1="3" y1="0" x2="3" y2="80" stroke="#FFFFFF" stroke-width="6"/>
          <line x1="3" y1="0" x2="3" y2="80" stroke="#C8C2B5" stroke-width="2" stroke-dasharray="6 6" class="marching-line"/>
        </svg>
        <div class="suite-connector__dot"></div>
      </div>

      <!-- Card 3: iSch -->
      <div class="suite-card-wrap">
      <div class="suite-card">
        <div class="suite-card__icon">
          <i class="ph ph-student"></i>
        </div>
        <h3 class="suite-card__title">iSchool <span style="display:inline-block;background:#2563EB;color:#fff;font-size:11px;font-weight:600;padding:4px 8px;border-radius:4px;margin-left:8px;letter-spacing:-0.33px;">BETA</span></h3>
        <p>A smart school management system. Automate attendance with biometric check-ins, track academic progress, and connect parents, teachers, and administration.</p>
        <div style="margin-top:8px;margin-bottom:16px;">
          <a href="javascript:void(0)" style="color:var(--c-azul);font-size:14px;font-weight:500;text-decoration:none;display:inline-flex;align-items:center;gap:4px;">
            Explore iSchool <i class="ph ph-arrow-right" style="font-size:14px;"></i>
          </a>
        </div>
        <div class="suite-card__visual">
        <div class="suite-card__iso">
          <div class="ticket-stack" data-scroll-feed>
           <div class="ticket-track">
            <!-- Attendance 1 -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Biometric Check-in</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Class</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#ECFDF5;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#02A270;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#02A270;margin:0;white-space:nowrap;">Verified</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Teacher:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#5B3AF5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">S</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Teacher</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">28/30</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Present</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Rate:</p>
                      <p style="font-size:11px;font-weight:600;color:#02A270;margin:0;">High</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-fingerprint" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">Bio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Attendance 2 -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Grade Report</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Term 2 — Mathematics</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#EFF4FF;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#2563EB;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#2563EB;margin:0;white-space:nowrap;">Submitted</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Teacher:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#5B3AF5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">K</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Teacher</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">85</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Avg Score</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Status:</p>
                      <p style="font-size:11px;font-weight:600;color:#02A270;margin:0;">Good</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-chart-line-up" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">Trending Up</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Clone for loop -->
            <div class="ticket-card" aria-hidden="true">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Biometric Check-in</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Class</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#ECFDF5;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#02A270;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#02A270;margin:0;white-space:nowrap;">Verified</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;"></div>
            </div>
           </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <!-- Connector 3 -->
      <div class="suite-connector">
        <div class="suite-connector__dot"></div>
        <svg class="suite-connector__line" width="6" height="80" viewBox="0 0 6 80" fill="none">
          <line x1="3" y1="0" x2="3" y2="80" stroke="#FFFFFF" stroke-width="6"/>
          <line x1="3" y1="0" x2="3" y2="80" stroke="#C8C2B5" stroke-width="2" stroke-dasharray="6 6" class="marching-line"/>
        </svg>
        <div class="suite-connector__dot"></div>
      </div>

      <!-- Card 4: iHel -->
      <div class="suite-card-wrap">
      <div class="suite-card">
        <div class="suite-card__icon">
          <i class="ph ph-heart-pulse"></i>
        </div>
        <h3 class="suite-card__title">iHel</h3>
        <p>A smart hospital management system. Streamline emergency triage, monitor bed occupancy in real time, and coordinate patient care across departments and staff.</p>
        <div style="margin-top:8px;margin-bottom:16px;">
          <a href="javascript:void(0)" style="color:var(--c-azul);font-size:14px;font-weight:500;text-decoration:none;display:inline-flex;align-items:center;gap:4px;">
            Explore iHel <i class="ph ph-arrow-right" style="font-size:14px;"></i>
          </a>
        </div>
        <div class="suite-card__visual">
        <div class="suite-card__iso">
          <div class="ticket-stack" data-scroll-feed>
           <div class="ticket-track">
            <!-- Triage 1 -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Patient ID: Demo</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Emergency — Chest pain</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#FEF2F2;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#DC2626;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#DC2626;margin:0;white-space:nowrap;">Critical</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Assigned Doctor:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#DC2626;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">R</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Doctor</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">4 min</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Wait</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Bed:</p>
                      <p style="font-size:11px;font-weight:600;color:#02A270;margin:0;">Bed: Demo</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-heartbeat" style="font-size:12px;color:#DC2626;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">98bpm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Occupancy -->
            <div class="ticket-card">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Bed Occupancy</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Ward</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.06);padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#FDBF00;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#585858;margin:0;white-space:nowrap;">Moderate</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Head Nurse:</p>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:24px;height:24px;border-radius:50%;background:#5B3AF5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">A</div>
                    <p style="font-weight:400;line-height:1.4;color:#1f1c1b;font-size:12px;letter-spacing:-0.36px;margin:0;">Sample Nurse</p>
                  </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
                  <div style="display:flex;gap:6px;align-items:center;background:rgba(31,28,27,0.04);padding:4px 8px;border-radius:6px;">
                    <p style="font-weight:600;font-size:14px;letter-spacing:-0.42px;color:#1f1c1b;margin:0;">18/24</p>
                    <p style="font-weight:400;font-size:11px;letter-spacing:-0.33px;color:#585858;margin:0;">Beds</p>
                  </div>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <div style="display:flex;gap:4px;align-items:center;">
                      <p style="font-size:11px;color:#585858;margin:0;">Rate:</p>
                      <p style="font-size:11px;font-weight:600;color:#FDBF00;margin:0;">Typical</p>
                    </div>
                    <div style="display:flex;gap:3px;align-items:center;background:rgba(31,28,27,0.04);padding:3px 6px;border-radius:4px;">
                      <i class="ph ph-bed" style="font-size:12px;color:#585858;"></i>
                      <p style="font-size:11px;font-weight:500;color:#1f1c1b;margin:0;">6 free</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Clone for loop -->
            <div class="ticket-card" aria-hidden="true">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 15px 0;">
                <div style="display:flex;flex-direction:column;gap:2px;width:60%;">
                  <p style="font-weight:500;line-height:1.5;color:#1f1c1b;font-size:16px;letter-spacing:-0.48px;margin:0;">Patient ID: Demo</p>
                  <p style="font-weight:400;line-height:1.4;color:#585858;font-size:12px;letter-spacing:-0.36px;margin:0;">Emergency — Chest pain</p>
                </div>
                <div style="display:flex;gap:6px;align-items:center;background:#FEF2F2;padding:4px 8px 4px 6px;border-radius:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:#DC2626;flex-shrink:0;"></div>
                  <p style="font-weight:400;font-size:12px;letter-spacing:-0.36px;color:#DC2626;margin:0;white-space:nowrap;">Critical</p>
                </div>
              </div>
              <div style="margin:12px 15px 15px;border:none;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:12px;"></div>
            </div>
           </div>
          </div>
        </div>
        </div>
      </div>
      </div>

    </div>
  </section>



  <!-- ═══════════════════════════════════════════════
     5b. SMART PROPOSAL ENGINE (3D Parallax)
     ═══════════════════════════════════════════════ -->
  <style>
    /* Engine module — layout only (text styled by global classes) */
    #home2 .engine-module { position: relative; background: var(--c-negro); padding: 0 !important; overflow: visible; }
    #home2 .engine-module__sticky-wrapper { position: relative; z-index: auto !important; background: var(--c-negro); margin-top: -1px; padding-top: 1px; }
    #home2 .engine-module__scroll-container { height: 300vh; }
    #home2 #engine-canvas { background: transparent !important; position: fixed !important; z-index: 1 !important; pointer-events: none; }
    #home2 .engine-module__header {
      text-align: center;
      padding: 48px 40px;
      position: sticky;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      pointer-events: none;
    }
    #home2 .engine-module__header-inner { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 0; background: rgba(255,255,255,0.14); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.28); border-radius: 20px; box-shadow: 0 12px 32px rgba(0,0,0,0.18); padding: 32px 40px; pointer-events: auto; }
    #home2 .engine-module__header-inner .eco-section__eyebrow { justify-content: center; margin-bottom: 8px; }
    #home2 .engine-module__header h2 { margin: 0 0 20px 0; color: #ffffff; }
    #home2 .engine-module__header p { opacity: 0.85; line-height: 1.6; margin: 0; color: #ffffff; }
    #home2 .engine-module__labels { padding: 0 0 20px; max-width: 100%; margin: 0 auto; pointer-events: auto; max-height: 20vh; }
    #home2 .engine-module__labels-dots { display: none; }
    #home2 .mobile-next-indicator { display: none; }
    #home2 .engine-module__labels-track { display: flex; gap: 40px; padding: 0 48px; justify-content: center; }
    #home2 .engine-module__label { background: rgba(255,255,255,0.14); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.28); border-left: 3px solid rgba(255,255,255,0.75); border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.18); padding: 14px 14px 14px 16px; text-align: left; flex: 0 0 200px; max-width: 240px; }
    #home2 .engine-module__label h3 { margin-bottom: 6px; color: #ffffff; }
    #home2 .engine-module__label p { opacity: 0.85; line-height: 1.4; margin: 0; font-size: clamp(9px,1vw,11px); color: #ffffff; }
    #home2 #engine-canvas { width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 1; }
    #home2 #engine-canvas canvas { display: block; width: 100%; height: 100%; }
    /* Case section */
    #home2 .engine-case { background: var(--c-negro); min-height: 100vh; padding: 0 !important; display: flex; flex-direction: row; align-items: stretch; overflow: visible; position: relative; z-index: 11; margin-top: -1px; }
    #home2 .engine-case__layout { display: grid; grid-template-columns: 2fr 3fr; width: 100%; min-height: 100vh; }
    #home2 .engine-case__content { padding: clamp(40px,8vh,80px) 0; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; text-align: right; padding-top: 10vh; }
    #home2 .engine-case__eyebrow { opacity: 0.5; margin-bottom: 8px; text-align: right; align-self: flex-end; color: var(--c-off-white); }
    #home2 .engine-case__vertical { font-size: var(--step-5) !important; font-weight: 500; color: var(--c-off-white) !important; margin-bottom: 20px; transition: opacity .3s ease, transform .3s ease; }
    #home2 .engine-case__name { font-size: clamp(13px,1.4vw,17px); font-weight: 500; color: var(--c-off-white); margin-bottom: 10px; transition: opacity .3s ease, transform .3s ease; }
    #home2 .engine-case__desc { font-size: clamp(12px,1.1vw,15px); font-weight: 400; color: var(--c-off-white); opacity: 0.65; line-height: 1.7; max-width: 450px; transition: opacity .3s ease, transform .3s ease; min-height: 10em; text-align: right; margin-left: auto; }
    #home2 .engine-case__fullscreen { font-size: clamp(12px,1vw,14px); font-weight: 500; color: #FFFFFF; opacity: 0.65; text-decoration: none; text-align: right; margin-left: auto; display: block; margin-top: 12px; transition: opacity .3s ease; }
    #home2 .engine-case__fullscreen:hover { opacity: 1; }
    #home2 .engine-case__dots { display: flex; gap: 6px; margin-top: 24px; align-items: center; }
    #home2 .engine-case__dot { width: 8px; height: 8px; border-radius: 4px; background: rgba(247,246,240,0.25); cursor: pointer; transition: all .3s ease; pointer-events: auto; }
    #home2 .engine-case__dot.active { background: var(--c-off-white); width: 24px; transform: none; }
    #home2 .engine-case__mockup { position: relative; overflow: visible; }
    #home2 .engine-case__mockup::before { content:''; position: absolute; top: -20%; left: -60%; right: 0; width: 160%; height: 140%; background: radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.9) 0%, transparent 70%); pointer-events: none; z-index: 0; }
    #home2 .engine-case__screen { position: absolute; bottom: -12%; right: -8%; width: 90%; overflow: visible; z-index: 1; cursor: pointer; }
    #home2 .engine-case__frame { position: relative; width: 100%; display: block; pointer-events: none; }
    #home2 .engine-case__video { position: absolute; top: 0.5%; left: 0.5%; width: 99%; height: 73%; object-fit: cover; border-radius: 2px; cursor: pointer; }
    #home2 .engine-case__screen::before { content:''; position: absolute; top: 0.5%; left: 0.5%; width: 99%; height: 73%; border-radius: 2px; background: #000000; pointer-events: none; z-index: 2; opacity: var(--blackout-opacity, 1); }
    #home2 .engine-case__screen::after { content:''; position: absolute; top: 0.5%; left: 0.5%; width: 99%; height: 73%; border-radius: 2px; background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.7) 100%); pointer-events: none; z-index: 1; }
    @media (max-width: 899px) {
      #home2 .engine-module { background: var(--c-negro) !important; }
      #home2 .engine-module__sticky-wrapper { background: var(--c-negro) !important; }
      #home2 .engine-module__header {
        padding: 32px 20px 20px !important;
        justify-content: space-between !important;
        gap: 16px !important;
      }
      #home2 .engine-module__header-inner {
        max-width: 100% !important;
        padding: 16px 20px !important;
      }
      #home2 .engine-module__labels {
        position: relative !important;
        width: 100% !important;
        min-height: 145px !important;
        margin: 0 auto !important;
        max-height: none !important;
        padding: 0 !important;
        display: block !important;
      }
      #home2 .engine-module__labels-track {
        position: relative !important;
        width: 100% !important;
        height: 100% !important;
        padding: 0 !important;
        gap: 0 !important;
        display: block !important;
      }
      #home2 .engine-module__label {
        position: absolute !important;
        top: 0 !important;
        left: 50% !important;
        width: 100% !important;
        max-width: 480px !important;
        box-sizing: border-box !important;
        opacity: 0;
        transform: translateX(-50%) translateY(40px) scale(0.96);
        transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        pointer-events: none !important;
        z-index: 1;
        background: rgba(31, 28, 27, 0.95) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.15) !important;
        border-left: 3px solid rgba(255, 255, 255, 0.75) !important;
        border-radius: 12px !important;
        padding: 14px 14px 28px 16px !important;
        text-align: left !important;
      }
      #home2 .engine-module__label.active {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
        pointer-events: auto !important;
        z-index: 10;
      }
      #home2 .engine-module__label h3 {
        font-size: 15px !important;
        margin-bottom: 6px !important;
        color: #ffffff !important;
      }
      #home2 .engine-module__label p {
        font-size: 11px !important;
        line-height: 1.4 !important;
        opacity: 0.85 !important;
        color: #ffffff !important;
      }
      #home2 .mobile-next-indicator {
        position: absolute !important;
        bottom: 6px !important;
        right: 14px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 14px !important;
        color: rgba(255, 255, 255, 0.7) !important;
        animation: bounceDown 1.5s infinite ease-in-out !important;
      }
      #home2 .engine-module__labels-dots {
        display: flex !important;
        gap: 8px !important;
        justify-content: center !important;
        align-items: center !important;
        margin-top: 16px !important;
        width: 100% !important;
      }
      #home2 .engine-dot {
        width: 8px !important;
        height: 8px !important;
        border-radius: 4px !important;
        background: rgba(255,255,255,0.25) !important;
        transition: all 0.3s ease !important;
        display: inline-block !important;
      }
      #home2 .engine-dot.active {
        background: #ffffff !important;
        width: 20px !important;
      }
    }
    @keyframes bounceDown {
      0%, 100% { transform: translateY(0); opacity: 0.4; }
      50% { transform: translateY(4px); opacity: 1; }
    }
    @media (max-width: 768px) {
      #home2 .engine-case__layout { grid-template-columns: 1fr; grid-template-rows: auto 1fr; min-height: 100vh; }
      #home2 .engine-case__content { padding: 48px 24px 24px; align-items: center; text-align: center; padding-top: 48px; }
      #home2 .engine-case__eyebrow { text-align: center; align-self: center; }
      #home2 .engine-case__desc { margin-left: auto; margin-right: auto; text-align: center; font-size: 15px; }
      #home2 .engine-case__fullscreen { text-align: center; margin-left: auto; margin-right: auto; }
      #home2 .engine-case__vertical { font-size: clamp(22px,7vw,36px) !important; }
      #home2 .engine-case__mockup { position: relative; min-height: 40vh; display: flex; justify-content: center; align-items: flex-end; overflow: hidden; }
      #home2 .engine-case__mockup::before { display: none; }
      #home2 .engine-case__screen { bottom: 0; right: auto; left: auto; transform: none; width: 90%; position: relative; overflow: hidden; }
      #home2 .engine-case__screen::before { border-radius: 0; }
      #home2 .engine-case__screen::after { border-radius: 0; }
    }
  </style>

  <div class="engine-module__sticky-wrapper" id="engine-sticky-wrapper">
    <div class="engine-module__header" id="engine-header-text">
      <div class="engine-module__header-inner">
        <div class="eco-section__eyebrow">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
          <span>WHY CHOOSE US</span>
        </div>
        <h2>Your Technology Partner</h2>
        <p>We don't simply write code. We help organizations solve business problems using technology.</p>
      </div>
      <div class="engine-module__labels" id="engine-phase-labels">
        <div class="engine-module__labels-track">
          <div class="engine-module__label"><h3>Business-First</h3><p>We start every project with your business goals, not just the technical requirements.</p><div class="mobile-next-indicator"><i class="ph ph-caret-down"></i></div></div>
          <div class="engine-module__label"><h3>Modern Engineering</h3><p>Proven technologies, scalable architecture, and best practices built to last.</p><div class="mobile-next-indicator"><i class="ph ph-caret-down"></i></div></div>
          <div class="engine-module__label"><h3>Security by Design</h3><p>Security isn't an afterthought. It's built into every stage of development.</p><div class="mobile-next-indicator"><i class="ph ph-caret-down"></i></div></div>
          <div class="engine-module__label"><h3>Long-Term Partner</h3><p>We stay on after launch — maintenance, updates, and ongoing support.</p></div>
        </div>
        <div class="engine-module__labels-dots" id="engine-labels-dots">
          <span class="engine-dot active"></span>
          <span class="engine-dot"></span>
          <span class="engine-dot"></span>
          <span class="engine-dot"></span>
        </div>
      </div>
    </div>

    <div class="engine-module__scroll-container" id="engine-scroll-container"></div>

    <!-- Case Studies -->
    <section class="engine-case" id="engine-section-after">
      <div class="engine-case__layout">
        <div class="engine-case__content">
          <p class="engine-case__eyebrow h2-eyebrow h2-eyebrow--light"><svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:10px;height:10px;margin-right:6px;"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>Featured Project:</p>
          <h2 class="engine-case__vertical" id="engine-case-vertical">ArchyClouds</h2>
          <p class="engine-case__desc" id="engine-case-desc">An architectural firm website with HR portal. Fully built as a NestJS application.</p>
          <a class="engine-case__fullscreen" id="engine-case-fullscreen" href="https://archyclouds.com" target="_blank" rel="noopener">Visit Website →</a>
          <div class="engine-case__dots" id="engine-case-dots">
            <span class="engine-case__dot active" data-index="0"></span>
            <span class="engine-case__dot" data-index="1"></span>
            <span class="engine-case__dot" data-index="2"></span>
          </div>
        </div>
        <div class="engine-case__mockup">
          <div class="engine-case__screen">
            <video class="engine-case__video" autoplay muted loop playsinline>
              <source src="assets/videos/archyclouds.webm" type="video/webm">
              <source src="assets/videos/archyclouds.mp4" type="video/mp4">
            </video>
            <img class="engine-case__frame" src="assets/images/Mockup.png" alt="Mockup">
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Engine fixed elements (outside sticky-wrapper) -->
  <div id="engine-canvas" style="opacity:0;transition:opacity .3s ease;"></div>

  <!-- INLINE: scroll-driven frame-sequence canvas (assets/videos/why-choose-us-home) -->
  <script>
    (function () {
      var container = document.getElementById('engine-canvas');
      if (!container) return;

      var canvas = document.createElement('canvas');
      container.appendChild(canvas);
      var ctx = canvas.getContext('2d');

      function resizeCanvas() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(container.clientWidth * dpr);
        canvas.height = Math.round(container.clientHeight * dpr);
      }
      resizeCanvas();

      var frameCount = 183;
      var frames = new Array(frameCount);
      var loadedCount = 0;
      var activeFrame = -1;

      function pad(num, size) {
        var s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
      }

      function drawFrame(idx) {
        if (idx < 0 || idx >= frameCount) return;
        var img = frames[idx];
        if (!img || !img.complete || !img.naturalWidth) return;
        var cw = canvas.width, ch = canvas.height;
        var scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
        var dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
        var dx = (cw - dw) / 2, dy = (ch - dh) / 2;
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      function preloadImages() {
        for (var i = 0; i < frameCount; i++) {
          var img = new Image();
          img.onload = (function (idx) {
            return function () {
              loadedCount++;
              if (idx === 0) drawFrame(0);
              if (loadedCount === frameCount) updateFromScroll();
            };
          })(i);
          img.src = 'assets/videos/why-choose-us/frame_' + pad(i, 3) + '.jpg';
          frames[i] = img;
        }
      }

      var stickyWrapper = document.getElementById('engine-sticky-wrapper');
      var sectionAfter = document.getElementById('engine-section-after');
      var headerEl = document.getElementById('engine-header-text');
      var navEl = document.querySelector('nav');
      var navHidden = false;

      function getScrollProgress() {
        var vh = window.innerHeight;
        var startScroll = stickyWrapper.offsetTop - vh * 0.3;
        var sectionAfterAbsTop = sectionAfter.getBoundingClientRect().top + window.scrollY;
        var endScroll = sectionAfterAbsTop - vh;
        var totalDistance = endScroll - startScroll;
        if (totalDistance <= 0) return 0;
        return Math.min(1, Math.max(0, (window.scrollY - startScroll) / totalDistance));
      }

      function updateFromScroll() {
        var progress = getScrollProgress();

        if (progress <= 0 || progress >= 1) {
          if (navHidden && navEl) { navEl.style.opacity = ''; navEl.style.pointerEvents = ''; navHidden = false; }
        } else {
          if (!navHidden && navEl) { navEl.style.opacity = '0'; navEl.style.pointerEvents = 'none'; navHidden = true; }
        }

        container.style.opacity = Math.min(1, progress * 20);

        var frameIdx = Math.min(Math.floor(progress * frameCount), frameCount - 1);
        if (frameIdx !== activeFrame) { activeFrame = frameIdx; drawFrame(frameIdx); }

        var labelsTrack = document.querySelector('.engine-module__labels-track');
        if (labelsTrack) {
          labelsTrack.style.gap = window.innerWidth > 899 ? (40 + progress * 60) + 'px' : '';
        }

        var labels = document.querySelectorAll('.engine-module__label');
        var dots = document.querySelectorAll('#engine-labels-dots .engine-dot');
        if (window.innerWidth <= 899) {
          var activeIdx = Math.min(3, Math.floor(progress * 4));
          labels.forEach(function (lbl, idx) {
            if (idx === activeIdx) {
              lbl.style.opacity = '1';
              lbl.style.transform = 'translateX(-50%) translateY(0) scale(1)';
              lbl.style.pointerEvents = 'auto';
              lbl.style.zIndex = '10';
            } else if (idx < activeIdx) {
              var offset = (activeIdx - idx) * -6;
              var scale = 1 - (activeIdx - idx) * 0.03;
              lbl.style.opacity = '0.7';
              lbl.style.transform = 'translateX(-50%) translateY(' + offset + 'px) scale(' + scale + ')';
              lbl.style.pointerEvents = 'none';
              lbl.style.zIndex = 1 + idx;
            } else {
              lbl.style.opacity = '0';
              lbl.style.transform = 'translateX(-50%) translateY(40px) scale(0.96)';
              lbl.style.pointerEvents = 'none';
              lbl.style.zIndex = '1';
            }
          });
          dots.forEach(function (dot, idx) {
            if (idx === activeIdx) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        } else {
          labels.forEach(function (lbl) {
            lbl.style.opacity = '';
            lbl.style.transform = '';
            lbl.style.pointerEvents = '';
            lbl.style.zIndex = '';
          });
        }

        var sectionRect = sectionAfter.getBoundingClientRect();
        var viewportH = window.innerHeight;
        var scrollUpAmount = Math.max(0, viewportH - sectionRect.top);

        if (scrollUpAmount > 0) {
          container.style.transform = 'translateY(' + (-scrollUpAmount) + 'px)';
          headerEl.style.transform = 'translateY(' + (-scrollUpAmount) + 'px)';
          headerEl.style.opacity = 1;

          var blackoutT = Math.max(0, Math.min(1, (scrollUpAmount - viewportH * 0.4) / (viewportH * 0.4)));
          var screenEl = document.querySelector('.engine-case__screen');
          if (screenEl) screenEl.style.setProperty('--blackout-opacity', 1 - blackoutT);
        } else {
          container.style.transform = 'translateY(0)';
          headerEl.style.transform = 'translateY(0)';
          headerEl.style.opacity = 1;
        }
      }

      var resizeTicking = false;
      window.addEventListener('resize', function () {
        if (resizeTicking) return;
        resizeTicking = true;
        requestAnimationFrame(function () {
          resizeCanvas();
          drawFrame(activeFrame < 0 ? 0 : activeFrame);
          updateFromScroll();
          resizeTicking = false;
        });
      });

      var scrollTicking = false;
      window.addEventListener('scroll', function () {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(function () { updateFromScroll(); scrollTicking = false; });
      }, { passive: true });

      preloadImages();
      updateFromScroll();
    })();
  </script>

  <script>
    // Case study carousel
    const caseStudies = [
      { vertical: 'ArchyClouds', description: 'An architectural firm website with HR portal. Fully built as a NestJS application.', video: 'archyclouds', url: 'https://archyclouds.com' },
      { vertical: 'Breno AI', description: 'Our own product: an intelligent assistant for professionals and enterprises. A persistent intelligence system with real-time reasoning capabilities.', video: 'arvix', url: 'https://breno.brainerslabs.com' },
      { vertical: 'Atlantic Ways Advisory', description: 'A corporate website for a consultation firm.', video: 'atlanticways', url: 'https://atlanticwaysadvisory.com' }
    ];

    let currentCase = 0;
    const caseDots = document.querySelectorAll('.engine-case__dot');
    const caseVertical = document.getElementById('engine-case-vertical');
    const caseDesc = document.getElementById('engine-case-desc');

    function updateCase(index) {
      currentCase = index;
      const study = caseStudies[index];
      caseVertical.style.opacity = 0; caseVertical.style.transform = 'translateY(8px)';
      caseDesc.style.opacity = 0; caseDesc.style.transform = 'translateY(8px)';
      setTimeout(() => {
        caseVertical.textContent = study.vertical;
        caseDesc.textContent = study.description;
        setTimeout(() => { caseVertical.style.opacity = 1; caseVertical.style.transform = 'translateY(0)'; }, 0);
        setTimeout(() => { caseDesc.style.opacity = 1; caseDesc.style.transform = 'translateY(0)'; }, 80);
      }, 250);
      caseDots.forEach((d, i) => d.classList.toggle('active', i === index));
      // Update website link
      const caseFullscreen = document.getElementById('engine-case-fullscreen');
      if (caseFullscreen) {
        caseFullscreen.href = study.url;
      }
      // Swap video
      if (study.video) {
        const video = document.querySelector('.engine-case__video');
        const webm = video.querySelector('source[type="video/webm"]');
        const mp4 = video.querySelector('source[type="video/mp4"]');
        webm.src = '/assets/videos/' + study.video + '.webm';
        mp4.src = '/assets/videos/' + study.video + '.mp4';
        video.load();
        video.play();
      }
    }

    caseDots.forEach(dot => {
      dot.addEventListener('click', () => {
        updateCase(parseInt(dot.dataset.index));
      });
    });

    // Touch swipe for mobile
    const caseSection = document.getElementById('engine-section-after');
    let touchStartX = 0;
    let touchEndX = 0;
    caseSection.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    caseSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentCase < caseStudies.length - 1) updateCase(currentCase + 1);
        else if (diff < 0 && currentCase > 0) updateCase(currentCase - 1);
      }
    }, { passive: true });

    function openVideoFullscreen() {
      const video = document.querySelector('.engine-case__video');
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    }

    document.querySelector('.engine-case__screen').addEventListener('click', () => {
      openVideoFullscreen();
    });
  </script>




  


  <!-- ═══════════════════════════════════════════════
     7. WE REPLACE / REEMPLAZAMOS
     ═══════════════════════════════════════════════ -->
  
  <!-- ═══════════════════════════════════════════════
     7. TECHNOLOGIES
     ═══════════════════════════════════════════════ -->
  <section class="tech-section" id="tech-section">
    <style>
      .tech-section {
        background: var(--c-off-white) !important;
        color: var(--c-negro);
        padding: 100px 64px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        border-top: 1px solid rgba(31, 28, 27, 0.08);
        border-bottom: 1px solid rgba(31, 28, 27, 0.08);
      }
      .tech-section__header {
        text-align: center;
        margin-bottom: 48px;
        max-width: 800px;
      }
      .tech-section__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: Geist Mono, monospace;
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1.12px;
        color: var(--c-azul);
        margin-bottom: 16px;
      }
      .tech-section__header h2 {
        font-size: var(--step-5);
        font-weight: 400;
        letter-spacing: -1.44px;
        line-height: 1.2;
        margin-bottom: 16px;
        color: var(--c-negro);
      }
      .tech-section__desc {
        font-size: 18px;
        color: rgba(31, 28, 27, 0.65);
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
      }

      /* Carousel navigation tabs */
      .tech-tabs {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4px;
        margin-bottom: 48px;
        max-width: 1000px;
        padding: 6px;
        background: rgba(31, 28, 27, 0.04);
        border: 1px solid rgba(31, 28, 27, 0.1);
        border-radius: 18px;
        backdrop-filter: blur(8px);
      }
      .tech-tabs__indicator {
        position: absolute;
        z-index: 0;
        top: 6px;
        left: 6px;
        height: calc(100% - 12px);
        width: 0;
        border-radius: 12px;
        background: var(--c-negro);
        box-shadow: 0 6px 18px rgba(31, 28, 27, 0.25);
        transition: transform 0.4s cubic-bezier(.4,0,.2,1), width 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
      }
      .tech-tabs__indicator.is-ready { opacity: 1; }
      .tech-tab {
        position: relative;
        z-index: 1;
        background: transparent;
        border: 1px solid transparent;
        color: rgba(31, 28, 27, 0.6);
        padding: 10px 20px;
        border-radius: 12px;
        font-size: 14.5px;
        font-weight: 500;
        letter-spacing: -0.1px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
        transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease, transform 0.25s cubic-bezier(.4,0,.2,1);
      }
      .tech-tab svg {
        width: 15px;
        height: 15px;
        opacity: 0.75;
        flex-shrink: 0;
        transition: opacity 0.3s ease, transform 0.3s ease, stroke 0.3s ease;
      }
      .tech-tab:hover {
        color: var(--c-negro);
        background: rgba(31, 28, 27, 0.06);
        border-color: rgba(31, 28, 27, 0.12);
      }
      .tech-tab:hover svg { opacity: 1; transform: scale(1.12); }
      .tech-tab.active {
        color: var(--c-off-white);
        font-weight: 600;
      }
      .tech-tab.active svg { opacity: 1; }
      @media (max-width: 640px) {
        .tech-tabs__indicator { display: none; }
        .tech-tab.active {
          background: var(--c-negro);
          box-shadow: 0 4px 16px rgba(31, 28, 27, 0.25);
        }
      }
      
      /* Carousel Viewport */
      .tech-carousel {
        position: relative;
        width: 100%;
        max-width: 1000px;
        min-height: 240px;
      }
      .tech-slide {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        opacity: 0;
        pointer-events: none;
        transform: translateY(15px);
        transition: opacity 0.4s ease, transform 0.4s ease;
      }
      .tech-slide.active {
        position: relative;
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }
      
      /* Technology Card item */
      .tech-card {
        position: relative;
        overflow: hidden;
        background: linear-gradient(160deg, #0d0d0d, #060606);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 14px;
        padding: 20px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        text-align: center;
        transition: transform 0.35s cubic-bezier(.4,0,.2,1), box-shadow 0.35s cubic-bezier(.4,0,.2,1), border-color 0.35s ease, background 0.35s ease;
        cursor: default;
        opacity: 0;
        transform: translateY(14px) scale(0.96);
      }
      .tech-slide.active .tech-card {
        animation: techCardIn 0.5s cubic-bezier(.4,0,.2,1) forwards;
      }
      .tech-slide.active .tech-card:nth-child(1) { animation-delay: .03s; }
      .tech-slide.active .tech-card:nth-child(2) { animation-delay: .08s; }
      .tech-slide.active .tech-card:nth-child(3) { animation-delay: .13s; }
      .tech-slide.active .tech-card:nth-child(4) { animation-delay: .18s; }
      .tech-slide.active .tech-card:nth-child(5) { animation-delay: .23s; }
      @keyframes techCardIn {
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .tech-card:before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15), transparent 70%);
        opacity: 0;
        transition: opacity 0.35s ease;
      }
      .tech-card:hover:before { opacity: 1; }
      .tech-card:hover {
        background: linear-gradient(160deg, #131313, #0a0a0a);
        border-color: rgba(37, 99, 235, 0.35);
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(37, 99, 235, 0.15);
      }
      .tech-card svg {
        position: relative;
        z-index: 1;
        width: 36px;
        height: 36px;
        transition: transform 0.4s cubic-bezier(.4,0,.2,1);
      }
      .tech-card:hover svg {
        transform: scale(1.15) translateY(-2px);
      }
      .tech-card__name {
        position: relative;
        z-index: 1;
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.85);
        letter-spacing: -0.1px;
      }
      
      @media (max-width: 1024px) {
        .tech-slide {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 768px) {
        .tech-section {
          padding: 60px 20px !important;
        }
        .tech-section__header h2 {
          font-size: var(--step-4);
        }
        .tech-tabs {
          gap: 8px;
        }
        .tech-tab {
          padding: 8px 16px;
          font-size: 13px;
        }
        .tech-slide {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .tech-card {
          padding: 20px 12px;
          gap: 12px;
        }
        .tech-card svg {
          width: 40px;
          height: 40px;
        }
      }
    </style>
    
    <div class="tech-section__header">
      <div class="tech-section__eyebrow">
        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:10px;height:10px;"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
        <span>TECHNOLOGIES</span>
      </div>
      <h2>Built Using Modern Technologies</h2>
      <p class="tech-section__desc">We leverage industry-leading technologies to build secure, scalable, and future-ready software.</p>
    </div>
    
    <div class="tech-tabs">
      <span class="tech-tabs__indicator" id="tech-tabs-indicator"></span>
      <button class="tech-tab active" data-slide="0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg>Frontend</button>
      <button class="tech-tab" data-slide="1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><circle cx="7" cy="7" r=".6" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>Backend</button>
      <button class="tech-tab" data-slide="2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>Mobile</button>
      <button class="tech-tab" data-slide="3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4 4 0 01-1-7.87A5 5 0 0116 8a4.5 4.5 0 011 8.9"/><path d="M7 18h10"/></svg>Cloud</button>
      <button class="tech-tab" data-slide="4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>Database</button>
      <button class="tech-tab" data-slide="5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z"/><path d="M19 15l.7 1.7L21.5 18l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/></svg>AI</button>
      <button class="tech-tab" data-slide="6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>DevOps</button>
    </div>
    
    <div class="tech-carousel">
      <!-- 0. Frontend -->
      <div class="tech-slide active" id="tech-slide-0">
        <div class="tech-card">
          <!-- React -->
          <svg viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
          <span class="tech-card__name">React</span>
        </div>
        <div class="tech-card">
          <!-- Next.js -->
          <svg viewBox="0 0 180 180"><circle cx="90" cy="90" r="90" fill="#000" stroke="rgba(255,255,255,0.15)" stroke-width="2"/><path d="M140 90L93 135V90H80V135H93L140 90Z" fill="#fff"/><rect x="80" y="45" width="13" height="45" fill="#fff"/></svg>
          <span class="tech-card__name">Next.js</span>
        </div>
        <div class="tech-card">
          <!-- Vue -->
          <svg viewBox="0 0 196.3 170.2"><path d="M121 0L98.2 39.5 75.3 0H0l98.2 170.2L196.3 0h-75.3z" fill="#41B883"/><path d="M121 0L98.2 39.5 75.3 0H39.3l58.9 102L157 0h-36z" fill="#35495E"/></svg>
          <span class="tech-card__name">Vue</span>
        </div>
        <div class="tech-card">
          <!-- Angular -->
          <svg viewBox="0 0 250 250"><polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/><polygon points="125,30 125,230 203.9,186.3 218.1,63.2" fill="#C3002F"/><path d="M125,52.1L66.8,182.6h21.7l11.7-29.2h50.7l11.7,29.2h21.7L125,52.1z M125,135.4H105l20-49.8l20,49.8H125z" fill="#FFFFFF"/></svg>
          <span class="tech-card__name">Angular</span>
        </div>
        <div class="tech-card">
          <!-- Flutter -->
          <svg viewBox="0 0 2000 2000"><path d="M1302.2 133.7L734.9 701.1l430.5 430.5 567.4-567.4z" fill="#45D1FD"/><path d="M734.9 701.1l-567.4 567.4 283.7 283.7 851.1-851.1z" fill="#02569B"/><path d="M1302.2 1268.6l-283.7 283.7 283.7 283.7h567.4l-425.5-425.5z" fill="#0175C2"/><path d="M1018.5 984.9L593 1410.4l425.5 425.5H734.9L309.4 1410.4l425.5-425.5z" fill="#13B9FD"/></svg>
          <span class="tech-card__name">Flutter</span>
        </div>
      </div>
      
      <!-- 1. Backend -->
      <div class="tech-slide" id="tech-slide-1">
        <div class="tech-card">
          <!-- Node.js -->
          <svg viewBox="0 0 256 256"><path d="M128 0L32 55.4v110.8l96 55.4 96-55.4V55.4L128 0zm72 153.2L128 194l-72-40.8V79.2l72-40.8 72 40.8v74z" fill="#339933"/><path d="M128 62.4v97.2L68 126V79.2z" fill="#339933" fill-opacity="0.6"/></svg>
          <span class="tech-card__name">Node.js</span>
        </div>
        <div class="tech-card">
          <!-- Go -->
          <svg viewBox="0 0 256 97"><path d="M47.7 65.6c0 15.6-12.4 28-27.9 28C8.8 93.6.5 83.3.5 65.6c0-17.2 9.9-28 27.2-28 17.5 0 20 12.5 20 28zm101.4-1.2h28v10.5h-28v18.7h-11.8V7.3H174v10.5h-24.9v17.9H173v10.5h-23.9v18.2z" fill="#00ADD8"/></svg>
          <span class="tech-card__name">Go</span>
        </div>
        <div class="tech-card">
          <!-- .NET -->
          <svg viewBox="0 0 256 256"><circle cx="128" cy="128" r="120" fill="#512BD4"/><path d="M128 50L60 90v76l68 40 68-40V90L128 50z" fill="#fff" fill-opacity="0.2"/><text x="128" y="148" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="#fff" text-anchor="middle">.NET</text></svg>
          <span class="tech-card__name">.NET</span>
        </div>
        <div class="tech-card">
          <!-- Java -->
          <svg viewBox="0 0 256 256"><path d="M96 160c-10 0-20-4-30-10-8-5-14-12-16-20-3-10 1-20 10-30 10-10 24-18 40-20v80zm128-48c0 10-5 20-15 28-12 10-30 16-53 16V76c20 0 36 6 46 16 8 8 12 16 12 20zm-112-96v64c-12 0-24-4-32-10-6-5-10-12-10-18 0-8 6-16 18-24 10-6 18-10 24-12zm96 16c0 6-3 12-10 18-8 6-20 10-32 10V12c12 2 20 6 26 12 6 5 16 10 16 20z" fill="#E76F00"/></svg>
          <span class="tech-card__name">Java</span>
        </div>
        <div class="tech-card">
          <!-- Python -->
          <svg viewBox="0 0 110 110"><path d="M55 0C24.6 0 26.3 13.3 26.3 13.3H39.8s-1.7-8.3 15.2-8.3C71.9 5 70.2 12.9 70.2 12.9v13.5H41.5S20 27.2 20 54.3s21.5 29 21.5 29h7.8s1.7 8.3-15.2 8.3C17.2 91.6 19 83.7 19 83.7H5.5S3.8 97 34.2 97c30.4 0 28.7-13.3 28.7-13.3H49.4s1.7 8.3-15.2 8.3c-16.9 0-15.2-7.9-15.2-7.9V70.6h28.7s21.5-.8 21.5-27.9-21.5-29-21.5-29H55V0z" fill="#3776AB"/></svg>
          <span class="tech-card__name">Python</span>
        </div>
      </div>
      
      <!-- 2. Mobile -->
      <div class="tech-slide" id="tech-slide-2">
        <div class="tech-card">
          <!-- Flutter -->
          <svg viewBox="0 0 2000 2000"><path d="M1302.2 133.7L734.9 701.1l430.5 430.5 567.4-567.4z" fill="#45D1FD"/><path d="M734.9 701.1l-567.4 567.4 283.7 283.7 851.1-851.1z" fill="#02569B"/><path d="M1302.2 1268.6l-283.7 283.7 283.7 283.7h567.4l-425.5-425.5z" fill="#0175C2"/><path d="M1018.5 984.9L593 1410.4l425.5 425.5H734.9L309.4 1410.4l425.5-425.5z" fill="#13B9FD"/></svg>
          <span class="tech-card__name">Flutter</span>
        </div>
        <div class="tech-card">
          <!-- React Native -->
          <svg viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
          <span class="tech-card__name">React Native</span>
        </div>
        <div class="tech-card">
          <!-- Swift -->
          <svg viewBox="0 0 256 256"><path d="M228 178c-28 32-72 46-112 36-35-8-68-36-78-72-12-42 6-88 42-112 8-5 16-8 24-8 1 0 2 0 3 1-8 12-11 28-8 42 3 15 11 28 23 37 12 10 28 14 43 12 15-2 29-10 37-22 6 8 8 18 6 28-2 15-11 28-23 36-12 9-27 12-42 10-15-2-29-10-36-23-2 12-1 25 4 36 6 15 18 26 33 32 15 6 32 6 48 1 12-4 23-11 31-20 1 0 2 0 3 1h3z" fill="#FA7343"/></svg>
          <span class="tech-card__name">Swift</span>
        </div>
        <div class="tech-card">
          <!-- Kotlin -->
          <svg viewBox="0 0 256 256"><polygon points="0,256 128,128 256,256" fill="#F48A10"/><polygon points="256,256 128,128 256,0" fill="#7F52FF"/><polygon points="256,0 0,0 128,128" fill="#D939CD"/></svg>
          <span class="tech-card__name">Kotlin</span>
        </div>
      </div>
      
      <!-- 3. Cloud -->
      <div class="tech-slide" id="tech-slide-3">
        <div class="tech-card">
          <!-- AWS -->
          <svg viewBox="0 0 256 256"><path d="M128 0c70 0 128 58 128 128s-58 128-128 128S0 198 0 128 58 0 128 0z" fill="#232F3E"/><path d="M168 152c-8 6-22 10-36 10-24 0-38-12-38-34 0-24 16-36 38-36 12 0 25 4 32 8v12c-7-5-18-8-28-8-15 0-25 8-25 24 0 14 8 22 25 22 10 0 20-3 27-8v10zm25 10l-12-6c8-10 13-24 13-38 0-20-10-32-28-32-10 0-20 4-26 8l-6-8h-11v80h12v-32c5 4 12 6 20 6 18 0 30-10 38-20z" fill="#FF9900"/></svg>
          <span class="tech-card__name">AWS</span>
        </div>
        <div class="tech-card">
          <!-- Microsoft Azure -->
          <svg viewBox="0 0 256 256"><polygon points="0,172 100,20 180,80" fill="#0078D4"/><polygon points="100,20 256,128 180,220" fill="#50E4FF"/></svg>
          <span class="tech-card__name">Microsoft Azure</span>
        </div>
        <div class="tech-card">
          <!-- Google Cloud -->
          <svg viewBox="0 0 256 256"><path d="M196 142l-40 40H90l-40-40 40-40h66l40 40z" fill="#4285F4"/><path d="M90 142H40L15 98l40-40 35 84z" fill="#EA4335"/><path d="M196 142h40l25-44-40-40-25 84z" fill="#FBBC05"/><path d="M142 40l44-25 40 40-84 35v-50z" fill="#34A853"/></svg>
          <span class="tech-card__name">Google Cloud</span>
        </div>
      </div>
      
      <!-- 4. Database -->
      <div class="tech-slide" id="tech-slide-4">
        <div class="tech-card">
          <!-- PostgreSQL -->
          <svg viewBox="0 0 256 256"><path d="M128 0C57 0 0 57 0 128s57 128 128 128 128-57 128-128S199 0 128 0zm48 178c-12 12-28 18-48 18s-36-6-48-18c-10-10-14-24-14-38 0-20 10-36 28-44l12 16c-10 5-15 12-15 22 0 12 8 20 20 20s20-8 20-20V94h16v40c0 12 8 20 20 20s20-8 20-20c0-10-5-17-15-22l12-16c18 8 28 24 28 44 0 14-4 28-14 38z" fill="#336791"/></svg>
          <span class="tech-card__name">PostgreSQL</span>
        </div>
        <div class="tech-card">
          <!-- MySQL -->
          <svg viewBox="0 0 256 256"><path d="M128 0C57 0 0 57 0 128s57 128 128 128 128-57 128-128S199 0 128 0zm20 178h-40v-10h40v10zm12-24h-64v-10h64v10zm16-24H80v-10h96v10z" fill="#00758F"/></svg>
          <span class="tech-card__name">MySQL</span>
        </div>
        <div class="tech-card">
          <!-- MongoDB -->
          <svg viewBox="0 0 256 256"><path d="M128 12C90 40 80 90 80 128c0 30 10 56 28 72l20 28 20-28c18-16 28-42 28-72 0-38-10-88-48-116z" fill="#47A248"/></svg>
          <span class="tech-card__name">MongoDB</span>
        </div>
        <div class="tech-card">
          <!-- Redis -->
          <svg viewBox="0 0 256 256"><path d="M128 0L24 60v136l104 60 104-60V60L128 0zm68 153l-68 39-68-39V93l68-39 68 39v60z" fill="#DC382D"/></svg>
          <span class="tech-card__name">Redis</span>
        </div>
      </div>
      
      <!-- 5. AI -->
      <div class="tech-slide" id="tech-slide-5">
        <div class="tech-card">
          <!-- OpenAI -->
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5-2.5-1.5-5.5 0-8s4.5-4 7.5-4c1.5 0 3 .5 4 1.5M19.5 7.5c1.5 2.5 1.5 5.5 0 8s-4.5 4-7.5 4c-1.5 0-3-.5-4-1.5M12 2v20M2 12h20"/></svg>
          <span class="tech-card__name">OpenAI</span>
        </div>
        <div class="tech-card">
          <!-- Anthropic -->
          <svg viewBox="0 0 256 256"><path d="M128 0L30 220h40l32-72h52l32 72h40L128 0zm-14 116l24-54 24 54h-48z" fill="#E0B890"/></svg>
          <span class="tech-card__name">Anthropic</span>
        </div>
        <div class="tech-card">
          <!-- Google Gemini -->
          <svg viewBox="0 0 256 256"><path d="M128 32c12 36 36 60 72 72-36 12-60 36-72 72-12-36-36-60-72-72 36-12 60-36 72-72z" fill="#3877EE"/></svg>
          <span class="tech-card__name">Google Gemini</span>
        </div>
        <div class="tech-card">
          <!-- Vector Databases -->
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
          <span class="tech-card__name">Vector Databases</span>
        </div>
        <div class="tech-card">
          <!-- Machine Learning -->
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
          <span class="tech-card__name">Machine Learning</span>
        </div>
      </div>
      
      <!-- 6. DevOps -->
      <div class="tech-slide" id="tech-slide-6">
        <div class="tech-card">
          <!-- Docker -->
          <svg viewBox="0 0 24 24"><path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.77c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.122c0 .101.084.186.186.186zm-2.916-2.493h2.117c.102 0 .186-.085.186-.186V6.275c0-.102-.084-.186-.186-.186h-2.117c-.102 0-.186.084-.186.186v2.124c0 .101.084.186.186.186zm-2.919 0h2.119c.102 0 .185-.085.185-.186V6.275c0-.102-.083-.186-.185-.186H8.148c-.102 0-.186.084-.186.186v2.124c0 .101.084.186.186.186zm-2.916 0h2.12c.101 0 .186-.085.186-.186V6.275c0-.102-.085-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.124c0 .101.084.186.186.186zm-2.92 0h2.12c.101 0 .185-.085.185-.186V6.275c0-.102-.084-.186-.185-.186H2.312c-.102 0-.186.084-.186.186v2.124c0 .101.084.186.186.186z" fill="#2496ED"/></svg>
          <span class="tech-card__name">Docker</span>
        </div>
        <div class="tech-card">
          <!-- Kubernetes -->
          <svg viewBox="0 0 256 256"><polygon points="128,24 220,77 220,179 128,232 36,179 36,77" fill="#326CE5"/><polygon points="128,45 200,87 200,169 128,211 56,169 56,87" fill="#ffffff" fill-opacity="0.15"/></svg>
          <span class="tech-card__name">Kubernetes</span>
        </div>
        <div class="tech-card">
          <!-- GitHub Actions -->
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4M6.5 10v4"/></svg>
          <span class="tech-card__name">GitHub Actions</span>
        </div>
        <div class="tech-card">
          <!-- Terraform -->
          <svg viewBox="0 0 256 256"><polygon points="0,0 110,0 110,110 0,110" fill="#5C4EE5"/><polygon points="146,0 256,0 256,110 146,110" fill="#5C4EE5"/><polygon points="0,146 110,146 110,256 0,256" fill="#5C4EE5"/><polygon points="146,146 256,146 256,256 146,256" fill="#844FBA"/></svg>
          <span class="tech-card__name">Terraform</span>
        </div>
        <div class="tech-card">
          <!-- CI/CD -->
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zM12 6v12M6 12h12"/></svg>
          <span class="tech-card__name">CI/CD</span>
        </div>
      </div>
    </div>
    
    <script>
      (function() {
        const tabs = document.querySelectorAll('#tech-section .tech-tab');
        const slides = document.querySelectorAll('#tech-section .tech-slide');
        const indicator = document.getElementById('tech-tabs-indicator');

        function moveIndicator(el) {
          if (!indicator || !el) return;
          indicator.style.width = el.offsetWidth + 'px';
          indicator.style.transform = 'translateX(' + el.offsetLeft + 'px)';
          indicator.classList.add('is-ready');
        }

        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            const slideIdx = tab.dataset.slide;
            tabs.forEach(t => t.classList.remove('active'));
            slides.forEach(s => s.classList.remove('active'));

            tab.classList.add('active');
            const targetSlide = document.getElementById('tech-slide-' + slideIdx);
            if (targetSlide) targetSlide.classList.add('active');
            moveIndicator(tab);
          });
        });

        function initIndicator() {
          moveIndicator(document.querySelector('#tech-section .tech-tab.active'));
        }
        requestAnimationFrame(initIndicator);
        window.addEventListener('resize', initIndicator);
      })();
    </script>
  </section>



  <!-- ═══════════════════════════════════════════════
     8. FAQ
     ═══════════════════════════════════════════════ -->
    <section class="faq-v2">
    <div class="faq-v2__header">
      <span class="faq-v2__eyebrow">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)" style="vertical-align:middle;"><polygon points="0,0 10,6 0,12"/></svg>
        FAQ
      </span>
      <h2>Your questions, answered</h2>
    </div>
    <ul class="faq-v2__list">
      <li class="faq-v2__item open">
        <button class="faq-v2__question">
          <span class="faq-v2__text">What services does Brainers Labs offer?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>We provide comprehensive custom software development, technology consulting, UI/UX design, mobile &amp; web application development, cloud-native engineering, database scaling, AI integration, and DevOps orchestration. We serve as a long-term technology partner, helping businesses solve complex problems through software that scales.</p>
        </div>
      </li>
      <li class="faq-v2__item">
        <button class="faq-v2__question">
          <span class="faq-v2__text">How does the project process work?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>Every project follows our structured software engineering lifecycle: business analysis &amp; planning, architecture design, UI/UX prototyping, agile development sprints, automated QA testing, cloud deployment, and post-launch maintenance. We ensure transparent collaboration with regular updates and complete predictability.</p>
        </div>
      </li>
      <li class="faq-v2__item">
        <button class="faq-v2__question">
          <span class="faq-v2__text">How do you determine project pricing and timelines?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>Timelines and pricing depend entirely on the project scope, complexity, and technology stack. After our initial scoping phase (where we align on your business objectives and technical requirements), we provide a detailed proposal outline, timeline milestones, and fixed-price or dedicated team resource estimates.</p>
        </div>
      </li>
      <li class="faq-v2__item">
        <button class="faq-v2__question">
          <span class="faq-v2__text">Do you build native mobile apps or cross-platform solutions?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>We develop both! We build highly performant cross-platform mobile apps using Flutter and React Native to target iOS and Android with a single codebase, as well as native Swift (iOS) and Kotlin (Android) apps for specialized hardware-level integrations.</p>
        </div>
      </li>
      <li class="faq-v2__item faq-v2__item--extra">
        <button class="faq-v2__question">
          <span class="faq-v2__text">Can you integrate AI capabilities (like LLMs and Vector Databases) into our existing systems?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>Yes, AI integration is one of our core specialties. We connect leading models (OpenAI, Anthropic, Google Gemini) to custom applications to automate document analysis, power predictive engines, build custom assistants, and handle semantic searches using vector databases (like Pinecone, pgvector, or Milvus).</p>
        </div>
      </li>
      <li class="faq-v2__item faq-v2__item--extra">
        <button class="faq-v2__question">
          <span class="faq-v2__text">How do you ensure the security and scalability of our software?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>We practice &quot;Security by Design.&quot; This means data protection, role-based access control, secure APIs, and encryption are integrated from day one. To ensure scalability, we use cloud-native practices, containerized microservices (Docker &amp; Kubernetes), and high-performance databases configured for growth.</p>
        </div>
      </li>
      <li class="faq-v2__item faq-v2__item--extra">
        <button class="faq-v2__question">
          <span class="faq-v2__text">Will we own the source code and intellectual property?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>Yes, 100%. Upon completion of the project and payment, full ownership of the custom source code, documentation, assets, and intellectual property is transferred to your company. We host your code in secure private repositories (e.g., GitHub, GitLab) that you own.</p>
        </div>
      </li>
      <li class="faq-v2__item faq-v2__item--extra">
        <button class="faq-v2__question">
          <span class="faq-v2__text">What support do you provide after a project is launched?</span>
          <span class="faq-v2__icon"></span>
        </button>
        <div class="faq-v2__answer">
          <p>We believe in long-term partnership. After launching your application, we offer dedicated maintenance SLA plans that include server health monitoring, security patches, API version updates, database optimization, and continuous feature enhancement support.</p>
        </div>
      </li>
    </ul>
    <div class="faq-v2__more-wrap" data-faq-more>
      <div class="faq-v2__fade"></div>
      <button class="faq-v2__show-more" data-faq-toggle>See more questions →</button>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════
     5. CASES / CASOS DE ÉXITO
     ═══════════════════════════════════════════════ -->
    <section class="cases-v2">
    <span class="h2-eyebrow"><svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)" style="margin-right:2px;vertical-align:middle;"><polygon points="0,0 10,6 0,12"/></svg> Testimonials</span>
    <h2>Success Stories</h2>
    <div class="cases-carousel">
      <div class="cases-carousel__track" data-cases-track>
        <!-- Slide 1 — ArchyClouds -->
        <div class="cases-carousel__slide">
          <div class="case-card-v2">
            <div class="case-card-v2__img-wrap" style="background:#1F1C1B;position:relative;">
              <img src="assets/images/testimonials/archyclouds.png" alt="ArchyClouds" style="width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;inset:0;background:rgba(31,28,27,0.55);"></div>
              <img src="assets/trusted-by/archyclouds.webp" alt="ArchyClouds logo" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40%;max-width:160px;filter:brightness(0) invert(1);opacity:0.9;">
            </div>
            <div class="case-card-v2__body">
              <div class="case-card-v2__header">
                <h3 class="case-card-v2__client">ArchyClouds</h3>
                <span class="case-card-v2__person">Arc Adnan Ismail · Managing Director</span>
              </div>
              <p class="case-card-v2__desc">Brainers Labs built a stunning custom corporate website and integrated a robust, automated HR management portal. Their technical expertise, strategic design, and attention to detail transformed our administrative workflows and online presence.</p>
            </div>
          </div>
        </div>
        <!-- Slide 2 — Atlantic Ways Advisory -->
        <div class="cases-carousel__slide">
          <div class="case-card-v2">
            <div class="case-card-v2__img-wrap" style="background:#1F1C1B;position:relative;">
              <img src="assets/images/testimonials/atlanticways.png" alt="Atlantic Ways Advisory" style="width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;inset:0;background:rgba(31,28,27,0.55);"></div>
              <img src="assets/trusted-by/awas.webp" alt="Atlantic Ways Advisory logo" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40%;max-width:160px;filter:brightness(0) invert(1);opacity:0.9;">
            </div>
            <div class="case-card-v2__body">
              <div class="case-card-v2__header">
                <h3 class="case-card-v2__client">Atlantic Ways Advisory</h3>
                <span class="case-card-v2__person">Alh Kabiru Dangote · CEO</span>
              </div>
              <p class="case-card-v2__desc">Working with Brainers Labs was seamless. They engineered a high-performance corporate platform for our consulting firm, giving us complete commercial agility, clean design, and continuous engineering support.</p>
            </div>
          </div>
        </div>
        <!-- Slide 3 — Basaer Group of Schools -->
        <div class="cases-carousel__slide">
          <div class="case-card-v2">
            <div class="case-card-v2__img-wrap" style="background:#1F1C1B;position:relative;">
              <img src="assets/images/testimonials/basaer.png" alt="Basaer Group of Schools" style="width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;inset:0;background:rgba(31,28,27,0.55);"></div>
              <img src="assets/trusted-by/basaer.webp" alt="Basaer Group of Schools logo" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40%;max-width:160px;filter:brightness(0) invert(1);opacity:0.9;">
            </div>
            <div class="case-card-v2__body">
              <div class="case-card-v2__header">
                <h3 class="case-card-v2__client">Basaer Group of Schools</h3>
                <span class="case-card-v2__person">Hisham Muhammad Sulaiman · CEO</span>
              </div>
              <p class="case-card-v2__desc">The custom school management and e-learning portal designed by Brainers Labs streamlined student enrollment, fee tracking, and online resources. A truly scalable solution and a reliable technology partner.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider dots -->
    <div class="cases-nav">
      <div class="cases-nav__dots" data-cases-dots>
        <button class="cases-nav__dot active" data-cases-dot="0" aria-label="Slide 1"></button>
        <button class="cases-nav__dot" data-cases-dot="1" aria-label="Slide 2"></button>
        <button class="cases-nav__dot" data-cases-dot="2" aria-label="Slide 3"></button>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════
     8. MEDIA & PRESS
     ═══════════════════════════════════════════════ -->
  <section class="media-section" style="padding:80px clamp(20px,5vw,60px);background:#F7F6F0;position:relative;">
    <style>
      .media-section { background: #F7F6F0; }
      .media-header { text-align: center; margin-bottom: 60px; }
      .media-header__eyebrow { display: inline-block; font-family: 'Geist Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--c-azul); margin-bottom: 16px; }
      .media-header h2 { font-size: clamp(32px, 5vw, 56px); font-weight: 500; margin: 0; color: #1F1C1B; line-height: 1.2; }
      .media-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
      .media-card { background: white; border-radius: 12px; overflow: hidden; transition: all 0.3s ease; border: 1px solid rgba(31,28,27,0.08); }
      .media-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(31,28,27,0.12); border-color: rgba(31,28,27,0.15); }
      .media-card__image { width: 100%; height: 200px; background: linear-gradient(135deg, #5B3AF5 0%, #2563EB 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px; }
      .media-card__content { padding: 24px; }
      .media-card__tag { display: inline-block; background: #EFF4FF; color: #2563EB; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px; letter-spacing: -0.33px; }
      .media-card__title { font-size: 16px; font-weight: 600; color: #1F1C1B; margin: 0 0 8px; line-height: 1.4; }
      .media-card__excerpt { font-size: 13px; color: #585858; margin: 0 0 16px; line-height: 1.6; }
      .media-card__source { font-size: 12px; color: var(--c-azul); font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; transition: all 0.3s ease; }
      .media-card__source:hover { gap: 8px; }
      .media-card__source i { font-size: 14px; }
    </style>
    <div class="media-header">
      <span class="media-header__eyebrow"><svg width="10" height="12" viewBox="0 0 10 12" fill="var(--c-azul)" style="margin-right:6px;vertical-align:middle;display:inline-block;"><polygon points="0,0 10,6 0,12"/></svg>Recognition</span>
      <h2>Featured in the News</h2>
    </div>
    <div class="media-grid">
      <div class="media-card">
        <div class="media-card__image" style="background:linear-gradient(135deg,#5B3AF5,#8B5CF6);">
          <i class="ph ph-newspaper" style="font-size:48px;"></i>
        </div>
        <div class="media-card__content">
          <span class="media-card__tag">INNOVATION</span>
          <h3 class="media-card__title">AI-Powered Solutions Transform Nigerian Tech Sector</h3>
          <p class="media-card__excerpt">Brainers Labs' intelligent products are driving digital transformation across healthcare, education, and enterprise sectors.</p>
          <a href="#" class="media-card__source">TechCrunch Africa <i class="ph ph-arrow-right"></i></a>
        </div>
      </div>
      <div class="media-card">
        <div class="media-card__image" style="background:linear-gradient(135deg,#2563EB,#3B82F6);">
          <i class="ph ph-broadcast" style="font-size:48px;"></i>
        </div>
        <div class="media-card__content">
          <span class="media-card__tag" style="background:#ECFDF5;color:#02A270;">FEATURE</span>
          <h3 class="media-card__title">Building Africa's Next Generation of Software</h3>
          <p class="media-card__excerpt">Spotlight on Brainers Labs' mission to scale world-class software engineering across Nigeria and beyond.</p>
          <a href="#" class="media-card__source">VentureBeat <i class="ph ph-arrow-right"></i></a>
        </div>
      </div>
      <div class="media-card">
        <div class="media-card__image" style="background:linear-gradient(135deg,#F59E0B,#FBBF24);">
          <i class="ph ph-award" style="font-size:48px;"></i>
        </div>
        <div class="media-card__content">
          <span class="media-card__tag" style="background:#FEF3C7;color:#D97706;">AWARD</span>
          <h3 class="media-card__title">Recognition as Leading Software Development Partner</h3>
          <p class="media-card__excerpt">Named among Africa's top technology firms for innovation and customer excellence in digital transformation.</p>
          <a href="#" class="media-card__source">Disrupt Africa <i class="ph ph-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════
     9. MIGRATION CTA
     ═══════════════════════════════════════════════ -->
  <section class="migrate-cta">
    <div class="migrate-cta__card">
      <div class="migrate-cta__grid">
        <img src="assets/images/gradient-save.svg" alt="">
      </div>
      <div id="migrate-iso" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;overflow:hidden;"></div>
            <div class="migrate-cta__content">
        <span class="migrate-cta__eyebrow" style="font-family: 'Geist Mono', monospace; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.5px; color: var(--c-azul); margin-bottom: 16px; display: block;">GET STARTED</span>
        <h2><span class="migrate-cta__highlight">Let's Build What's Next</span></h2>
        <p style="margin-bottom: 16px;">Whether you're launching a startup, modernizing enterprise systems, automating operations, or exploring AI-powered solutions, we're ready to help.</p>
        <p style="font-weight: 600; color: #ffffff; font-size: 1.1rem; margin-bottom: 32px; letter-spacing: -0.3px;">Let's transform your ideas into reliable, scalable technology.</p>
        <a href="/contact" class="migrate-cta__btn">Start Your Project</a>
      </div>
    </div>
  </section>



  <!-- Hero word rotator — vertical slide -->

  <!-- Hero scroll indicator + screenshot reveal -->



  <!-- Hero IsoPlayer animation -->

</div>

  <!-- Shared home page JS (all sections) -->
  <script src="assets/js/home.js" defer></script>
  </main>
  <footer>
    <div class="footer-top">
    <div class="footer-grid">
      <div class="footer-col footer-col--brand">
        <a href="/" class="footer-brand">
        <span class="footer-logo-container" style="display: inline-block; height: 32px; margin-bottom: 12px;">
          <img src="assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="footer-logo logo-dark-bg" style="height: 100%;">
          <img src="assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="footer-logo logo-light-bg" style="height: 100%;">
        </span>
      </a>
        <p class="footer-desc">Custom software, AI, and cloud engineering for organizations across all 36 states of Nigeria.</p>
      </div>
      <div class="footer-col">
        <span class="footer-col__title">Products</span>
        <a href="https://breno.brainerslabs.com">Breno AI</a>
        <a href="#">Momenta</a>
        <a href="#">iHel</a>
        <a href="#">iSchool</a>
      </div>
      <div class="footer-col">
        <span class="footer-col__title">Company</span>
        <a href="/company/about-us">About us</a>
        <a href="/company/careers">Careers</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
    </div>
  
    <div class="footer-bottom">
      <span class="footer-copyright">© 2026 Brainers Labs · <a href="/terms" style="color:inherit;text-decoration:underline;text-underline-offset:2px;opacity:0.6;">Terms of Service</a> · <a href="/privacy" style="color:inherit;text-decoration:underline;text-underline-offset:2px;opacity:0.6;">Privacy Policy</a></span>
      <span class="footer-social">
          <a href="https://www.instagram.com/brainerslabs/" aria-label="Instagram" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.facebook.com/brainerslabs" aria-label="Facebook" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://www.linkedin.com/company/brainerslabs/" aria-label="LinkedIn" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://github.com/brainerslabs" aria-label="GitHub" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          <a href="https://x.com/brainerslabs" aria-label="X (Twitter)" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </span>
    </div>
  </footer>

  <script src="assets/js/nav.js"></script>

<!-- Built: 2026-07-23T14:55:52.690Z -->

      <script src="/js/home.js" defer></script>

    ` }} /></>
  );
}