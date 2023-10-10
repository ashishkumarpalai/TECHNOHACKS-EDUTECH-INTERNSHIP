document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Input validation (you can add more complex validation here)
        if (username.trim() === "" || password.trim() === "") {
            errorMessage.textContent = "Username and password are required.";
            return;
        }

        // Simulate a request to the server for authentication
        // In a real application, this should be done on the server-side
        // using a secure authentication mechanism (e.g., bcrypt)
        if (username === "user" && password === "password") {
            // Redirect to the dashboard or perform other actions on successful login
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
