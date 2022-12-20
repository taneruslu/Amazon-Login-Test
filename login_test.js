Feature('logincases');

Scenario('Doğru Kullanıcı adı Doğru şifre @testcase1',  ({ I }) => {
    I.amOnPage('https://amazon.com');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.waitForElement('//input[@id="ap_email"]');
    I.fillField('//input[@id="ap_email"]','taner_maraz@hotmail.com');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.waitForElement('//input[@id="ap_password"]');
    I.fillField('//input[@id="ap_password"]','Qwe05416281407');
    I.click('//input[@id="signInSubmit"]');
    //I.waitForElement("//*contains(text(), 'cannot find')] ");
    I.seeElement('//*[contains(text(),"Hello, Taner")]');
    
    
    
    });
Scenario('Doğru Kullanıcı adı Yanlış şifre @testcase2',  ({ I }) => {
    I.amOnPage('https://amazon.com');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.waitForElement('//input[@id="ap_email"]');
    I.fillField('//input[@id="ap_email"]','taner_maraz@hotmail.com');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.waitForElement('//input[@id="ap_password"]');
    I.fillField('//input[@id="ap_password"]','qwerty');
    I.click('//input[@id="signInSubmit"]');
    I.seeElement('//h4[contains(text(),"Important Message!")]');
    
    
    
    });

Scenario('Yanlış Kullanıcı adı, Yanlış şifre @testcase3',  ({ I }) => {
I.amOnPage('https://amazon.com');
I.waitForElement('//div[@id="nav-signin-tooltip"]');
I.click('//div[@id="nav-signin-tooltip"]');
I.waitForElement('//input[@id="ap_email"]');
I.fillField('//input[@id="ap_email"]','dddd');
I.waitForElement('//input[@id="continue"]');
I.click('//input[@id="continue"]');
//I.waitForElement('//input[@id="ap_password"]');
//I.fillField('//input[@id="ap_password"]','qwerty');
//I.click('//input[@id="signInSubmit"]');
//I.waitForElement("//*contains(text(), 'cannot find')] ");
I.seeElement('//h4[contains(text(),"There was a problem")]');



});





