document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const signUpBtn = document.getElementById('signupBtn');
    const signInBtn = document.getElementById('signinBtn');
    const title = document.getElementById('title');
    let signInClicked = false;

    signUpBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Reset error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate username
        const username = usernameField.value.trim();
        if (username.length < 8) {
            usernameError.textContent = 'Username must be at least 8 characters long';
            return; // Stop execution if username is invalid
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            return; // Stop execution if email is invalid
        }

        // Validate password
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{10,}$/;
        if (!passwordRegex.test(passwordField.value.trim())) {
            passwordError.textContent = 'Password must be at least 10 characters long and contain at least one number, one symbol character, and one letter';
            return; // Stop execution if password is invalid
        }

        // If all fields are valid, display success message
        alert('Sign Up Successful!');

        // Clear input fields
        usernameField.value = '';
        emailField.value = '';
        passwordField.value = '';
    });

    signInBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // First click
        if (!signInClicked) {
            // Hide the sign-up button
            signUpBtn.style.display = 'none';

            // Change title
            title.textContent = 'Sign In';

            // Center the text of the title
            title.style.textAlign = 'center'; 

            // Hide the username field and its error message
            usernameField.parentElement.parentElement.style.display = 'none';
            usernameError.textContent = '';

            signInClicked = true;
        } else {
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                return; // Stop execution if email is invalid
            }

            // Validate password
            const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{10,}$/;
            if (!passwordRegex.test(passwordField.value.trim())) {
                passwordError.textContent = 'Password must be at least 10 characters long and contain at least one number, one symbol character, and one letter';
                return; // Stop execution if password is invalid
            }

            // If both email and password are valid, display success message
            alert('Sign In Successful!');

            // Clear input fields
            emailField.value = '';
            passwordField.value = '';
        }
    });
});
