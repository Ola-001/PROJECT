// Grab DOM elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Create a message paragraph for feedback
const messageBox = document.createElement('p');
messageBox.style.marginTop = "10px";
loginForm.appendChild(messageBox);

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Stop default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Check if fields are filled
    if (!username || !password) {
        messageBox.textContent = "Please enter both username and password!";
        messageBox.style.color = "red";
        return;
    }

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user_" + username);

    if (!storedUser) {
        messageBox.textContent = "User not found! Please create an account.";
        messageBox.style.color = "red";
        return;
    }

    const userData = JSON.parse(storedUser);

    // Check password
    if (password !== userData.password) {
        messageBox.textContent = "Incorrect password!";
        messageBox.style.color = "red";
        return;
    }

    // Login successful — save login status
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    messageBox.textContent = "Login successful! Redirecting...";
    messageBox.style.color = "green";

    // Redirect after short delay
    setTimeout(() => {
        window.location.href = "Services.html";
    }, 800);
}

// Attach event listener in consistent format
loginForm.addEventListener('submit', handleLogin);
