import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brainers Labs",
  description: "Meet Brainers Labs — a software engineering team with 6 years building custom software, AI systems, and cloud solutions for organizations across all 36 states of Nigeria.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "About Brainers Labs",
    description: "Meet Brainers Labs — a software engineering team with 6 years building custom software, AI systems, and cloud solutions for organizations across all 36 states of Nigeria.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-about.jpg",
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
    <link rel="stylesheet" href="/assets/css/products/company.css">

<!-- i18n: second half of the scramble title, used by the shared company.js.
     The first half is the visible <span id="co-title-scramble"> below — translate both. -->
<script>
window.__companyI18n = {
  "titleTo": "...and even the impossible."
};
</script>

<style>
.preloader{position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center}
.preloader__bg{position:absolute;inset:0;background:#000;transition:opacity .8s cubic-bezier(.16,1,.3,1)}
.preloader.is-bg-out .preloader__bg{opacity:0}
.preloader.is-done{pointer-events:none;display:none}
.preloader__bar{position:absolute;top:0;left:0;z-index:1;height:3px;width:0;background:linear-gradient(90deg,rgba(255,255,255,.6),#fff);box-shadow:0 0 8px rgba(255,255,255,.3);transition:width .3s cubic-bezier(.4,0,.2,1)}
.preloader__logo{width:76px;position:relative;z-index:2;opacity:0;transform:scale(.92);filter:blur(0)}
.preloader__logo svg{display:block;width:100%;height:auto}
body.has-preloader nav,body.has-preloader .nav-backdrop,body.has-preloader .mobile-menu{opacity:0!important;pointer-events:none!important}
@media(prefers-reduced-motion:reduce){.preloader__logo{opacity:.3;transform:none}}
</style>
<script>document.body.classList.add('has-preloader');</script>
<div class="preloader" id="preloader">
  <div class="preloader__bg"></div>
  <div class="preloader__bar" id="preloader-bar"></div>
  <div class="preloader__logo" id="preloader-logo">
    <img src="/assets/images/logos/brainers/mobile-logo-light-bg.png" alt="Brainers Labs Logo" style="width:100%; height:auto; display:block; border-radius:50%;">
  </div>
</div>
<script>
window.Preloader=(function(){'use strict';
  var MIN=1200,MAX=12000,t0=Date.now();
  var el=document.getElementById('preloader');
  var bar=document.getElementById('preloader-bar');
  var logo=document.getElementById('preloader-logo');
  if(!el)return{hide:function(){},progress:function(){},ready:Promise.resolve()};

  var asked=false,done=false,_r;
  var rp=new Promise(function(r){_r=r});

  // Phase 1: fade logo in
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    logo.style.transition='opacity .5s ease-out, transform .5s ease-out';
    logo.style.opacity='.45';
    logo.style.transform='scale(1)';
  })});

  function progress(pct){if(bar)bar.style.width=Math.min(100,Math.max(0,pct))+'%'}

  function go(){
    if(done)return;done=true;progress(100);
    var wait=Math.max(0,MIN-(Date.now()-t0));
    setTimeout(function(){
      // Phase 2: logo exit
      logo.style.transition='opacity .6s cubic-bezier(.4,0,1,1), transform .6s cubic-bezier(.4,0,1,1), filter .6s cubic-bezier(.4,0,1,1)';
      logo.style.opacity='0';
      logo.style.transform='scale(1.12)';
      logo.style.filter='blur(14px)';
      setTimeout(function(){
        // Phase 3: bg fade
        el.classList.add('is-bg-out');
        document.body.classList.remove('has-preloader');
        setTimeout(function(){el.classList.add('is-done');_r()},800);
      },650);
    },wait);
  }

  function hide(){if(asked)return;asked=true;go()}
  setTimeout(function(){if(!asked)hide()},MAX);
  return{hide:hide,progress:progress,ready:rp};
})();
</script>

