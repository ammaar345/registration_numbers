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
const msg = document.querySelector(".msg");
//const storedRegState = localStorage["Plates"];
const regNumList = document.querySelector(".regNumList");


function filtering() {
    regNumList.innerHTML = "";
    var townVal = town.options[town.selectedIndex].value;
    //loop over a list of reg numbers
    regNumbers = plateFunc.filter(townVal);
    for (var i = 0; i < regNumbers.length; i++) { //array from main to go in for loop
        const currentReg = regNumbers[i];
        var node = document.createElement("li");
        regNumList.appendChild(node);
        node.innerHTML = currentReg;
        node.classList.add("plateStyle")
        // 
    }
}
// function checkText() {
//     msg.classList.remove("failed");
//     msg.classList.remove("success")
//     if (text.value === "") {
//         msg.classList.add("failed") 
//         msg.innerHTML = "Please enter a registration number." 
//     }
//     else if (!plateFunc.checkValid(text.value)) {
//         msg.classList.add("failed") 
//         msg.innerHTML = "The format of this registration number is incorrect."
//     }

//     else if (!plateFunc.checkExists(text.value, plateFunc.plateStorage())) {
//         msg.classList.add("failed") 
//         msg.innerHTML = "This registration number is already taken." }

//     else {msg.classList.add("success")
//         msg.innerHTML="Entry successfully added."}

// }
function append() {
  
    
    //msg.innerHTML=""

    var textVal = text.value;
    
    console.log(plateFunc.classAdd(textVal))
    console.log(plateFunc.checkText(textVal))
    msg.innerHTML= plateFunc.checkText(textVal);
    msg.classList.add(plateFunc.classAdd(textVal))
    if (plateFunc.checkExists(textVal, plateFunc.plateStorage())) {
        var node = document.createElement("li");
        regNumList.appendChild(node);
        node.innerHTML = textVal;
        node.classList.add("plateStyle")
    }

    console.log(plateFunc.checkExists(textVal, plateFunc.plateStorage()))
    //var textnode = document.createTextNode(textVal);
    plateFunc.addRegNumber(textVal);
    //var filtered = plateFunc.filter(townVal);
    //console.log(filtered);
    //filtering(townVal);
    //storage section
    var storingPlates = plateFunc.plateStorage();
    var regPlates = JSON.stringify(storingPlates);
    localStorage['Plates'] = regPlates;
    text.value = ""
    setTimeout(function () { 
        msg.innerHTML = "" ;
        msg.classList.remove("success");
        msg.classList.remove("failed");
       
    }, 4000)
}

filtering()
button.addEventListener("click", append)
town.addEventListener("change", filtering)