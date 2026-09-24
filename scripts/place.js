const currentyear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

const temperature = 10;
const windSpeed = 5;

if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector('#wind-chill').textContent = calculateWindChill(temperature, windSpeed).toFixed(1);
}
else {
    document.querySelector('#wind-chill').textContent = 'N/A';
}