let mongoose = require('mongoose');
let Schema = mongoose.Schema; 

// This creates a New Schema Constructor for News Article
let ArticleSchema = new Schema({ 

  headline: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  imageURL: {
    type: String,
    required: true
  },

  slug: {
    type: String
  },

  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]

}); 


// This creates our model from the above schema, using mongoose's model method
let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article; // Export the Article Model
