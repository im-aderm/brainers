import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Brainers Labs",
  description: "Terms and conditions of our services.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Terms of Service — Brainers Labs",
    description: "Terms and conditions of our services.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-terms.jpg",
      width: 1200,
      height: 630,
    }],
    siteName: "Brainers Labs",
  },
};

export default function Page() {
  return (
    <>
  
    <div dangerouslySetInnerHTML={{ __html: `<a href="#main" class="skip-nav">Skip to content</a>
  <div class="nav-backdrop"></div>
  <nav>
    <a href="../index.html" class="nav-logo" style="width: auto; height: 32px;">
      <img src="../assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="desktop-logo logo-dark-bg" style="height: 100%;">
      <img src="../assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="desktop-logo logo-light-bg" style="height: 100%;">
      <img src="../assets/images/logos/brainers/mobile-logo-dark-bg.png" alt="Brainers Labs" class="mobile-logo logo-dark-bg" style="height: 100%;">
      <img src="../assets/images/logos/brainers/mobile-logo-light-bg.png" alt="Brainers Labs" class="mobile-logo logo-light-bg" style="height: 100%;">
    </a>
    <div class="nav-links">
      <div class="nav-item"><a href="../company/about-us/index.html">About Us</a></div>
      <div class="nav-item"><a href="../company/services/index.html">Services</a></div>
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
      <a href="../contact/index.html" class="btn-fill">Contact Us</a>
    </div>
    <button class="hamburger" aria-label="Menu" onclick="var n=this.closest('nav'),m=document.querySelector('.mobile-menu'),b=document.body,opening=!m.classList.contains('open');if(opening){b.dataset.scrollY=window.scrollY;m.classList.add('open');n.classList.add('menu-open');b.classList.add('menu-open');b.style.top='-'+b.dataset.scrollY+'px';}else{m.classList.remove('open');n.classList.remove('menu-open');b.classList.remove('menu-open');b.style.top='';window.scrollTo(0,parseInt(b.dataset.scrollY||'0'));}">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu">
    <a href="../company/about-us/index.html">About Us</a>
    <a href="../company/services/index.html">Services</a>
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
      <a href="../contact/index.html" class="btn-fill">Contact Us</a>
      <div class="menu-ctas__row">
        <button class="btn-outline" type="button" aria-disabled="true" title="Coming soon">Sign In</button>
      </div>
    </div>
  </div>

<main id="main">
  <style>
    .legal-article { max-width: 760px; margin: 0 auto; padding: 160px 24px 120px; }
    .legal-article .eco-section__eyebrow { display: inline-flex; align-items: center; gap: 6px; font-family: Geist Mono, monospace; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.2px; color: var(--c-azul); margin-bottom: 16px; }
    .legal-article h1 { font-family: Geist, sans-serif; font-size: clamp(30px, 3.6vw, 44px); font-weight: 400; letter-spacing: -1px; color: #1f1c1b; margin: 0 0 12px; }
    .legal-article .legal-updated { font-size: 14px; color: #999; margin: 0 0 48px; }
    .legal-article h2 { font-family: Geist, sans-serif; font-size: 22px; font-weight: 500; letter-spacing: -0.4px; color: #1f1c1b; margin: 40px 0 14px; }
    .legal-article p { font-size: 15.5px; line-height: 1.75; color: #444; margin: 0 0 16px; }
    .legal-article ul { margin: 0 0 16px; padding-left: 22px; }
    .legal-article li { font-size: 15.5px; line-height: 1.75; color: #444; margin-bottom: 8px; }
    .legal-article a { color: var(--c-azul); text-decoration: underline; text-underline-offset: 2px; }
  </style>

  <article class="legal-article">
    <div class="eco-section__eyebrow">
      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:10px;height:10px;"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
      <span>LEGAL</span>
    </div>
    <h1>Terms of Service</h1>
    <p class="legal-updated">Last updated: July 30, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using brainerslabs.com (the "Site") or engaging Brainers Labs for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.</p>

    <h2>2. About Brainers Labs</h2>
    <p>Brainers Labs is a Nigeria-based software company providing custom software development, AI integration, cloud engineering, and related technology consulting services, serving clients across all 36 states of Nigeria.</p>

    <h2>3. Use of Our Website</h2>
    <p>You agree to use this Site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this Site by any third party. You may not attempt to gain unauthorized access to any part of the Site or its related systems.</p>

    <h2>4. Intellectual Property</h2>
    <p>All content on this Site — including text, graphics, logos, product names (Arvix, Momenta, iHel, iSch), and software — is the property of Brainers Labs or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

    <h2>5. Product &amp; Service Descriptions</h2>
    <p>We aim to describe our products and services accurately. Some products described on this Site may be under active development and subject to change. Engaging Brainers Labs for a specific project is governed by a separate signed agreement or statement of work.</p>

    <h2>6. Job Applications</h2>
    <p>If you submit an application through our Careers page, you consent to us processing the information and CV/resume you provide for recruitment purposes, in line with our <a href="../privacy/index.html">Privacy Policy</a>.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, Brainers Labs shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Site. The Site is provided "as is" without warranties of any kind.</p>

    <h2>8. Governing Law</h2>
    <p>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>

    <h2>9. Changes to These Terms</h2>
    <p>We may revise these Terms from time to time. The updated version will be posted on this page with a revised "Last updated" date. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>

    <h2>10. Contact Us</h2>
    <p>Questions about these Terms can be sent to <a href="mailto:info@brainerslabs.com">info@brainerslabs.com</a>.</p>

  </article>
</main>

  <footer>
    <div class="footer-top">
    <div class="footer-grid">
      <div class="footer-col footer-col--brand">
        <a href="../index.html" class="footer-brand">
        <span class="footer-logo-container" style="display: inline-block; height: 32px; margin-bottom: 12px;">
          <img src="../assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="footer-logo logo-dark-bg" style="height: 100%;">
          <img src="../assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="footer-logo logo-light-bg" style="height: 100%;">
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
        <a href="../company/about-us/index.html">About us</a>
        <a href="../company/careers/index.html">Careers</a>
        <a href="../contact/index.html">Contact</a>
      </div>
    </div>
    </div>

    <div class="footer-bottom">
      <span class="footer-copyright">© 2026 Brainers Labs · <a href="../terms/index.html" style="color:inherit;text-decoration:underline;text-underline-offset:2px;opacity:0.6;">Terms of Service</a> · <a href="../privacy/index.html" style="color:inherit;text-decoration:underline;text-underline-offset:2px;opacity:0.6;">Privacy Policy</a></span>
      <span class="footer-social">
          <a href="https://www.instagram.com/brainerslabs/" aria-label="Instagram" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.facebook.com/brainerslabs" aria-label="Facebook" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://www.linkedin.com/company/brainerslabs/" aria-label="LinkedIn" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://github.com/brainerslabs" aria-label="GitHub" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          <a href="https://x.com/brainerslabs" aria-label="X (Twitter)" target="_blank" rel="noopener nofollow"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </span>
    </div>
  </footer>

  <script src="../assets/js/nav.js"></script>

    ` }} /></>
  );
}