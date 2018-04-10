const { populate } = require("feathers-hooks-common");

const schema = {
  include: [
    {
      service: 'user',
      nameAs: 'admins',
      parentField: 'adminIds',
      childField: '_id'
    }
  ]
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  
  after: {
    all: [],
    find: [ populate({schema}) ],
    get: [ populate({schema}) ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
