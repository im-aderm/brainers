import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Brainers Labs",
  description: "Join our team of talented engineers, designers, and strategists.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Careers at Brainers Labs",
    description: "Join our team of talented engineers, designers, and strategists.",
    type: "website",
    url: "https://brainerslabs.com/",
    images: [{
      url: "https://brainerslabs.com/assets/images/og/og-careers.jpg",
      width: 1200,
      height: 630,
    }],
    siteName: "Brainers Labs",
  },
};

export default function Page() {
  return (
    <>
      
    <div dangerouslySetInnerHTML={{ __html: `<style>{\`@import url("/css/careers.css");\`}</style>

    <>
  <a href="index.html#main" class="skip-nav">Skip to content</a>
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
    <link rel="stylesheet" href="/assets/css/careers.css">

<div id="careers-page">

  <!-- Hero -->
  <section id="vc-hero">
    <img class="vc-hero-img" src="/assets/images/careers-hero.jpg" alt="Brainers Labs team collaborating in the office" style="opacity:1;transform:scale(1);">
    <div class="vc-hero-content">
      <p class="vc-hero-eyebrow">Join our team</p>
      <h1 class="vc-hero-title">Build the future of software with us</h1>
    </div>
  </section>

  <!-- Open positions -->
  <section id="vc-main">
    <div class="vc-container">
      <div class="careers-intro">
        <div class="eco-section__eyebrow">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:10px;height:10px;"><polygon points="5,0 10,10 0,10" fill="var(--c-azul)"/></svg>
          <span>OPEN ROLES</span>
        </div>
        <h2 class="careers-intro__title">Come build with us</h2>
        <p class="careers-intro__desc">We're a Nigeria-based software company shipping custom applications, AI systems, and cloud infrastructure for clients across all 36 states. We're growing our team — see the roles below or send us your CV and we'll reach out when there's a fit.</p>
      </div>

      <div class="roles-grid">

        <div class="role-card">
          <span class="role-card__badge">Internship</span>
          <h3 class="role-card__title">Software Engineering Intern</h3>
          <p class="role-card__meta">Remote — Nigeria · Internship</p>
          <p class="role-card__desc">Start your career building real, production software. Work alongside our engineering team on live client projects across web, mobile, and backend systems. Open to students and recent graduates — no CV format required, just send us what you've got.</p>
          <button type="button" class="vc-btn vc-btn-dark role-card__apply" data-role="Software Engineering Intern">Apply <span aria-hidden="true">&rarr;</span></button>
        </div>

        <div class="role-card">
          <span class="role-card__badge">Full-time</span>
          <h3 class="role-card__title">Full-Stack Developer</h3>
          <p class="role-card__meta">Remote — Nigeria · Full-time</p>
          <p class="role-card__desc">Build and ship customer-facing products end-to-end — React/Next.js frontends, Node.js/NestJS APIs, and everything in between. You'll work directly with clients and our product team.</p>
          <button type="button" class="vc-btn vc-btn-dark role-card__apply" data-role="Full-Stack Developer">Apply <span aria-hidden="true">&rarr;</span></button>
        </div>

        <div class="role-card">
          <span class="role-card__badge">Full-time</span>
          <h3 class="role-card__title">AI Engineer</h3>
          <p class="role-card__meta">Remote — Nigeria · Full-time</p>
          <p class="role-card__desc">Design and deploy AI-powered features — LLM integrations, RAG pipelines, and automation workflows — for our own products (Arvix, Momenta) and client engagements.</p>
          <button type="button" class="vc-btn vc-btn-dark role-card__apply" data-role="AI Engineer">Apply <span aria-hidden="true">&rarr;</span></button>
        </div>

        <div class="role-card">
          <span class="role-card__badge">Full-time</span>
          <h3 class="role-card__title">DevOps Engineer</h3>
          <p class="role-card__meta">Remote — Nigeria · Full-time</p>
          <p class="role-card__desc">Own our CI/CD pipelines, containerized deployments, and infrastructure reliability across Docker, Kubernetes, and cloud environments for our products and client systems.</p>
          <button type="button" class="vc-btn vc-btn-dark role-card__apply" data-role="DevOps Engineer">Apply <span aria-hidden="true">&rarr;</span></button>
        </div>

        <div class="role-card">
          <span class="role-card__badge">Full-time</span>
          <h3 class="role-card__title">Cloud Solutions Engineer</h3>
          <p class="role-card__meta">Remote — Nigeria · Full-time</p>
          <p class="role-card__desc">Architect and manage scalable cloud infrastructure on AWS, Azure, and Google Cloud — supporting our growing portfolio of client and in-house products.</p>
          <button type="button" class="vc-btn vc-btn-dark role-card__apply" data-role="Cloud Solutions Engineer">Apply <span aria-hidden="true">&rarr;</span></button>
        </div>

        <div class="role-card">
          <span class="role-card__badge">Full-time</span>
          <h3 class="role-card__title">Mobile App Developer</h3>
          <p class="role-card__meta">Remote — Nigeria · Full-time</p>
          <p class="role-card__desc">Build native and cross-platform mobile experiences with Flutter and React Native — powering products like iHel and iSch.</p>
          <button type="button" class="vc-btn vc-btn-dark role-card__apply" data-role="Mobile App Developer">Apply <span aria-hidden="true">&rarr;</span></button>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA: general application -->
  <section id="vc-cta-section">
    <div id="vc-cta">
      <div id="vc-cta-iso" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;overflow:hidden;"></div>
      <div class="vc-cta-content">
        <div>
          <h2 class="vc-cta-title">Didn't find a role that matches your profile?</h2>
          <p class="vc-cta-desc">Upload your CV and be the first to know when we open a position that matches your profile and experience.</p>
        </div>
        <div class="vc-cta-buttons">
          <button type="button" class="vc-btn vc-btn-dark" id="vc-cta-btn">Upload my CV</button>
          <a href="../about-us/index.html" class="vc-btn vc-btn-outline">About the Company</a>
        </div>
      </div>
    </div>
  </section>

</div>

<style>
  .careers-intro { max-width: 720px; margin: 0 auto 8px; text-align: center; display: flex; flex-direction: column; align-items: center; }
  .careers-intro .eco-section__eyebrow { display: inline-flex; align-items: center; gap: 6px; font-family: Geist Mono, monospace; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.2px; color: var(--c-azul); margin-bottom: 14px; }
  .careers-intro__title { font-family: Geist, sans-serif; font-size: clamp(28px, 3vw, 40px); font-weight: 400; letter-spacing: -1px; color: #1f1c1b; margin: 0 0 14px; }
  .careers-intro__desc { font-size: 16px; line-height: 1.6; color: #585858; margin: 0; }

  .roles-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 48px; }
  @media (max-width: 860px) { .roles-grid { grid-template-columns: 1fr; } }

  .role-card { position: relative; background: #fff; border: 1px solid rgba(31,28,27,0.08); border-radius: 18px; padding: 28px; display: flex; flex-direction: column; gap: 10px; transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1), border-color 0.3s ease; }
  .role-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(31,28,27,0.08); border-color: rgba(37,99,235,0.25); }
  .role-card__badge { position: absolute; top: 24px; right: 24px; font-family: Geist Mono, monospace; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.6px; color: var(--c-azul); background: rgba(37,99,235,0.08); padding: 4px 10px; border-radius: 99px; }
  .role-card__title { font-family: Geist, sans-serif; font-size: 20px; font-weight: 500; letter-spacing: -0.4px; color: #1f1c1b; margin: 0; padding-right: 90px; }
  .role-card__meta { font-size: 13px; color: #888; margin: 0; }
  .role-card__desc { font-size: 14.5px; line-height: 1.6; color: #585858; margin: 4px 0 14px; flex-grow: 1; }
  .role-card__apply { align-self: flex-start; }
  .role-card__apply span { display: inline-block; transition: transform 0.25s ease; }
  .role-card__apply:hover span { transform: translateX(3px); }

  /* Apply modal — reuses #vc-modal-overlay / #vc-modal styling from careers.css */
  .vc-modal-role { font-size: 13px; color: var(--c-azul); font-weight: 500; margin: 4px 0 0; }
  .vc-modal-note { font-size: 13px; line-height: 1.6; color: #585858; background: rgba(37,99,235,0.06); border: 1px solid rgba(37,99,235,0.15); border-radius: 10px; padding: 12px 14px; margin: 20px 0 0; display: none; }
  .vc-modal-note.visible { display: block; }
  .vc-modal-note a { color: var(--c-azul); font-weight: 500; }
</style>

<!-- Application modal -->
<div id="vc-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="apply-modal-title">
  <div id="vc-modal">
    <div class="vc-modal-head">
      <div>
        <h3 class="vc-modal-title" id="apply-modal-title">Apply to Brainers Labs</h3>
        <p class="vc-modal-role" id="apply-modal-role">General application</p>
      </div>
      <button type="button" class="vc-modal-close" id="apply-modal-close" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 256 256" fill="#1F1C1B"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>
      </button>
    </div>

    <p class="vc-modal-note" id="apply-modal-note">Online applications aren't fully wired up yet — after you hit submit, please also email your CV to <a href="mailto:info@brainerslabs.com">info@brainerslabs.com</a> so we're sure to see it.</p>

    <div class="vc-modal-success">
      <div class="icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#02A270" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <p class="title">Application sent!</p>
      <p class="desc">Thank you for your interest in Brainers Labs. We'll review your profile and get back to you soon.</p>
    </div>

    <form class="vc-modal-form" id="apply-form" novalidate>
      <input type="hidden" name="role" id="apply-role-field" value="General application">
      <input type="hidden" name="_subject" id="apply-subject-field" value="New application — General application">
      <div class="vc-form-grid">
        <div class="vc-field">
          <label for="apply-name">Full name *</label>
          <input type="text" id="apply-name" name="name" autocomplete="name" required>
        </div>
        <div class="vc-field">
          <label for="apply-email">Email *</label>
          <input type="email" id="apply-email" name="email" autocomplete="email" required>
        </div>
        <div class="vc-field">
          <label for="apply-phone">Phone / WhatsApp</label>
          <input type="tel" id="apply-phone" name="phone" autocomplete="tel">
        </div>
        <div class="vc-field">
          <label for="apply-linkedin">LinkedIn / Portfolio</label>
          <input type="url" id="apply-linkedin" name="linkedin" autocomplete="url">
        </div>
        <div class="vc-field full">
          <label for="apply-message">Tell us about yourself</label>
          <textarea id="apply-message" name="message" placeholder="Write a message..."></textarea>
        </div>
      </div>

      <div class="vc-dropzone" id="apply-dropzone">
        <input type="file" id="apply-file" name="cv" accept=".pdf,.doc,.docx" aria-label="CV" required>
        <span class="vc-dz-btn">
          <svg viewBox="0 0 256 256" fill="#1F1C1B" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"/></svg>
          Upload your CV
        </span>
        <div>
          <p class="vc-dz-primary">Drag and drop your CV here</p>
          <p class="vc-dz-secondary">PDF, DOC or DOCX — 5 MB max</p>
        </div>
      </div>
      <div class="vc-dz-status" id="apply-dz-status"></div>

      <div class="vc-terms">
        <input type="checkbox" id="apply-terms" required>
        <label for="apply-terms">I accept the <a href="/terms" target="_blank">terms and conditions</a> and the <a href="/privacy" target="_blank">privacy policy</a>.</label>
      </div>

      <span class="vc-modal-error" id="apply-modal-error"></span>

      <div class="vc-submit-row">
        <button type="submit" class="vc-btn vc-btn-dark" id="apply-submit">
          <svg viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"/></svg>
          Submit application
        </button>
      </div>
    </form>

  </div>
</div>

<script src="/assets/js/form-backend.js"></script>
<script>
(function () {
  var overlay = document.getElementById('vc-modal-overlay');
  var modal = document.getElementById('vc-modal');
  var closeBtn = document.getElementById('apply-modal-close');
  var roleLabel = document.getElementById('apply-modal-role');
  var roleField = document.getElementById('apply-role-field');
  var subjectField = document.getElementById('apply-subject-field');
  var form = document.getElementById('apply-form');
  var note = document.getElementById('apply-modal-note');
  var errorEl = document.getElementById('apply-modal-error');
  var dzStatus = document.getElementById('apply-dz-status');
  var fileInput = document.getElementById('apply-file');

  function openModal(role) {
    role = role || 'General application';
    roleLabel.textContent = role;
    roleField.value = role;
    subjectField.value = 'New application — ' + role;
    modal.classList.remove('success');
    form.reset();
    dzStatus.textContent = '';
    errorEl.classList.remove('visible');
    note.classList.toggle('visible', !(window.BrainersForm && window.BrainersForm.isConfigured));
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.role-card__apply').forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn.dataset.role); });
  });
  document.getElementById('vc-cta-btn').addEventListener('click', function () { openModal('General application'); });
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });

  fileInput.addEventListener('change', function () {
    var f = fileInput.files[0];
    if (!f) { dzStatus.textContent = ''; return; }
    if (f.size > 5 * 1024 * 1024) {
      dzStatus.textContent = 'The file cannot exceed 5 MB';
      dzStatus.classList.add('error');
      fileInput.value = '';
      return;
    }
    dzStatus.classList.remove('error');
    dzStatus.textContent = f.name;
  });

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    errorEl.classList.remove('visible');
    var submitBtn = document.getElementById('apply-submit');
    submitBtn.disabled = true;
    try {
      var result = await window.BrainersForm.submitForm(form);
      if (result.ok || result.fallback) {
        modal.classList.add('success');
      } else {
        errorEl.textContent = 'Something went wrong. Please try again, or email us directly at info@brainerslabs.com.';
        errorEl.classList.add('visible');
      }
    } catch (err) {
      errorEl.textContent = 'Something went wrong. Please try again, or email us directly at info@brainerslabs.com.';
      errorEl.classList.add('visible');
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
</script>

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
        <a href="/">Careers</a>
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

      <script src="/js/careers.js" defer></script>

    ` }} /></>
  );
}