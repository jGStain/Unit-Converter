let unitEl = document.getElementById("unit");
let buttonEl = document.getElementById("btn");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.624;
const gallonToLiter = 3.78541;
const kiloToPound = 2.204;
const poundToKilo = 0.453592;


buttonEl.addEventListener("click", function() {
    let baseValue = Number(unitEl.value);
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`;
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`;
});
