const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const currentyear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;