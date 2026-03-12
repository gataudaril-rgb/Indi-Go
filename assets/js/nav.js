(() => {
    const header = document.getElementById('header');
    if (!header) return;

    const toggle = header.querySelector('.hamburger');
    const menu = header.querySelector('.nav-links');
    if (!toggle || !menu) return;

    if (!menu.id) menu.id = 'primary-nav';
    toggle.setAttribute('aria-controls', menu.id);

    const setOpen = (open) => {
        header.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const isOpen = () => header.classList.contains('nav-open');

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const next = !isOpen();
        setOpen(next);
        if (next) {
            const firstLink = menu.querySelector('a, button, [tabindex]:not([tabindex=\"-1\"])');
            if (firstLink && typeof firstLink.focus === 'function') firstLink.focus();
        }
    });

    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

    document.addEventListener('click', (e) => {
        if (!isOpen()) return;
        if (header.contains(e.target)) return;
        setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!isOpen()) return;
        setOpen(false);
        toggle.focus?.();
    });

    const mq = window.matchMedia('(min-width: 769px)');
    const onChange = () => {
        if (mq.matches) setOpen(false);
    };

    if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onChange);
    else mq.addListener?.(onChange);
})();

