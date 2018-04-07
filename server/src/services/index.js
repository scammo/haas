const hackathon = require('./hackathon/hackathon.service.js');
const user = require('./user/user.service.js');
const idea = require('./idea/idea.service.js');
const comment = require('./comment/comment.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(hackathon);
  app.configure(user);
  app.configure(idea);
  app.configure(comment);
};
