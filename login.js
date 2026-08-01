window.onload = function() {



    // Get form elements for validation
    var form = document.getElementById("loginForm");
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");    
    var passInput = document.getElementById("password");
    var passError = document.getElementById("passwordError");



    form.onsubmit = function(e) {
        var nameValid = true;
        var passValid = true;

        var nameValue = nameInput.value.trim();
            if (nameValue === "" || !/^[A-Za-z\s]+$/.test(nameValue)) {
            nameValid = false;
            nameError.textContent = "Name field cannot be empty or use invalid characters";
        } else {
            nameError.textContent = "";
        }


        var passValue = passInput.value.trim();
        if (passValue === "" || passValue.length < 8) {
            passValid = false;
            passError.textContent = "Password must be at least 8 characters long";
        } else {
            passError.textContent = "";
        }

        if (!nameValid || !passValid ) {
            e.preventDefault();
            return false; 
        }
        // Prevent the form from submitting since there's no backend
        e.preventDefault();
        alert("Welcome back " + nameValue + "!");
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("name", nameInput);

        window.location.href = "index.html";

        return false;
    }
}

function logout() {
    sessionStorage.clear(); //clears all session data
    window.location.href = "index.html"; //goes back to home screen
}