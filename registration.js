function validateRegistration() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Please enter a valid name without numbers or special characters.');
        return false;
    }

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

    // Confirm Password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Registration successful!');
    // Perform further actions, such as submitting the form data to a server
    return true;
}
