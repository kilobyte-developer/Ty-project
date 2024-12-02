function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    alert('Login successful!');
    // Perform further actions, such as submitting the form data to a server
    return true;
}
