window.onload = function() {

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

    // Get form elements for validation
    var form = document.getElementById("registeraccount");
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");    
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var phoneInput = document.getElementById("phone");
    var phoneError = document.getElementById("phoneError");
    var passInput = document.getElementById("password");
    var passError = document.getElementById("passwordError");
    var confirmInput = document.getElementById("confirmPassword");
    var confirmError = document.getElementById("confirmError");


    form.onsubmit = function(e) {
    var nameValid = true;
    var phoneValid = true;
    var emailValid = true;
    var passValid = true;
    var confirmValid = true;

    var nameValue = nameInput.value.trim();
        if (nameValue === "" || !/^[A-Za-z\s]+$/.test(nameValue)) {
        nameValid = false;
        nameError.textContent = "Name field cannot be empty or use invalid characters";
    } else {
            nameError.textContent = "";
    }

    var emailValue = emailInput.value.trim();
    if (emailValue === ""|| !emailValue.includes("@")) {
        emailValid = false;
        emailError.textContent = "Invalid email address";
    } else {
        emailError.textContent = "";
    }
    var phoneValue = phoneInput.value.trim();
    if (phoneValue === "" || !/^[0-9]{8}$/.test(phoneValue)) {
        phoneValid = false;
        phoneError.textContent = "Invalid phone number";
    } else {
        phoneError.textContent = "";
    }

    var passValue = passInput.value.trim();
    var confirmValue = confirmInput.value.trim();

    if (passValue === "" || passValue.length < 8) {
        passValid = false;
        passError.textContent = "Password must be at least 8 characters long";
    } else {
        passError.textContent = "";
    }


    if (passValue !== confirmValue) {
        confirmValid = false;
        confirmError.textContent = "Password does not match";
    } else {
        confirmError.textContent = "";
    }


    if (!nameValid || !emailValid || !phoneValid || !passValid || !confirmValid) {
        e.preventDefault();
        return false;
    }

    // Prevent the form from submitting since there's no backend
    e.preventDefault();
    alert("Account successfully created!");
    window.location.href = "login.html";

    return false;
}
}

function logout() {
    sessionStorage.clear(); //clears all session data
    alert("Logout Successful!");
    window.location.href = "index.html"; //goes back to home screen
}
