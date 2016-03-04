'use strict';

var AddComputerPage = function() {
	
	var pageUrl = "http://computer-database.herokuapp.com/computers/new";

	var addComputerPageTitleXpath = "/html/body/section/h1";
	var computerNameLabelXpath = "/html/body/section/form/fieldset/div/label";
	var introducedLabelXpath = "/html/body/section/form/fieldset/div[2]/label";
	var discontinuedDateLabelXpath = "/html/body/section/form/fieldset/div[3]/label";
	var companyLabelXpath = "/html/body/section/form/fieldset/div[4]/label";
	var computerNameInputBoxXpath = "/html/body/section/form/fieldset/div/div/input";
	var introducedInputBoxXpath = "/html/body/section/form/fieldset/div[2]/div/input";
	var discontinuedDateInputBoxPath = "/html/body/section/form/fieldset/div[3]/div/input";
	var companySelectBoxXpath = "/html/body/section/form/fieldset/div[4]/div/select";
	var submitButtonXpath = "/html/body/section/form/div/input";
	var cancelLinkText = "Cancel";
	
	var pageTitleElement = element(by.xpath(addComputerPageTitleXpath));
	var computerNameLabel =  element(by.xpath(computerNameLabelXpath));
	var introducedLabel =  element(by.xpath(introducedLabelXpath));
	var discontinuedDateLabel =  element(by.xpath(discontinuedDateLabelXpath));
	var companyLabel =  element(by.xpath(companyLabelXpath));
	var computerNameInputBox =  element(by.xpath(computerNameInputBoxXpath));
	var introducedInputBox =  element(by.xpath(introducedInputBoxXpath));
	var discontinuedDateInput =  element(by.xpath(discontinuedDateInputBoxPath));
	var companySelectBox =  element(by.xpath(companySelectBoxXpath));
	var submitButton = element(by.xpath(submitButtonXpath));
	var cancelLink = element(by.linkText(cancelLinkText));
	
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
	}	

};

module.exports = AddComputerPage;