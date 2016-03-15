'use strict';

var AddComputerPage = function() {
	
	var pageUrl = "http://computer-database.herokuapp.com/computers/new";

	var addComputerPageTitleXpath = "//*[@id='main']/h1";
	var computerNameLabelXpath = "//*[@id='main']/form/fieldset/div[1]/label";
	var introducedLabelXpath = "//*[@id='main']/form/fieldset/div[2]/label";
	var discontinuedDateLabelXpath = "//*[@id='main']/form/fieldset/div[3]/label";
	var companyLabelXpath = "//*[@id='main']/form/fieldset/div[4]/label";
	var submitButtonXpath = "//*[@id='main']/form/div/input";
	var cancelLinkText = "Cancel";
	//var errorMessageContainerXpath = "/html/body/section/form/fieldset/div[1]";
	var errorMessageContainerXpath = "//*[@id='main']/div[1]";	
	var deleteButtonXpath = "//*[@id='main']/form[2]/input";
	
	var pageTitleElement = element(by.xpath(addComputerPageTitleXpath));
	var computerNameLabel =  element(by.xpath(computerNameLabelXpath));
	var introducedLabel =  element(by.xpath(introducedLabelXpath));
	var discontinuedDateLabel =  element(by.xpath(discontinuedDateLabelXpath));
	var companyLabel =  element(by.xpath(companyLabelXpath));
	var computerNameInputBox =  element(by.id("name"));
	var introducedInputBox =  element(by.id("introduced"));
	var discontinuedDateInput =  element(by.id("discontinued"));
	var companySelectBox =  element(by.id("company"));
	var submitButton = element(by.xpath(submitButtonXpath));
	var cancelLink = element(by.linkText(cancelLinkText));
	var errorMessageContainer = element(by.xpath(errorMessageContainerXpath));
	var deleteButton = element(by.xpath(deleteButtonXpath));
	
	this.get = function() {
		browser.get(pageUrl);
	};
  
	this.getPageTitle = function() {
		return pageTitleElement.getText();
	}
  
	this.getComputerNameLabel = function() {
		return computerNameLabel.getText();
	}
  
	this.getIntroducedLabel = function() {
		return introducedLabel.getText();
	}
	
	this.getDiscontinuedDateLabel = function() {
		return discontinuedDateLabel.getText();
	}

	this.getCompanyLabel = function() {
		return companyLabel.getText();
	}
  
	this.isComputerNameInputFieldPresent = function() {
		return computerNameInputBox.isPresent();
	}
  
	this.isIntroducedInputFieldPresent = function() {
		return introducedInputBox.isPresent();
	}
	
	this.isDiscontinuedDateInputFieldPresent = function() {
		return discontinuedDateInput.isPresent();
	}
	
	this.isCompanySelectBoxPresent = function() {
		return companySelectBox.isPresent();
	}
  
	this.isSubmitButtonPresent = function() {
		return submitButton.isPresent();
	}
	
	this.isCancelLinkPresent = function() {
		return cancelLink.isPresent();
	}
	
	this.setComputerName = function(name) {
		computerNameInputBox.sendKeys(name);
	};
	
	this.setIntroducedDate = function(introducedDate) {
		introducedInputBox.sendKeys(introducedDate);
	};
	
	this.setDiscontinuedDate = function(discontinuedDate) {
		discontinuedDateInput.sendKeys(discontinuedDate);
	};
	
	this.setCompany = function(){
		companySelectBox.$('[value="17"]').click();
	};
	
	this.submitForm = function(){
		submitButton.click();
	}

	this.clickCancelButton = function(){
		cancelLink.click();
	};
	
	this.getErrorMessageContainerClass = function(){
		errorMessageContainer.getAttribute("class");
	};	

	this.getDeleteButton = function(){
		return deleteButton;
	};
	
	this.deleteComputer = function(){
		return this.getDeleteButton().click();
	};

	this.cancelFilledForm = function(name, introducedDate, discontinuedDate, company){
		this.setComputerName(name);
		this.setIntroducedDate(introducedDate);
		this.setDiscontinuedDate(discontinuedDate);
		this.setCompany(company);
		this.clickCancelButton();
	};
	
	this.submitAddComputerForm = function(name, introducedDate, discontinuedDate, company){
		this.setComputerName(name);
		this.setIntroducedDate(introducedDate);
		this.setDiscontinuedDate(discontinuedDate);
		this.setCompany(company);
		submitButton.click();
	};	
	

};

module.exports = AddComputerPage;