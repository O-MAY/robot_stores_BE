const express = require('express');

const routes = require('./config/routes');

const app = express();
const port = 4000;

app.use(express.json());

// Add all routes to app
routes(app);

app.listen(port, () => {
    console.log(`nodemongodb is listening on ${port}`);
})