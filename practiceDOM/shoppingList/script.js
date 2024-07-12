const button = document.querySelector("button");
const ul = document.querySelector("ul");
let input = document.querySelector("input");


button.addEventListener("click", addItem);

function addItem(){
    item = input.value;
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "delete");
    span.textContent = item;
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    ul.appendChild(listItem);

    deleteBtn.addEventListener("click", ()=>{
        ul.removeChild(listItem);
    })

    input.focus();
    input.value = "";
}




