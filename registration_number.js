//
var storedPlates = localStorage["Plates"]
let regNumbers = [];
var arrAll=[];
if (storedPlates) {
   regNumbers = JSON.parse(storedPlates)


}
const plateFunc = RegNumber(regNumbers);
//
const button = document.querySelector(".btnAdd");
const text = document.querySelector(".regNumber");
const town = document.getElementById("townSelect");
//const storedRegState = localStorage["Plates"];


function filtering(){

const regNumList = document.querySelector(".regNumList");
regNumList.innerHTML = "";
var node = document.createElement("li");
// loop over a list of reg numbers

for (var i = 0; i < regNumbers.length; i++) {//array from main to go in for loop
   const currentReg = regNumbers[i];
   node.innerHTML = currentReg; 
   regNumList.appendChild(node);
 // 

}
}

function append() {
   var textVal = text.value;
   var townVal = town.options[town.selectedIndex].value;
  // var textnode = document.createTextNode(textVal);
  plateFunc.addRegNumber(textVal);
   plateFunc.filter(townVal,arrAll)
   filtering();
   // console.log(town.value)
// if (town.value){
// if (townVal="all"){
   
// }


// }

  
      ///
     
    
      var storingPlates = plateFunc.plateStorage();
      var regPlates = JSON.stringify(storingPlates);
      localStorage['Plates'] = regPlates;


   // if(townVal=1){

   // }
   // else if(townVal=2){

   // }
   // else if(townVal=3){
   //  }
   // else if(townVal=4){

   // }


}

button.addEventListener("click", append)