window.onload = function () {

    const loggedIn = sessionStorage.getItem("loggedIn");
    const username = sessionStorage.getItem("name");
    const loginbuttons = document.getElementById("loginbuttons");
    const welcomemsg = document.getElementById("welcomemsg");

    if (loggedIn === "true") {
        loginbuttons.innerHTML = `
            <a href="#" class="button-header" onclick="logout(); return false;">Logout</a>
        `;

    } else {
        loginbuttons.innerHTML = `
            <a href="login.html" class="button-header">Login</a>
            <a href="register.html" class="button-header">Register</a>
        `;
    }
}

function logout() {
    sessionStorage.clear(); //clears all session data
    alert("Logout Successful!");
    window.location.href = "index.html"; //goes back to home screen
}
