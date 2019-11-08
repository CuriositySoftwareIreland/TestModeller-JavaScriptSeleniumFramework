/* const { Builder, By, Key, until } = require("selenium-webdriver");
var driver = new Builder().forBrowser("chrome").build();
var chai = require("chai");
chai.use(require("chai-as-promised"));

var Create_New_Customer_Account = require('../pages/Create_New_Customer_Account');

//http://public.dev.testinsights.io/app/#!/model-engine/guid/94ccac2a-d139-4c32-91c2-55568f1b9b79
describe("MagentoRegister_DefaultProfile", function() {
  this.timeout(50000);

  
  
  // groups= {"5bd935d1-e1ab-40d4-a112-97e682437c5e","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlPositiveFirstNamePositiveLastNameGoToUrlPositiveSortBySortByList1", async function() {
    this.guid = "5bd935d1-e1ab-40d4-a112-97e682437c5e";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("Mavis");

    await _Create_New_Customer_Account.Enter_Last_Name("Moen");

  });

  // groups= {"090ba149-d916-4c19-a9ee-195fbf5f7234","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlPositiveFirstNamePositiveLastNameGoToUrlPositiveSortBySortByList2", async function() {
    this.guid = "090ba149-d916-4c19-a9ee-195fbf5f7234";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("Darien");

    await _Create_New_Customer_Account.Enter_Last_Name("O'Kon");

  });

  // groups= {"e6ad70a5-7676-43e0-9750-9c08939048c3","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlPositiveFirstNamePositiveLastNameGoToUrlPositiveSortBySortByList3", async function() {
    this.guid = "e6ad70a5-7676-43e0-9750-9c08939048c3";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("Beverly");

    await _Create_New_Customer_Account.Enter_Last_Name("O'Conner");

  });

  // groups= {"7a3c271a-0abc-4ee6-856e-a0f9f8be1087","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlPositiveFirstNameNegativeLastNameGoToUrlPositiveSortBySortByList4", async function() {
    this.guid = "7a3c271a-0abc-4ee6-856e-a0f9f8be1087";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("Keira");

    await _Create_New_Customer_Account.Enter_Last_Name("");

  });

  // groups= {"95a553c2-6791-4f07-8f16-53f7dd647405","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlPositiveFirstNameNegativeLastNameGoToUrlPositiveSortBySortByList5", async function() {
    this.guid = "95a553c2-6791-4f07-8f16-53f7dd647405";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("Mac");

    await _Create_New_Customer_Account.Enter_Last_Name("#!_ @");

  });

  // groups= {"18b88f6e-873d-499c-9447-c7c688c6b54f","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlNegativeFirstNamePositiveLastNameGoToUrlPositiveSortBySortByList6", async function() {
    this.guid = "18b88f6e-873d-499c-9447-c7c688c6b54f";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("");

    await _Create_New_Customer_Account.Enter_Last_Name("Brekke");

  });

  // groups= {"769555c8-211a-45c2-85fc-95adca83b50f","Magento Register","Magento Register - Default Profile"}
  it("DefaultProfileGoToUrlNegativeFirstNamePositiveLastNameGoToUrlPositiveSortBySortByList7", async function() {
    this.guid = "769555c8-211a-45c2-85fc-95adca83b50f";

    var _Create_New_Customer_Account = new Create_New_Customer_Account(driver);
    await _Create_New_Customer_Account.GoToUrl();


    await _Create_New_Customer_Account.Enter_First_Name("#!_ @");

    await _Create_New_Customer_Account.Enter_Last_Name("Kulas");

  });

});
 */