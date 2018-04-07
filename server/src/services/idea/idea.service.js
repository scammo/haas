// Initializes the `idea` service on path `/idea`
const createService = require('feathers-mongoose');
const createModel = require('../../models/idea.model');
const hooks = require('./idea.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'idea',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/idea', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('idea');

  service.hooks(hooks);
};
