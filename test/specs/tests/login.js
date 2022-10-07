const assert = require('assert');

describe('Login Test Suite', () =>{
   // Valid email: 1@2.com
   // Valid Password: password

    it('Should display error when password is missing', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('test@test.com');
        
        const submitButton = await $('#form-login > button');
        await submitButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not oppen');
        assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not oppen');
        await browser.pause(3000);
        
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    })
    
    it('should display error when email is missing', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('blah');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
        await browser.pause(3000);

        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    })

    it('should display error when email and password are missing', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
        await browser.pause(3000);
        
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    })

    it('should display error when email is incorrect', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('test@test.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(3000);

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(),'Invalid email and password', 'Alert text is not equal');

        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    })

    it('should display error when password is incorrect', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('blah');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(3000);

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(),'Invalid email and password', 'Alert text is not equal');

        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    })

    it('should display error when password case is incorrect', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('PASSWORD');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(3000);

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(),'Invalid email and password', 'Alert text is not equal');

        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    })

    it('should login with valid email and password', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(3000);

        const overlay = await $('#overlay');
        await overlay.isDisplayed();
        assert.equal(await overlay.isDisplayed(), false, 'Overlay is still displayed')

        await browser.pause(3000);
    })

    it('should remember login creds', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');
        await browser.pause(3000);
        
        const rememberLoginCheckbox = await $('#rememberLoginChk');
        await rememberLoginCheckbox.click();
        await browser.pause(3000);

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(3000);

        const overlay = await $('#overlay');
        await overlay.isDisplayed();
        assert.equal(await overlay.isDisplayed(), false, 'Overlay is still displayed');

        const logoutLink = await $('#navbarSupportedContent > ul > li:nth-child(4) > a');
        await logoutLink.click();
        await browser.pause(3000);

        assert.equal(await overlay.isDisplayed(), true, 'Overlay is not displayed');
        assert.equal(await emailField.getValue(), '1@2.com', 'Value are not the same');
        assert.equal(await passwordField.getValue(), 'password','value are not the same')
        assert.equal(await rememberLoginCheckbox.isSelected(),true, 'Checkbox is not selected');
    })

    it('should not remember login creds', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');
        await browser.pause(3000);

        const rememberLoginCheckbox = await $('#rememberLoginChk');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(3000);

        const overlay = await $('#overlay');
        await overlay.isDisplayed();
        assert.equal(await overlay.isDisplayed(), false, 'Overlay is still displayed');

        const logoutLink = await $('#navbarSupportedContent > ul > li:nth-child(4) > a');
        await logoutLink.click();
        await browser.pause(3000);

        assert.equal(await overlay.isDisplayed(), true, 'Overlay is not displayed');
        assert.equal(await emailField.getValue(), '', 'Value are not the same');
        assert.equal(await passwordField.getValue(), '','value are not the same')
        assert.equal(await rememberLoginCheckbox.isSelected(),false, 'Checkbox is selected');
    })
})