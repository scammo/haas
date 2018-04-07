const assert = require('assert');
const app = require('../../src/app');

describe('\'idea\' service', () => {
  it('registered the service', () => {
    const service = app.service('idea');

    assert.ok(service, 'Registered the service');
  });
});
