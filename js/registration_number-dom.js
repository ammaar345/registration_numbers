var storedPlates = localStorage["Plates2"]
let regNumbers2 = [];
if (storedPlates) {
    regNumbers2 = JSON.parse(storedPlates)


}
const regNumFunc = RegNumber(regNumbers2);

const btnAdd = document.querySelector(".btnAdd-2");
const regEntered = document.querySelector(".regNumber-2");
const townSelected = document.getElementById("townSelect-2");
const msg2 = document.querySelector(".msg-2");
const regNum = document.querySelector(".registrationsList");


function filtering() {
    regNum.innerHTML = "";
    var townVal2 = townSelected.options[townSelected.selectedIndex].value;
    //loop over a list of reg numbers
    regNumbers2 = regNumFunc.filter(townVal2);
    for (var i = 0; i < regNumbers2.length; i++) {
        const currentReg2 = regNumbers2[i];
        var node2 = document.createElement("li");
        regNum.appendChild(node2);
        node2.innerHTML = currentReg2;
        node2.classList.add("plateStyle")
    }
}

function append() {
    var textVal2 = (regEntered.value).toUpperCase();
    msg2.innerHTML = regNumFunc.checkText(textVal2);
    msg2.classList.add(regNumFunc.classAdd(textVal2))
    if (regNumFunc.checkExists(textVal2, regNumFunc.plateStorage())) {
        var node2 = document.createElement("li");
        regNum.appendChild(node2);
        node2.innerHTML = textVal2;
        node2.classList.add("plateStyle")
    }
    regNumFunc.addRegNumber(textVal2);
    var storingPlates2 = regNumFunc.plateStorage();
    var regPlates2 = JSON.stringify(storingPlates2);
    localStorage['Plates2'] = regPlates2;
    regEntered.value = ""
    setTimeout(function () {
        msg2.innerHTML = "";
        msg2.classList.remove("success");
        msg2.classList.remove("failed");

    }, 4000)
    alert("bread")
}

filtering()
btnAdd.addEventListener("click", append)
townSelected.addEventListener("change", filtering)