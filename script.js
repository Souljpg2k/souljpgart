const galleryData = [
    { img: "img/CSJPG.jpg" },
    { img: "img/dream.jpg" },
    { img: "img/lab.jpg" },
    { img: "img/1366.jpg" },
    { img: "img/2572568.jpg" },
    { img: "img/nurse.png" },
];

const gallery = document.getElementById("gallery");
if (!gallery) {
    console.error("error: gallery not found");
} else {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.1 });

    const fragment = document.createDocumentFragment();

    galleryData.forEach(item => {
        const card = document.createElement("div");
        card.className = "gallery-item";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "";
        img.loading = "lazy";

        card.appendChild(img);
        fragment.appendChild(card);
        observer.observe(card);
    });

    gallery.appendChild(fragment); // 
}

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
  <img class="lightbox-img" src="" alt="" />
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");


document.addEventListener("click", e => {
    if (e.target.tagName === "IMG" && e.target.closest(".gallery-item")) {
        lightboxImg.src = e.target.src;
        lightboxImg.alt = e.target.alt;
        lightbox.classList.add("active");
    }
});


lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
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

const sections = document.querySelectorAll('section');
let isScrolling = false;


function snapToSection(direction) {
    const currentSection = Math.round(window.scrollY / window.innerHeight);
    let targetSection = currentSection + direction;
    targetSection = Math.max(0, Math.min(targetSection, sections.length - 1));

    isScrolling = true;
    sections[targetSection].scrollIntoView({ behavior: 'smooth', block: 'start' });

    const checkScroll = () => {
        const scrollY = window.scrollY;
        const targetY = sections[targetSection].offsetTop;
        if (Math.abs(scrollY - targetY) < 2) {
            isScrolling = false;
        } else {
            requestAnimationFrame(checkScroll);
        }
    };
    requestAnimationFrame(checkScroll);
}


function scrollToTarget(targetId) {
    if (targetId === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        scrollToTarget(targetId);
    });
});


window.addEventListener('wheel', e => {
    if (isScrolling) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    snapToSection(direction);
});


let startY = 0;
window.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchend', e => {
    const endY = e.changedTouches[0].clientY;
    const diff = startY - endY;

    if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;
        if (!isScrolling) snapToSection(direction);
    }
}, { passive: true });



const bar = document.querySelector('.bar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bar.classList.remove('section-1', 'section-2');
            if (entry.target.id === 'home') {
                bar.classList.add('section-1');
            } else if (entry.target.id === 'artwork') {
                bar.classList.add('section-2');
            }
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 30 + 10;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    particle.animate([
        { transform: `translate(0,0)`, opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
    ], {
        duration: 500 + Math.random() * 300,
        easing: 'ease-out',
        fill: 'forwards'
    });

    setTimeout(() => {
        particle.remove();
    }, 800);
}

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuBtn.classList.toggle("open");
});
