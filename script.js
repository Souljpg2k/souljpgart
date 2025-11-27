// Run after DOM is ready and guard DOM selections to avoid runtime errors
document.addEventListener('DOMContentLoaded', () => {
    const galleryTriggerBtn = document.querySelector('.gallery-trigger img');
    const galleryOverlay = document.getElementById('gallery-overlay');
    const galleryGrid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (galleryTriggerBtn) {
        galleryTriggerBtn.addEventListener('mouseover', () => {
            galleryTriggerBtn.src = 'img/icon2.png';
        });

        galleryTriggerBtn.addEventListener('mouseout', () => {
            galleryTriggerBtn.src = 'img/icon.png';
        });

        galleryTriggerBtn.addEventListener('click', (e) => {
            if (galleryOverlay) galleryOverlay.classList.toggle('active');
            e.stopPropagation();
        });
    }

    if (galleryOverlay) {
        galleryOverlay.addEventListener('click', (e) => {
            if (e.target === galleryOverlay) {
                galleryOverlay.classList.remove('active');
            }
        });
    }

    if (galleryGrid && lightbox && lightboxImg) {
        const images = galleryGrid.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('click', (e) => {
                lightboxImg.src = img.src;
                lightbox.style.display = 'flex';
                setTimeout(() => lightbox.classList.add('active'), 10);
                e.stopPropagation();
            });
        });

        lightboxImg.addEventListener('click', (e) => e.stopPropagation());

        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 500);
        });
    }
});
