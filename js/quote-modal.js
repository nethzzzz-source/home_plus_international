/* Home Plus International - Request Quote modal */

(function () {
  const OVERLAY_ID = 'quoteModalOverlay';

  function getLang() {
    return window.HomePlusI18n ? window.HomePlusI18n.getLang() : 'en';
  }

  function t(key) {
    return window.HomePlusI18n ? window.HomePlusI18n.t(key) : key;
  }

  function findProduct(productId) {
    if (!window.HomePlusProductsData || !Array.isArray(window.HomePlusProductsData.products)) return null;
    const pid = typeof productId === 'undefined' || productId === null ? '' : String(productId);
    return window.HomePlusProductsData.products.find((p) => String(p.id) === pid) || null;
  }

  function getLocalizedProductText(product) {
    const lang = getLang();
    return {
      name: product.name[lang],
      packaging: product.packaging[lang],
      description: product.description[lang],
      categoryId: product.categoryId,
    };
  }

  function setModalOpen(overlayEl, open) {
    overlayEl.hidden = !open;
    if (open) overlayEl.classList.add('is-open');
    else overlayEl.classList.remove('is-open');
  }

  function initQuoteModal() {
    const overlayEl = document.getElementById(OVERLAY_ID);
    if (!overlayEl) return;

    const closeBtn = overlayEl.querySelector('[data-quote-close]');
    const submitBtn = overlayEl.querySelector('[data-quote-submit]');
    const qtyInput = overlayEl.querySelector('#quoteQtyInput');
    const productNameEl = overlayEl.querySelector('#quoteProductName');
    const productMetaEl = overlayEl.querySelector('#quoteProductMeta');
    const plusBtn = overlayEl.querySelector('[data-qty-plus]');
    const minusBtn = overlayEl.querySelector('[data-qty-minus]');

    let selectedProductId = null;

    function close() {
      setModalOpen(overlayEl, false);
      selectedProductId = null;
      console.debug && console.debug('quote-modal: close');
    }

    function openWithProduct(productId) {
      selectedProductId = productId;
      const product = findProduct(productId);
      if (!product) return;

      const lp = getLocalizedProductText(product);
      if (productNameEl) productNameEl.textContent = lp.name;
      if (productMetaEl) productMetaEl.textContent = `${lp.packaging}`;

      if (qtyInput) qtyInput.value = '50';

      setModalOpen(overlayEl, true);
      if (closeBtn) closeBtn.focus();
      console.debug && console.debug('quote-modal: open', productId);
    }

    document.addEventListener('i18n:langchange', () => {
      if (!selectedProductId || overlayEl.hidden) return;
      const product = findProduct(selectedProductId);
      if (!product) return;
      const lp = getLocalizedProductText(product);
      if (productNameEl) productNameEl.textContent = lp.name;
      if (productMetaEl) productMetaEl.textContent = `${lp.packaging}`;
    });

    // Delegated click handling so open/close/controls work reliably
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      // Open modal buttons: any element with data-quote-open
      const openBtn = target.closest && target.closest('[data-quote-open]');
      if (openBtn) {
        const productId = openBtn.getAttribute('data-product-id');
        if (productId) {
          e.preventDefault();
          openWithProduct(productId);
        }
        return;
      }

      // Close modal
      const closeBtnTarget = target.closest && target.closest('[data-quote-close]');
      if (closeBtnTarget) {
        e.preventDefault();
        close();
        return;
      }

      // Quantity + / -
      const plus = target.closest && target.closest('[data-qty-plus]');
      if (plus) {
        e.preventDefault();
        if (qtyInput) {
          let v = parseInt(qtyInput.value, 10) || 0;
          v = Math.max(1, v + 1);
          qtyInput.value = String(v);
        }
        return;
      }

      const minus = target.closest && target.closest('[data-qty-minus]');
      if (minus) {
        e.preventDefault();
        if (qtyInput) {
          let v = parseInt(qtyInput.value, 10) || 0;
          v = Math.max(1, v - 1);
          qtyInput.value = String(v);
        }
        return;
      }

      // Submit -> redirect to contact form with params
      const submitTarget = target.closest && target.closest('[data-quote-submit]');
      if (submitTarget) {
        e.preventDefault();
        const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 0) : 0;
        const pid = selectedProductId || '';
        const params = new URLSearchParams();
        if (pid) params.set('productId', pid);
        if (qty) params.set('qty', String(qty));
        // you can change contact.html to the actual contact path if different
        const url = `contact.html?${params.toString()}`;
        console.debug && console.debug('quote-modal: submit ->', url);
        // close modal then navigate
        close();
        window.location.href = url;
        return;
      }
    });

    // Keep existing direct listeners for accessibility / redundancy
    if (closeBtn) closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      close();
    });

    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (qtyInput) {
          let v = parseInt(qtyInput.value, 10) || 0;
          qtyInput.value = String(Math.max(1, v + 1));
        }
      });
    }

    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (qtyInput) {
          let v = parseInt(qtyInput.value, 10) || 0;
          qtyInput.value = String(Math.max(1, v - 1));
        }
      });
    }

    // Click outside modal content closes it
    overlayEl.addEventListener('click', (e) => {
      if (e.target === overlayEl) close();
    });

    // Escape closes modal
    document.addEventListener('keydown', (e) => {
      if (overlayEl.hidden) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    });

    // expose simple global API so HTML or other scripts can call it directly
    window.HomePlusQuoteModal = {
      open: openWithProduct,
      close: close
    };
  }

  document.addEventListener('DOMContentLoaded', initQuoteModal);
})();