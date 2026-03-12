(() => {
    const LANG_STORAGE_KEY = 'indigo_lang';
    const SUPPORTED = new Set(['en', 'id']);

    const normalizeLang = (lang) => (SUPPORTED.has(lang) ? lang : 'en');

    const getInitialLang = () => {
        const rawStored = localStorage.getItem(LANG_STORAGE_KEY);
        if (SUPPORTED.has(rawStored)) return rawStored;

        const nav = (navigator.language || 'en').toLowerCase();
        if (nav.startsWith('id')) return 'id';
        return 'en';
    };

    const setText = (el, next) => {
        if (typeof next !== 'string') return;
        if (!next.length) return;
        el.textContent = next;
    };

    const setHtml = (el, next) => {
        if (typeof next !== 'string') return;
        if (!next.length) return;
        el.innerHTML = next;
    };

    const applyLangToDom = (lang) => {
        document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : 'en');
        document.documentElement.dataset.lang = lang;

        const body = document.body;
        if (body) {
            const title = lang === 'id' ? body.dataset.titleId : body.dataset.titleEn;
            if (title) document.title = title;
        }

        document.querySelectorAll('[data-i18n-en], [data-i18n-id], [data-i18n-html-en], [data-i18n-html-id]').forEach((el) => {
            const htmlNext = lang === 'id' ? el.dataset.i18nHtmlId : el.dataset.i18nHtmlEn;
            if (typeof htmlNext === 'string' && htmlNext.length) {
                setHtml(el, htmlNext);
                return;
            }

            const next = lang === 'id' ? el.dataset.i18nId : el.dataset.i18nEn;
            setText(el, next);
        });

        document.querySelectorAll('[data-i18n-aria-label-en], [data-i18n-aria-label-id]').forEach((el) => {
            const next = lang === 'id' ? el.dataset.i18nAriaLabelId : el.dataset.i18nAriaLabelEn;
            if (typeof next === 'string' && next.length) el.setAttribute('aria-label', next);
        });

        document.querySelectorAll('[data-i18n-alt-en], [data-i18n-alt-id]').forEach((el) => {
            const next = lang === 'id' ? el.dataset.i18nAltId : el.dataset.i18nAltEn;
            if (typeof next === 'string' && next.length) el.setAttribute('alt', next);
        });

        document.querySelectorAll('[data-i18n-title-en], [data-i18n-title-id]').forEach((el) => {
            const next = lang === 'id' ? el.dataset.i18nTitleId : el.dataset.i18nTitleEn;
            if (typeof next === 'string' && next.length) el.setAttribute('title', next);
        });

        document.querySelectorAll('[data-i18n-placeholder-en], [data-i18n-placeholder-id]').forEach((el) => {
            const next = lang === 'id' ? el.dataset.i18nPlaceholderId : el.dataset.i18nPlaceholderEn;
            if (typeof next === 'string' && next.length) el.setAttribute('placeholder', next);
        });

        document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
            btn.classList.toggle('is-active', btn.dataset.lang === lang);
            btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
        });

        window.dispatchEvent(new CustomEvent('indigo:lang', { detail: { lang } }));
    };

    const setLang = (lang) => {
        const next = normalizeLang(lang);
        localStorage.setItem(LANG_STORAGE_KEY, next);
        applyLangToDom(next);
    };

    const initToggle = () => {
        const buttons = Array.from(document.querySelectorAll('.lang-btn[data-lang]'));
        if (buttons.length === 0) return;

        buttons.forEach((btn) => {
            btn.addEventListener('click', () => setLang(btn.dataset.lang));
        });
    };

    const lang = getInitialLang();
    if (lang) localStorage.setItem(LANG_STORAGE_KEY, lang);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initToggle();
            applyLangToDom(lang);
        });
    } else {
        initToggle();
        applyLangToDom(lang);
    }
})();
