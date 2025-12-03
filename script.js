document.addEventListener('DOMContentLoaded', () => {
    initProfileControls();
    initMediaPlayer();
    initWorkModal();
    initImageLightbox();
});

function initProfileControls() {
    const minBtn = document.getElementById('minimizeBtn');
    const box = document.querySelector('.profile-section');
    const socials = document.querySelector('.social-links');
    const media = document.querySelector('.media-player');

    if (!minBtn || !box || !socials || !media) return;

    const toggleMin = () => {
        const collapsed = box.classList.toggle('collapsed');
        socials.classList.toggle('collapsed', collapsed);
        media.classList.toggle('collapsed', collapsed);

        media.setAttribute('aria-hidden', collapsed);
        minBtn.setAttribute('aria-pressed', collapsed);
        minBtn.setAttribute('title', collapsed ? 'Restore' : 'Minimize');
    };

    minBtn.addEventListener('click', toggleMin);
    minBtn.addEventListener('keydown', e => {
        if (['Enter', ' '].includes(e.key)) {
            e.preventDefault();
            toggleMin();
        }
    });
}

function initMediaPlayer() {
    const playBtn = document.querySelector('.play-button');
    const container = document.querySelector('.content-container');
    if (!playBtn || !container) return;

    const playIcon = playBtn.querySelector('img');
    const playText = playBtn.querySelector('span');
    const images = ['img/main.webp', 'img/cs.webp', 'img/R.webp', 'img/demon.webp', 'img/D.webp'];

    images.forEach(src => new Image().src = src);

    let currentIndex = 0;
    let interval;
    let isPlaying = false;

    const changeBackground = () => {
        container.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    };

    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            changeBackground();
            interval = setInterval(changeBackground, 3000);
            playIcon.src = 'img/pause.svg';
            playText.textContent = 'pause';
            playText.dataset.playing = 'true';
        } else {
            clearInterval(interval);
            playIcon.src = 'img/play.svg';
            playText.textContent = 'play';
            playText.dataset.playing = 'false';
        }
    });

    playBtn.addEventListener('keydown', (e) => {
        if (['Enter', ' '].includes(e.key)) {
            e.preventDefault();
            playBtn.click();
        }
    });
}

function initWorkModal() {
    const trigger = document.getElementById('workTrigger');
    const modal = document.getElementById('workModal');
    const closeBtn = document.getElementById('closeWorkBtn');
    const modalContent = modal?.querySelector('.work-modal');
    const header = modal?.querySelector('.work-header');

    if (!trigger || !modal || !closeBtn || !modalContent) return;

    const open = () => {
        modal.hidden = false;
        void modal.offsetWidth;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => closeBtn.focus(), 100);
    };

    const close = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
            modal.hidden = true;
            trigger.focus();
        }, 300);
    };

    trigger.addEventListener('click', open);
    closeBtn.addEventListener('click', close);

    [trigger, closeBtn].forEach(el => {
        el.addEventListener('keydown', e => {
            if (['Enter', ' '].includes(e.key)) {
                e.preventDefault();
                el.click();
            }
        });
    });

    let isDragging = false;
    let startX, startY, startLeft, startTop;

    const onDown = (e) => {
        const p = e.touches ? e.touches[0] : e;
        isDragging = true;
        header.classList.add('grabbing');
        startX = p.clientX;
        startY = p.clientY;

        const rect = modalContent.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;

        modalContent.style.transition = 'none';
        modalContent.style.transform = 'none';
        modalContent.style.left = `${startLeft}px`;
        modalContent.style.top = `${startTop}px`;

        document.addEventListener('mousemove', onMove);
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('mouseup', onUp);
        document.addEventListener('touchend', onUp);
    };

    const onMove = (e) => {
        if (!isDragging) return;
        const p = e.touches ? e.touches[0] : e;
        const dx = p.clientX - startX;
        const dy = p.clientY - startY;

        modalContent.style.left = `${startLeft + dx}px`;
        modalContent.style.top = `${startTop + dy}px`;

        if (e.cancelable) e.preventDefault();
    };

    const onUp = () => {
        isDragging = false;
        header.classList.remove('grabbing');
        modalContent.style.transition = '';

        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchend', onUp);
    };

    if (header) {
        header.addEventListener('mousedown', onDown);
        header.addEventListener('touchstart', onDown, { passive: false });
    }
}

function initImageLightbox() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const images = document.querySelectorAll('.work-item');

    if (!modal || !modalImg) return;

    const open = (src) => {
        modal.hidden = false;
        modalImg.src = src;
        void modal.offsetWidth;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    };

    const close = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
            modal.hidden = true;
            modalImg.src = '';
        }, 300);
    };

    images.forEach(img => {
        img.addEventListener('click', () => open(img.src));
        img.addEventListener('keydown', e => {
            if (['Enter', ' '].includes(e.key)) {
                e.preventDefault();
                open(img.src);
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalImg) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
}