document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message!'); // Show a thank you message
    this.reset(); // Reset the form fields
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkCards() {
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('show'); // Add show class to trigger flip
            }
        });
    }

    window.addEventListener('scroll', checkCards);
    window.addEventListener('resize', checkCards);
    checkCards(); // Initial check
});