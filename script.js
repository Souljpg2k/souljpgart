const galleryTriggerBtn = document.querySelector('.gallery-trigger img');
const galleryOverlay = document.getElementById('gallery-overlay');
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


galleryTriggerBtn.addEventListener('click', (e) => {
    galleryOverlay.classList.toggle('active');
    e.stopPropagation();
});


galleryOverlay.addEventListener('click', (e) => {
    if (e.target === galleryOverlay) {
        galleryOverlay.classList.remove('active');
    }
});


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
