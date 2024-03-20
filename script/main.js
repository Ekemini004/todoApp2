

//get the searchbars ID
const searchBar = document.getElementById("inputCont");
const listCon = document.getElementById("listCont");

//create a function to handle the users input, in the input bar
 const addList = () => {
(inputCont.value === " ") ? alert ("Please enter an item") : (() => {
    const userInputList = document.createElement( "Li" )//create a container in the dom for each todo task the user inputs
 })
userInputList.textContent = inputCont.value;// the userinput will enter the container you created 
listCont.appendChild(li);// put the user input (now  in the conatine)r inside the main list container 

}

//save the userinput to local storage
const saveToLocal = () => {
    localStorage.setItem("data", listCont.textContent)
}