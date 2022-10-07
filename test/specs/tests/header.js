const assert = require('assert');

describe('Header test suite', () =>{
    it('should redirect to new site', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        
        const LinkLink = await $('#navbarSupportedContent > ul > li:nth-child(2) > a');
        await LinkLink.click();
        assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/');

        await browser.pause(3000);
    })

    it('should open wolverine modal', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
         
        await browser.pause(3000)
        //Modal Window Stuff
        
        const linkHeroFacts = await $('#navbarDropdown');
        await linkHeroFacts.click();

        const wolverineModal = await $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
        await wolverineModal.click();
        await browser.pause(3000);

        const wolverineModalWindow = await $('#wolverineModal > div > div');
        const wolverineModalTitleText = await $('#wolverineModalLabel');
        const wolverineModalContentText = await $('#wolverineModal > div > div > div.modal-body');
        const wolverineModalCloseButton = await $('#wolverineModal > div > div > div.modal-footer > button');

        assert.equal(await wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
        assert.equal(await wolverineModalTitleText.getText(), 'Wolverine Fact', 'Title is not the same');
        assert.equal(await wolverineModalContentText.getText(), 'Wolverine made his first comic book appearance in 1974.', 'Content is not the same');

        await browser.pause(3000);
    })

    it('should open spider-man modal', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
      
        const linkHeroFacts = await $('#navbarDropdown');
        await linkHeroFacts.click();

        const spidermanModal = await $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');
        await spidermanModal.click();
        await browser.pause(3000);

        const spidermanModalWindow = await $('#spidermanModal > div > div');
        const spidermanModalTitleText = await $('#spidermanModalLabel');
        const spidermanModalContentText = await $('#spidermanModal > div > div > div.modal-body');
        const spidermanModalCloseButton = await $('#spidermanModal > div > div > div.modal-footer > button');

        assert.equal(await spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');
        assert.equal(await spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Title is not the same');
        assert.equal(await spidermanModalContentText.getText(), 'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.', 'Content is not the same');

        await browser.pause(3000);
    })

    it('should close wolverine modal', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
        await browser.pause(1000);
        
        const linkHeroFacts = await $('#navbarDropdown');
        await linkHeroFacts.click();

        const wolverineModal = await $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
        await wolverineModal.click();
        await browser.pause(1000);

        const wolverineModalWindow = await $('#wolverineModal > div > div');
        assert.equal(await wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
        await browser.pause(1000);

        const wolverineModalCloseButton = await $('#wolverineModal > div > div > div.modal-footer > button');
        await wolverineModalCloseButton.click();
        await browser.pause(1000);

        assert.equal(await wolverineModalWindow.isDisplayed(), false, 'Modal is still displayed');
        await browser.pause(1000);
    })

    it('should close spider-man modal', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1920,1080);

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();
      

        const linkHeroFacts = await $('#navbarDropdown');
        await linkHeroFacts.click();

        const spidermanModal = await $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');
        await spidermanModal.click();
        await browser.pause(3000);
        const spidermanModalWindow = await $('#spidermanModal > div > div');
        assert.equal(await spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');

        const spidermanModalCloseButton = await $('#spidermanModal > div > div > div.modal-footer > button');
        await spidermanModalCloseButton.click();
        await browser.pause(1000);

        assert.equal(await spidermanModalWindow.isDisplayed(), false, 'Modal is still displayed');
        await browser.pause(3000);
    })

    it('should search for wolverine', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const navbar = await $('body > div.row > div > nav > button > span');
        await navbar.click();
        await browser.pause(1000);

        const searchField = await $('#search-box');
        await searchField.setValue('Wolverine');

        const searchButton = await $('#search-form > button');
        await searchButton.click();
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Wolverine is awesome!', 'Text is not the same')

        await browser.pause(1000);
    })
    
    it('should error because you did not search for wolverine', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const navbar = await $('body > div.row > div > nav > button > span');
        await navbar.click();
        await browser.pause(1000);

        const searchField = await $('#search-box');
        await searchField.setValue('something');

        const searchButton = await $('#search-form > button');
        await searchButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Your search for something returned 0 reults. Try something else.', 'Text is not the same')

        await browser.pause(1000);
    })

    it.only('should close the alert', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const navbar = await $('body > div.row > div > nav > button > span');
        await navbar.click();
        await browser.pause(1000);

        const searchField = await $('#search-box');
        await searchField.setValue('something');

        const searchButton = await $('#search-form > button');
        await searchButton.click();
        
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');

        await browser.pause(3000);
    })
})