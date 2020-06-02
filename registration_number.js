const button = document.querySelector(".btnAdd");
const text = document.querySelector(".regNumber");
//const townVal=document.querySelector(".town-select");
const town = document.getElementById("townSelect");
function append() {
var textVal=text.value;
   if (textVal) {
      var townVal = town.options[town.selectedIndex].value;
      console.log(townVal);
      var node = document.createElement("li");
      var textnode = document.createTextNode(text.value);
      node.appendChild(textnode);

      if (textVal.startsWith("CAA")) {
         document.getElementById("List").appendChild(node)
      }

      else if (textVal.startsWith("CJ")) {
         document.getElementById("List2").appendChild(node)
      }

   }
   else if (textVal.startsWith("CAG")) {
      document.getElementById("List3").appendChild(node)
   }
   else if (textVal.startsWith("CL")){
      document.getElementById("List4").appendChild(node)
   }
   //console.log(textnode)
}


button.addEventListener("click", append)