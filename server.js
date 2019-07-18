const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

app = express();

const staticFileMiddleware = express.static(path.join(__dirname, 'dist'));
app.use(staticFileMiddleware); // first call to prevent static files from 404ing,
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticFileMiddleware); // second call to history mode redirect to index.html and resolve it

const port = process.env.SERVER_PORT || 8080;
app.listen(port);