<div id="company">

  <!-- ═══════════════════════════════════════════════
     1. HERO — Scroll-driven video
     ═══════════════════════════════════════════════ -->
  <section class="co-hero" id="co-hero">
    <canvas class="co-hero__canvas" id="co-hero-canvas"></canvas>
    <div class="co-hero__content">
      <span class="co-hero__eyebrow">Company</span>
      <h1>Welcome to Brainers Labs.<br>Come on in and get to know us.</h1>
      <p class="co-hero__desc">Behind every line of code there's a team that believes technology should solve business problems, simplify complexity, and empower growth.</p>
      <div class="co-hero__scroll-hint">
        <div class="scroll-mouse">
          <div class="scroll-mouse__wheel"></div>
        </div>
      </div>
      <script>
      (function(){
        var hero = document.getElementById('co-hero');
        function reveal(){ hero.classList.add('co-hero--ready'); }
        if (window.Preloader && window.Preloader.ready) {
          window.Preloader.ready.then(reveal);
        } else {
          requestAnimationFrame(function(){ requestAnimationFrame(reveal); });
        }
      })();
      </script>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════
     2. TEAM — split: words + photos
     ═══════════════════════════════════════════════ -->
  <section class="co-team" id="co-team">
    <div class="co-team__split">

      <div class="co-team__left">
        <div class="co-team__left-hold">
          <div class="co-team__left-screen">
            <span class="co-people-intro__eyebrow">
              <svg viewBox="0 0 10 12" fill="#02A270"><polygon points="0,0 10,6 0,12"/></svg>
              Our Team
            </span>
            <!-- scramble title: this text erases and retypes into __companyI18n.titleTo on scroll -->
            <h2 class="co-people-intro__title" id="co-intro-title"><span class="co-scramble" id="co-title-scramble">The people who make it possible.</span></h2>
            <p class="co-people-intro__desc">Engineers, designers, product experts, support, and operations specialists — every person on this team is an essential gear in the machine that keeps Brainers Labs moving.</p>
          </div>
        </div>
        <div class="co-team__left-hold co-team__left-hold--words">
          <div class="co-team__left-screen">
            <div class="co-team__words" id="co-team-words">
              <span>+6 years of experience,</span>
              <span>commitment</span>
              <span>and passion</span>
              <span>for what we do…</span>
            </div>
          </div>
        </div>
        <div class="co-team__left-screen co-team__left-screen--stat">
          <p class="co-stat__lead">…trusted by organizations across all</p>
          <div class="co-stat__row">
            <span class="co-stat__num">36</span>
            <span class="co-stat__label">states of Nigeria</span>
          </div>
        </div>
      </div>

      <div class="co-team__right">
        <div class="co-team__photos">
          <div class="co-team__photos-col" id="co-photos-col-a">
            <img src="/assets/images/people/ismail-adam.jpg" alt="Ismail Muhammad Adam, Brainers Labs">
            <img src="/assets/images/people/placeholder-02.jpg" alt="">
            <img src="/assets/images/people/placeholder-04.jpg" alt="">
            <img src="/assets/images/people/placeholder-06.jpg" alt="">
            <img src="/assets/images/people/brainers-team-02.jpg" alt="">
            <img src="/assets/images/people/placeholder-03.jpg" alt="">
            <img src="/assets/images/people/placeholder-05.jpg" alt="">
            <img src="/assets/images/people/placeholder-02.jpg" alt="">
          </div>
          <div class="co-team__photos-col" id="co-photos-col-b">
            <img src="/assets/images/people/placeholder-03.jpg" alt="">
            <img src="/assets/images/people/placeholder-05.jpg" alt="">
            <img src="/assets/images/people/brainers-team-02.jpg" alt="">
            <img src="/assets/images/people/placeholder-04.jpg" alt="">
            <img src="/assets/images/people/placeholder-06.jpg" alt="">
            <img src="/assets/images/people/placeholder-02.jpg" alt="">
            <img src="/assets/images/people/placeholder-05.jpg" alt="">
            <img src="/assets/images/people/placeholder-03.jpg" alt="">
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════════
     3. TRAYECTORIA — timeline
     ═══════════════════════════════════════════════ -->
  <section class="co-tray" id="co-tray">
    <div class="co-tray__header">
      <span class="co-tray__eyebrow">
        <svg viewBox="0 0 10 12" fill="#02A270"><polygon points="0,0 10,6 0,12"/></svg>
        History
      </span>
      <h2 class="co-tray__title">Our Journey.</h2>
      <p class="co-tray__desc">What began as a passion for software engineering became a multidisciplinary agency that today builds secure, scalable software for clients throughout Nigeria.</p>
    </div>

    <div class="co-tray__timeline" id="co-tray-timeline">
      <svg class="co-tray__ink" id="co-tray-ink" fill="none" stroke-linecap="round"></svg>
      <div class="co-tray__track">
        <div class="co-tray__track-fill" id="co-tray-fill"></div>
        <div class="co-tray__track-dot" id="co-tray-dot"></div>
      </div>

      <div class="co-tray__event co-tray__event--left">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2020</span>
          <h3 class="co-tray__event-title">First line of code</h3>
          <p class="co-tray__event-desc">Development kicks off: building custom software solutions that solve real business challenges.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--right">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2021</span>
          <h3 class="co-tray__event-title">First Project Delivery</h3>
          <p class="co-tray__event-desc">Our first enterprise client goes live. Successful delivery validates our agile model and marks the start of continuous growth.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--left">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2022</span>
          <h3 class="co-tray__event-title">National Reach</h3>
          <p class="co-tray__event-desc">Brainers Labs expands nationwide, delivering custom software solutions for organizations across all 36 states.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--right">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2023</span>
          <h3 class="co-tray__event-title">Multi-Sector Consolidation</h3>
          <p class="co-tray__event-desc">Our engineering services expand into automotive, retail, technology, logistics, and service sectors.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--left">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2023</span>
          <h3 class="co-tray__event-title">Enterprise Integration</h3>
          <p class="co-tray__event-desc">Large-scale enterprises partner with us to engineer high-volume API integrations, cloud infrastructure, and database layers.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--right">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2024</span>
          <h3 class="co-tray__event-title">Dedicated Product Division</h3>
          <p class="co-tray__event-desc">We establish a dedicated division to build proprietary SaaS products and accelerators for our enterprise clients.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--left">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2025</span>
          <h3 class="co-tray__event-title">Milestone Scale</h3>
          <p class="co-tray__event-desc">Brainers Labs reaches milestone growth, expanding our core engineering team and local developer hubs.</p>
        </div>
      </div>

      <div class="co-tray__event co-tray__event--right">
        <div class="co-tray__event-body">
          <span class="co-tray__year">2026</span>
          <h3 class="co-tray__event-title">Modern Engineering Partner</h3>
          <p class="co-tray__event-desc">Brainers Labs consolidates its custom agile software engineering, legacy modernization, and AI integration systems.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════
     4. EXPANSION — timeline dot grows to fullscreen white
     ═══════════════════════════════════════════════ -->
  <div class="co-expand" id="co-expand">
    <div class="co-expand__sticky">
      <div class="co-expand__circle" id="co-expand-circle">
        <div class="co-balloons co-balloons--front">
          <div class="co-balloon" style="--bs:2" data-color="#E53935">
            <svg class="co-balloon__string" viewBox="0 0 20 180" fill="none" preserveAspectRatio="none">
              <path id="co-balloon-string" stroke="rgba(0,0,0,0.35)" stroke-width="2.5" fill="none"/>
            </svg>
          </div>
        </div>
        <div class="co-reveal" aria-hidden="true">
          <span class="co-reveal__year">2026</span>
          <span class="co-reveal__tag">We scale modern software</span>
        </div>
      </div>
    </div>
  </div>



  <!-- ═══════════════════════════════════════════════
     6. FUTURO
     ═══════════════════════════════════════════════ -->
    <section class="co-objetivo co-objetivo--futuro" id="co-futuro">
    <div class="co-objetivo__inner">
      <span class="co-people-intro__eyebrow" style="font-family: 'Geist Mono', monospace; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.5px; color: #02A270; margin-bottom: 16px; display: block; text-align: center;">ABOUT</span>
      <h2 class="co-objetivo__title" style="margin-bottom: 32px; text-align: center;">Building the Future Through Technology</h2>
      <div class="co-objetivo__desc" style="text-align: left; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; font-size: 1.15rem; line-height: 1.6; color: rgba(31, 28, 27, 0.85);">
        <p style="margin: 0;">We believe software should create opportunities, simplify complexity, and empower organizations to achieve more. As a trusted technology partner, we work alongside businesses, startups, enterprises, and governments to deliver innovative digital solutions that solve today's challenges while preparing for tomorrow's opportunities.</p>
        <p style="margin: 0;">Our multidisciplinary team combines engineering excellence, strategic thinking, and deep industry knowledge to create software that makes a lasting impact. Because technology isn't just about systems — it's about people, progress, and possibilities.</p>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════
     7. LOGO SYMBOL — stroke draw + parallax
     ═══════════════════════════════════════════════ -->
  <div class="co-logo-draw" id="co-logo-draw">
    

    <div class="co-careers">
      <h3 class="co-careers__title">Join our team</h3>
      <p class="co-careers__desc">We're always looking for talented, curious people who want to build something big. If you want to be part of what's coming, send us your résumé.</p>
      <a href="../careers/index.html" class="co-careers__btn">Send Résumé</a>
    </div>
  </div>

</div>

<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
<script src="/assets/js/products/company.js"></script>

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
        <a href="/">About us</a>
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