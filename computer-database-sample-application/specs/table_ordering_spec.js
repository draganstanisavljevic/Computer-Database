// spec.js

'use strict';
var addComputerPageObject = require('../pages/AddComputer.js')
var mainPagePageObject = require('../pages/MainPage.js')

describe('Check counter after adding, deleting and cancelling', function() {
	
	var addComputerPageTitleValue = "Add a computer";
	
	var introducedDate = "2016-02-04";
	var discontinuedDate = "2016-05-05"
	var company = "Sony";
	
	var AddComputer;
	var MainPage;
	
	beforeEach(function() {
		browser.ignoreSynchronization = true;
		
		AddComputer = new addComputerPageObject();
		MainPage = new mainPagePageObject();
		MainPage.get(); 
		expect(browser.getCurrentUrl()).toEqual(MainPage.getHost());
				
	});
	
	it('table should be ordered', function() {
		
		//1. Add new C with Name AA
		//Expected: * A is shown in table
		//2. Add new C with Name AAA
		//Expected: * AAA is shown in the table after AA
		//3. Add new C with Name 0
		//Expected: * 0 is shown in the table before a
		//4. Add new C with Name -1
		//Expected: * -1 is shown in the table before 0
			
		MainPage.getTotalAmountsOfComputersElement().then(function(original_text){
			var computerTitle = "AA";
			MainPage.clickAddNewComputerButton();
			AddComputer.submitAddComputerForm(computerTitle, introducedDate, discontinuedDate, company );			
			computerTitle = "AAA";
			MainPage.clickAddNewComputerButton();
			AddComputer.submitAddComputerForm(computerTitle, introducedDate, discontinuedDate, company );
			MainPage.clickAddNewComputerButton();
			AddComputer.submitAddComputerForm("0", introducedDate, discontinuedDate, company );
			MainPage.clickAddNewComputerButton();
			AddComputer.submitAddComputerForm("-1", introducedDate, discontinuedDate, company );
			
			MainPage.get();
			var resultTable = element(by.tagName("table"));
			var listOfComputers = resultTable.all(by.tagName("td")).all(by.tagName("a"));		
			
			 resultTable.all(by.tagName("td")).all(by.tagName("a")).map(function(elm, index) {
				return {
					index: index,
					text:elm.getText()
				};
			}).then(function(items){
				console.log(items);
				expect(items[0]).toEqual({index: 0, text: '-1'});
				expect(items[1]).toEqual({index: 1, text: '0'});
				expect(items[2]).toEqual({index: 2, text: 'AA'});
				expect(items[3]).toEqual({index: 3, text: 'AAA'});
			})


        });
		
			
	});	

	
	afterEach(function() {
		browser.ignoreSynchronization = true;
            MainPage.openEditComputerPage("AAA");
            AddComputer.deleteComputer();		
            MainPage.openEditComputerPage("AA");
            AddComputer.deleteComputer();		
            MainPage.openEditComputerPage("-1");
            AddComputer.deleteComputer();		
            MainPage.openEditComputerPage("0");
            AddComputer.deleteComputer();
				
	});	
 
	
});
