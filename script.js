(function () {
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

    const images = ['img/owl.jpg',];
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
            playText.textContent = 'play';
            isPlaying = false;
        } else {
            changeBackground();
            interval = setInterval(changeBackground, 3000);
            playIcon.src = 'img/pause.svg';
            playText.textContent = 'pause';
            isPlaying = true;
        }
    });
})();