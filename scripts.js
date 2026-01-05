// scripts.js - Kocie animacje
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐱 Koci Zaułek gotowy!');

    // Losowe pojawianie się łapek na ekranie
    setInterval(() => {
        if (Math.random() > 0.7) {
            createPaw();
        }
    }, 3000);
});

function createPaw() {
    const paw = document.createElement('div');
    paw.innerHTML = '🐾';
    paw.style.position = 'fixed';
    paw.style.fontSize = '1.5rem';
    paw.style.left = Math.random() * 100 + 'vw';
    paw.style.top = Math.random() * 100 + 'vh';
    paw.style.pointerEvents = 'none';
    paw.style.animation = 'float 4s ease-in-out forwards';
    paw.style.zIndex = '9999';
    document.body.appendChild(paw);

    setTimeout(() => paw.remove(), 4000);
}

// Animacja unoszenia
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}
`;
document.head.appendChild(style);

