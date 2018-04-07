// idea-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const idea = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    links: [{ type: String, required: false }],
    initiatorId: { type: Schema.Types.ObjectId, ref: 'user', required: false },
    teamMemberIds: [{ type: Schema.Types.ObjectId, ref: 'user', required: false }],
  }, {
    timestamps: true
  });

  return mongooseClient.model('idea', idea);
};
