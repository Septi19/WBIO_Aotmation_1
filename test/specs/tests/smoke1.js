const assert = require('assert');

describe('Smoke Test Suite 1', () =>{
    it('should verify static elements are present', async() =>{
        await browser.url('http://localhost:8080/index.html');
        
        // Verify the Login
        const headingText = await $('#login-title')
        const emailLabel = await $('#form-login > div:nth-child(1) > label')
        const emailField = await $('#loginEmail');
        const passwordLabel = await $('#form-login > div:nth-child(2) > label')
        const passwordField = await $('#loginPassword');
        const rememberLoginCheckbox = await $('#rememberLoginChk');
        const rememberLoginCheckboxLabel = await $('#form-login > div.form-check > label')
        const submitButton = await $('#form-login > button');

        assert.equal(await headingText.isDisplayed(), true, 'headingText');
        assert.equal(await emailLabel.isDisplayed(), true, 'emailLabel');
        assert.equal(await emailField.isDisplayed(), true, 'emailField');
        assert.equal(await passwordLabel.isDisplayed(), true, 'passwordLabel');
        assert.equal(await passwordField.isDisplayed(), true, 'passwordField');
        assert.equal(await rememberLoginCheckbox.isDisplayed(), true, 'rememberLoginCheckbox');
        assert.equal(await rememberLoginCheckboxLabel.isDisplayed(), true, 'rememberLoginCheckboxLabel');
        assert.equal(await submitButton.isDisplayed(), true, 'submitButton');

        // Login to app
        await browser.url('http://localhost:8080/index.html');

        const emailField1 = await $('#loginEmail');
        await emailField1.click();
        await emailField1.setValue('1@2.com');

        const passwordField1 = await $('#loginPassword');
        await passwordField1.click();
        await passwordField1.setValue('password');

        const submitButton1 = await $('#form-login > button');
        await submitButton1.click();
        await browser.setWindowSize(1040,900);

        // Verify the Header

        const logoutLink = await $('#navbarSupportedContent > ul > li:nth-child(4) > a')
        const linkLink = await $('#navbarSupportedContent > ul > li:nth-child(2) > a');
        const linkHeroFacts = await $('#navbarDropdown');
        await linkHeroFacts.click();
        const wolverineModal = await $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
        const spidermanModal = await $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');
        const searchField = await $('#search-box');
        const searchButton = await $('#search-form > button');
    
        assert.equal(await logoutLink.isDisplayed(), true, 'logoutLink');
        assert.equal(await linkLink.isDisplayed(), true, 'linkLink');
        assert.equal(await linkHeroFacts.isDisplayed(), true, 'linkHeroFacts');
        assert.equal(await wolverineModal.isDisplayed(), true, 'wolverineModal');
        assert.equal(await spidermanModal.isDisplayed(), true, 'spidermanModal');
        assert.equal(await searchField.isDisplayed(), true, 'searchField');
        assert.equal(await searchButton.isDisplayed(), true, 'searchButton');

        // Verify Intro

        const titleText = await $('body > div.container-fluid > div:nth-child(1) > h1');
        const mainImage = await $('body > div.container-fluid > div:nth-child(2) > img');

        assert.equal(await titleText.isDisplayed(), true, 'titleText');
        assert.equal(await mainImage.isDisplayed(), true,'mainImage');

        //Verify Roster

        
        const instructionText = await $('body > div.container-fluid > div:nth-child(3) > div > p');
        const listTitle = await $('body > div.container-fluid > div:nth-child(4) > h3');
        const wolverineItem = await $('#hero-list > li:nth-child(1)');
        const ironmanItem = await $('#hero-list > li:nth-child(2)');
        const deadpoolItem = await $('#hero-list > li:nth-child(3)');
        const thorItem = await $('#hero-list > li:nth-child(4)');
        const spiderman = await $('#hero-list > li:nth-child(5)');
        const addHerroLabel = await $('#addHero-form > div > label');
        const addHerroField = await $('#heroInput');
        const submitButton2 = await $('#addHero-form > button');

        assert.equal(await instructionText.isDisplayed(), true, '');
        assert.equal(await listTitle.isDisplayed(), true, 'listTitle');
        assert.equal(await wolverineItem.isDisplayed(), true, 'wolverineItem');
        assert.equal(await ironmanItem.isDisplayed(), true, 'ironmanItem');
        assert.equal(await deadpoolItem.isDisplayed(), true, 'deadpoolItem');
        assert.equal(await thorItem.isDisplayed(), true, 'thorItem');
        assert.equal(await spiderman.isDisplayed(), true, 'spidermanItem');
        assert.equal(await addHerroLabel.isDisplayed(), true, 'addHeroLabel');
        assert.equal(await addHerroField.isDisplayed(), true, 'addHerroField');
        assert.equal(await submitButton2.isDisplayed(), true, 'submitButton2');
    })
})