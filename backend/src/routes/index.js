const historyRoute = require('./historyRoute');

const route = (app) => {
   app.use('/api/history', historyRoute);
};

module.exports = route;
