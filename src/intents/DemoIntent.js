module.exports = {
    execute: function (intent, session, response) {

        var text = "Hey everyone!" + "I'm Alexa and I just learnt how to manage investment portfolios using Aladdin..."+"Let me show you!";
        var cardText = "Alexa has demoed";
        var heading = "Alexa Portfolio Manager Demo";

        response.tellWithCard(text, heading, cardText);

    }
};