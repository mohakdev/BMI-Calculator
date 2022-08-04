console.log("JS Running")

const ageField = document.getElementById("ageField");
const heightField = document.getElementById("heightField");
const heightUnitElement = document.getElementById("heightUnit");

const weightUnitElement = document.getElementById("weightUnit");
const weightField = document.getElementById("weightField");
const calculateBtn = document.getElementById("calculateBtn");


calculateBtn.onclick = function ()
{
    const heightUnit = heightUnitElement.value;
    const weightUnit = weightUnitElement.value;
    
    const age = ageField.value;
    const height = heightField.value;
    const weight = weightField.value;
    let Bmi = calculateBmi(age, height, weight);
    const bmiDisplay = document.getElementById("bmiNumber");
    bmiDisplay.firstChild.nodeValue = "Your BMI is " + Bmi + "/m";

    const meterSquare = document.getElementById("MeterSquare");
    meterSquare.innerHTML = 2;
    
}

function calculateBmi(age, height, weight) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}