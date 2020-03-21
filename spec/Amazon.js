var testFactory = require('../utility/testFactory.js');

describe('Amazon test suite', function () {

  var categoryDropdown = element(by.id('searchDropdownBox'));
  var searchBox = element(by.id('twotabsearchtextbox'));
  var bookDetails= element(by.xpath("//div[contains(@class,'search-results')]/div[1]/div"));
  var firstBook = element(by.xpath("(//div[contains(@class,'search-results')]/div//h2//span)[1]"));
  var firstBookDetails = element(by.xpath("//div[@id='centerCol']"));

  beforeEach(function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.amazon.com');
    expect(browser.getCurrentUrl()).toEqual('https://www.amazon.com/');
  });

  it('Search for Books', function () {
     testFactory.selectDropdownbyNum(categoryDropdown,'Books')
    searchBox.sendKeys("science");
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    testFactory.elementDetails(bookDetails);
    firstBook.click();
    testFactory.elementDetails(firstBookDetails);
    browser.sleep(5000);
    
  });
});