function RegNumber(initialState) {

    var regNumbers = initialState ? initialState : [];
    // function objToString() {
    //     for (var i = 0; i < plateFunc.numberPlates(); i++) {
    //         var pl = Object.keys(regNumbers)[i];
    //         //var listPlate=regNumbers[i];


    //     }
    //     // console.log(pl)
    //     return pl
    // }

    // function numberPlates() {
    //     var platesCount = Object.keys(regNumbers).length

    //     return platesCount
    //     //use to loop through obj
    // }
    // function numRegister(numPlate) {
    //     //when the greet button is pressed check if this user was already greeted before
    //     //by looking if the userName exists in regNumbers if not increment this counter and update the screen

    //     if (regNumbers[numPlate] === undefined) {

    //         //add an entry for the user that was greeted in the Object Map
    //         regNumbers[numPlate] = 1;

    //         //regNumbers["Plate"]=numPlate;
    //     }
    // }
    function plateStorage() {
        console.log(regNumbers)
        return regNumbers;

    }

    function addRegNumber(regNumber) {
        //still need to filter out if its invalid **

        if (regNumber.startsWith("CJ") || ("CL") || ("CY") && regNumber.length === 10) {
            if (!regNumbers.includes(regNumber) && regNumber !== "") {
                regNumbers.push(regNumber);
                return true;
            }
            return false;
        }
    }

    function filter(location, arrAll) {
        // CL, CY or contains(obtained from dropdown menu)
        var filteredList = [];
        for (var i = 0; i < regNumbers.length; i++) {
            var currentReg = regNumbers[i]; //if no work make var = const
            if (currentReg.startsWith(location)) {
                filteredList.push(currentReg);
            }
            else if (currentReg.startsWith("all")) {
                for (var i = 0; i < regNumbers.length; i++) {
                  var regOfAll=regNumbers[i];
                    arrAll.push(regOfAll);
                }
           return arrAll }
        }
        return filteredList;
    }
    return {
        addRegNumber,
        //numRegister,
        //  numberPlates,
        plateStorage,
        filter
        //  objToString,

    }
}