import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Brainers Labs",
  description: "Get in touch with our team. We're here to help with your next project.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Contact Brainers Labs",
    description: "Get in touch with our team. We're here to help with your next project.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-contact.jpg",
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
    <a href="/" class="nav-logo" style="width: auto; height: 32px;">
      <img src="/assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="desktop-logo logo-dark-bg" style="height: 100%;">
      <img src="/assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="desktop-logo logo-light-bg" style="height: 100%;">
      <img src="/assets/images/logos/brainers/mobile-logo-dark-bg.png" alt="Brainers Labs" class="mobile-logo logo-dark-bg" style="height: 100%;">
      <img src="/assets/images/logos/brainers/mobile-logo-light-bg.png" alt="Brainers Labs" class="mobile-logo logo-light-bg" style="height: 100%;">
    </a>
    <div class="nav-links">
      <div class="nav-item"><a href="/company/about-us">About Us</a></div>
      <div class="nav-item"><a href="/company/services">Services</a></div>
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
      <a href="/" class="btn-fill">Contact Us</a>
    </div>
    <button class="hamburger" aria-label="Menu" onclick="var n=this.closest('nav'),m=document.querySelector('.mobile-menu'),b=document.body,opening=!m.classList.contains('open');if(opening){b.dataset.scrollY=window.scrollY;m.classList.add('open');n.classList.add('menu-open');b.classList.add('menu-open');b.style.top='-'+b.dataset.scrollY+'px';}else{m.classList.remove('open');n.classList.remove('menu-open');b.classList.remove('menu-open');b.style.top='';window.scrollTo(0,parseInt(b.dataset.scrollY||'0'));}">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu">
    <a href="/company/about-us">About Us</a>
    <a href="/company/services">Services</a>
    <div class="mobile-dropdown">
      <button class="mobile-dropdown-toggle" onclick="this.parentElement.classList.toggle('open')">Products</button>
      <div class="mobile-dropdown-content">
        <a href="https://breno.brainerslabs.com">Breno AI<span>An intelligence company brain and operating system.</span></a>
        <a href="#">Momenta<span>Event memory infrastructure for institutional knowledge.</span></a>
        <a href="#">iHel<span>Smart hospital management system.</span></a>
        <a href="#">iSchool<span>Smart school management system.</span></a>
      </div>
    </div>
    <div class="menu-ctas">
      <a href="/" class="btn-fill">Contact Us</a>
      <div class="menu-ctas__row">
        <button class="btn-outline" type="button" aria-disabled="true" title="Coming soon">Sign In</button>
      </div>
    </div>
  </div>

