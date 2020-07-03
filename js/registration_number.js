var storedPlates = localStorage["Plates"]
let regNumbers = [];
if (storedPlates) {
    regNumbers = JSON.parse(storedPlates)


}
const plateFunc = RegNumber(regNumbers);

const button = document.querySelector(".btnAdd");
const text = document.querySelector(".regNumber");
const town = document.getElementById("townSelect");
const msg = document.querySelector(".msg");
const regNumList = document.querySelector(".regNumList");

var reg = { registration: plateFunc.filter("all") };
res.innerHTML = regTemplate(reg);

function filtering() {
    res.innerHTML = "";
    var townVal = town.options[town.selectedIndex].value;
    //loop over a list of reg numbers

    reg = { registration: plateFunc.filter(townVal) };
    res.innerHTML = regTemplate(reg);


}

function append() {

    var textVal = (text.value).toUpperCase();
    msg.innerHTML = plateFunc.checkText(textVal);
    msg.classList.add(plateFunc.classAdd(textVal))
    plateFunc.addRegNumber(textVal);
    var storingPlates = plateFunc.plateStorage();
    var regPlates = JSON.stringify(storingPlates);
    localStorage['Plates'] = regPlates;
    text.value = "";


    var reg = { registration: plateFunc.plateStorage() };
    res.innerHTML = regTemplate(reg);

    filtering();
    setTimeout(function () {
        msg.innerHTML = "";
        msg.classList.remove("success");
        msg.classList.remove("failed");

    }, 4000)

}

filtering()
button.addEventListener("click", append)
town.addEventListener("change", filtering)