
// Declare constants
const redLight = document.getElementById('red');
const greenLight = document.getElementById('green');
const yellowLight = document.getElementById('yellow');
const changeLightButton = document.getElementById("button");

let lightStatus = 0;

let green = true;
let red = false;

changeLightButton.addEventListener("click", e => {
    lightStatus++;
    if(lightStatus == 0){
        redLight.style.backgroundColor = "rgb(133, 132, 132)";
        yellowLight.style.backgroundColor = "rgb(133, 132, 132)";
        greenLight.style.backgroundColor = "green";
        green = true;
        red = false;
    } else if (lightStatus == 1 && green == true) {
        redLight.style.backgroundColor = "rgb(133, 132, 132)";
        yellowLight.style.backgroundColor = "yellow";
        greenLight.style.backgroundColor = "rgb(133, 132, 132)";
        green = false;
        red = false;
    } else if (lightStatus == 1 && red == true) {
        redLight.style.backgroundColor = "rgb(133, 132, 132)";
        yellowLight.style.backgroundColor = "yellow";
        greenLight.style.backgroundColor = "rgb(133, 132, 132)";
        green = false;
        red = false;
        lightStatus = -1;
    } else if (lightStatus == 2){
        redLight.style.backgroundColor = "red";
        yellowLight.style.backgroundColor = "rgb(133, 132, 132)";
        greenLight.style.backgroundColor = "rgb(133, 132, 132)";
        lightStatus = 0;
        red = true;
        green = false;
    }
})


