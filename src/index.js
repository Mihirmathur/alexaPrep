/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, tell Hello World to say hello"
 *  Alexa: "Hello World!"
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.982aee1d-1d57-4133-a301-e351a961a601"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * Portfolio is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Portfolio = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Portfolio.prototype = Object.create(AlexaSkill.prototype);
Portfolio.prototype.constructor = Portfolio;

Portfolio.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    // console.log("Portfolio onSessionStarted requestId: " + sessionStartedRequest.requestId
    //     + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Portfolio.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Portfolio onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to the Alexa Portfolio Manager. What can I do for you today?";
    var repromptText = "You can say 'Portfolio analysis for today' or 'Securities information'";
    response.ask(speechOutput, repromptText);
};

Portfolio.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    // console.log("Portfolio onSessionEnded requestId: " + sessionEndedRequest.requestId
    //     + ", sessionId: " + session.sessionId);
    // // any cleanup logic goes here
};

Portfolio.prototype.intentHandlers = {
    // register custom intent handlers
    "PortfolioIntent": function (intent, session, response) {
        response.tellWithCard("Hello World!", "Hello World", "Hello World!");
    },
    DemoIntent: function (intent, session, response) {
        var IntentHandler = require("./intents/DemoIntent");
        IntentHandler.execute(intent, session, response);
    },
    // PerformanceIntent: function (intent, session, response) {
    //     var IntentHandler = require("./intents/PerformanceIntent");
    //     IntentHandler.execute(intent, session, response);
    // },
    PerIntent: function(intent, session, response){
        var IntentHandler = require("./intents/PerIntent");
        IntentHandler.execute(intent, session, response);
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Portfolio skill.
    var portfolio = new Portfolio();
    portfolio.execute(event, context);
};

