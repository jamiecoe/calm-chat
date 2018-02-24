const CalmSentimentService = require('../../../calm-sentimenthackteam');

function getResponse(speech) {
    let resources;
    let response;
    try {

        response = CalmSentimentService.analyse(speech)
        .then(response => {
            console.log(response);
            return response.json().then(data);
        })
        .catch((err) => {
            console.log('ERROR TRYING TO READ SENTIMENT ANALYSER MODULE')
        });

        if (response && response.status != 'ok') {
            console.log('ERROR TRYING TO READ SENTIMENT ANALYSER RESPONSE');
            return { response: 'Bad message' };
        }

        resources = response.data.resources;
        console.log('resources', resources);

    } catch (err) {
        resources = null;
    }

    return resources;
}


module.exports = getResponse;