'use strict';
var addComputerPageObject = require('../pages/AddComputer.js')
var mainPagePageObject = require('../pages/MainPage.js')

describe('Add New Computer', function() {
	
	// spec.js
	//Scenario: submit Add new computer form with valid data
	//Expected: * User is redirected to C view
	//		  * ${Random} computer is appeared in table
	//		  * ${Random} computer has valid info which was entered by user
	//		  * Notification message is shown that C has been created
	
	var addComputerPageTitleValue = "Add a computer";
	var computerNameLabelValue =  "Computer name";
	var introducedLabelValue = "Introduced date";
	var discontinuedDateLabelValue = "Discontinued date";
	var companyLabelValue = "Company";
	
	var computerTitle = makeComputerTitle();
	var introducedDate = "2016-02-04";
	var expectedIntroducedDateInSerachTable = "04 Feb 2016"; 
	var discontinuedDate = "2016-05-05"
	var expectedDiscontinuedDateInSearchTable = "05 May 2016";	
	var company = "Sony";
	
	var searchResultIntroducedDateXpath = "/html/body/section/table/tbody/tr/td[2]"
	var searchResultDiscontinuedDateXpath = "/html/body/section/table/tbody/tr/td[3]";
	var searchResultCompanyXpath = "/html/body/section/table/tbody/tr/td[4]";
	var foundIntroducedDateInTable = element(by.xpath(searchResultIntroducedDateXpath));
	var foundDiscontinuedDateInTable = element(by.xpath(searchResultDiscontinuedDateXpath));
	var foundCompanyInTable = element(by.xpath(searchResultCompanyXpath));
	
	function makeComputerTitle(){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		for( var i=0; i < 8; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	var sucesfullyAddedMesage = "Done! Computer " + computerTitle + " has been created";
 
	it('should submit form on Add Computer page with all valid values', function() {
		browser.ignoreSynchronization = true;
		
		var AddComputer = new addComputerPageObject();
		var MainPage = new mainPagePageObject();
		MainPage.get(); 
		expect(browser.getCurrentUrl()).toEqual(MainPage.getHost());
		
		MainPage.clickAddNewComputerButton();
		
		
		expect(AddComputer.getPageTitle()).toEqual(addComputerPageTitleValue);
		
		AddComputer.submitAddComputerForm(computerTitle, introducedDate, discontinuedDate, company );
		
		expect(MainPage.getSucesfullyAddedMesage()).toEqual(sucesfullyAddedMesage);
		expect(browser.getCurrentUrl()).toEqual(MainPage.getHost());
			
		MainPage.setSearchField(computerTitle);
		MainPage.submitSearch();
		expect(element(by.linkText(computerTitle)).isPresent());
		expect(foundIntroducedDateInTable.getText()).toEqual(expectedIntroducedDateInSerachTable);
		expect(foundDiscontinuedDateInTable.getText()).toEqual(expectedDiscontinuedDateInSearchTable);
		expect(foundCompanyInTable.getText()).toEqual(company);

	
	});
});
