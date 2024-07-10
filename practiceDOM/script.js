/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector("#container");
const button = document.querySelector("#btn");

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const h3Blue = document.createElement("h3");
h3Blue.textContent = "I'm a blue h3!";
h3Blue.style.color = "blue";
container.appendChild(h3Blue);

const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background-color: pink;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "me too!";
div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

function clickMe(){
    alert("Hellooooooo!!!!!!!!");
}

//button.addEventListener("click", clickMe);
button.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });