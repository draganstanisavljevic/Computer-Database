'use strict';

var MainPage = function() {

  var host = "http://computer-database.herokuapp.com/computers";
  var nameOfTheApplicationInHeaderXpath = "/html/body/header/h1/a";
  var searchBoxId = "searchbox";  
  var searchSubmitId = "searchsubmit";
  var addNewComputerId = "add";
  var previousButtonText = "← Previous";
  var previousButtonLink = "";
  var nextButtonText = "Next →";
  var nextButtonLink = "?p=1"
  var computerNameLinkText = "Computer name";
  var introducedLinkText = "Introduced";
  var discontinuedLinkText = "Discontinued";
  var companyLinkText = "Company";
  var sucesfullAddedMesageXpath = "//*[@id='main']/div[1]";
  var succesfullyDeletedMesageXpath = "//*[@id='main']/div[1]"
  var totalAmountsOfComputersXpath = "//*[@id='main']/h1";
  
  
  var nameOfTheApplicationInHeaderElement = element(by.xpath(nameOfTheApplicationInHeaderXpath));
  var searchBoxInputField = element(by.id(searchBoxId));
  var totalAmountsOfComputersElement = element(by.xpath(totalAmountsOfComputersXpath));
  var searchSubmitButton = element(by.id(searchSubmitId));
  var addNewComputerButton = element(by.id(addNewComputerId));
  var previousButton = element(by.linkText(previousButtonText));
  var nextButton = element(by.linkText(nextButtonText));
  var computerNameLink = element(by.linkText(computerNameLinkText));
  var introducedLink = element(by.linkText(introducedLinkText));
  var discontinuedLink = element(by.linkText(discontinuedLinkText));
  var companyLink = element(by.linkText(companyLinkText));
  var sucesfullyAddedMesage = element(by.xpath(sucesfullAddedMesageXpath));
  var succesfullyDeletedMesageContainer = element(by.xpath(succesfullyDeletedMesageXpath));
  
  this.get = function() {
    browser.get(host);
  };
  
  this.getHost = function() {
    return host;
  };
  
  this.getNameOfTheApplicationInHeaderElement = function() {
	return nameOfTheApplicationInHeaderElement.getText();
  }
  
  this.getTotalAmountsOfComputersElement = function() {
	return totalAmountsOfComputersElement.getText();
  }
  
  this.isSearchBoxInputFieldPresent = function() {
	return searchBoxInputField.isPresent();
  }
  
  this.isSearchSubmitButtonPresent = function() {
	return searchSubmitButton.isPresent();
  }
  
  this.isAddNewComputerButtonPresent = function() {
	return addNewComputerButton.isPresent();
  }
  
  this.isPreviousButtonPresent = function() {
	return previousButton.isPresent();
  }
  
  this.isNextButtonPresent = function() {
	return nextButton.isPresent();
  }
  
  this.isComputerNameLinkPresent = function() {
	return computerNameLink.isPresent();
  }
  
 this.isIntroducedLinkPresent = function() {
	return introducedLink.isPresent();
  }
  
 this.isDiscontinuedLinkPresent = function() {
	return discontinuedLink.isPresent();
  }
  
 this.isCompanyLinkPresent = function() {
	return companyLink.isPresent();
  }
  
 this.clickAddNewComputerButton = function() {
	return addNewComputerButton.click();
  }
  
  this.getSucesfullyAddedMesage = function() {
	return sucesfullyAddedMesage.getText();
  } 

  this.setSearchField = function (computerName)  {
	  searchBoxInputField.sendKeys(computerName);
  }
  
  this.submitSearch = function () {
	  searchSubmitButton.click();
  };
  
  this.isSucesfullyAddedMesagePresent = function() {
	return sucesfullyAddedMesage.isPresent();
  }; 
  
 this.clickComputerNameLink = function() {
	return computerNameLink.click();
 };
 
 this.getComputerNameLink = function(computerName) {
	return element(by.linkText(computerName));
 }; 
 
 this.findComputer = function(computerName) {
	this.setSearchField(computerName);
	this.submitSearch();
 };
 
 this.openEditComputerPage = function(computerName) {
	this.findComputer(computerName);
	this.getComputerNameLink(computerName).click();
 };
 
 this.getSuccessfullyDeletedMessage = function(computerName) {
	return succesfullyDeletedMesageContainer.getText();
 }; 
  
};

module.exports = MainPage;