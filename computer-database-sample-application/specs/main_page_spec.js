'use strict';
var mainPagePageObject = require('../pages/MainPage.js')
var header = require('../pages/Header.js')

// spec.js
describe('Computer Database Main Page', function() {

var nameOfTheApplicationInHeader = "Play sample application — Computer database";
var totalAmountsOfComputers = "computers found"

var MainPage = new mainPagePageObject();
var Header = new header();
  
  
  it('should check all elements on the page', function() {
		browser.ignoreSynchronization = true;

		MainPage.get();

		expect(Header.getNameOfTheApplicationInHeaderElement()).toEqual(nameOfTheApplicationInHeader);
		expect(MainPage.getTotalAmountsOfComputersElement()).toMatch(totalAmountsOfComputers);
		expect(MainPage.isSearchBoxInputFieldPresent()).toBe(true);
		expect(MainPage.isSearchSubmitButtonPresent()).toBe(true);
		expect(MainPage.isAddNewComputerButtonPresent()).toBe(true);
		expect(MainPage.isNextButtonPresent()).toBe(true);
		expect(MainPage.isPreviousButtonPresent()).toBe(true);
		expect(MainPage.isComputerNameLinkPresent()).toBe(true);
		expect(MainPage.isIntroducedLinkPresent()).toBe(true);
		expect(MainPage.isDiscontinuedLinkPresent()).toBe(true);
		expect(MainPage.isCompanyLinkPresent()).toBe(true);
  });
});