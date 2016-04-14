'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const request = require('request');
const Utility = require('./public/utility');

app.use(express.static('public'));
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({ SUCCESS: true });
});

app.get('/giphy', (req, res) => {
  const queryString = Utility.parseQueryString(req.originalUrl);
  const myUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&' +
                'tag=' + queryString['keyword'];

  request(myUrl, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      const jsonData = JSON.parse(body)['data']['image_original_url'];

      if(jsonData) {
        res.json({
          SUCCESS: true,
          MESSAGE: 'Enjoy your Giphy',
          URL: jsonData
        });
      } else {
        res.json({ SUCCESS: false, MESSAGE: 'No giphy found.' });
        return false;
      }
    }
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log('Server running on ' + port);
});

module.exports = app;
