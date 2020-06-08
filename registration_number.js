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


function filtering(townValue) {

    //loop over a list of reg numbers
    regNumbers = plateFunc.filter(townValue);
    for (var i = 0; i < regNumbers.length; i++) { //array from main to go in for loop
        const currentReg = regNumbers[i];
        var node = document.createElement("li");
        regNumList.appendChild(node);
        node.innerHTML = currentReg;
        node.classList.add("plateStyle")
            // 
    }
}

function append() {
    regNumList.innerHTML = "";

    var textVal = text.value;
    var townVal = town.options[town.selectedIndex].value;

    // var textnode = document.createTextNode(textVal);
    plateFunc.addRegNumber(textVal);
    var filtered = plateFunc.filter(townVal);
    console.log(filtered);
    filtering(townVal);
    //storage section
    var storingPlates = plateFunc.plateStorage();
    var regPlates = JSON.stringify(storingPlates);
    localStorage['Plates'] = regPlates;


}

button.addEventListener("click", append)