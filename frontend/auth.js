// Check if the user is logged in by looking for a token in localStorage
document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
        // If the user is logged in, replace the login/signup buttons with a profile link and logout button
        document.querySelector('.nav-right').innerHTML = `
            <li><a href="profile.html">Welcome, ${user.name}</a></li>
            <li><a href="#" id="logout">Logout</a></li>
        `;

        // Add logout functionality
        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }
});
