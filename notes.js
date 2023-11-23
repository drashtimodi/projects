const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
show();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/Capture.png";

    let s1 = document.createElement("span");
    let s2 = document.createElement("span");
    let s3 = document.createElement("span");
    let s4 = document.createElement("span");

    s1.className = "button";
    s2.className = "button";
    s3.className = "button";
    s4.className = "button";

    s1.id = "grey";
    s2.id = "green";
    s3.id = "yellow";
    s4.id = "pink";

    notesContainer.appendChild(inputBox).appendChild(img);
    notesContainer.appendChild(inputBox).appendChild(s1);
    notesContainer.appendChild(inputBox).appendChild(s2);
    notesContainer.appendChild(inputBox).appendChild(s3);
    notesContainer.appendChild(inputBox).appendChild(s4);

})

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    } else if (e.target.id === "grey") {
        e.target.parentElement.style.background = "rgb(173, 234, 243)";
        e.target.parentElement.style.color = "purple";
    } else if (e.target.id === "yellow") {
        e.target.parentElement.style.background = "rgba(255, 255, 0, 0.603)";
        e.target.parentElement.style.color = "red";
    } else if (e.target.id === "green") {
        e.target.parentElement.style.background = "rgba(242, 161, 63, 0.651)";
        e.target.parentElement.style.color = "black";
    } else if (e.target.id === "pink") {
        e.target.parentElement.style.background = "pink";
        e.target.parentElement.style.color = "blue";
    }



})