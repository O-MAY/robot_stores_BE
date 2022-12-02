const robotsService = require('../services/robotsService');

const getRobots = (req, res) => {
    console.log('Robots controller: getRobots');
    robotsService.getRobots()
        .then((allRobots) => res.json(allRobots));
}

const getRobot = (req, res) => {
    console.log('Robot controller: getRobot');
    let id = req.params.id;
    robotsService.getRobot(id)
        .then((robot) => res.json(robot));
}

module.exports.getRobots = getRobots;
module.exports.getRobot = getRobot;
