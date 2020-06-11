function RegNumber(initialState) {

    var regNumbers = initialState ? initialState : [];
    var returnResult = ""
    function plateStorage() {
        console.log(regNumbers)
        return regNumbers;

    }

    function testfilter(location, registration) {
        // CL, CY or contains
        var filteredList = [];
        for (var i = 0; i < registration.length; i++) {
            const currentReg = registration[i];
            if (currentReg.startsWith(location)) {
                filteredList.push(currentReg);
            }
        }
        return filteredList;
    }
    function checkExists(reg, regArray) {
        if (/C[YLJ] \d{3,5}/.test(reg) || /C[YLJ] \d+-\d+/.test(reg)) {
            if (!regArray.includes(reg)) {
                return true
            }
        }
        else { return false }
    }
    function checkValid(regist) {
        if (/C[YLJ] \d{3,5}/.test(regist) || /C[YLJ] \d+-\d+/.test(regist)) {
            return true
        }
    }
    function addRegNumber(regNumber) {
        //still need to filter out if its invalid **  
        if (regNumber !== "" && /C[YLJ] \d{3,5}/.test(regNumber) || /C[YLJ] \d+-\d+/.test(regNumber)) {
            if (!regNumbers.includes(regNumber)) {

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
            if (town.value) {
                if (currentReg.startsWith(location)) {
                    filteredList.push(currentReg);
                } else if (location === "all") {

                    filteredList.push(currentReg);
                }


            }


        }

        return filteredList

    }
    function checkText(registerNum) {
        var msgReturned = ""
        if (registerNum === "") {
            // msg.classList.add("failed") 
            msgReturned = "Please enter a registration number."
        }
        else if (!checkValid(registerNum)) {
            //msg.classList.add("failed") 
            msgReturned = "The format of this registration number is incorrect."
        }

        else if (!checkExists(registerNum, plateStorage())) {
            // msg.classList.add("failed") 
            msgReturned = "This registration number is already taken."
        }

        else if (checkExists(registerNum, plateStorage())) {
            // msg.classList.add("success")
            msgReturned = "Entry has been successfully added."
        }
        return msgReturned
    }
    function classAdd(registerN) {
        var result = ""
        if (checkExists(registerN, plateStorage())) {
            result = "success"
        }
        else if (checkText() === "Please enter a registration number.") {
            result = "failed"

        }

        else if (checkText() === "The format of this registration number is incorrect.") {
            result = "failed"

        }
        else if (checkText() === "This registration number is already taken.") {
            result = "failed"

        }

        return result


    }
    // function classAddTest() {
      
    //     if (checkText() === "Please enter a registration number.") {
    //         returnResult = "failed"

    //     }

    //     else if (checkText() === "The format of this registration number is incorrect.") {
    //         returnResult = "failed"

    //     }
    //     else if (checkText() === "This registration number is already taken.") {
    //         returnResult = "failed"

    //     }
    //     else {returnResult="success"}
    //     return returnResult


    // }



    return {
        addRegNumber,
        //numRegister,
        //  numberPlates,
        plateStorage,
        filter,
        checkExists,
        testfilter,
        //  objToString,
        checkValid,
        checkText,
        classAdd,
        // classAddTest
    }
}