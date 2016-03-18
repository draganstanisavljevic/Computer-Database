// spec.js

'use strict';
var addComputerPageObject = require('../pages/AddComputer.js')
var mainPagePageObject = require('../pages/MainPage.js')

var argv = require('minimist')(process.argv.slice(2));

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
		MainPage.get(argv.applicationHost);
		
		browser.getCurrentUrl().then(function(text){
			expect(text).toEqual(argv.applicationHost);
		})
		
		MainPage.clickAddNewComputerButton();
		
	});
 
	it('should cancel form on Add Computer page with all valid values', function() {
		
		expect(AddComputer.getPageTitle()).toEqual(addComputerPageTitleValue);
		
		AddComputer.cancelFilledForm(computerTitle, introducedDate, discontinuedDate, company );
		
		expect(MainPage.getSucesfullyAddedMesage()).not.toBe(sucesfullyAddedMesage);
		browser.getCurrentUrl().then(function(text){
			expect(text).toEqual(argv.applicationHost);
		})
			
	});
	
	it('should submit form on Add Computer page with empty name', function() {
			
		expect(AddComputer.getPageTitle()).toEqual(addComputerPageTitleValue);		
		AddComputer.submitAddComputerForm("", introducedDate, discontinuedDate, company );
		
		expect(AddComputer.getErrorMessageContainerClass()).toEqual("clearfix error");		
	
	});	
	
});
