function RegNumber(initialState) {

    var regNumbers = initialState ? initialState : [];

    function plateStorage() {
        console.log(regNumbers)
        return regNumbers;

    }

    function addRegNumber(regNumber) {
        //still need to filter out if its invalid **
        if (!regNumbers.includes(regNumber) && regNumber !== "") {
            if (regNumber.startsWith("CJ") || ("CL") || ("CY") && regNumber.length === 10) {

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
            } else {
                for (var i = 0; i < regNumbers.length; i++) {
                    var regOfAll = regNumbers[i];
                    arrAll.push(regOfAll);
                }
                return arrAll
            }
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