
// Interactive Typing Effect
const introText = "can u kill me";
const typingContainer = document.querySelector('.typing-container');
let index = 0;

function typeText() {
    typingContainer.textContent = introText.slice(0, index);
    index++;

    if (index > introText.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(typeText, 100); // Adjust speed as needed

// Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyLoad = target => {
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
                io.unobserve(img);
            }
        });
    });

    io.observe(target);
};

lazyImages.forEach(lazyLoad);

// Hamburger Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('menu-open');
});
