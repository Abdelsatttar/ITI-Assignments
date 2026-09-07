let image = document.getElementById("image");

let previous = document.getElementById("previous");
let next = document.getElementById("next");

let play = document.getElementById("play");
let stop = document.getElementById("stop");


let images = [
    "https://tse1.mm.bing.net/th/id/OIP.ckqUPFmJ_2hBF5YR7ec5nQHaEI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.w4TSbxnNQkP_SvhavHGCxQHaEP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://media.istockphoto.com/id/186746547/photo/river-nile.jpg?s=170667a&w=0&k=20&c=pW5DBm6NtD7MH0st8yHVb1YlS5ipqhKkuVz-KamhL4Q=",
    "https://i1.sndcdn.com/artworks-000058485822-ikxvyo-t500x500.jpg"
];


let currentImage = 0;

let timer;


function showImage() {

    image.src = images[currentImage];

}



function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {

        currentImage = 0;

    }

    showImage();

}


// الصورة اللي قبلها
function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage = images.length - 1;

    }

    showImage();

}


// Play
play.onclick = function () {

    clearInterval(timer);

    timer = setInterval(function () {

        nextImage();

    }, 2000);

};


// Stop
stop.onclick = function () {

    clearInterval(timer);

};


// Next
next.onclick = function () {

    nextImage();

};



previous.onclick = function () {

    previousImage();

};


// أول صورة
showImage();