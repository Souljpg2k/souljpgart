const a = document.querySelector('.opg img');
const b = document.getElementById('b');
const ga0 = document.getElementById('ga0');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


a.addEventListener('click', (e) => {
    b.classList.toggle('active');
    e.stopPropagation();
});

b.addEventListener('click', (e) => e.stopPropagation());


const images = ga0.querySelectorAll('img');
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

