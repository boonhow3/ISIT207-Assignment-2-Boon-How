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

    const cars = [
        {
            name: "Sedan",
            price: 60,
            image: "media/Sedan.png"
        },
        {
            name: "Honda",
            price: 60,
            image: "media/Honda.png"
        },
        {
            name: "Toyota",
            price: 75,
            image: "media/Toyota.png"
        },
        {
            name: "BYD",
            price: 75,
            image: "media/BYD.png"
        },
        {
            name: "Tesla",
            price: 85,
            image: "media/Tesla.png"
        },
        {
            name: "BMW",
            price: 100,
            image: "media/BMW.png"
        },
    ];

    const container = document.getElementById("carContainer");

    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        container.innerHTML += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}" width="400">
                <h3>${car.name}</h3>
                <p>$${car.price}/day</p>

                <button onclick="reserveCar('${car.name}')">Reserve</button>
            </div>
        `;
    }
}

function reserveCar(carName) {
    localStorage.setItem("selectedCar", carName);
    window.location.href = "reserve.html";
}

function logout() {
    sessionStorage.clear(); //clears all session data
    alert("Logout Successful!");
    window.location.href = "index.html"; //goes back to home screen
}
