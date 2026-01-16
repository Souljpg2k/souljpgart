document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.scroll-section, .about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
