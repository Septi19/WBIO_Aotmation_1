const assert = require('assert');

describe('Roster Test Suite', async() =>{
    it('should have default values', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const instructionText = await $('body > div.container-fluid > div:nth-child(3) > div > p');
        const instructions = 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.'
        const listTitle = await $('body > div.container-fluid > div:nth-child(4) > h3');
        const wolverineItem = await $('#hero-list > li:nth-child(1)');
        const ironmanItem = await $('#hero-list > li:nth-child(2)');
        const deadpoolItem = await $('#hero-list > li:nth-child(3)');
        const thorItem = await $('#hero-list > li:nth-child(4)');
        const spiderman = await $('#hero-list > li:nth-child(5)');
        const addItem = await $('#hero-list > li:nth-child(6)');
        const addHerroLabel = await $('#addHero-form > div > label');
        const addHerroField = await $('#heroInput');
        const submitButton2 = await $('#addHero-form > button');

        assert.equal(await instructionText.getText(),instructions,'The instructions text are not the same');
        assert.equal(await listTitle.getText(), 'Build Your Superhero Roster:', 'Title text is not the same');
        assert.equal(await wolverineItem.getText(),'Wolverine', 'Wolverine text is not the same');
        assert.equal(await ironmanItem.getText(),'Iron Man', 'Iron Man text is not the same');
        assert.equal(await deadpoolItem.getText(), 'Deadpool', 'Deadpool text is not the same');
        assert.equal(await thorItem.getText(), 'Thor', 'Thor text is not the same');
        assert.equal(await spiderman.getText(), 'Spider-Man', 'Spider-Man text is not the same');
        assert.equal(await addHerroLabel.getText(), 'ADD A SUPERHERO', 'ADD A SUPERHERO text is not the same');
        assert.equal(await addHerroField.getAttribute('placeholder'),'Enter Hero', 'Placeholder is not the same')

    })

    it('should test somethig else', async() =>{
        await browser.url('http://localhost:8080/index.html');

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const addHerroField = await $('#heroInput');
        await addHerroField.setValue('Septi');
        const submitButton2 = await $('#addHero-form > button');
        await submitButton2.click();
        
        const addItem = await $('#hero-list > li:nth-child(6)');
        assert.equal(await addItem.getText(), 'Septi', 'Septi text is not the same');
    })
})