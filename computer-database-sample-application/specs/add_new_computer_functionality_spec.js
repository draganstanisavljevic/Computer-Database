// spec.js

'use strict';
var addComputerPageObject = require('../pages/AddComputer.js')
var mainPagePageObject = require('../pages/MainPage.js')

describe('Add New Computer', function() {
	
	var addComputerPageTitleValue = "Add a computer";
	
	var computerTitle = makeComputerTitle();
	var introducedDate = "2016-02-04";
	var expectedIntroducedDateInSerachTable = "04 Feb 2016"; 
	var discontinuedDate = "2016-05-05"
	var expectedDiscontinuedDateInSearchTable = "05 May 2016";	
	var company = "Sony";
	
	var AddComputer;
	var MainPage;
	
	
	function makeComputerTitle(){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		for( var i=0; i < 8; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	var sucesfullyAddedMesage = "Done! Computer " + computerTitle + " has been created";
	
	beforeEach(function() {
		browser.ignoreSynchronization = true;
		
		AddComputer = new addComputerPageObject();
		MainPage = new mainPagePageObject();
		MainPage.get(); 
		expect(browser.getCurrentUrl()).toEqual(MainPage.getHost());
		
		MainPage.clickAddNewComputerButton();
		
	});
 
	it('should cancel form on Add Computer page with all valid values', function() {
		
		expect(AddComputer.getPageTitle()).toEqual(addComputerPageTitleValue);
		
		AddComputer.setComputerName(computerTitle);
		AddComputer.setIntroducedDate(introducedDate);
		AddComputer.setDiscontinuedDate(discontinuedDate);
		AddComputer.setCompany();
		AddComputer.clickCancelButton();
		
		expect(MainPage.getSucesfullyAddedMesage()).not.toBe(sucesfullyAddedMesage);
		expect(browser.getCurrentUrl()).toEqual(MainPage.getHost());
			
	});
	
	it('should submit form on Add Computer page with empty name', function() {
			
		expect(AddComputer.getPageTitle()).toEqual(addComputerPageTitleValue);
		
		AddComputer.setComputerName("");
		AddComputer.setIntroducedDate(introducedDate);
		AddComputer.setDiscontinuedDate(discontinuedDate);
		AddComputer.setCompany();
		AddComputer.submitForm();
		
		var errorMessageContainer = element(by.xpath("/html/body/section/form/fieldset/div[1]"));
		expect(errorMessageContainer.getAttribute("class")).toEqual("clearfix error");
	
	});	
	
});
