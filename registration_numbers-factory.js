function RegNumber(initialState) {
    var regNumbers = initialState ? initialState : {};
    function numRegister(numPlate) {
        //when the greet button is pressed check if this user was already greeted before
        //by looking if the userName exists in regNumbers if not increment this counter and update the screen

        if (regNumbers[numPlate] === undefined) {

            //add an entry for the user that was greeted in the Object Map
            regNumbers[numPlate] = 1;

            //regNumbers["Plate"]=numPlate;
        }
    }
    function plateStorage() {

        //var plates= JSON.stringify(regNumbers);
        //console.log(plateFunc.numberPlates())      
        console.log(regNumbers)
//how to add a title while adding the plate number
        return regNumbers;

    }
    function objToString() {
        for (var i = 0; i < plateFunc.numberPlates(); i++) {
            var pl = Object.keys(regNumbers)[i];
            //var listPlate=regNumbers[i];
            

        }
       // console.log(pl)
        return pl
    }
    // function allPaarl(){
    //for (var i=0;i<plateFunc.numberPlates();i++){

    //}
    // }
    // function allCape(){

    // for (var i=0;i<plateFunc.numberPlates();i++){

    // } 
    // }
    // function allStellies(){
    // for (var i=0;i<plateFunc.numberPlates();i++){

    // }
    // }
    function numberPlates() {
        var platesCount = Object.keys(regNumbers).length

        return platesCount
        //use to loop through obj
    }

    return {
        numRegister,
        numberPlates,
        plateStorage,
        objToString
    }
}