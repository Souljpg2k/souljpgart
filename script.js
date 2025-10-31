const galleryData = [
    { img: "img/20102568.jpg" },
    { img: "img/CSJPG.jpg" },
    { img: "img/lapart.jpg" },
    { img: "img/dream542568.jpg" },
];

const gallery = document.getElementById('gallery');

galleryData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.innerHTML = `<img src="${item.img}" alt="Gallery Image" />`;
    gallery.appendChild(card);
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryData[currentIndex].img;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    lightboxImg.src = galleryData[currentIndex].img;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    lightboxImg.src = galleryData[currentIndex].img;
}

document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });


nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeLightbox();
});



const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburger = document.querySelector('.hamburger');


menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuBtn.classList.toggle("open");
    hamburger.classList.toggle('active');
});

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.classList.remove("open");
        hamburger.classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sectionsToObserve = document.querySelectorAll('.ab');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const h1Element = entry.target.querySelector('h1');
            const pElement = entry.target.querySelector('p');

            if (entry.isIntersecting) {
                if (h1Element) h1Element.classList.add('animate-on-scroll');
                if (pElement) pElement.classList.add('animate-on-scroll');
            } else {
                if (h1Element) h1Element.classList.remove('animate-on-scroll');
                if (pElement) pElement.classList.remove('animate-on-scroll');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    sectionsToObserve.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.bar0 a');
    const audio = document.getElementById('hoverSound');


    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play();
        });
        link.addEventListener('mouseleave', () => {
            audio.pause();
        });
    });
});

