document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // In a real application, you would send this data to a server
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, we'll just log the data and redirect
    console.log({ username, email, password });
    
    // Redirect to the login page
    window.location.href = 'login.html';
});
