window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let min = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMax = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= min){
        sliderOne.value = parseInt(sliderTwo.value) - min;
    }
    fillColor();
}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= min){
        sliderTwo.value = parseInt(sliderOne.value) + min;
    }
    fillColor();
}

function fillColor(){
    percent1 = (sliderOne.value / sliderMax) * 100;
    percent2 = (sliderTwo.value / sliderMax) * 100;
    sliderTrack.style.background = `linear-gradient(to right, grey ${percent1}%, black ${percent1}%, black ${percent2}%, grey ${percent2}% )`;
}
