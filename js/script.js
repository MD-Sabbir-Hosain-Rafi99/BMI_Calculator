let ageInput = document.getElementById('ageInput');
let calculateBtn = document.getElementById('calculateBtn');
let feetInput = document.getElementById('feetInput');
let inchInput = document.getElementById('inchInput');
let weightInput = document.getElementById('weightInput');

let bmiDisplay = document.getElementById('bmiDisplay');

let ashColor = document.querySelector('.ashColor');
let sobujColor = document.querySelector('.sobujColor');
let holudColor = document.querySelector('.holudColor');
let lalColor = document.querySelector('.lalColor');

calculateBtn.addEventListener('click', () =>{
    let weight = parseFloat(weightInput.value)
    let heightFeet = parseFloat(feetInput.value);
    let heightInche = parseFloat(inchInput.value) ;
    let totalInches = (heightFeet * 12) + heightInche;
    let heightInMeter = totalInches * 0.0254;
    
    let bmi = weight / (heightInMeter * heightInMeter);
    // console.log(bmi.toFixed(2));
    bmiDisplay.innerHTML = bmi.toFixed(2);
    let bmiFinalOutput = parseFloat(bmiDisplay.innerHTML);
    if (bmiFinalOutput < 18.5) {
        ashColor.classList.remove("hidden"); 
    } else if (bmiFinalOutput >= 18.5 && bmiFinalOutput <= 24.9) {
        sobujColor.classList.remove("hidden");
    }else if (bmiFinalOutput >= 25 && bmiFinalOutput <= 29.9) {
        holudColor.classList.remove("hidden");
    }else if (bmiFinalOutput >= 30) {
        lalColor.classList.remove("hidden");
    }
})