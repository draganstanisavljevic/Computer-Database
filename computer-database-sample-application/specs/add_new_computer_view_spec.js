// spec.js

'use strict';
var addComputerPageObject = require('../pages/AddComputer.js')
var mainPagePageObject = require('../pages/MainPage.js')
var argv = require('minimist')(process.argv.slice(2));

describe('Computer Database Demo App', function() {
	
	var addComputerPageTitleValue = "Add a computer";
	var computerNameLabelValue =  "Computer name";
	var introducedLabelValue = "Introduced date";
	var discontinuedDateLabelValue = "Discontinued date";
	var companyLabelValue = "Company";
 
	it('should check all elements on the page Add Computer', function() {
		//1.Click Add a new C button
		//Expected: * Add new C page is opened
		//2.Verify page layout
		//Expected: * Name of app in the header
		  //* Add a computer header
		  //* Inputs + Labels : 
		  		//* C name
		  		//* Introduced date
		  		//* Discontinued date
		  //* Company label+selectbox
		  //* Create C button
		  //* Cancel button
		  
		browser.ignoreSynchronization = true;
		
		var AddComputer = new addComputerPageObject();
		var MainPage = new mainPagePageObject();
		MainPage.get(argv.applicationHost);
		
		browser.getCurrentUrl().then(function(text){
			expect(text).toEqual(argv.applicationHost);
		})
		
		MainPage.clickAddNewComputerButton();
		
		
		expect(AddComputer.getPageTitle()).toEqual(addComputerPageTitleValue);
		
		expect(AddComputer.getComputerNameLabel()).toEqual(computerNameLabelValue);
		expect(AddComputer.getIntroducedLabel()).toEqual(introducedLabelValue);
		expect(AddComputer.getDiscontinuedDateLabel()).toEqual(discontinuedDateLabelValue);
		expect(AddComputer.getCompanyLabel()).toEqual(companyLabelValue);
		expect(AddComputer.isComputerNameInputFieldPresent()).toBe(true);
		expect(AddComputer.isIntroducedInputFieldPresent()).toBe(true);
		expect(AddComputer.isDiscontinuedDateInputFieldPresent()).toBe(true);
		expect(AddComputer.isCompanySelectBoxPresent()).toBe(true);
		expect(AddComputer.isSubmitButtonPresent()).toBe(true);
		expect(AddComputer.isCancelLinkPresent()).toBe(true);
	
	});
});
