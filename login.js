document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Retrieve user data from localStorage (simulate database)
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.name}!`);
        // Redirect to the dashboard or another page
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
