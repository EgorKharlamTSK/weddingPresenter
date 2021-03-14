"use strict"


function price(){

    let timeValue = document.getElementById("timevalue");
    let timeSlider = document.getElementById("time");
    let checkDisplay = document.getElementById("display");
    let checkLight = document.getElementById("light");
    let format = document.getElementById("format").value;
    let djValue = document.getElementById("djvalue");
    let dj = document.getElementById("dj");
    let djHour = 1250;
    let result = 0;
    let display = 0;
    let light = 0;
    let vremya =0;

    if(checkDisplay.checked){
        display = checkDisplay.value;
    }else{
        display = 0;
    }

    if(checkLight.checked){
        light = checkLight.value;
    }else{
        light = 0;
    }

    timeSlider.onchange = function() {
        timeValue.innerHTML = this.value;
    }
    timeValue.innerHTML = timeSlider.value;


    djValue.innerHTML = dj.value;

    dj.onchange = function() {
        djValue.innerHTML = this.value;
    }

    result = (format * timeSlider.value) + (djHour * dj.value) + Number(display) + Number(light);
    document.getElementById("sum").innerHTML = Math.round(result) + " рублей";
}

price();

