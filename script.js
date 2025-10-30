const galleryData = [
    { title: "Torii", description: "Arknights", img: "img/20102568.jpg" },
    { title: "CS001", description: "Crime Scene", img: "img/CSJPG.jpg" },
    { title: "Laboratory", description: "LB001", img: "img/lapart.jpg" },
    { title: "Dream", description: "My Dream", img: "img/dream542568.jpg" },
    { title: "Torii,N", description: "Torii", img: "img/ToriiN.jpg" },
    { title: "SSS", description: "Sky", img: "img/sky.jpg" },
    { title: "Demon", description: "Demon White", img: "img/bgh.jpg" },
    { title: "Owl", description: "Night", img: "img/1472567.jpg" },
];

const gallery = document.getElementById('gallery');

galleryData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
    <div class="caption">
      <h3 class="title">${item.title}</h3>
      <p>${item.description}</p>
    </div>
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
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false;
    let touchStartY = 0;
    const touchThreshold = 50;

    function initializeScroll() {
        sections[0].scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    initializeScroll();


    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            currentSectionIndex = index;

            sections[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            setTimeout(() => {
                isScrolling = false;
            }, 800);
        }
    }


    window.addEventListener('wheel', (e) => {
        if (isScrolling) {
            e.preventDefault();
            return;
        }

        const activeContent = sections[currentSectionIndex].querySelector('.section-content');
        if (!activeContent) return;

        const maxScrollTop = activeContent.scrollHeight - activeContent.clientHeight;
        const isAtTop = activeContent.scrollTop === 0;
        const isAtBottom = activeContent.scrollTop >= maxScrollTop;

        if (e.deltaY < 0) {
            if (!isAtTop) {
                return;
            }
            scrollToSection(currentSectionIndex - 1);
            e.preventDefault();

        } else if (e.deltaY > 0) {
            if (!isAtBottom) {

                return;
            }
            scrollToSection(currentSectionIndex + 1);
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', (e) => {
        if (isScrolling) {
            return;
        }

        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        const activeContent = sections[currentSectionIndex].querySelector('.section-content');
        if (!activeContent) return;

        const maxScrollTop = activeContent.scrollHeight - activeContent.clientHeight;
        const isAtTop = activeContent.scrollTop === 0;
        const isAtBottom = activeContent.scrollTop >= maxScrollTop;

        if (deltaY < -touchThreshold) {
            if (!isAtBottom) return;
            scrollToSection(currentSectionIndex + 1);

        } else if (deltaY > touchThreshold) {
            if (!isAtTop) return;
            scrollToSection(currentSectionIndex - 1);
        }
    });

});