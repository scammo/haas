// Initializes the `hackathon` service on path `/hackathon`
const createService = require('feathers-mongoose');
const createModel = require('../../models/hackathon.model');
const hooks = require('./hackathon.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'hackathon',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hackathon', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hackathon');

  service.hooks(hooks);
};
