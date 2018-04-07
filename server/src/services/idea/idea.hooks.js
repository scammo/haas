import { populate } from "feathers-hooks-common";

const schema = {
  include: [
    {
      service: 'user',
      nameAs: 'initiator',
      parentField: 'initiatorId',
      childField: '_id'
    },
    {
      service: 'user',
      nameAs: 'teamMembers',
      parentField: 'teamMemberIds',
      childField: '_id'
    },
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
