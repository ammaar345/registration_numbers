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
	//
	
	it('should return ["CL 2152","CL 913","CL 932-122"] ', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232","CY 435"]
		const regPlate = RegNumber();
		var location = "CL";
		//var arrayFilter = ["CL 2152", "CL 913", "CL 932-122", "CJ 1232"];
		assert.deepEqual(["CL 2152", "CL 913", "CL 932-122"], regPlate.testfilter(location,arrayMain));
	});
	it('should return ["CJ 8913","CJ 781","CJ 1232"]', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232","CY 435"]
		const regPlate = RegNumber();
		var location = "CJ";
		//var arrayFilter = ["CJ 8913", "CJ 781", "CL 2134"];
		assert.deepEqual(["CJ 8913", "CJ 781",'CJ 1232'], regPlate.testfilter(location,arrayMain));
	});
	it('should return ["CY 435"]', function () {
		const arrayMain = ["CJ 8913", "CJ 781", "CL 2152", "CL 913", "CL 932-122", "CJ 1232","CY 435"]
		const regPlate = RegNumber();
		var location = "CY";
		//var arrayFilter = ["CJ 123", "CY 435", "CL 1234"];
		assert.deepEqual(["CY 435"], regPlate.testfilter(location,arrayMain));
	});

});