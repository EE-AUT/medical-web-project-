const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const SampleSchema = new mongoose.Schema(
  {
    image: {
      type: String
    },
    score: {
      type: Number,
      max: 100
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

SampleSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Sample', SampleSchema)
