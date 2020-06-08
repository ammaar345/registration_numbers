//
var storedPlates = localStorage["Plates"]
let regNumbers = [];
var arrAll = [];
if (storedPlates) {
    regNumbers = JSON.parse(storedPlates)


}
const plateFunc = RegNumber(regNumbers);
//
const button = document.querySelector(".btnAdd");
const text = document.querySelector(".regNumber");
const town = document.getElementById("townSelect");
//const storedRegState = localStorage["Plates"];
const regNumList = document.querySelector(".regNumList");
var node = document.createElement("li");
regNumList.innerHTML = "";

// function filtering() {

//loop over a list of reg numbers

for (var i = 0; i < regNumbers.length; i++) { //array from main to go in for loop
    const currentReg = regNumbers[i];

    regNumList.appendChild(node);
    node.innerHTML = currentReg;
    // 
}
// }

function append() {
    var textVal = text.value;
    var townVal = town.options[town.selectedIndex].value;
    // var textnode = document.createTextNode(textVal);
    plateFunc.addRegNumber(textVal);
    //plateFunc.filter(townVal, arrAll);
    //filtering();
    var storingPlates = plateFunc.plateStorage();
    var regPlates = JSON.stringify(storingPlates);
    localStorage['Plates'] = regPlates;


}

button.addEventListener("click", append)