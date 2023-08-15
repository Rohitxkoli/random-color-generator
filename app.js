let btn = document.querySelector("#btn");
let heading = document.querySelector("#heading");
let box = document.querySelector(".box");

btn.addEventListener("click", () => {

    let color = randomColor();

    heading.innerText = color;
    box.style.backgroundColor = color;
})

// random color logic

function randomColor() {
    let red; //0-255 range
    let green;
    let blue;

    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    let rgbColor = `rgb(${red},${green},${blue})`;

    return rgbColor;
}