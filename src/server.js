const app = require('./app');
const CalmSentimentService = require('../../calm-sentimenthackteam');

CalmSentimentService.load(()=>{
  app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`);
  });
});

// app.use(CalmSentimentService);

