const robotsController = require('../controllers/robotsController');

const routes = (app) => {
    app.get('/robots', robotsController.getRobots);
    app.get('/robots/:id', robotsController.getRobot);
}

module.exports = routes;
