var container = document.querySelector(".container")
console.log(container)

var petImg = document.querySelector("img");
    
function ChangeImg() {
    petImg.src = "https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=lA8UuoHt";
    petImg.alt = "dog image";
}

function ChangeImgg() {
    petImg.src = "https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg";
    petImg.alt = "dog image";
}

function DarkMode(){
    container.classList.add("dark")
}

function LMode(){
    container.classList.remove("dark")
}

function chooseLunch(element) {
    console.log("You picked " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}


function message() {
    alert("Hello User");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");