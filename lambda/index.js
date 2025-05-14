const Alexa = require('ask-sdk-core');

// Handler para cuando se inicia la skill
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a mi skill. Puedes preguntarme quién creó la aplicación, qué carrera estudia, cuál es su color favorito o su música favorita.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Intent 1: ¿Quién creó la aplicación?
const CreadorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CreadorIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Esta skill fue creada por Carolina Reyes.';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría saber algo más sobre mí?')
            .getResponse();
    }
};

// Intent 2: ¿Qué carrera estudia?
const CarreraIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CarreraIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Carolina estudia en la UTXJ, la carrera de Desarrollo de Software Multiplataforma.';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Hay algo más en lo que pueda ayudarte?')
            .getResponse();
    }
};

// Intent 3: ¿Cuál es su color favorito?
const ColorFavoritoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ColorFavoritoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'El color favorito de Carolina es el negro';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Quieres preguntarme algo más?')
            .getResponse();
    }
};

// Intent 4: ¿Cuál es su grupo o cantante favorito?
const MusicaFavoritaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaFavoritaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La música favorita de Caro es la música clásica y el regueton viejito';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Hay algo más que te gustaría saber?')
            .getResponse();
    }
};

// Handler para ayuda
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntarme quién creó la aplicación, qué carrera estudia, cuál es su color favorito o su música favorita. ¿Qué te gustaría saber?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Handler para cancelar o detener
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Hasta luego!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

// Handler para cuando Alexa no entiende
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entendí eso. Puedes preguntarme quién creó la aplicación, qué carrera estudia, cuál es su color favorito o su música favorita.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Handler para cuando termina la sesión
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.getResponse();
    }
};

// Handler para errores
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor, inténtalo de nuevo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Exportar el handler con todos los intents
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CreadorIntentHandler,
        CarreraIntentHandler,
        ColorFavoritoIntentHandler,
        MusicaFavoritaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/basic-info/v1.0')
    .lambda();