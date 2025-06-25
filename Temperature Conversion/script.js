const textBox = document.getElementById("text-box");
const toFahrenheit = document.getElementById("to-Fahrenheit");
const toCelsius = document.getElementById("to-celsius");
const result = document.getElementById("result-text");

let temperature = 0;

function conversion() {
  if (toFahrenheit.checked) {
    temperature = Number(textBox.value);
    temperature = (temperature * 9) / 5 + 32;
    result.textContent = temperature.toFixed(1) + " °F";
  } else if (toCelsius.checked) {
    temperature = Number(textBox.value);
    temperature = (temperature - 32) * (5 / 9);
    result.textContent = temperature.toFixed(1) + " °C";
  } else {
    result.textContent = "Please select a unit";
  }
}
