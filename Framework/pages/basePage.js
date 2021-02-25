const { Builder, By, Key, until } = require('selenium-webdriver');
var chai = require('chai');
chai.use(require('chai-as-promised'));

class Page {
  constructor(driver) {
    this.driver = driver;
  }

  visit(url) {
    return this.driver.get(url);
  }

  currentPage() {
    return this.driver.getCurrentUrl();
  }
  
  assertPage(url) {
    return chai.expect(this.driver.getCurrentUrl()).to.eventually.contain(url);
  }

  quit() {
    return this.driver.quit();
  }

  find(el) {
    this.driver.wait(until.elementLocated(el), 5000);
    return this.driver.findElement(el);
  }

  write(el, txt) {
    return this.find(el).sendKeys(txt);
  }

  click(el) {
    return this.find(el).click();
  }

  select(el, val) {
    this.click(el);
    return this.write(el, val); // select works by sending keys
  }

  assertElement(el) {
    return chai.expect(this.find(el)).to.eventually.be.not.null;
  }
}

module.exports = Page;