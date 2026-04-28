document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-links a');
    const cards = document.querySelectorAll('.card');

    // Sidebar Toggle Logic
    const toggleSidebar = () => {
        const isOpen = sidebar.classList.contains('active');
        sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    toggleBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) toggleSidebar();
        });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) toggleSidebar();
    });

    // Card Redirection
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.id;
            if (id) window.location.href = `pages/${id}.html`;
        });
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal to sections and cards on index page
    const revealElements = document.querySelectorAll('.cards-container, .info-section, .section-title');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Custom Scroll Reveal for Season Pages
    const customRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                customRevealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const customRevealElements = document.querySelectorAll('.reveal-on-scroll');
    customRevealElements.forEach(el => {
        customRevealObserver.observe(el);
    });
});
