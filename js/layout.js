/* Home Plus International - shared header/footer injection */

(function () {
  function buildHeader() {
    return `
      <a class="skip-link" href="#mainContent">Skip to content</a>
      <div class="container">
        <div class="header-inner">
          <a class="brand" href="index.html" aria-label="Home Plus International">
            <div class="brand-logo" aria-hidden="true"></div>
            <div class="brand-name">
              <strong data-i18n="brand.name">Home Plus International</strong>
              <span data-i18n="brand.tagline">Reliable drinks distribution</span>
            </div>
          </a>

          <nav class="nav" aria-label="Primary navigation">
            <a href="index.html"> <span data-i18n="nav.home">Home</span> </a>
            <a href="about.html"> <span data-i18n="nav.about">About</span> </a>
            <a href="products.html"> <span data-i18n="nav.products">Products</span> </a>
            <a href="index.html#testimonials"> <span data-i18n="nav.testimonials">Testimonials</span> </a>
            <a href="contact.html"> <span data-i18n="nav.contact">Contact</span> </a>
          </nav>

          <div class="header-cta">
            <div class="lang-toggle" role="group" aria-label="Language toggle">
              <button type="button" class="lang-btn" data-lang="en" aria-pressed="true">EN</button>
              <button type="button" class="lang-btn" data-lang="de" aria-pressed="false">DE</button>
            </div>

            <a class="btn btn-primary" href="contact.html" data-i18n="cta.quote">Get a Quote</a>
          </div>
        </div>
      </div>
    `;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3 data-i18n="footer.about.heading">About Home Plus</h3>
            <div class="footer-muted" data-i18n="footer.about.copy">
              Home Plus International delivers reliable beverages with competitive pricing, secure shipping, and long-term B2B partnerships.
            </div>
            <div class="copyright">© ${year} <span data-i18n="brand.name">Home Plus International</span>. <span data-i18n="footer.rights">All rights reserved.</span></div>
          </div>

          <div class="footer-links">
            <h3 data-i18n="footer.quicklinks.heading">Quick Links</h3>
            <a href="index.html" data-i18n="nav.home">Home</a>
            <a href="about.html" data-i18n="nav.about">About</a>
            <a href="products.html" data-i18n="nav.products">Products</a>
            <a href="index.html#testimonials" data-i18n="nav.testimonials">Testimonials</a>
            <a href="contact.html" data-i18n="nav.contact">Contact</a>
          </div>

          <div>
            <h3 data-i18n="footer.contact.heading">Contact</h3>
            <div class="footer-muted" data-i18n="footer.contact.copy" data-i18n-mode="html">
              Email: info@homeplus.example<br/>
              Phone: +49 000 000 000<br/>
              Location: Frankfurt (placeholder)
            </div>

            <div style="height: 12px;"></div>
            <a class="btn btn-ghost" href="assets/catalog-placeholder.pdf" download data-i18n="footer.catalog">Download Product Catalog</a>
          </div>
        </div>
      </div>
    `;
  }

  function inject(containerId, html) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', () => {
    inject('siteHeader', `
      <header class="site-header" role="banner">
        ${buildHeader()}
      </header>
    `);

    inject('siteFooter', `
      <footer class="site-footer" role="contentinfo">
        ${buildFooter()}
      </footer>
    `);

    document.dispatchEvent(new CustomEvent('layout:ready'));
  });
})();

