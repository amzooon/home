const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

const password = "const passwordInput = document.getElementById('password').value";

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === password) {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'drive-main-tfrcgtcfrgtcfrgderdutvoghjhu56ersxy87go651489FDERktgh65489zgtygftcrbftdfjhvnvhgtrseryery65r79y09uìoìioyuglòjàjàoihuyftytrthjygyt6.html';
    } else {
        errorMessage.textContent = "Password errata. Riprova.";
    }
});
