//  Add your code here
const { Schema, model } = require('mongoose')

const celebritySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    occupation: {
      type: [String],
    },
    catchPhrase: {
      type: String,
    },
    /* owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }, */
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    //timestamps: true,
  }
)

const Celebrity = model('Celebrity', celebritySchema)

module.exports = Celebrity
