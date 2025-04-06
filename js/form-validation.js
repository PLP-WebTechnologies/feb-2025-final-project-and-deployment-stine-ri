document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
            el.textContent = '';
        });

        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError('name-error', 'Name is required');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError('email-error', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('email-error', 'Please enter a valid email');
            isValid = false;
        }

        // Validate subject
        const subject = document.getElementById('subject');
        if (subject.value.trim() === '') {
            showError('subject-error', 'Subject is required');
            isValid = false;
        }

        // Validate message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError('message-error', 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError('message-error', 'Message should be at least 10 characters');
            isValid = false;
        }

        // If form is valid, show success message
        if (isValid) {
            form.reset();
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
});