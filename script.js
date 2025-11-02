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
    card.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
  `;
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


//menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburger = document.querySelector('.hamburger');
const mylink = document.querySelector(".link");


menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    mylink.classList.toggle("show");
    menuBtn.classList.toggle("open");
    hamburger.classList.toggle('active');
});

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        mylink.classList.remove("show");
        menuBtn.classList.remove("open");
        hamburger.classList.remove('active');
    });
});

//ab
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

//hover
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.bar0 a,.link a');
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

