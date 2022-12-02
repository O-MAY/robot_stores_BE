const dbService = require('../services/dbService');


let robotsCollection = null;
dbService.connectToDB()
    .then((db) => robotsCollection = db.collection('products'));

// get multiple robot products
const getRobots = async () => {
    console.log('Repository: getRobots');
    return await robotsCollection.find({}).toArray();
}

// get a singular robot product by "id"
const getRobot = async (id) => {
    console.log('Repository: getRobot' + id);
    return await robotsCollection.find({"id": parseInt(id)}).toArray();
}

module.exports.getRobots = getRobots;
module.exports.getRobot = getRobot;
