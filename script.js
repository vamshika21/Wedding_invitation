document.addEventListener('DOMContentLoaded', () => {
    console.log("M&S Premium Varmala v3.0 Loaded");

    // Initialize AOS
    AOS.init({
        duration: 1200,
        once: true,
        offset: 100
    });

    const startBtn = document.getElementById('varmala-start');
    const overlay = document.getElementById('intro-overlay');

    if (startBtn && overlay) {
        startBtn.addEventListener('click', () => {
            console.log("Opening Invitation...");
        // Add class to hide overlay
        overlay.classList.add('hide-all');

        // Enable body scrolling after a small delay to match animation
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
        }, 800);

        // Resume or play music if needed
        // audio.play().catch(err => console.log("Music play blocked by browser"));
            setTimeout(() => {
                overlay.style.display = 'none';
                AOS.refresh();
            }, 1000);
        });
    }



    // Countdown Timer logic
    const weddingDate = new Date('May 1, 2026 11:18:00').getTime();
    function updateTimer() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        if (isNaN(distance)) return;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const val = id === 'days' ? days : (id === 'hours' ? hours : (id === 'minutes' ? minutes : seconds));
                el.innerText = val.toString().padStart(2, '0');
            }
        });
    }
    setInterval(updateTimer, 1000);
    updateTimer();
    // Scroll Logic
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    window.addEventListener('scroll', () => {
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }
        
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    });
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    

});
