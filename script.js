document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainScreen = document.getElementById('main-screen');
    const giftBox = document.getElementById('open-gift-btn');
    const bgMusic = document.getElementById('bg-music');
    const confettiContainer = document.getElementById('confetti');

    let opened = false;

    giftBox.addEventListener('click', () => {
        if (opened) return;
        opened = true;
        
        // Animate gift box opening
        const lid = document.querySelector('.lid');
        lid.style.transform = 'translateY(-50px) rotate(-10deg)';
        lid.style.opacity = '0';
        
        setTimeout(() => {
            // Switch screens
            introScreen.classList.remove('active');
            mainScreen.classList.add('active');
            
            // Allow scrolling on the body
            document.body.classList.remove('locked');
            
            // Start playing the background music via exact youtube video ID from 20s
            bgMusic.src = "https://www.youtube.com/embed/Lp2riL9OyCY?autoplay=1&loop=1&playlist=Lp2riL9OyCY&allow=autoplay&start=20";

            // Trigger confetti
            createConfetti();
        }, 600);
    });

    function createConfetti() {
        const colors = ['#f43f5e', '#fcd34d', '#3b82f6', '#10b981', '#a855f7'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            
            // Random properties
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const animationDelay = Math.random() * 2;
            
            confetti.style.backgroundColor = color;
            confetti.style.left = left + 'vw';
            confetti.style.top = '-20px';
            
            // Create dynamic animation for this piece
            confetti.animate([
                { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate3d(${Math.random()*200 - 100}px, 100vh, 0) rotate(${Math.random()*720}deg)`, opacity: 0 }
            ], {
                duration: animationDuration * 1000,
                delay: animationDelay * 1000,
                iterations: Infinity,
                easing: 'cubic-bezier(.37,0,.63,1)'
            });
            
            confettiContainer.appendChild(confetti);
        }
    }
});
