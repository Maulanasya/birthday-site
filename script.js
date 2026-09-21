// ===== CONFIGURATION DATA =====
const CONFIG = {
    name: "NAMA INISIAL",
    songName: "LAGU INISIAL",
    hiddenMessage: "PESAN INISIAL",
    youtubeId: "D_6p7LqL_7o",
    volume: 50
};

// ===== VARIABLES =====
let iframe;
let isPlaying = false;
let audioContext;
let analyser;
let dataArray;
let bufferLength;
let canvas;
let ctx;
let animationFrame;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    iframe = document.querySelector('iframe');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeVal = document.getElementById('volumeVal');
    const revealBtn = document.getElementById('revealBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');

    // Set initial volume
    updateVolume();
    volumeSlider.addEventListener('input', updateVolume);

    // Reveal message
    revealBtn.addEventListener('click', () => {
        if (hiddenMessage.classList.contains('hidden')) {
            hiddenMessage.classList.remove('hidden');
            hiddenMessage.style.transform = 'scale(0.95)';
            hiddenMessage.style.opacity = '0';
            hiddenMessage.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                hiddenMessage.style.transform = 'scale(1)';
                hiddenMessage.style.opacity = '1';
                launchConfetti();
            }, 300);
        } else {
            hiddenMessage.classList.add('hidden');
        }
    });

    // Particle background
    createParticles();
    addHoverTilt();
    addButtonEffects();
});

// ===== VOLUME CONTROL =====
function updateVolume() {
    const slider = document.getElementById('volumeSlider');
    const val = slider.value;
    document.getElementById('volumeVal').textContent = val;
    if (iframe) {
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow && iframeWindow.postMessage) {
            iframeWindow.postMessage(
                JSON.stringify({ command: 'setVolume', volume: val }),
                '*'
            );
        }
    }
}

// ===== HIDDEN MESSAGE REVEAL =====
function revealMessage() {
    const message = document.getElementById('hiddenMessage');
    const btn = document.getElementById('revealBtn');

    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        message.style.transform = 'scale(0.95)';
        message.style.opacity = '0';
        message.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            message.style.transform = 'scale(1)';
            message.style.opacity = '1';
            launchConfetti();
        }, 300);

        btn.querySelector('p').textContent = "Kejutan sudah dibuka!";
    } else {
        message.classList.add('hidden');
        btn.querySelector('p').textContent = "Klik untuk membuka kejutan!";
    }
}

// ===== CONFETTI =====
function launchConfetti() {
    const count = 150;
    const defaults = {
        origin: { y: 0.7 }
    };
    confetti({
        ...defaults,
        particleCount: count,
        spread: 70,
        colors: ['#ff69b4', '#f0e632', '#00ffff', '#fff']
    });
    setTimeout(() => {
        confetti({
            ...defaults,
            particleCount: count / 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff69b4', '#f0e632']
        });
    }, 150);
    setTimeout(() => {
        confetti({
            ...defaults,
            particleCount: count / 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff69b4', '#f0e632']
        });
    }, 300);
}

// ===== FLOATING PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-js');
    const symbols = ['❤', '✨', '⭐', '🎈', '🎀', '🌸', '🎉'];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.position = 'absolute';
        particle.style.fontSize = `${Math.random() * 24 + 16}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.pointerEvents = 'none';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = `-${Math.random() * 10}s`;
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(particle);
    }
}

// ===== HOVER TILT EFFECTS =====
function addHoverTilt() {
    const cards = document.querySelectorAll('section > div');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'rotate(0deg) translateY(-4px)';
            card.style.boxShadow = '8px 8px 0px 0px rgba(0, 0, 0, 1)';
        });
        card.addEventListener('mouseleave', () => {
            const isRotated = card.classList.contains('rotate-1');
            card.style.transform = isRotated ? 'rotate(1deg)' : '-rotate(1deg)';
            card.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)';
        });
    });
}

// ===== BUTTON SHAKE EFFECT =====
function addButtonEffects() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'translate(4px, 4px)';
            this.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 100);
        });
    });
}