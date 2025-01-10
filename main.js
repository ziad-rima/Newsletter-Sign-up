document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('form');
    const email = document.getElementById('email-address');
    const hint = document.getElementById('input-hint');
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message-container');
    const emailInput = document.getElementById('email-input');
    const dismissButton = document.getElementById('dismiss-btn');

    const showError = (input, message) => {
        hint.textContent = message;
        hint.style.color = message ? 'var(--Tomato)' : '';
        if (message) {
            input.classList.add('error-state');
        } else {
            input.classList.remove('error-state');
        }
    };

    const validateEmail = (input) => {
        if (input.value.trim() === '') {
            showError(input, 'Valid email required');
            return false;
        } else {
            showError(input, '');
            return true;
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const isEmailValid = validateEmail(email);

        if (isEmailValid) {
            formContainer.style.display = 'none';
            successMessage.style.display = 'flex';
            emailInput.innerHTML = email.value.trim();
            dismissButton.removeEventListener('click', dismissHandler);             
            dismissButton.addEventListener('click', dismissHandler);
        }

        function dismissHandler(e) {
            e.preventDefault();
            form.reset();
            successMessage.style.display = 'none';
            formContainer.style.display = 'grid';
        };
       
    })
})