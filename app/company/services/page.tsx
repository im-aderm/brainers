import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Brainers Labs",
  description: "Explore our full range of software engineering, cloud, and AI services.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Services — Brainers Labs",
    description: "Explore our full range of software engineering, cloud, and AI services.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-services.jpg",
      width: 1200,
      height: 630,
    }],
    siteName: "Brainers Labs",
  },
};

export default function Page() {
  return (
    <>
  
    <div dangerouslySetInnerHTML={{ __html: `<a href="index.html#main" class="skip-nav">Skip to content</a>
  <div class="nav-backdrop"></div>
  <nav>
    <a href="../../index.html" class="nav-logo" style="width: auto; height: 32px;">
      <!-- Desktop Logos -->
      <img src="/assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="desktop-logo logo-dark-bg" style="height: 100%;">
      <img src="/assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="desktop-logo logo-light-bg" style="height: 100%;">
      <!-- Mobile Logos -->
      <img src="/assets/images/logos/brainers/mobile-logo-dark-bg.png" alt="Brainers Labs" class="mobile-logo logo-dark-bg" style="height: 100%;">
      <img src="/assets/images/logos/brainers/mobile-logo-light-bg.png" alt="Brainers Labs" class="mobile-logo logo-light-bg" style="height: 100%;">
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
          <a href="https://arvix.brainerslabs.com" class="mega-module">
            <div class="mega-module__content">
              <strong>Arvix</strong>
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
              <strong>iSch</strong>
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
        <a href="https://arvix.brainerslabs.com">Arvix<span>An intelligence company brain and operating system.</span></a>
        <a href="#">Momenta<span>Event memory infrastructure for institutional knowledge.</span></a>
        <a href="#">iHel<span>Smart hospital management system.</span></a>
        <a href="#">iSch<span>Smart school management system.</span></a>
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
    <link rel="stylesheet" href="/assets/css/home.css">

<!-- i18n strings for home.js — same data source as the home page copy of this section -->
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

  <!-- home.js unconditionally targets #hero-iso (home page hero animation); this page has no
       hero, so provide a hidden placeholder to avoid an uncaught IsoPlayer exception -->
  <div id="hero-iso" style="position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;" aria-hidden="true"></div>

  <!-- ═══════════════════════════════════════════════
     PAGE INTRO
     ═══════════════════════════════════════════════ -->
  <section class="eco-section" style="padding-top:160px;">
    <div class="eco-section__header">
      <div class="eco-section__eyebrow">
        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
        <span>SERVICES</span>
      </div>
      <h2>Design, Build, Scale.</h2>
    </div>
    <p style="max-width:640px;margin:16px auto 0;text-align:center;font-size:18px;color:rgba(31,28,27,0.75);line-height:1.6;">From custom applications and strategic consulting to intelligent AI automation and beautiful UI/UX design — this is how Brainers Labs turns business problems into working software.</p>
  </section>

  <!-- Lenis — smooth scroll for discrete mouse wheels -->
  <script src="/assets/js/lenis.min.js"></script>
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
     SERVICES — Stacked Cards (copied from home page why-cards section)
     ═══════════════════════════════════════════════ -->
  <section class="why-cards">
    <h2 style="max-width:860px;margin-left:auto;margin-right:auto;text-align:center">Technology services to scale.</h2>
    <div class="why-cards__list">
      <div class="why-cards__sticky">
      <!-- Card 1 — Custom Software Development -->
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
                <!-- Right petal -->
                <path data-petal="1" d="M308.603 172.04C316.684 130.074 289.215 89.5032 247.25 81.422C205.285 73.3407 164.714 100.809 156.632 142.775C148.551 184.74 176.02 225.311 217.985 233.392C259.951 241.473 300.521 214.005 308.603 172.04Z" fill="url(#fl-g0)" style="cursor:pointer;"/>
                <path data-petal="1" d="M308.603 172.04C316.684 130.074 289.215 89.5032 247.25 81.422C205.285 73.3407 164.714 100.809 156.632 142.775C148.551 184.74 176.02 225.311 217.985 233.392C259.951 241.473 300.521 214.005 308.603 172.04Z" fill="url(#fl-g1)" style="cursor:pointer;"/>
                <!-- Bottom petal -->
                <path data-petal="0" d="M156.5 154C199.308 154 234 188.703 234 231.5C234 274.297 199.297 309 156.5 309C113.703 309 79 274.297 79 231.5C79 188.692 113.703 154 156.5 154Z" fill="url(#fl-g2)" style="cursor:pointer;"/>
                <!-- Left petal -->
                <path data-petal="3" d="M0 157.5C0 114.692 34.7026 80 77.5 80C120.297 80 155 114.703 155 157.5C155 200.297 120.297 235 77.5 235C34.7026 235.011 0 200.308 0 157.5Z" fill="url(#fl-g3)" style="cursor:pointer;"/>
                <path data-petal="3" d="M0 157.5C0 114.692 34.7026 80 77.5 80C120.297 80 155 114.703 155 157.5C155 200.297 120.297 235 77.5 235C34.7026 235.011 0 200.308 0 157.5Z" fill="url(#fl-g4)" style="cursor:pointer;"/>
                <!-- Top petal -->
                <path data-petal="2" d="M154.5 154C111.692 154 77 119.524 77 77.0053C77 34.4763 111.703 0 154.5 0C197.308 0 232 34.4764 232 76.9947C232 119.524 197.297 153.989 154.5 153.989V154Z" fill="url(#fl-g5)" style="cursor:pointer;"/>
                <path data-petal="2" d="M154.5 154C111.692 154 77 119.524 77 77.0053C77 34.4763 111.703 0 154.5 0C197.308 0 232 34.4764 232 76.9947C232 119.524 197.297 153.989 154.5 153.989V154Z" fill="url(#fl-g6)" style="cursor:pointer;"/>
              </g>
              <!-- Center logo (does not rotate) -->
              <g class="flower-center">
                <circle cx="155" cy="151" r="48" fill="black"/>
                <image href="/assets/images/logos/brainers/mobile-logo-light-bg.png" x="123" y="119" width="64" height="64"/>
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
      <!-- Card 2 — Intelligence System / Ask AI -->
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
                <span class="ask-field__text">Ask Arvix...</span>
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
      <!-- Card 3 — Capabilities -->
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
            <h4 class="price-chart__title">Click on the metrics to compare scale:</h4>
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
                  <div class="price-chart__bar" style="--bar-w:75%; --bar-color:linear-gradient(90deg,#CAF0A0,#39B54A);">
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

  <!-- ═══════════════════════════════════════════════
     CTA
     ═══════════════════════════════════════════════ -->
  <section style="text-align:center;padding:96px 20px;">
    <h2 style="max-width:700px;margin:0 auto 20px;">Have a project in mind?</h2>
    <p style="max-width:560px;margin:0 auto 32px;font-size:18px;color:rgba(31,28,27,0.75);line-height:1.6;">Tell us what you're building and we'll help you scope it — from first sketch to production.</p>
    <span class="btn-glow"><a href="/contact" class="btn-primary btn-primary--dark">Start your project</a></span>
  </section>

</div>

<script src="/assets/js/home.js"></script>

  </main>
  <footer>
    <div class="footer-top">
    <div class="footer-grid">
      <div class="footer-col footer-col--brand">
        <a href="../../index.html" class="footer-brand">
        <span class="footer-logo-container" style="display: inline-block; height: 32px; margin-bottom: 12px;">
          <img src="/assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="footer-logo logo-dark-bg" style="height: 100%;">
          <img src="/assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="footer-logo logo-light-bg" style="height: 100%;">
        </span>
      </a>
        <p class="footer-desc">Custom software, AI, and cloud engineering for organizations across all 36 states of Nigeria.</p>
      </div>
      <div class="footer-col">
        <span class="footer-col__title">Products</span>
        <a href="#">Arvix</a>
        <a href="#">Momenta</a>
        <a href="#">iHel</a>
        <a href="#">iSch</a>
      </div>
      <div class="footer-col">
        <span class="footer-col__title">Company</span>
        <a href="../about-us/index.html">About us</a>
        <a href="../careers/index.html">Careers</a>
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

  <script src="/assets/js/nav.js"></script>

<!-- Built: 2026-07-23T14:55:52.690Z -->

    ` }} /></>
  );
}