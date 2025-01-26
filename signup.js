document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Save user data to localStorage (simulate database)
    const user = {
        name,
        email,
        password,
    };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Signup successful! You can now log in.');
    // Redirect to the login page
    window.location.href = 'login.html';
});
