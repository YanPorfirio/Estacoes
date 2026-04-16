document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to toggle sidebar
    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    // Open/Close on button click
    toggleBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked (useful for SPAs or smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // Handle Escape key to close sidebar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
});

const verVerao = document.getElementById('verao');
const verOutono = document.getElementById('outono');
const verInverno = document.getElementById('inverno');
const verPrimavera = document.getElementById('primavera');

verVerao.addEventListener('click', () => {
    window.location.href = 'verao.html';
});

verOutono.addEventListener('click', () => {
    window.location.href = 'outono.html';
});

verInverno.addEventListener('click', () => {
    window.location.href = 'inverno.html';
});

verPrimavera.addEventListener('click', () => {
    window.location.href = 'primavera.html';
});
