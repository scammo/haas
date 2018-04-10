// hackathon-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const hackathon = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    location: { type: String, required: false },
    links: [{ type: String, required: false }],
    hashTag: { type: String, required: false },
    socialMedia: [{
      name: { type: String, required: false },
      link: { type: String, required: false },
    }],
    adminIds: [{ type: Schema.Types.ObjectId, ref: 'user', required: false }],
    startDate: { type: Date, 'default': Date.now },
    endDate: { type: Date, 'default': Date.now },
  }, {
    timestamps: true
  });

  return mongooseClient.model('hackathon', hackathon);
};
