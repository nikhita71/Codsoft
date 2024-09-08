document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after becoming visible
            }
        });
    }, {
        threshold: 0.2 // 20% of the element must be visible to trigger animation
    });

    hiddenElements.forEach(el => observer.observe(el));
});
