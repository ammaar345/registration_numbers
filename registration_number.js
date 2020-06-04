let regState;
if (localStorage["Plates"]) {
   regState = JSON.parse(localStorage['Plates']);
}
const plateFunc = RegNumber(regState);
//
const button = document.querySelector(".btnAdd");
const text = document.querySelector(".regNumber");
//const townVal=document.querySelector(".town-select");
const item1 = document.getElementById("List1");
const town = document.getElementById("townSelect");
const storedRegState = localStorage["Plates"];

for (plateNo in plateFunc.plateStorage()) {
   item1.innerHTML = plateFunc.objToString();
} //how to display in a list
function append() {
   var textVal = text.value;
   var townVal = town.options[town.selectedIndex].value;
   var node = document.createElement("li");
   var textnode = document.createTextNode(textVal);

   plateFunc.numRegister(textVal);
   if (textVal) {

      //item1.parentNode.removeChild(item1)
      if (textVal.startsWith("CA") && (textVal.length === 10)) {

         node.appendChild(textnode);
         item1.appendChild(node);
      }
      else if (textVal.startsWith("CJ") && (textVal.length === 10)) {
         node.appendChild(textnode);
         item1.appendChild(node);

      }
      else if (textVal.startsWith("CL") && (textVal.length === 10)) {
         node.appendChild(textnode);
         item1.appendChild(node);
      }
      // else if (textVal.startsWith("CAG"){(george)
      //   item1.appendChild(node);
      // }
      // console.log(townVal);
      // console.log(textnode);
      // console.log(textVal.length);
      var storingPlates = plateFunc.plateStorage();
      var regPlates = JSON.stringify(storingPlates);
      localStorage['Plates'] = regPlates;

   }
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