const assert = require('assert');
const app = require('../../src/app');

describe('\'hackathon\' service', () => {
  it('registered the service', () => {
    const service = app.service('hackathon');

    assert.ok(service, 'Registered the service');
  });
});
