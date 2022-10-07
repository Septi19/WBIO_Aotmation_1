const assert = require('assert');

describe('Intro Test Suite', () =>{
    it('should display correct title', async() =>{
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
        
        const titleText = await $('body > div.container-fluid > div:nth-child(1) > h1');
        assert.equal(await titleText.getText(),'Superhero Roster', 'Text is not the same');
        await browser.pause(3000);
    })

    it.only('should display correct image', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const mainImage = await $('body > div.container-fluid > div:nth-child(2) > img');
        assert.equal(await mainImage.getAttribute('src'),'./images/superhero.png', 'Src is not the same');
        assert.equal(await mainImage.getAttribute('alt'),'Superhero Image', 'Alt is not the same');
        await browser.pause(3000); 
    })
})