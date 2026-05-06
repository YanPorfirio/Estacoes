document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!sidebar || !toggleBtn || !overlay) return;

    const setSidebarState = (isOpen) => {
        sidebar.classList.toggle('active', isOpen);
        toggleBtn.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
        toggleBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        document.body.classList.toggle('menu-open', isOpen);
    };

    const toggleSidebar = () => {
        setSidebarState(!sidebar.classList.contains('active'));
    };

    toggleBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', () => setSidebarState(false));

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setSidebarState(false);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            setSidebarState(false);
            toggleBtn.focus();
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealElements = document.querySelectorAll('.cards-container, .info-section, .section-title, .reveal-on-scroll');
    revealElements.forEach((el) => {
        el.classList.add('reveal-on-scroll');
    });

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
