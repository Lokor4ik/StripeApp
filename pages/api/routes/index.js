const payment = require('./payment');

const routes = (app) => {
  app.use(payment);
};

module.exports = routes;
