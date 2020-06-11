
describe("Testing adding registration function.", function () {

	it("should return false if there is no space in between when adding a registration number.", function () {
		const regPlate = RegNumber();
		var regNumber = "CJ12345";
		assert.equal(false, regPlate.addRegNumber(regNumber));
	});
	it("should return true if there is a space in between when adding a registration number.", function () {
		const regPlate = RegNumber();
		var regNumber = "CJ 12345";
		assert.equal(true, regPlate.addRegNumber(regNumber));
	});
	it("should return true if there is a dash in between when adding a registration number.", function () {
		const regPlate = RegNumber();
		var regNumber = "CJ 123-45";
		assert.equal(true, regPlate.addRegNumber(regNumber));
	});


	it("should return false if the number plate exists already when trying to add a registration number.", function () {
		var regArray = ["CJ 123-45", "CY 12332"];
		const regPlate = RegNumber(regArray);
		var regNumber = "CJ 123-45";
		assert.equal(false, regPlate.addRegNumber(regNumber));
	});

});
describe("Testing filter function based on location.", function () {


	it('should return ["CL 2152","CL 913","CL 932-122"] ', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435"]
		const regPlate = RegNumber();
		var location = "CL";

		assert.deepEqual(["CL 2152", "CL 913", "CL 932-122"], regPlate.testfilter(location, arrayMain));
	});
	it('should return ["CJ 8913","CJ 781","CJ 1232"]', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435"]
		const regPlate = RegNumber();
		var location = "CJ";
		assert.deepEqual(["CJ 8913", "CJ 781", 'CJ 1232'], regPlate.testfilter(location, arrayMain));
	});
	it('should return ["CY 435"]', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435"]
		const regPlate = RegNumber();
		var location = "CY";
		assert.deepEqual(["CY 435"], regPlate.testfilter(location, arrayMain));
	});

});
describe("Testing if the correct message is being returned based on the registration number being entered.", function () {

	it('should return "This registration number is already taken." if the registration number exists already.', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435", "CJ 90012"];
		const regPlate = RegNumber(arrayMain);
		var plate = "CJ 90012";
		var msg = regPlate.checkText(plate)
		assert.equal("This registration number is already taken.", msg);
	});
	it('should return "Entry has been successfully added." if the registration number is not taken and follows the correct format.  .', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435", "CJ 90012"];
		const regPlate = RegNumber(arrayMain);
		var plate = "CJ 5512";
		var msg = regPlate.checkText(plate)

		assert.deepEqual("Entry has been successfully added.", msg);
	});
	it('should return "The format of this registration number is incorrect." if the format of the registration number is incorrect.', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435", "CJ 90012"];
		const regPlate = RegNumber(arrayMain);
		var plate = "CJ25512";
		var msg = regPlate.checkText(plate)


		assert.deepEqual("The format of this registration number is incorrect.", msg);
	});
	it('should return "Please enter a registration number." if the text box is left empty.', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232", "CY 435", "CJ 90012"];
		const regPlate = RegNumber(arrayMain);
		var plate = "";
		var msg = regPlate.checkText(plate)


		assert.deepEqual("Please enter a registration number.", msg);
	});


});


