/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengths = document.querySelector("#length")
const volume = document.querySelector("#volume")
const mass = document.querySelector("#mass")

let input = document.querySelector('input');
input.addEventListener('input', resizeInput);
resizeInput.call(input);

function resizeInput() {
    this.style.width = (this.value.length + 2)+ "ch";
}

const button = document.querySelector("#btn")
button.addEventListener("click",function(){
    lengths.textContent = `${input.value} meters =
     ${(input.value*3.281).toFixed(3)} feet 
    | ${input.value} feet = ${(input.value/3.281).toFixed(3)} meters`
    
    volume.textContent = `${input.value} liters =
     ${(input.value*0.264).toFixed(3)} gallons 
    | ${input.value} gallons = ${(input.value/0.264).toFixed(3)} liters`
    
    mass.textContent = `${input.value} kilo =
     ${(input.value*2.204).toFixed(3)} pounds 
    | ${input.value} pounds = ${(input.value/2.204).toFixed(3)} kilos`
})

