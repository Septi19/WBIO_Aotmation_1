const assert = require('assert');

describe('Vote Section Test Suite', () =>{
    it('should increment vote', async() =>{
        await browser.url('http://localhost:8080/index.html');
        browser.setWindowSize(1280, 800)

        const emailField = await $('#loginEmail');
        await emailField.click();
        await emailField.setValue('1@2.com');

        const passwordField = await $('#loginPassword');
        await passwordField.click();
        await passwordField.setValue('password');

        const submitButton = await $('#form-login > button');
        await submitButton.click();

        const voteTitle = await $('body > div.container-fluid > div:nth-child(6) > div > h4');

        // Radio buttons
        const voteItemXmen = await $('#heroMovieRadio1');
        const voteItemAvengers = await $('#heroMovieRadio2');
        const voteItemDeadpool = await $('#heroMovieRadio3');
        const voteItemSpiderman = await $('#heroMovieRadio4');
        const voteItemIronman = await $('#heroMovieRadio5');

        // Labels
        const voteItemLabelXmen = await $('#vote-form > div:nth-child(1) > label');
        const voteItemLabelAvengers = await $('#vote-form > div:nth-child(2) > label');
        const voteItemLabelDeadpool = await $('#vote-form > div:nth-child(3) > label');
        const voteItemLabelSpiderman = await $('#vote-form > div:nth-child(4) > label');
        const voteItemLabelIronman = await $('#vote-form > div:nth-child(5) > label');

        const submitButton2 = await $('#vote-form > button');

        // Movie Title Grid / Number of votes
        const voteItemTextMovie = await $('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)');
        const voteItemTextVotes = await $('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)');

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

        // Using the default x-men selection
        await voteItemXmen.click();
        await submitButton2.click();

        const thanksAlert = await $('#vote-alert');
        assert.equal(await voteItemValXmen.getText(),'11', 'Values are not the same');
        assert.equal(await thanksAlert.isDisplayed(), true, 'Alert is not displayed');
        assert.equal(await thanksAlert.getText(), 'Thanks for voting!', 'Alert text is not the same');
        
        await browser.pause(3000);
        
    })
})