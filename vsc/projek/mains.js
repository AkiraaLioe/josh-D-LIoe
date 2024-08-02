document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // In a real application, you would send this data to a server
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, we'll just log the data and redirect
    console.log({ username, password });
    
    // Redirect to a dashboard page (for example)
    window.location.href = 'weather.html';
});
