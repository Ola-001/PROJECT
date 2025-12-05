document.addEventListener("DOMContentLoaded", () => {

    // Check login status
    const loggedIn = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username");

    if (!loggedIn || loggedIn !== "true" || !username) {
        window.location.href = "index.html"; // redirect if not logged in
        return;
    }

    // Grab DOM elements after page is loaded
    const profileUsername = document.getElementById("profileUsername");
    const profileEmail = document.getElementById("profileEmail");
    const logoutBtn = document.getElementById("logoutBtn");

    // Load user data
    const savedUserData = localStorage.getItem("user_" + username);
    if (savedUserData) {
        const userObj = JSON.parse(savedUserData);
        if (profileUsername) profileUsername.textContent = userObj.username;
        if (profileEmail) profileEmail.textContent = userObj.email;
    }

    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            window.location.href = "index.html"; // go back to login page
        });
    }

});
