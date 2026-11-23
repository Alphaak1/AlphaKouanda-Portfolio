// 1. Update the clock immediately, then once each second.
const clock = document.getElementById('clock');

function updateClock() {
    clock.textContent = new Date().toLocaleString();
}

if (clock) {
    updateClock();
    setInterval(updateClock, 1000);
}

// 2. Toggle a CSS class to change the page colors.
const themeButton = document.getElementById('theme-toggle');

if (themeButton) {
    themeButton.addEventListener('click', function () {
        const darkMode = document.body.classList.toggle('dark-mode');
        themeButton.textContent = darkMode ? 'Use Light Mode' : 'Use Dark Mode';
        themeButton.setAttribute('aria-pressed', String(darkMode));
    });
}

// 3. Highlight each project card; remove the highlight when the mouse leaves.
const cards = document.querySelectorAll('.projects-table article');

cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('card-active');
    });
    card.addEventListener('mouseleave', function () {
        card.classList.remove('card-active');
    });
});

// 4. Use the existing project images for a small Next/Previous gallery.
const galleryImage = document.getElementById('gallery-image');

if (galleryImage) {
    const images = [
        { src: 'project1.png', alt: 'ViraBot Discord app profile' },
        { src: 'project2.png', alt: 'Art-Style Classifier prediction demo' },
        { src: 'project3.png', alt: 'To-Do List App image' }
    ];
    let imageIndex = 0;

    function showImage() {
        galleryImage.src = images[imageIndex].src;
        galleryImage.alt = images[imageIndex].alt;
        document.getElementById('gallery-caption').textContent =
            images[imageIndex].alt + ' (' + (imageIndex + 1) + ' of ' + images.length + ')';
    }

    document.getElementById('gallery-next').addEventListener('click', function () {
        imageIndex = (imageIndex + 1) % images.length;
        showImage();
    });
    document.getElementById('gallery-previous').addEventListener('click', function () {
        imageIndex = (imageIndex - 1 + images.length) % images.length;
        showImage();
    });
    showImage();
}

// 5. Show a separate error for each invalid contact field.
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // Let our own messages replace the browser's validation popups.
    contactForm.noValidate = true;

    function validateField(field) {
        const value = field.value.trim();
        let message = '';

        if (value === '') {
            message = 'This field is required.';
        } else if (field.name === 'Name' && value.length < 3) {
            message = 'Please enter at least 3 characters.';
        } else if (field.name === 'Email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            message = 'Please enter a valid email address.';
        } else if (field.name === 'Message' && value.length < 20) {
            message = 'Please enter at least 20 characters.';
        }

        document.getElementById(field.id + '-error').textContent = message;
        field.setAttribute('aria-invalid', String(message !== ''));
        return message === '';
    }

    const fields = contactForm.querySelectorAll('input:not([type="submit"]), textarea');
    contactForm.addEventListener('submit', function (event) {
        let firstInvalid = null;
        fields.forEach(function (field) {
            if (!validateField(field) && firstInvalid === null) {
                firstInvalid = field;
            }
        });

        if (firstInvalid) {
            event.preventDefault();
            firstInvalid.focus();
        }
        // A valid form keeps the existing mailto action (opens an email app).
    });

    fields.forEach(function (field) {
        field.addEventListener('input', function () {
            if (field.hasAttribute('aria-invalid')) {
                validateField(field);
            }
        });
    });
}

// 6. Only show Back to Top after scrolling down.
const topButton = document.getElementById('back-to-top');

if (topButton) {
    function updateTopButton() {
        topButton.hidden = window.scrollY < 200;
    }

    window.addEventListener('scroll', updateTopButton);
    updateTopButton();
    topButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
