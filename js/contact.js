/* Home Plus International - contact form UX (no backend) */

(function () {
  function getPrefillMessage() {
    const params = new URLSearchParams(window.location.search || '');
    return params.get('prefillMessage') || '';
  }

  function sanitize(str) {
    return String(str || '').replace(/\r\n/g, '\n').trim();
  }

  function isValidEmail(email) {
    const v = String(email || '').trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function getLang() {
    return window.HomePlusI18n ? window.HomePlusI18n.getLang() : 'en';
  }

  function t(key) {
    return window.HomePlusI18n ? window.HomePlusI18n.t(key) : key;
  }

  function setupForm(formEl, prefillMessage) {
    const successEl = formEl.querySelector('[data-contact-success]');
    const errorEls = {
      name: formEl.querySelector('[data-error-for="name"]'),
      email: formEl.querySelector('[data-error-for="email"]'),
      message: formEl.querySelector('[data-error-for="message"]'),
    };

    const nameInput = formEl.querySelector('[name="name"]');
    const emailInput = formEl.querySelector('[name="email"]');
    const companyInput = formEl.querySelector('[name="company"]');
    const messageInput = formEl.querySelector('[name="message"]');

    // Prefill message from quote modal (if present)
    if (prefillMessage && messageInput && !messageInput.value) {
      messageInput.value = sanitize(prefillMessage);
    }

    function clearErrors() {
      Object.values(errorEls).forEach((el) => {
        if (el) el.textContent = '';
      });
      if (successEl) successEl.hidden = true;
    }

    function setError(fieldKey, text) {
      const el = errorEls[fieldKey];
      if (el) el.textContent = text;
    }

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      const name = (nameInput ? nameInput.value : '').trim();
      const email = (emailInput ? emailInput.value : '').trim();
      const company = (companyInput ? companyInput.value : '').trim();
      const message = (messageInput ? messageInput.value : '').trim();

      let ok = true;
      if (!name) {
        setError('name', getLang() === 'de' ? 'Bitte Name angeben.' : 'Please enter your name.');
        ok = false;
      }
      if (!email || !isValidEmail(email)) {
        setError('email', getLang() === 'de' ? 'Bitte eine gültige E-Mail angeben.' : 'Please enter a valid email.');
        ok = false;
      }
      if (!message) {
        setError('message', getLang() === 'de' ? 'Bitte Nachricht angeben.' : 'Please enter a message.');
        ok = false;
      }

      if (!ok) return;

      if (successEl) successEl.hidden = false;

      const targetEmail = formEl.getAttribute('data-contact-email') || 'info@homeplus.example';
      const subject = getLang() === 'de' ? 'Anfrage von Home Plus International Website' : 'Request from Home Plus Website';
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Unternehmen: ${company}` : '',
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n');

      const mailto = new URL('mailto:' + targetEmail);
      mailto.searchParams.set('subject', subject);
      mailto.searchParams.set('body', body);

      const mailtoLink = formEl.querySelector('[data-contact-mailto]');
      if (mailtoLink) {
        mailtoLink.href = mailto.toString();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const prefillMessage = sanitize(getPrefillMessage());
    document.querySelectorAll('form[data-contact-form]').forEach((formEl) => {
      setupForm(formEl, prefillMessage);
    });
  });
})();

