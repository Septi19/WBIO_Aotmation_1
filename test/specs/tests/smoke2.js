const assert = require('assert');

describe('Smoke Test Suite 2', () =>{
    it('should verify static elements are present for vote section', async() =>{
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

        // Verify Vote

        const voteTitle = await $('body > div.container-fluid > div:nth-child(6) > div > h4');
        const voteItemXmen = await $('#heroMovieRadio1');
        const voteItemAvengers = await $('#heroMovieRadio2');
        const voteItemDeadpool = await $('#heroMovieRadio3');
        const voteItemSpiderman = await $('#heroMovieRadio4');
        const voteItemIronman = await $('#heroMovieRadio5');
        const voteItemLabelXmen = await $('#vote-form > div:nth-child(1) > label');
        const voteItemLabelAvengers = await $('#vote-form > div:nth-child(2) > label');
        const voteItemLabelDeadpool = await $('#vote-form > div:nth-child(3) > label');
        const voteItemLabelSpiderman = await $('#vote-form > div:nth-child(4) > label');
        const voteItemLabelIronman = await $('#vote-form > div:nth-child(5) > label');
        const submitButton3 = await $('#vote-form > button');
        const voteItemTextXmen = await $('#movieName1');
        const voteItemValXmen = await $('#movieVotes1');
        const voteItemTextAvengers = await $('#movieName2');
        const voteItemValAvengers = await $('#movieVotes2');
        const voteItemTextDeadpool = await $('#movieName3');
        const voteItemValDeadpool = await $('#movieVotes3');
        const voteItemTextSpiderman = await $('#movieName4');
        const voteItemValSpiderman = await $('#movieVotes4');
        const voteItemTextIronman = await $('#movieName5');
        const voteItemValIronman = await $('#movieVotes5');
        
        assert.equal(await voteTitle.isDisplayed(), true, 'voteTitle');
        assert.equal(await voteItemXmen.isDisplayed(), true, 'voteItemXmen');
        assert.equal(await voteItemAvengers.isDisplayed(), true, 'voteItemAvengers');
        assert.equal(await voteItemDeadpool.isDisplayed(), true, 'voteItemDeadpool');
        assert.equal(await voteItemSpiderman.isDisplayed(), true, 'voteItemSpiderman');
        assert.equal(await voteItemIronman.isDisplayed(), true, 'voteItemIronman');
        assert.equal(await voteItemLabelXmen.isDisplayed(), true, 'voteItemLabelXmen');
        assert.equal(await voteItemLabelAvengers.isDisplayed(), true, 'voteItemLabelAvengers');
        assert.equal(await voteItemLabelDeadpool.isDisplayed(), true, 'voteItemLabelDeadpool');
        assert.equal(await voteItemLabelSpiderman.isDisplayed(), true, 'voteItemLabelSpiderman');
        assert.equal(await voteItemLabelIronman.isDisplayed(), true, 'voteItemLabelIronman');
        assert.equal(await submitButton3.isDisplayed(), true, 'submitButton3');
        assert.equal(await voteItemTextXmen.isDisplayed(), true, 'voteItemTextXmen');
        assert.equal(await voteItemValXmen.isDisplayed(), true, 'voteItemValXmen');
        assert.equal(await voteItemTextAvengers.isDisplayed(), true, 'voteItemTextAvengers');
        assert.equal(await voteItemValAvengers.isDisplayed(), true, 'voteItemValAvengers');
        assert.equal(await voteItemTextDeadpool.isDisplayed(), true, 'voteItemTextDeadpool');
        assert.equal(await voteItemValDeadpool.isDisplayed(), true, 'voteItemValDeadpool');
        assert.equal(await voteItemTextSpiderman.isDisplayed(), true, 'voteItemTextSpiderman');
        assert.equal(await voteItemValSpiderman.isDisplayed(), true, 'voteItemValSpiderman');
        assert.equal(await voteItemTextIronman.isDisplayed(), true, 'voteItemTextIronman');
        assert.equal(await voteItemValIronman.isDisplayed(), true, 'voteItemValIronman');
    
    })
})