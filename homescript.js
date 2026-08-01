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


    const images = [
        "media/BMW.png",
        "media/Sedan.png",
        "media/Toyota.png",
        "media/Honda.png",
        "media/BYD.png",
        "media/Tesla.png"
    ];

    let current = 0;
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    let showingFirst = true;

    setInterval(function () {

        current = (current + 1) % images.length;
        if (showingFirst) {
            img2.src = images[current];
            img2.classList.add("active");
            img1.classList.remove("active");

        } else {
            img1.src = images[current];
            img1.classList.add("active");
            img2.classList.remove("active");
        }

        showingFirst = !showingFirst;

    }, 5000); //means 5s rotation


};

function logout() {
    sessionStorage.clear(); //clears all session data
    window.location.href = "index.html"; //goes back to home screen
}