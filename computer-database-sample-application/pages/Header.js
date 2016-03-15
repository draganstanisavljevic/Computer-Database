'use strict';

var Header = function() {

  var host = "http://computer-database.herokuapp.com/computers";
  var nameOfTheApplicationInHeaderXpath = "/html/body/header/h1/a";
 
  var nameOfTheApplicationInHeaderElement = element(by.xpath(nameOfTheApplicationInHeaderXpath));
 
  this.getNameOfTheApplicationInHeaderElement = function() {
	return nameOfTheApplicationInHeaderElement.getText();
  }
  
  
};

module.exports = Header;