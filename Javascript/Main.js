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

    const height = convertHeight(heightUnit, heightField.value);
    console.log("Final Height -> " + height);
    const weight = convertWeight(weightUnit, weightField.value);
    console.log("Final Weight -> " + weight);

    let Bmi = calculateBmi(height, weight);

    const fitnessResultElement = document.getElementById("result");
    const fitnessResult = calculateFitness(Bmi);
    fitnessResultElement.innerHTML = fitnessResult;
    
    const bmiDisplay = document.getElementById("bmiNumber");
    bmiDisplay.firstChild.nodeValue = "Your BMI is " + Bmi + "/m";

    const meterSquare = document.getElementById("MeterSquare");
    meterSquare.innerHTML = 2;
    
}

//This converts every other Weight unit into kg
function convertWeight(unit, value) {
    console.log("Unit -> " + unit + " & Value-> " + value);
    if (unit === 'kg') { return value; }
    if (unit === 'lbs') {
        return value / 2.2046;
    }
}
//This converts every other Height unit into meter
function convertHeight(unit, value) {
    console.log("Unit -> " + unit + " & Value-> " + value);
    if (unit === 'm') { return value; }
    if (unit === 'cm') {
        return value / 100;
    }
    if (unit === 'ft') {
        return value / 3.281;
    }
}

function calculateBmi( height, weight) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function calculateFitness(bmi) {
    if (bmi < 18.5) {
        return "You are underweight";
    }
    else if (bmi < 25) {
        return "You are normal";
    }
    else if (bmi < 30) {
        return "You are overweight";
    }
    else {
        return "You are obese";
    }
}