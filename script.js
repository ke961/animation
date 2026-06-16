const ghosts = document.querySelectorAll('.ghost');
const pupils = document.querySelectorAll('.pupil');
const passwordInput = document.getElementById('password');
const bigGhost = document.getElementById('ghost-main');
const tearsContainer = document.getElementById('tears');
const bubble = document.getElementById('bubble');

// Follow cursor
document.addEventListener('mousemove', (e) => {
    if (bigGhost.classList.contains('shy')) return;

    pupils.forEach(pupil => {
        const rect = pupil.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientX - x, e.clientY - y);
        const rot = (angle * (180 / Math.PI) * -1) + 180;
        pupil.style.transform = `rotate(${rot}deg) translate(3px)`;
    });
});

// Password Focus
passwordInput.addEventListener('focus', () => {
    ghosts.forEach(g => g.classList.add('shy'));
    bubble.style.display = 'block';
    
    // Start Tearing
    this.tearInterval = setInterval(() => {
        const tear = document.createElement('div');
        tear.className = 'tear';
        tear.style.left = (Math.random() > 0.6 ? '30px' : '50px');
        tearsContainer.appendChild(tear);
        setTimeout(() => tear.remove(), 600);
    }, 150);
});

passwordInput.addEventListener('blur', () => {
    ghosts.forEach(g => g.classList.remove('shy'));
    bubble.style.display = 'none';
    clearInterval(this.tearInterval);
});
