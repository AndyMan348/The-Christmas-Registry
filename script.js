// script.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic Validation
    if (username && password) {
        // Simulate login success and show the welcome message
        document.getElementById("welcomeMessage").style.display = "block";
        document.getElementById("userNameDisplay").textContent = username; // Display the username

        // Hide the login form after successful login
        document.querySelector(".login-container form").style.display = "none";
    } else {
        alert("Please fill out both fields.");
    }
});
