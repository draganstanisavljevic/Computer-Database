'use strict';
var addComputerPageObject = require('../pages/AddComputer.js')
var mainPagePageObject = require('../pages/MainPage.js')

var argv = require('minimist')(process.argv.slice(2));

describe('Check counter after adding, deleting and cancelling', function() {
	
	var addComputerPageTitleValue = "Add a computer";
	
	var computerTitle = makeComputerTitle();
	var introducedDate = "2016-02-04";
	var discontinuedDate = "2016-05-05"
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
	
	beforeEach(function() {
		browser.ignoreSynchronization = true;
		
		AddComputer = new addComputerPageObject();
		MainPage = new mainPagePageObject();
		MainPage.get(argv.applicationHost);
		browser.getCurrentUrl().then(function(text){
			expect(text).toEqual(argv.applicationHost);
		})
				
	});
	
	it('should increase total computer counter after adding new computer', function() {
			
		MainPage.getTotalAmountsOfComputersElement().then(function(original_text){
			MainPage.clickAddNewComputerButton();
			AddComputer.submitAddComputerForm(computerTitle, introducedDate, discontinuedDate, company );
			browser.sleep(4000);
            MainPage.getTotalAmountsOfComputersElement().then(function(second_text){
                expect(parseInt(original_text) + 1).toEqual(parseInt(second_text));
            });
        });
		
			
	});	

	it('should not change total computer counter after cancellation', function() {
				
		MainPage.getTotalAmountsOfComputersElement().then(function(original_text){
            MainPage.clickAddNewComputerButton();
            AddComputer.cancelFilledForm(computerTitle, introducedDate, discontinuedDate, company );
            MainPage.getTotalAmountsOfComputersElement().then(function(second_text){
                expect(parseInt(original_text)).toEqual(parseInt(second_text));
            });
        });
			
	});
	
	it('should decrease total counter after deleting', function() {

		MainPage.getTotalAmountsOfComputersElement().then(function(original_text){
            MainPage.openEditComputerPage(computerTitle);
            AddComputer.deleteComputer();
            MainPage.getTotalAmountsOfComputersElement().then(function(second_text){
                expect(parseInt(original_text) - 1).toEqual(parseInt(second_text));
            });
        });
		
	});
	
	
});
