const robotsRepository = require('../repositories/robotsRepository');

const getRobots = async () => {
    console.log('Service: getRobots');
    return await robotsRepository.getRobots();
}

const getRobot = async (id) => {
    console.log('Service: getRobot ' + id);
    return await robotsRepository.getRobot(id);
}

module.exports.getRobots = getRobots;
module.exports.getRobot = getRobot;
