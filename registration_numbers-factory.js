function RegNumber(initialState) {

    var regNumbers = initialState ? initialState : [];

    function plateStorage() {
        console.log(regNumbers)
        return regNumbers;

    }
    function addRegNumber(regNumber) {
        //still need to filter out if its invalid **  
        if (regNumber !== "" && /C[YLJ] \d{3,5}/.test(regNumber)||/C[YLJ] \d+-\d+/) {
if(!regNumbers.includes(regNumber)){

            regNumbers.push(regNumber);
            return true;
        }
       }
        return false;

    }

    // if (!regNumbers.includes(regNumber) && regNumber !== "") {
    //     if (regNumber.startsWith("CJ") && regNumber.length === 10 || regNumber.startsWith("CL") && regNumber.length === 10 || regNumber.startsWith("CY") && regNumber.length === 10) {


    //         regNumbers.push(regNumber);
    //     }
    // }

    function filter(location) {
        // CL, CY or contains(obtained from dropdown menu)
        var filteredList = [];
        for (var i = 0; i < regNumbers.length; i++) {
            var currentReg = regNumbers[i]; //if no work make var = const
            if (currentReg.startsWith(location)) {
                filteredList.push(currentReg);
            } else if (location === "all") {

                filteredList.push(currentReg);
            }





        }

        return filteredList

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