function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

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

    // Subject validation
    if (subject.trim() === '') {
        alert('Please enter a subject.');
        return false;
    }

    // Message validation
    if (message.trim() === '') {
        alert('Please enter a message.');
        return false;
    }

    alert('Message sent successfully!');
    // Perform further actions, such as submitting the form data to a server
    return true;
}
