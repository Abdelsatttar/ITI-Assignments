let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let message = document.getElementById("message");


function redLight() {

    red.classList.add("active");

    message.innerText = "STOP";
    message.classList.add("red");

    setTimeout(function () {

        red.classList.remove("active");
        message.classList.remove("red");

        yellowLight();

    }, 3000);
}


function yellowLight() {

    yellow.classList.add("active");

    message.innerText = "READY";
    message.classList.add("yellow");

    setTimeout(function () {

        yellow.classList.remove("active");
        message.classList.remove("yellow");

        greenLight();

    }, 2000);
}


function greenLight() {

    green.classList.add("active");

    message.innerText = "GO";
    message.classList.add("green");

    setTimeout(function () {

        green.classList.remove("active");
        message.classList.remove("green");

        redLight();

    }, 3000);
}


redLight();