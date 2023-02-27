const flights = require("./data/flights.json");


module.exports = function (app) {
  /**
   * @description: Mock Flights Api by returning the content of the flights.json file 
   */
  app.get(
    '/api/flights',
    (req, res) => {
      return res.json(flights)
    }
  );
};