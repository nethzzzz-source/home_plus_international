/* Home Plus International - products UI (tabs, search, grid, featured strip) */

(function () {
  const SELECTORS = {
    productsUiRoot: '#productsUi',
    productsTabs: '#productsTabs',
    productsSearch: '#productsSearch',
    productsGrid: '#productsGrid',
    featuredProducts: '#featuredProducts',
  };

  const state = {
    activeCategoryId: 'all',
    searchTerm: '',
    lastLang: null,
  };

  function getLang() {
    return window.HomePlusI18n ? window.HomePlusI18n.getLang() : 'en';
  }

  function findCategory(categoryId) {
    return window.HomePlusProductsData.categories.find((c) => c.id === categoryId) || null;
  }

  function findProductById(productId) {
    return window.HomePlusProductsData.products.find((p) => p.id === productId) || null;
  }

  function t(key) {
    return window.HomePlusI18n ? window.HomePlusI18n.t(key) : key;
  }

  function renderBadge(badgeKey) {
    if (badgeKey === 'bestSeller') {
      const label = t('badge.bestSeller');
      return `<div class="badge badge--hot">${label}</div>`;
    }
    if (badgeKey === 'discountAvailable') {
      const label = t('badge.discountAvailable');
      return `<div class="badge">${label}</div>`;
    }
    return '';
  }

  function getProductLocalized(p) {
    const lang = getLang();
    return {
      ...p,
      _name: p.name[lang],
      _description: p.description[lang],
      _packaging: p.packaging[lang],
    };
  }

  function buildTabs(root) {
    const tabsEl = root.querySelector(SELECTORS.productsTabs);
    if (!tabsEl) return;

    const allLabel = t('products.tabs.all');
    const tabs = [
      { id: 'all', label: allLabel, icon: null },
      ...window.HomePlusProductsData.categories.map((c) => ({
        id: c.id,
        label: c.label[getLang()],
        icon: c.icon,
      })),
    ];

    tabsEl.innerHTML = tabs
      .map(
        (tab) => `
        <button
          class="tab"
          type="button"
          role="tab"
          aria-selected="${tab.id === state.activeCategoryId ? 'true' : 'false'}"
          data-category="${tab.id}"
        >
          ${tab.icon ? `<img src="${tab.icon}" alt="" aria-hidden="true" />` : ''}
          <span>${tab.label}</span>
        </button>
      `
      )
      .join('');

    tabsEl.querySelectorAll('[data-category]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeCategoryId = btn.getAttribute('data-category');
        renderProductsGrid();
        buildTabs(root);
      });
    });
  }

  function renderProductsGrid() {
    const root = document.querySelector(SELECTORS.productsUiRoot);
    if (!root) return;

    const grid = root.querySelector(SELECTORS.productsGrid);
    if (!grid) return;

    const lang = getLang();
    const term = (state.searchTerm || '').trim().toLowerCase();

    let items = window.HomePlusProductsData.products.slice();
    if (state.activeCategoryId !== 'all') {
      items = items.filter((p) => p.categoryId === state.activeCategoryId);
    }

    if (term) {
      items = items.filter((p) => {
        const name = (p.name[lang] || '').toLowerCase();
        const desc = (p.description[lang] || '').toLowerCase();
        return name.includes(term) || desc.includes(term);
      });
    }

    if (items.length === 0) {
      grid.innerHTML = `<div class="panel" style="grid-column: 1 / -1"><strong>${t('products.noResults')}</strong></div>`;
      return;
    }

    grid.innerHTML = items
      .map((p) => {
        const lp = getProductLocalized(p);
        const badges = (lp.badges || []).map((b) => renderBadge(b)).join('');
        const category = findCategory(lp.categoryId);

        return `
          <article class="product-card" data-product-card data-product-id="${lp.id}">
            <div class="product-media">
              <img src="${lp.image}" alt="${lp._name}" loading="lazy"/>
            </div>

            <div class="product-top">
              <div class="product-title">
                <h3>${lp._name}</h3>
                <p>${lp._description}</p>
              </div>
              <div class="badge-row" aria-label="Badges">
                ${badges || ''}
              </div>
            </div>

            <div class="product-meta">
              <span>${lp._packaging}</span>
              <span style="opacity:.65">${category ? category.label[lang] : ''}</span>
            </div>

            <div class="product-actions">
              <button
                class="btn btn-ghost"
                type="button"
                data-quote-open
                data-product-id="${lp.id}"
              >
                ${t('products.requestQuote')}
              </button>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function initProductsPage() {
    const root = document.querySelector(SELECTORS.productsUiRoot);
    if (!root) return;

    state.activeCategoryId = 'all';
    state.searchTerm = '';

    const searchEl = root.querySelector(SELECTORS.productsSearch);
    if (searchEl) {
      const placeholder = searchEl.getAttribute('data-i18n') || 'products.search.placeholder';
      // i18n.js will already apply placeholder via data-i18n + data-i18n-attr
      searchEl.addEventListener('input', () => {
        state.searchTerm = searchEl.value || '';
        renderProductsGrid();
      });
    }

    buildTabs(root);
    renderProductsGrid();

    // Re-render content on language change (tabs labels + product cards)
    document.addEventListener('i18n:langchange', () => {
      buildTabs(root);
      renderProductsGrid();
    });
  }

  function initFeatured() {
    const featuredEl = document.querySelector(SELECTORS.featuredProducts);
    if (!featuredEl) return;

    function renderFeaturedCards() {
      const ids = window.HomePlusProductsData.featuredProductIds || [];
      const lang = getLang();

      featuredEl.innerHTML = ids
        .map((id) => {
          const p = findProductById(id);
          if (!p) return '';

          const lp = getProductLocalized(p);
          const badges = (lp.badges || []).map((b) => {
            // For strip: keep it lightweight
            if (b === 'bestSeller') return `<div class="badge badge--hot" style="padding:6px 10px">${t('badge.bestSeller')}</div>`;
            if (b === 'discountAvailable')
              return `<div class="badge" style="padding:6px 10px">${t('badge.discountAvailable')}</div>`;
            return '';
          });

          return `
            <a class="mini-product" href="products.html" aria-label="${lp._name}">
              <div class="product-media" style="height:104px;margin:-2px;border-radius:18px;background:rgba(255,255,255,.55);border:1px solid rgba(15,56,121,.10)">
                <img src="${lp.image}" alt="${lp._name}" loading="lazy"/>
              </div>
              <div style="margin-top:10px;display:flex;justify-content:space-between;gap:8px;align-items:flex-start">
                <strong>${lp._name}</strong>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
                ${badges.join('')}
              </div>
            </a>
          `;
        })
        .join('');
    }

    renderFeaturedCards();

    document.addEventListener('i18n:langchange', () => {
      renderFeaturedCards();
    });
  }

  function init() {
    if (document.querySelector(SELECTORS.productsUiRoot)) {
      initProductsPage();
    }
    if (document.querySelector(SELECTORS.featuredProducts)) {
      initFeatured();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();

