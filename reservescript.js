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
  

  const selectedCar = localStorage.getItem("selectedCar");

  if (selectedCar) {
      document.getElementById("car").value = selectedCar;
  }


  // Get form elements for validation
  var form = document.getElementById("CarReserve");
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");    
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var phoneInput = document.getElementById("phone");
  var phoneError = document.getElementById("phoneError");
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");    
  var cardnumInput = document.getElementById("cardnum");
  var cardnumError = document.getElementById("cardnumError");  
  var cardnameInput = document.getElementById("cardname");
  var cardnameError = document.getElementById("cardnameError");    
  var cvvInput = document.getElementById("cvv");
  var cvvError = document.getElementById("cvvError");


  form.onsubmit = function(e) {
    var nameValid = true;
    var phoneValid = true;
    var emailValid = true;      
    var cardnameValid = true;
    var cardnumValid = true;
    var cvvValid = true;

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

    var cardnameValue = cardnameInput.value.trim();
    if (cardnameValue === "" || !/^[A-Za-z\s]+$/.test(cardnameValue)) {
      cardnameValid = false;
      cardnameError.textContent = "Name field cannot be empty or use invalid characters";
    } else {
      cardnameError.textContent = "";
    }

    var cardnumValue = cardnumInput.value.trim();
    if (cardnumValue === "" || !/^[0-9]{16}$/.test(cardnumValue)) {
      cardnumValid = false;
      cardnumError.textContent = "Invalid bank card number";
    } else {
      cardnumError.textContent = "";
    }

    var cvvValue = cvvInput.value.trim();
    if (cvvValue === "" || !/^[0-9]{3}$/.test(cvvValue)) {
      cvvValid = false;
      cvvError.textContent = "Invalid CVV number";
    } else {
      cvvError.textContent = "";
    }


    if (!nameValid || !emailValid || !phoneValid || !cardnameValid || !cardnumValid || !cvvValid ) {
      e.preventDefault();
    // Additional prevention
      return false; 
    }
    // Prevent the form from submitting since there's no backend
    e.preventDefault();
    alert("Reservation Successful!");
    window.location.href = "index.html";

    return false;
  }
}

function logout() {
    sessionStorage.clear(); //clears all session data
    window.location.href = "index.html"; //goes back to home screen
}