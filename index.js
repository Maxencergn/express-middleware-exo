const express = require('express');
const app = express();
const hello = require('./router/hello');

const cors = require('cors');

const port = 3000;

app.use(middleware);

app.use(cors());

app.use('/', hello);

function middleware(req, res, next) {
  console.log('Time:', Date.now())
  next()
};

app.listen(port, () => console.log(`server listening on ${port}`));