<main id="main">
  <style>
    .contact-hero { max-width: 640px; margin: 0 auto; padding: 160px 24px 8px; text-align: center; }
    .contact-hero .eco-section__eyebrow { display: inline-flex; align-items: center; gap: 6px; justify-content: center; font-family: Geist Mono, monospace; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.2px; color: var(--c-azul); margin-bottom: 16px; }
    .contact-hero h1 { font-family: Geist, sans-serif; font-size: clamp(32px, 4vw, 48px); font-weight: 400; letter-spacing: -1.2px; color: #1f1c1b; margin: 0 0 16px; }
    .contact-hero p { font-size: 17px; line-height: 1.6; color: #585858; margin: 0; }

    .contact-wrap { max-width: 1080px; margin: 0 auto; padding: 64px 24px 140px; display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 56px; align-items: start; }
    @media (max-width: 860px) { .contact-wrap { grid-template-columns: 1fr; gap: 40px; padding-top: 40px; } }

    .contact-info { display: flex; flex-direction: column; gap: 28px; }
    .contact-info__item { display: flex; flex-direction: column; gap: 6px; }
    .contact-info__label { font-family: Geist Mono, monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; color: #999; }
    .contact-info__value { font-size: 17px; color: #1f1c1b; }
    .contact-info__value a { color: #1f1c1b; text-decoration: none; border-bottom: 1px solid rgba(31,28,27,0.2); }
    .contact-info__value a:hover { border-color: var(--c-azul); color: var(--c-azul); }
    .contact-info__social { display: flex; gap: 10px; margin-top: 8px; }
    .contact-info__social a { width: 38px; height: 38px; border-radius: 50%; background: rgba(31,28,27,0.05); display: flex; align-items: center; justify-content: center; color: #1f1c1b; transition: background 0.2s ease, color 0.2s ease; }
    .contact-info__social a:hover { background: var(--c-azul); color: #fff; }

    .contact-form-card { background: #fff; border: 1px solid rgba(31,28,27,0.08); border-radius: 20px; padding: 36px; }
    .contact-form-card .vc-form-grid { grid-template-columns: 1fr 1fr; }
    .contact-form-card .vc-field { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
    .contact-form-card .vc-field.full { grid-column: 1 / -1; }
    .contact-form-card .vc-field label { font-size: 14px; line-height: 1; letter-spacing: -0.03em; color: #585858; padding: 0 4px; }
    .contact-form-card .vc-field input, .contact-form-card .vc-field textarea { width: 100%; box-sizing: border-box; background: #fff; border: 1px solid rgba(31,28,27,0.25); border-radius: 10px; padding: 12px 14px; font-family: Geist, sans-serif; font-size: 15px; color: #1f1c1b; outline: none; transition: border-color 0.2s ease; }
    .contact-form-card .vc-field input:focus, .contact-form-card .vc-field textarea:focus { border-color: #1f1c1b; }
    .contact-form-card .vc-field textarea { height: 120px; resize: vertical; line-height: 1.4; }
    .contact-form-card .vc-modal-error.visible { display: block; }
    .contact-form-card .vc-submit-row { display: flex; justify-content: flex-end; margin-top: 8px; }
    .contact-form-card .vc-submit-row .vc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .contact-success { display: none; text-align: center; padding: 40px 8px; }
    .contact-form-card.success .contact-success { display: block; }
    .contact-form-card.success #contact-form { display: none; }
    .contact-success .icon { width: 52px; height: 52px; background: #ecfdf5; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
    .contact-success .title { font-size: 18px; font-weight: 500; color: #1f1c1b; margin: 0 0 8px; }
    .contact-success .desc { font-size: 14px; color: #585858; margin: 0; line-height: 1.6; }
    .contact-note.visible { display: block; }
    .contact-note a { color: var(--c-azul); font-weight: 500; }

    /* Maps & Directions Styling */
    .contact-maps-section {
      background: rgba(31,28,27,0.02);
      border-top: 1px solid rgba(31,28,27,0.06);
      padding: 80px 24px;
    }
    .contact-maps-container {
      max-width: 1080px;
      margin: 0 auto;
    }
    .contact-maps-title {
      font-family: Geist, sans-serif;
      font-size: clamp(24px, 3vw, 32px);
      font-weight: 400;
      letter-spacing: -0.8px;
      color: #1f1c1b;
      margin: 0 0 12px;
      text-align: center;
    }
    .contact-maps-desc {
      font-size: 16px;
      color: #585858;
      text-align: center;
      margin: 0 0 48px;
    }
    .contact-maps-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    @media (max-width: 768px) {
      .contact-maps-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }
    .contact-map-card {
      background: #fff;
      border: 1px solid rgba(31,28,27,0.08);
      border-radius: 20px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.02);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .contact-map-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }
    .contact-map-info h3 {
      font-size: 18px;
      font-weight: 500;
      color: #1f1c1b;
      margin: 0 0 4px;
      letter-spacing: -0.4px;
    }
    .contact-map-info p {
      font-size: 13px;
      color: #585858;
      margin: 0;
      line-height: 1.4;
    }
    .contact-map-directions-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 500;
      color: var(--c-azul);
      text-decoration: none;
      border: 1px solid rgba(37,99,235,0.15);
      background: rgba(37,99,235,0.04);
      padding: 6px 12px;
      border-radius: 8px;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .contact-map-directions-btn:hover {
      background: var(--c-azul);
      color: #fff;
    }
    .contact-map-frame-wrap {
      position: relative;
      width: 100%;
      height: 280px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(31,28,27,0.08);
    }
    .contact-map-frame-wrap iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  </style>

  <section class="contact-hero">
    <div class="eco-section__eyebrow">
      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:10px;height:10px;"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
      <span>GET IN TOUCH</span>
    </div>
    <h1>Let's talk about your project</h1>
    <p>Tell us what you're building and we'll get back to you within 1&ndash;2 business days.</p>
  </section>

  <section class="contact-wrap">
    <div class="contact-info">
      <div class="contact-info__item">
        <span class="contact-info__label">Phone</span>
        <span class="contact-info__value"><a href="tel:+2348066597872">+234 806 659 7872</a></span>
      </div>
      <div class="contact-info__item">
        <span class="contact-info__label">Email</span>
        <span class="contact-info__value"><a href="mailto:info@brainerslabs.com">info@brainerslabs.com</a></span>
      </div>
      <div class="contact-info__item">
        <span class="contact-info__label">Headquarters</span>
        <span class="contact-info__value" style="line-height:1.5; font-size:16px;">
          Plot No. 1465 Cadastral Zone A00,<br>
          Central Business District, Abuja 900103,<br>
          Federal Capital Territory &mdash; Nigeria
        </span>
      </div>
      <div class="contact-info__item">
        <span class="contact-info__label">Plateau Office</span>
        <span class="contact-info__value" style="line-height:1.5; font-size:16px;">
          ArchyClouds Limited<br>
          No 6A, Old CBN Road,<br>
          After House Of Assembly,<br>
          Jos, Plateau State &mdash; Nigeria
        </span>
      </div>
      <div class="contact-info__item">
        <span class="contact-info__label">Follow us</span>
        <span class="contact-info__social">
          <a href="https://www.instagram.com/brainerslabs/" aria-label="Instagram" target="_blank" rel="noopener nofollow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.linkedin.com/company/brainerslabs/" aria-label="LinkedIn" target="_blank" rel="noopener nofollow"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://github.com/brainerslabs" aria-label="GitHub" target="_blank" rel="noopener nofollow"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          <a href="https://x.com/brainerslabs" aria-label="X (Twitter)" target="_blank" rel="noopener nofollow"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </span>
      </div>
    </div>

    <div class="contact-form-card" id="contact-form-card">
      <p class="contact-note" id="contact-note" style="display:none;">Thank you for contacting us. We'll review your message and get back to you shortly.</p>

      <div class="contact-success">
        <div class="icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#02A270" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <p class="title">Message sent!</p>
        <p class="desc">Thanks for reaching out. We've received your message and will reply to your email shortly.</p>
      </div>

      <form id="contact-form" novalidate>
        <input type="hidden" name="_subject" value="New contact form message — Brainers Labs">
        <div class="vc-form-grid">
          <div class="vc-field">
            <label for="contact-name">Full name *</label>
            <input type="text" id="contact-name" name="name" autocomplete="name" required>
          </div>
          <div class="vc-field">
            <label for="contact-email">Email *</label>
            <input type="email" id="contact-email" name="email" autocomplete="email" required>
          </div>
          <div class="vc-field full">
            <label for="contact-company">Company (optional)</label>
            <input type="text" id="contact-company" name="company" autocomplete="organization">
          </div>
          <div class="vc-field full">
            <label for="contact-message">Message *</label>
            <textarea id="contact-message" name="message" placeholder="Tell us about your project or question..." required></textarea>
          </div>
        </div>
        <span class="vc-modal-error" id="contact-error"></span>
        <div class="vc-submit-row">
          <button type="submit" class="vc-btn vc-btn-dark" id="contact-submit">
            <svg viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"/></svg>
            Send message
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- Maps and Directions Section -->
  <section class="contact-maps-section">
    <div class="contact-maps-container">
      <h2 class="contact-maps-title">Our Offices</h2>
      <p class="contact-maps-desc">Visit us in person or get maps directions to our branches.</p>
      
      <div class="contact-maps-grid">
        <!-- Abuja Headquarters Map Card -->
        <div class="contact-map-card">
          <div class="contact-map-header">
            <div class="contact-map-info">
              <h3>Abuja (Headquarters)</h3>
              <p>Plot No. 1465 Cadastral Zone A00, Central Business District, Abuja</p>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Plot+No.+1465+Cadastral+Zone+A00,+Central+Business+District,+Abuja+900103" class="contact-map-directions-btn" target="_blank" rel="noopener">
              <i class="ph ph-navigation-arrow" style="font-size:16px;"></i> Directions
            </a>
          </div>
          <div class="contact-map-frame-wrap">
            <iframe src="https://maps.google.com/maps?q=Plot%20No.%201465%20Cadastral%20Zone%20A00,%20Central%20Business%20District,%20Abuja,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" allowfullscreen></iframe>
          </div>
        </div>

        <!-- Jos Office Map Card -->
        <div class="contact-map-card">
          <div class="contact-map-header">
            <div class="contact-map-info">
              <h3>Jos (Plateau Office)</h3>
              <p>ArchyClouds Limited, No 6A, Old CBN Road, Jos, Plateau State</p>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=ArchyClouds+Limited+No+6A,+Old+CBN+Road,+Jos" class="contact-map-directions-btn" target="_blank" rel="noopener">
              <i class="ph ph-navigation-arrow" style="font-size:16px;"></i> Directions
            </a>
          </div>
          <div class="contact-map-frame-wrap">
            <iframe src="https://maps.google.com/maps?q=No%206A,%20Old%20CBN%20Road,%20Jos,%20Plateau%20State,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<link rel="stylesheet" href="../assets/css/careers.css">
<script src="../assets/js/form-backend.js"></script>
<script>
(function () {
  var card = document.getElementById('contact-form-card');
  var form = document.getElementById('contact-form');
  var note = document.getElementById('contact-note');
  var errorEl = document.getElementById('contact-error');

  note.classList.toggle('visible', !(window.BrainersForm && window.BrainersForm.isConfigured));

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    errorEl.classList.remove('visible');
    var btn = document.getElementById('contact-submit');
    btn.disabled = true;
    try {
      var result = await window.BrainersForm.submitForm(form);
      if (result.ok || result.fallback) {
        card.classList.add('success');
      } else {
        errorEl.textContent = 'Something went wrong. Please try again, or email us directly at info@brainerslabs.com.';
        errorEl.classList.add('visible');
      }
    } catch (err) {
      errorEl.textContent = 'Something went wrong. Please try again, or email us directly at info@brainerslabs.com.';
      errorEl.classList.add('visible');
    } finally {
      btn.disabled = false;
    }
  });
})();
</script>

  <footer>
    <div class="footer-top">
    <div class="footer-grid">
      <div class="footer-col footer-col--brand">
        <a href="/" class="footer-brand">
        <span class="footer-logo-container" style="display: inline-block; height: 32px; margin-bottom: 12px;">
          <img src="/assets/images/logos/brainers/desktop-logo-dark-bg.png" alt="Brainers Labs" class="footer-logo logo-dark-bg" style="height: 100%;">
          <img src="/assets/images/logos/brainers/desktop-logo-light-bg.png" alt="Brainers Labs" class="footer-logo logo-light-bg" style="height: 100%;">
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
        <a href="/">Contact</a>
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

  <script src="/js/nav.js"></script>

      <script src="/js/brainers-form-handler.js" defer></script>

    ` }} /></>
  );
}