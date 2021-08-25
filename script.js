
const input = document.querySelector(".input")
const button = document.querySelector(".submit-button")
const list = document.querySelector(".list")



function addToDo() {
   const userInput = input.value;
   const words = document.createElement("li")
    words.innerHTML = userInput;
    list.append(words) ;
    

}

button.addEventListener("click", () => {
    addToDo();
})