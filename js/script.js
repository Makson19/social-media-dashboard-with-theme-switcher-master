const html = document.querySelector("html");
const checkbox = document.querySelector("#switcher");

checkbox.addEventListener('change', () => {
    html.classList.toggle('light-theme');
})