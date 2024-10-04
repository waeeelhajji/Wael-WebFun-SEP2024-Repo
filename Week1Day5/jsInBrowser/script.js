function Hello(){
    alert('Hello JS in The WEB')
}
// alert('Hello JS in The WEB')
console.log("hi")


function changeButton(element){
console.log(element.innerHTML) 
if(element.innerHTML == "ON"){

    element.innerHTML = "OFF" 
    element.style.backgroundColor = "red"
}else {
    element.innerHTML = "ON"
    element.style.backgroundColor = "green" 
}

}

function removeButton(element){
    element.remove()
}



