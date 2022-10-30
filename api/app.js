const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emoji = require('node-emoji');

const v1Routes = require('./api/v1.routes');

const app = express();
const port = 3001;
const hostname = '127.0.0.1';
const ramenEmoji = emoji.get('ramen');

// Extract body portion of incoming request stream and expose on req.body
app.use(bodyParser.json());

// Allow cross-origin requests
app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
  }),
);

// User modular API routes and handlers
app.use('/api/v1', v1Routes);

app.listen(port, hostname, () => {
  console.log(
    `${ramenEmoji} Server listening at: http://${hostname}:${port}/ ${ramenEmoji}`,
  );
});

module.exports = app;
