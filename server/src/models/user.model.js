// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const user = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: false },
    haveKnowledge: [{ type: String, required: false }],
    needsKnowledge: [{ type: String, required: false }],
    twitterHandle: { type: String, required: false },
    fbProfileLink: { type: String, required: false },
    email: { type: String, required: false },
    emailIsPublic: { type: Boolean, required: false, default: false },
  }, {
    timestamps: true
  });

  return mongooseClient.model('user', user);
};
