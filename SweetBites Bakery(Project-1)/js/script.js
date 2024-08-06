
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found:', targetId);
            }
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\d{10}$/;

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                e.preventDefault();
            } else if (!phoneRegex.test(phone)) {
                alert('Please enter a valid 10-digit phone number.');
                e.preventDefault();
            } else if (name === '' || subject === '' || message === '') {
                alert('All fields are required.');
                e.preventDefault();
            }
        });
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


