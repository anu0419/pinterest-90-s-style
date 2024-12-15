 /*jshint esversion: 6 */ 
 // Auth State Management
let currentUser = null;

// DOM Elements
const loginWindow = document.getElementById('loginWindow');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const mainContent = document.getElementById('mainContent');
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutButton = document.getElementById('logoutButton');

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showError('Please fill in all fields!');
        return;
    }

    // Simple login (in a real app, you'd validate against a server)
    login(username);
});

// Login Function
function login(username) {
    currentUser = { username };
    loginWindow.classList.add('hidden');
    mainContent.classList.remove('hidden');
    welcomeMessage.textContent = `Welcome, ${username}!`;
    errorMessage.classList.add('hidden');
}

// Logout Handler
logoutButton.addEventListener('click', () => {
    currentUser = null;
    mainContent.classList.add('hidden');
    loginWindow.classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Error Display
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}