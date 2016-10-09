module.exports = {
    execute: function (intent, session, response) {

        var text = "Hey everyone!" + "I'm Alexa and I just learnt how to manage investment portfolios using Blackrock's Aladdin..."+"...Let me show you!";
        var cardText = "Alexa has demoed";
        var heading = "Alexa Portfolio Manager Demo";
        var speechOutput = "What else do you want me to do?";
        var repromptText = "What else do you want me to do?";
        //response.tellWithCard(text, heading, cardText);
        response.ask(text, repromptText);
    }
};