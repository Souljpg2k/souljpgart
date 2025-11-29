const TRANSLATIONS = {
    en: {
        welcome_title: 'WELCOME',
        welcome_sub: 'to the website!',
        about_title: 'About',
        about_role: 'Soul illustrator & concept artist.',
        about_tools: 'Tools: Clip Studio Paint & Blender.',
        about_draw: 'I draw backgrounds & illustrations.',
        play: 'play',
        pause: 'pause'
    },
    th: {
        welcome_title: 'ยินดีต้อนรับ',
        welcome_sub: 'สู่เว็บไซต์!',
        about_title: 'เกี่ยวกับ',
        about_role: 'นักวาดภาพประกอบ และ คอนเซ็ปต์อาร์ต',
        about_tools: 'โปรแกรมที่ใช้: Clip Studio Paint และ Blender',
        about_draw: 'ผมวาดพื้นหลังและภาพประกอบเป็นหลัก',
        play: 'เล่น',
        pause: 'หยุด'
    }
};

; (function () {
    const minBtn = document.getElementById('minimizeBtn');
    const box = document.querySelector('.profile-section');
    const socials = document.querySelector('.social-links');
    const media = document.querySelector('.media-player');
    if (!minBtn || !box || !socials || !media) return;

    function toggleMin() {
        const collapsed = box.classList.toggle('collapsed');
        socials.classList.toggle('collapsed', collapsed);
        media.classList.toggle('collapsed', collapsed);
        media.setAttribute('aria-hidden', collapsed ? 'true' : 'false');
        minBtn.setAttribute('aria-pressed', collapsed ? 'true' : 'false');
        minBtn.setAttribute('title', collapsed ? 'Restore' : 'Minimize');
    }

    minBtn.addEventListener('click', toggleMin);
    minBtn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMin(); } });


    const playBtn = document.querySelector('.play-button');
    const con = document.querySelector('.content-container');
    const playIcon = playBtn.querySelector('img');
    const playText = playBtn.querySelector('span');

    const images = ['img/O.webp', 'img/N.webp', 'img/R.webp', 'img/snow.webp', 'img/D.webp', 'img/cs.webp', 'img/demon.webp'];
    let currentIndex = 0;
    let interval;
    let isPlaying = false;


    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    function changeBackground() {
        con.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            clearInterval(interval);
            playIcon.src = 'img/play.svg';
            const lang = localStorage.getItem('site-lang') || 'en';
            playText.textContent = (TRANSLATIONS[lang] && TRANSLATIONS[lang].play) || TRANSLATIONS.en.play;
            isPlaying = false;
        } else {
            changeBackground();
            interval = setInterval(changeBackground, 3000);
            playIcon.src = 'img/pause.svg';
            const lang = localStorage.getItem('site-lang') || 'en';
            playText.textContent = (TRANSLATIONS[lang] && TRANSLATIONS[lang].pause) || TRANSLATIONS.en.pause;
            isPlaying = true;
        }
    });
})();

(function () {
    const translations = TRANSLATIONS;

    const buttons = document.querySelectorAll('.lang-btn');
    if (!buttons || buttons.length === 0) return;

    const langSwitchEl = document.querySelector('.lang-switch');
    const langToggle = langSwitchEl ? langSwitchEl.querySelector('.lang-toggle') : null;
    const langMenu = langSwitchEl ? langSwitchEl.querySelector('.lang-menu') : null;

    function applyLang(lang) {
        const items = document.querySelectorAll('[data-i18n]');
        items.forEach(el => {
            const key = el.dataset.i18n;
            const value = (translations[lang] && translations[lang][key]) || translations['en'][key] || el.textContent;
            if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        });

        buttons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        localStorage.setItem('site-lang', lang);
    }

    const saved = localStorage.getItem('site-lang') || 'en';
    applyLang(saved);

    buttons.forEach(btn => btn.addEventListener('click', () => {
        applyLang(btn.dataset.lang);
        if (langSwitchEl) {
            langSwitchEl.classList.remove('open');
            if (langToggle) langToggle.setAttribute('aria-expanded', 'false');
            if (langMenu) langMenu.hidden = true;
        }
    }));

    if (langToggle && langMenu && langSwitchEl) {
        langToggle.addEventListener('click', (e) => {
            const open = langSwitchEl.classList.toggle('open');
            langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            langMenu.hidden = !open;
            e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
            if (!langSwitchEl.contains(e.target)) {
                langSwitchEl.classList.remove('open');
                langToggle.setAttribute('aria-expanded', 'false');
                langMenu.hidden = true;
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                langSwitchEl.classList.remove('open');
                langToggle.setAttribute('aria-expanded', 'false');
                langMenu.hidden = true;
            }
        });
    }
})();